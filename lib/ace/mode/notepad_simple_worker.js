define(function (require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var Mirror = require("../worker/mirror").Mirror;

    var NotepadSimpleWorker = exports.NotepadSimpleWorker = function (sender) {
        Mirror.call(this, sender);
        this.setTimeout(500);
        this.setOptions();
    };

    oop.inherits(NotepadSimpleWorker, Mirror);

    let parseNotepad = (function () {
        'use strict';

        let _library = null;

        let loadLibrary = function () {
            if (_library) {
                return _library;
            }
            let req = new XMLHttpRequest();
            req.open('GET', location.origin + '/assets/library.json', false);
            req.send();
            _library = JSON.parse(req.response);
            return _library;
        };


        let detectAttrs = function (text) {
            let match = /^([\n ]*标题 *= *.*\n?|[\n ]*简介 *= *.*\n?|[\n ]*分类 *= *.*\n?)*\n*( ?\n)*/g.exec(text || '');
            if (!match) {
                return 0;
            }

            return match[0].length;
        };

        let parseAttrs = function (text) {
            let ret = {};
            let attrKeys = ['标题', '简介', '分类'];
            for (let key of attrKeys) {
                let match = new RegExp(`^ *${key} *= *(.*)$`, 'm').exec(text);
                if (match) {
                    ret[key] = match[1];
                }
            }

            return ret;
        };

        class PairArray {
            constructor() {
                this.array = [];
            }

            length() {
                return this.array.length / 2;
            }

            clear() {
                return this.array.length = 0;
            }

            getStart(index) {
                return this.array[index * 2];
            }

            getEnd(index) {
                return this.array[index * 2 + 1];
            }

            add(start, end) {
                this.array.push(start, end);
            }
        }

        let isLetter = function (codePoint) {
            return (codePoint > 47 && codePoint < 58)
                || (codePoint > 64 && codePoint < 91)
                || (codePoint > 96 && codePoint < 123);
        };

        const CHAR_TYPE_LETTER = 1;
        const CHAR_TYPE_HYPHEN = 2;
        const CHAR_TYPE_QUOTE = 3;
        const CHAR_TYPE_BREAK = 4;

        class WordIterator {
            constructor(text) {
                this.text = text;
                this.length = text.length;
                this.currentPos = -1;

                this.start = 0;
                this.end = 0;
                this.word = '';
                this.line = 0;
                this.newLinePos = 0;
            }

            static getCharType(codePoint) {
                if (isLetter(codePoint) || codePoint === 39 || codePoint === 45) {
                    return CHAR_TYPE_LETTER;
                } else {
                    return CHAR_TYPE_BREAK;
                }
            }

            reset() {
                this.currentPos = -1;
                this.line = 0;
                this.newLinePos = 0;
            }

            * [Symbol.iterator]() {
                while (this.nextWord()) {
                    this.word = this.text.substring(this.start, this.end);
                    if (this.start - this.newLinePos < 0) {
                        console.log('fuck');
                    }
                    yield [this.word, this.start, this.line, this.start - this.newLinePos];
                }
                this.reset();
            }

            consume() {
                this.currentPos++;
                if (this.currentPos > 0 && this.text[this.currentPos - 1] === '\n') {
                    this.newLinePos = this.currentPos;
                    this.line++;
                }
                return this.currentPos < this.length;
            }

            nextWord() {
                if (this.start >= this.length) {
                    return false;
                }
                let charType;
                while (this.consume()) {
                    charType = WordIterator.getCharType(this.text.codePointAt(this.currentPos));
                    if (charType === CHAR_TYPE_LETTER) {
                        break;
                    }
                }
                let start = this.currentPos;

                while (this.consume()) {
                    charType = WordIterator.getCharType(this.text.codePointAt(this.currentPos));
                    if (charType !== CHAR_TYPE_LETTER) {
                        break;
                    }
                }
                let end = this.currentPos;

                if (start >= this.length - 1) {
                    return false;
                }

                this.start = start;
                this.end = end;

                return true;
            }
        }

        class SentenceIterator {
            constructor(text) {
                this.update(text);
            }

            update(text) {
                this.text = text;
                this.currentPos = -1;
                this.length = text.length;
                this.start = 0;
                this.end = 0;
                this.line = 0;
                this.newLinePos = 0;
            }

            consume() {
                this.currentPos++;
                if (this.currentPos > 0 && this.text[this.currentPos - 1] === '\n') {
                    this.line++;
                    this.newLinePos = this.currentPos;
                }
                return this.currentPos < this.length;
            }


            nextSentence() {
                if (this.currentPos >= this.length) {
                    return false;
                }

                let charType;

                // starts with a letter
                while (this.consume()) {
                    charType = WordIterator.getCharType(this.text.codePointAt(this.currentPos));
                    if (charType === CHAR_TYPE_LETTER) {
                        break;
                    }
                }
                let start = this.currentPos;

                while (this.consume()) {
                    let char = this.text[this.currentPos];
                    if (char === '.' || char === ',' || char === '\n' || char === '.') {
                        break;
                    }
                }

                let end = this.currentPos;

                if (start >= this.length - 1) {
                    return false;
                }

                this.start = start;
                this.end = end;
                return true;
            }

            * [Symbol.iterator]() {
                while (this.nextSentence()) {
                    this.word = this.text.substring(this.start, this.end);
                    yield [this.word, this.start, this.line, this.start - this.newLinePos];
                }

                this.update(this.text);
            }
        }

        class Node {
            constructor() {
                this.any = null;
                this.children = null;
                this.word = [];
            }
        }

        class PhraseSearchTree {
            constructor(library) {
                this.library = library;
                this.stemEnabled = false;
                this.root = new Node();
                this._any_matcher = new RegExp(' *(\\bsomeone\\b|\\boneself\\b|\\bsomebody\'s\\b|\\bsomebody\\b|\\bsomething\\b|'
                    + '\\bone\'s\\b|\\bdo sth\\.|\\bsb\'s\\b|\\bdo sth\\b|\\bsb\\.\'s\\b|'
                    + '\\bsb\\.|\\bsb\\b|\\bsth\\.|\\bsth\\b|\\.\\.\\.) *');
                this.indexCompleted = false;
            }

            isAny(str) {
                return this._any_matcher.test(str);
            }

            buildIndex() {
                if (this.indexCompleted) {
                    return;
                }

                this.root.children = {};
                for (let w in this.library.words) {
                    if (!w.includes(' ')) {
                        continue;
                    }

                    let node = this.root;
                    let prevNodeIsAny = false;
                    let words = w.split(' ');

                    for (let i = 0; i < words.length; i++) {
                        let word = words[i];
                        let isAny = this.isAny(word);

                        // ignore starts with ANY
                        if (i === 0 && isAny) {
                            continue;
                        }

                        if (prevNodeIsAny) {
                            let n = null;
                            if (!node.any) {
                                node.any = {};
                            } else {
                                n = node.any[word];
                            }

                            if (!n) {
                                n = new Node();
                                node.any[word] = n;
                            }

                            node = n;
                            if (i === words.length - 1) {
                                n.word.push(w);
                            }
                            prevNodeIsAny = false;
                        } else if (isAny) {
                            if (i === words.length - 1) {
                                node.word.push(w);
                            } else {
                                prevNodeIsAny = true;
                            }
                        } else {
                            let n = null;
                            if (!node.children) {
                                node.children = {};
                            } else {
                                n = node.children[word];
                            }

                            if (!n) {
                                n = new Node();
                                node.children[word] = n;
                            }

                            node = n;
                            if (i === words.length - 1) {
                                node.word.push(w);
                            }
                        }
                    }
                }
                this.indexCompleted = true;
            }

            search(sentence) {
                let words = Array.from(new WordIterator(sentence));
                let result = [];
                if (words.length === 0) {
                    return result;
                }

                for (let i = 0; i < words.length - 1; i++) {
                    this.searchOne(words, i, this.root, result);
                }

                return result;
            }

            searchOne(words, start, node, result) {
                let startWord = null;
                let passingAny = false;
                for (let i = start; i < words.length; i++) {
                    let word = words[i][0];
                    let n = null;

                    if (i - start === 10) {
                        return;
                    }

                    if (passingAny) {
                        n = node.any[word];
                        if (this.stemEnabled && !n) {
                            let origin = this.library.forms[word];
                            if (origin) {
                                n = node.any[origin];
                            }
                        }

                        if (n) {
                            node = n;
                            passingAny = false;
                            if (node.word.length) {
                                for (let x of node.word) {
                                    result.push([x, startWord[1], startWord[2], startWord[3]]);
                                }
                            }
                        }
                        continue;
                    }

                    if (node.children) {
                        n = node.children[word];
                        if (this.stemEnabled && !n) {
                            let origin = this.library.forms[word];
                            if (origin) {
                                n = node.children[origin];
                            }
                        }
                        if (n && !startWord) {
                            startWord = words[i];
                        }
                    }

                    if (!n) {
                        if (!node.any) {
                            if (node.word.length) {
                                for (let x of node.word) {
                                    result.push([x, startWord[1], startWord[2], startWord[3]]);
                                }
                            }
                            return;
                        } else {
                            passingAny = true;
                        }
                    } else {
                        // resolve conflicts, i.e. 'let ... alone' and 'let me along'.
                        // the algorithm will match 'let me alone' first, then detect
                        // current node has same child node with next word, here it is 'alone'.
                        // use this node to re-search.
                        if (node.any && i < words.length - 1) {
                            let word2 = words[i + 1];
                            let nn = node.any[word2];
                            if (this.stemEnabled && !nn) {
                                let origin = this.library.forms[word2];
                                if (origin) {
                                    nn = node.any[origin];
                                }
                            }

                            if (nn) {
                                this.searchOne(words, i + 1, nn, result);
                            }
                        }

                        node = n;
                        if (node.word.length) {
                            for (let x of node.word) {
                                result.push([x, startWord[1], startWord[2], startWord[3]]);
                            }
                        }
                    }
                }
            }
        }

        let getSearchTree = (() => {
            let searchTree = null;

            return function (library) {
                if (!searchTree) {
                    searchTree = new PhraseSearchTree(library);
                    searchTree.buildIndex();
                }

                return searchTree;
            };
        })();

        let parseNotepad = function (text, options, callback) {
            let attrIndex = detectAttrs(text);
            let attrText = text.substring(0, attrIndex);
            let contentText = text.substring(attrIndex, text.length).toLowerCase();

            let library;
            let stemEnabled = contentText.startsWith('//');
            let attrs = parseAttrs(attrText);

            let result = {
                attrs: attrs,
                words: {},
                phrases: {}
            };

            let offsetStart = attrIndex;
            let offsetLine = (attrText.match(/\n/g) || []).length;

            let addToResult = function (dest, word, index, line, column) {
                index += offsetStart;
                line += offsetLine;
                let w = library.words[word];
                if (w === undefined) {
                    return;
                }

                if (w === null) {
                    if (!dest[word]) {
                        dest[word] = {word: word, line: line, start: index, column: column};
                    }
                } else {
                    for (let k of w) {
                        if (!dest[k]) {
                            dest[k] = {word: k, line: line, start: index, column: column};
                        }
                    }
                }
            };

            library = loadLibrary();
            let it = new WordIterator(contentText);
            let destWords = result.words;
            for (let word of it) {
                let w = word[0];
                if (stemEnabled) {
                    let origin = library.forms[w];
                    if (origin) {
                        addToResult(destWords, origin, word[1], word[2], word[3]);
                        continue;
                    }
                }

                addToResult(destWords, ...word);
            }

            let searchTree = getSearchTree(library);
            let destPhrases = result.phrases;

            it = new SentenceIterator(contentText);
            searchTree.stemEnabled = stemEnabled;
            for (let s of it) {
                let r = searchTree.search(s[0]);
                for (let i of r) {
                    addToResult(destPhrases, i[0], i[1] + s[1], i[2] + s[2], i[3] + s[3]);
                }
            }

            return result;
        };

        return parseNotepad;
    })();

    let transform = function(d) {
        let list = [];
        let ret = {
            attrs: [],
            list: list,
            defs: [],
        };

        let trans = function(k, v) {
            return {
                data: {
                    word: {
                        column: v.column,
                        line: v.line,
                        start: v.start,
                        text: k
                    }
                },
                type: 'WORD',
                start: {
                    column: v.column,
                    line: v.line,
                },
                stop: {
                    column: v.column,
                    line: v.line,
                }
            }
        };

        let words = [];
        let phrases = [];

        for (let i in d.words) {
            words.push(trans(i, d.words[i]));
        }

        for (let i in d.phrases) {
            phrases.push(trans(i, d.phrases[i]))
        }

        words = words.sort((a, b) => a.data.word.start - b.data.word.start);
        phrases = phrases.sort((a, b) => a.data.word.start - b.data.word.start);

        list.push({
            data: {chapter: {text: '单词列表'}},
            start: {line: 1, column: 0},
            end: {line: 1, column: 0},
            type: 'CHAPTER',
        });
        list.push(...words);
        list.push({
            data: {chapter: {text: '短语列表'}},
            start: {line: 1, column: 0},
            end: {line: 1, column: 0},
            type: 'CHAPTER',
        });
        list.push(...phrases);

        return ret;
    };

    (function () {
        this.setOptions = function (options) {

        };

        this.onUpdate = function () {
            var errors = [];
            var value = this.doc.getValue();
            var start = new Date();
            let result = parseNotepad(value);
            console.log('Parse completed, time: ' + (new Date().getTime() - start.getTime()));
            // errors.push({
            //     row: 0,
            //     column: error.character - 1,
            //     text: error.reason,
            //     type: type,
            //     raw: raw
            // });
            console.log(result);
            this.sender.emit('data', transform(result));
            this.sender.emit("annotate", errors);
        };

    }).call(NotepadSimpleWorker.prototype);

});

