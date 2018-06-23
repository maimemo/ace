define(function (require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
// defines the parent mode
    var TextMode = require("./text").Mode;
    var MatchingBraceOutdent = require("./matching_brace_outdent").MatchingBraceOutdent;
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
    var CstyleBehaviour = require("./behaviour/cstyle").CstyleBehaviour;
    var Behaviour = require("./behaviour").Behaviour;

    var JavaScriptHighlightRules = function (options) {
        // see: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects
        var keywordMapper = this.createKeywordMapper({}, "identifier");

        this.$rules = {
            "start": [
                {
                    token: ["attr_name", "assign", "attr_value"],
                    regex: '(标题|简介|分类)( *= *)(.*?)$'
                }
            ]
        };
    };

    oop.inherits(JavaScriptHighlightRules, TextHighlightRules);

    var Mode = function () {
        this.HighlightRules = JavaScriptHighlightRules;
        this.$behaviour = new Behaviour();
    };
    oop.inherits(Mode, TextMode);

    (function () {

    }).call(Mode.prototype);


    exports.Mode = Mode;
});

