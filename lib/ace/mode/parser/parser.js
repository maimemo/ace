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
                return CommonTokenFactory.prototype.create.apply(this, [source, type, text, channel, start, stop, line, column]);
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

    var VALID_NOTE_TYPES = ['扩展', '对比', '其他', '分析', '合成', '词源', '联想', '吐槽', '语法', '词根', '串记', '谐音', '口诀'];
    var transfer = function (tree, errorListener) {
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
                reportErr(null, node.start.line, 0, 'Missing \'=\' after ' + node.children[0].symbol.text);
                return;
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

        var checkVoc = function (node) {
            var voc = createNode('DEF', node.start, node.stop, {
                word: createToken(node.children[0].children[0].symbol)
            });

            if (data.defs.find(function (x) {
                    return x.data.word.text === voc.data.word.text;
                })) {
                reportErr(null, node.start.line, 0, 'Duplicate define: ' + voc.data.word.text, 'error');
                return;
            }

            var checkInterp = function (c) {
                var interp = voc.data.interp = createNode('INTERP', c.start, c.stop,{});
                if (c.children.length === 3) {
                    interp.data = null;
                } else {
                    var text = '';
                    for (var i = 2; i < c.children.length - 1; i++) {
                        text += c.children[i].children[0].symbol.text + (i === c.children.length - 2 ? '' : '\n');
                    }

                    interp.data.interp = text;
                }
            };

            var checkPhrase = function (c) {
                var phrase = voc.data.phrase = createNode('PHRASE', c.start, c.stop,{phrases: []});
                if (c.children.length === 3) {
                    phrase.data = null;
                } else {
                    var p = [];
                    for (var i = 2; i < c.children.length - 1; i++) {
                        p.push(c.children[i].children[0].symbol.text);
                        if (p.length === 2) {
                            phrase.data.phrases.push(p);
                        }
                    }
                }
            };

            var checkNote = function (c) {
                var note = voc.data.note = createNode('PHRASE', c.start, c.stop,{});
                var noteBody = c.children.find(function (x) {
                    return x.constructor.name === 'Note_bodyContext';
                });
                if (!noteBody) {
                    note.data = null;
                } else {
                    if (noteBody.children[0].constructor.name === 'Note_line_invalidContext'
                        || noteBody.children[0].children.length === 3) {
                        reportErr(null, noteBody.start.line, 0, '缺少助记类型，例如 [对比]go, come', 'error');
                        return;
                    }

                    var noteTypeCtx = noteBody.children[0];
                    var noteType = noteTypeCtx.children[1].symbol.text;
                    if (VALID_NOTE_TYPES.indexOf(noteType) < 0) {
                        reportErr(null, noteBody.start.line, 0, '无效的助记类型: ' + noteType + '，可选的类型：' + VALID_NOTE_TYPES, 'error');
                        return;
                    }

                    var noteText = noteTypeCtx.children[3].symbol.text + '\n';
                    for (var i = 1; i < noteBody.children.length; i++) {
                        noteText += noteBody.children[i].children[0].symbol.text;
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
                }
            });

            data.defs.push(voc);
        };

        var lastType = null;
        tree.children.forEach(function (node) {
            var type = node.constructor.name;
            if (lastType != null) {
                if (type === 'AttrContext' && lastType !== 'AttrContext') {
                    reportErr(null, node.start.line, 0, 'Attribute definition only allowed in document head', 'error');
                    return;
                }
                if ((type === 'ChapterContext' || type === 'Single_wordContext')
                    && !(lastType === 'ChapterContext' || lastType === 'Single_wordContext' || lastType === 'AttrContext')) {
                    reportErr(null, node.start.line, 0, 'Chapter or Word place only after attributes and before definitions', 'error');
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
        return transfer(tree, errorListener);
    };
});
