define(function (require, exports, module) {
  var antlr = self.antlr4;
  var NotepadLexer = require('./NotepadLexer').NotepadLexer;
  var NotepadParser = require('./NotepadParser').NotepadParser;
  var CommonTokenFactory = antlr.CommonTokenFactory;

  function TrimTokenFactory(copyText) {
    CommonTokenFactory.call(this, copyText);
  }

  TrimTokenFactory.prototype = Object.create(CommonTokenFactory.prototype, {
    create: {
      value: function (source, type, text, channel, start, stop, line, column) {
        var str = source[1].strdata;
        while (str[start] === ' ') {
          start += 1;
        }
        while (str[stop] === ' ' || str[stop] === '\n') {
          stop -= 1;
        }
        return CommonTokenFactory.prototype.create.apply(this,
          [source, type, text, channel, start, stop, line, column]);
      }
    }
  });

  var createNode = function (type, start, stop, data) {
    return {
      type: type,
      start: createToken(start),
      stop: createToken(stop),
      data: data
    };
  };

  var createToken = function (c) {
    return {
      column: c.column,
      line: c.line,
      text: c.text
    };
  };

  var transfer = function (tree, errorListener, limit) {
    var reportErr = function (token, row, column, msg, level) {
      if (errorListener) {
        errorListener(null, token, row, column, msg, level);
      }
    };

    var data = {
      attrs: [],
      list: [],
      defs: []
    };
    if (!tree.children) {
      return data;
    }

    var checkAttr = function (node) {
      if (node.children.length <= 2) {
        reportErr(null, node.start.line, 0, '缺少 \'=\' 字符' + node.children[0].symbol.text);
        return;
      }
      var key = node.children[0].symbol.text;
      var value = node.children[2].symbol.text;
      if (key === '标题') {
        if (value.length < limit.title.min_length) {
          reportErr(null, node.start.line, 0, '标题字数最少一个字符', 'error');
        }
        if (value.length > limit.title.max_length) {
          reportErr(null, node.start.line, 0, '标题字数最多48个字符', 'error');
        }
      } else if (key === '简介') {
        if (value.length < limit.brief.min_length) {
          reportErr(null, node.start.line, 0, '简介字数最少一个字符', 'error');
        }
        if (value.length > limit.brief.max_length) {
          reportErr(null, node.start.line, 0, '简介字数最多48个字符', 'error');
        }
      } else if (key === '分类') {
        reportErr(null, node.start.line, 0, '属性 "分类" 已不再使用，请使用 "标签"', 'warning');
      }

      data.attrs.push(createNode('ATTR', node.start, node.stop, {
        key: createToken(node.children[0].symbol),
        value: createToken(node.children[2].symbol)
      }));
    };

    var checkChapter = function (node) {
      data.list.push(createNode('CHAPTER', node.start, node.stop, {
        chapter: createToken(node.children[1].symbol)
      }));
    };

    var checkSingleWord = function (node) {
      data.list.push(createNode('WORD', node.start, node.stop, {
        word: createToken(node.children[0].symbol)
      }));
    };

    var wordRegex = /^[a-zA-Z0-9ô"âöёêîè%'éà&ǎñ]([a-zA-Z0-9ô?!-"â,öё“\/êîè%'éà&.ǎñ°n]{1,32} ?){1,12}$/;
    var checkVoc = function (node) {
      var word = node.children[0].children[0].text;
      var voc = createNode('DEF', node.start, node.stop, {
        word: createToken(node.children[0].children[0].symbol)
      });

      if (!wordRegex.test(word)) {
        reportErr(null, node.start.line, 0, '无效的单词：' + word);
      }

      if (data.defs.find(function (x) {
        return x.data.word.text === voc.data.word.text;
      })) {
        reportErr(null, node.start.line, 0, '重复的定义 ' + voc.data.word.text + ' 单词，一个单词的内容信息只能被定义一次', 'error');
        return;
      }

      var checkAttr = function (c) {
        if (c.children.length <= 1) {
          return;
        }
        if (!voc.data.attrs) {
          voc.data.attrs = [];
        }

        let key = c.children[0].symbol;
        let keyText = key.text.replace(/[ =]*$/, "");
        key.stop = key.start + keyText.length - 1;

        voc.data.attrs.push({
          key: createToken(key),
          value: createToken(c.children[1].symbol)
        });
      };

      var checkInterp = function (c) {
        var interp = voc.data.interp = createNode('INTERP', c.start, c.stop, {});
        var lineCount = 0;
        if (c.children.length === 2) {
          interp.data = null;
        } else {
          var text = '';
          for (var i = 1; i < c.children.length - 1; i++) {
            text += c.children[i].children[0].symbol.text + (i === c.children.length - 2 ? '' : '\n');
            lineCount += 1;
          }

          var maxLength = limit.interpretation.max_length;
          if (text > maxLength) {
            reportErr(null, c.start.line, 0, '超出最大字符数限制，超出：'
              + (text.length - maxLength) + '个字符, 最大：' + maxLength + ' 个字符', 'error');
          }

          var maxLine = limit.interpretation.max_line;
          if (lineCount > maxLine) {
            reportErr(null, c.start.line, 0, '超出最大行数限制 ' + (lineCount - maxLine) + '，最大：'
              + maxLine + ', 当前：' + lineCount, 'error');
          }
          interp.data.interp = text;
        }
      };

      var phraseEnRegex = /[a-z \\.~?()0-9'"/&^%$#!,°-]/i;
      var checkPhrase = function (c) {
        var phrase = voc.data.phrase = createNode('PHRASE', c.start, c.stop, {phrases: []});
        if (c.children.length === 2) {
          phrase.data = null;
        } else {
          var p = [];
          var en_line;
          var zh_line;
          var attrs = {};
          for (var i = 1; i < c.children.length - 1; i++) {
            var t = c.children[i].children[0].symbol.text;
            if (t === '') {
              continue;
            }
            if (t.startsWith('$')) {
              let match = /^\$([^ ]+) *= *(.*)/.exec(t);
              if (!match || match.length !== 3) {
                continue;
              }

              attrs[match[1]] = match[2];
              continue;
            }
            if (p.length === 0) {
              en_line = c.children[i].children[0].symbol.line;
            } else {
              zh_line = c.children[i].children[0].symbol.line;
            }
            p.push(t);
            if (p.length === 2) {
              var en = p[0];
              for (var si = 0; si < en.length; si++) {
                if (!phraseEnRegex.test(en[si])) {
                  reportErr(null, en_line, 0, '' + en[si]
                    + ' 为非法字符，只允许英文字符', 'error');
                  break;
                }
              }
              var maxPhraseLength = limit.phrase.phrase.max_length;
              if (p[0].length > maxPhraseLength) {
                reportErr(null, c.start.line, 0, '超出最大字符数限制，超出：'
                  + (p[0].length - maxPhraseLength) + '个字符, 最大：' + maxPhraseLength + ' 个字符', 'error');
              }
              var maxInterpLength = limit.phrase.interpretation.max_length;
              if (p[1].length > maxInterpLength) {
                reportErr(null, c.start.line, 0, '超出最大字符数限制，超出：'
                  + (p[1].length - maxInterpLength) + '个字符, 最大：' + maxInterpLength + ' 个字符', 'error');
              }
              if (Object.keys(attrs).length) {
                p.push(attrs);
              }
              phrase.data.phrases.push(p);
              p = [];
              attrs = {};
            }
          }
          var maxCount = limit.phrase.max_count;
          if (phrase.data.phrases.length > maxCount) {
            reportErr(null, c.start.line, 0, '超出最大例句数量限制, 限制 ' + maxCount
              + ' 个例句, 当前 ' + phrase.data.phrases.length + ' 个例句', 'error');
          }
        }
      };

      var checkNote = function (c) {
        var note = voc.data.note = createNode('PHRASE', c.start, c.stop, {});
        var noteBody = c.children.find(function (x) {
          return x.constructor.name === 'Note_bodyContext';
        });
        if (!noteBody) {
          note.data = null;
        } else {
          if (noteBody.children[0].constructor.name === 'Note_line_invalidContext'
            || noteBody.children[0].children.length === 2) {
            reportErr(null, noteBody.start.line, 0, '缺少助记类型，需要在助记前加上助记类型，例如 [对比] go, come', 'error');
            return;
          }

          var noteTypeCtx = noteBody.children[0];
          var noteType = noteTypeCtx.children[1].symbol.text;
          if (limit.note.types.indexOf(noteType) < 0) {
            reportErr(null, noteBody.start.line, 0, '无效的助记类型: [' + noteType
              + ']，可选的类型：' + (limit.note.types), 'error');
            return;
          }

          var lineCount = 1;
          var noteText = '';
          for (var i = 1; i < noteBody.children.length; i++) {
            noteText += noteBody.children[i].children[0].symbol.text;
            lineCount += 1;
            if (i < noteBody.children.length - 1) {
              noteText += '\n';
            }
          }
          var maxLength = limit.note.max_length;
          if (noteText.length > maxLength) {
            reportErr(null, c.start.line, 0, '超出最大字符数限制，超出：'
              + (noteText.length - maxLength) + '个字符, 最大：' + maxLength + ' 个字符', 'error');
          }
          var maxLine = limit.note.max_line;
          if (lineCount > maxLine) {
            reportErr(null, noteBody.start.line, 0, '超出最大行数限制 ' + (lineCount - maxLine) + '，最大：'
              + maxLine + ', 当前：' + lineCount, 'error');
          }
          note.data.type = noteType;
          note.data.text = noteText;
        }
      };
      node.children.forEach(function (c) {
        var type = c.constructor.name;
        if (type === 'Block_interpContext') {
          checkInterp(c);
        } else if (type === 'Block_phraseContext') {
          checkPhrase(c);
        } else if (type === 'Block_noteContext') {
          checkNote(c);
        } else if (type === 'VattrContext') {
          checkAttr(c);
        }
      });

      if (!(voc.data.phrase && voc.data.phrase.data)
        && !(voc.data.note && voc.data.note.data)
        && !(voc.data.interp && voc.data.interp.data)) {
        reportErr(null, voc.start.line, 0, '必须定义至少一个解释、例句或助记', 'error');
      }
      data.defs.push(voc);
    };

    var checkUnusedDefs = function () {
      var words = {};
      data.list.forEach(function (w) {
        if (w.type === 'WORD') {
          words[w.data.word.text] = true;
        }
      });
      data.defs.forEach(function (d) {
        if (!words[d.data.word.text]) {
          reportErr('null', d.start.line, 0, '定义了 ' + d.data.word.text + '单词，但此单词并未排列在章节单词列表', 'warning');
        }
      });
    };

    var checkDupWordsInChapter = function () {
      var prevChapter = null;
      var chapterWords = {};

      data.list.forEach(function (w) {
        if (w.type === 'CHAPTER') {
          var chapter = w.data.chapter.text;
          chapterWords = {};
          prevChapter = chapter;
        } else {
          var word = w.data.word.text;
          if (chapterWords[word]) {
            reportErr(word, w.start.line, 0, '单词 ' + word + ' 在同一章节出现重复', 'info');
          }
          chapterWords[word] = true;
        }
      });
    };

    var linkDefs = function () {
      if (!data.list || !data.defs) {
        return;
      }

      var def_map = {};
      data.defs.forEach(function (d) {
        def_map[d.data.word.text] = d;
      });
      data.list.forEach(function (w) {
        if (w.type === 'WORD') {
          w.data.def = def_map[w.data.word.text];
        }
      });
    };

    var lastType = null;
    tree.children.forEach(function (node) {
      var type = node.constructor.name;
      if (lastType != null) {
        if (type === 'AttrContext' && lastType !== 'AttrContext') {
          reportErr(null, node.start.line, 0, '标题、简介、标签信息必须定义在词本开头', 'error');
          return;
        }
        if ((type === 'ChapterContext' || type === 'Single_wordContext')
          && !(lastType === 'ChapterContext' || lastType === 'Single_wordContext'
            || lastType === 'AttrContext')) {
          reportErr(null, node.start.line, 0,
            '章节和单词列表必须定义在标题、简介、标签信息与单词内容定义信息之间', 'error');
          return;
        } else {
          lastType = type;
        }
      } else {
        lastType = type;
      }
      switch (type) {
        case 'AttrContext':
          checkAttr(node);
          break;
        case 'ChapterContext':
          checkChapter(node);
          break;
        case 'Single_wordContext':
          checkSingleWord(node);
          break;
        case 'Block_vocContext':
          checkVoc(node);
          break;
      }
    });

    checkUnusedDefs();
    checkDupWordsInChapter();
    linkDefs();

    return data;
  };

  exports.parse = function (text, errorListener, options) {
    var chars = new antlr.InputStream(text);
    var lexer = new NotepadLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new NotepadParser(tokens);
    lexer.removeErrorListeners();
    parser.removeErrorListeners();
    var errorHandler = new function () {
      this.syntaxError = function (handler, token, c, f, g, h) {
        if (errorListener) {
          errorListener(handler, token, c, f, g, 'error');
        }
      };
      this.reportAttemptingFullContext = function () {
      };
      this.reportAmbiguity = function () {
      };
    };
    lexer._factory = new TrimTokenFactory(false);
    lexer.addErrorListener(errorHandler);
    parser.addErrorListener(errorHandler);
    parser.buildParseTrees = true;
    var tree = parser.enter();
    return transfer(tree, errorListener, options.limits);
  };
});
