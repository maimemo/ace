define(function (require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
// defines the parent mode
    var TextMode = require("./text").Mode;
    var Tokenizer = require("../tokenizer").Tokenizer;
    var MatchingBraceOutdent = require("./matching_brace_outdent").MatchingBraceOutdent;
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

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
                }
            ],
            "block_voc": [
                {
                    token: "BR",
                    regex: '(})',
                    next: "start"
                },
                {
                    token: ["interp", "BL"],
                    regex: '( *interp *)({)',
                    next: "block_interp"
                },
                {
                    token: ["phrase", "BL"],
                    regex: '( *phrase *)({)',
                    next: "block_phrase"
                },
                {
                    token: ["note", "note_type", "BL"],
                    regex: '( *note )(.*?)({)',
                    next: "block_note"
                },
            ],
            "block_interp": [
                {
                    token: "mm_line",
                    regex: '([^}]*$)'
                },
                {
                    token: "BR",
                    regex: '(})',
                    next: "block_voc"
                },
            ],
            "block_phrase": [
                {
                    token: "mm_line",
                    regex: '([^}]*$)'
                },
                {
                    token: "BR",
                    regex: '(})',
                    next: "block_voc"
                },
            ],
            "block_note": [
                {
                    token: "mm_line",
                    regex: '([^}]*$)'
                },
                {
                    token: "BR",
                    regex: '(})',
                    next: "block_voc"
                },
            ]
        }

        // keywords which can be followed by regular expressions
    };

    oop.inherits(JavaScriptHighlightRules, TextHighlightRules);

    var Mode = function () {
        this.HighlightRules = JavaScriptHighlightRules;
        this.$outdent = new MatchingBraceOutdent();
    };
    oop.inherits(Mode, TextMode);

    (function () {

    }).call(Mode.prototype);


    exports.Mode = Mode;
});

