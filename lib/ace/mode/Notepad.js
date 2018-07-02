define(function (require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
// defines the parent mode
    var TextMode = require("./text").Mode;
    var MatchingBraceOutdent = require("./matching_brace_outdent").MatchingBraceOutdent;
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
    var CstyleBehaviour = require("./behaviour/cstyle").CstyleBehaviour;
    var Behaviour = require("./behaviour").Behaviour;
    var WorkerClient = require("../worker/worker_client").WorkerClient;

    var JavaScriptHighlightRules = function (options) {
        // see: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects
        var keywordMapper = this.createKeywordMapper({}, "identifier");

        this.$rules = {
            "start": [
                {
                    token: ["attr_name", "assign", "attr_value"],
                    regex: '(标题|简介|分类)( *= *)(.*?)$'
                },
                {
                    token: ["chapter_mark", "chapter"],
                    regex: '(#)(.*)'
                },
                {
                    token: ["voc", "BL"],
                    regex: '(^ *[^=\n#]*? *)({)',
                    next: 'block_voc'
                },
                {
                    token: "single_word",
                    regex: '^[a-zA-Z0-9][a-zA-Z0-9\'!? -\\.]*$'
                },
                {
                    token: "comment",
                    regex: '^//.*'
                }
            ],
            "block_voc": [
                {
                    token: "BR",
                    regex: '^ *(}) *$',
                    next: "start"
                },
                {
                    token: ["interp", "BL"],
                    regex: '( *解释 *)({)',
                    next: "block_interp"
                },
                {
                    token: ["phrase", "BL"],
                    regex: '( *例句 *)({)',
                    next: "block_phrase"
                },
                {
                    token: ["note", "BL"],
                    regex: '( *助记 *)({)',
                    next: "block_note"
                }
            ],
            "block_interp": [
                {
                    token: "mm_line",
                    regex: '([^}]*$)'
                },
                {
                    token: "BR",
                    regex: '^ *(}) *$',
                    next: "block_voc"
                }
            ],
            "block_phrase": [
                {
                    token: "mm_line",
                    regex: '([^}]*$)'
                },
                {
                    token: "BR",
                    regex: '^ *(}) *$',
                    next: "block_voc"
                }
            ],
            "block_note": [
                {
                    token: ["SL", "note_type", "SR", "text"],
                    regex: '(\\[)(.*?)(\\])([^}]*$)'
                },
                {
                    token: "BR",
                    regex: '^ *(}) *$',
                    next: "block_voc"
                }
            ]
        };

        // keywords which can be followed by regular expressions
    };

    oop.inherits(JavaScriptHighlightRules, TextHighlightRules);

    var Mode = function () {
        this.HighlightRules = JavaScriptHighlightRules;
        this.$outdent = new MatchingBraceOutdent();
        this.$behaviour = new CstyleBehaviour();
        this.$behaviour.add('vocstart', 'insertion', function (state, action, editor, session, text) {
            if (state === 'block_voc' && text === '\n') {
                var row = editor.getCursorPosition().row;
                if (row === 0 || session.getState(row - 1) === 'start') {
                    return {
                        text: '\n    解释 {\n        \n    }\n    例句 {\n        \n    }\n    助记 {\n        \n    }\n}\n',
                        selection: [2, 9, 2, 9]
                    };
                }
            }
        });

        this.checkOutdent = function (state, line, input) {
            return this.$outdent.checkOutdent(line, input);
        };

        this.autoOutdent = function (state, doc, row) {
            this.$outdent.autoOutdent(doc, row);
        };

        this.getNextLineIndent = function (state, line, tab) {
            if (state === 'block_interp' || state === 'block_phrase' || state === 'block_note') {
                return '        ';
            } else if (state === 'block_voc') {
                return '    ';
            } else {
                return '';
            }
        };

        this.createWorker = function (session) {
            var worker = new WorkerClient(["ace"], "ace/mode/notepad_worker", "NotepadWorker");

            worker.attachToDocument(session.getDocument());

            worker.on("annotate", function (results) {
                session.setAnnotations(results.data);
            });

            worker.on("terminate", function () {
                session.clearAnnotations();
            });

            worker.on('data', function(data) {
                session.onParse(data);
            });

            return worker;
        };

    };
    oop.inherits(Mode, TextMode);

    (function () {

    }).call(Mode.prototype);


    exports.Mode = Mode;
});

