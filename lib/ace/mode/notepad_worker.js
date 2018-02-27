importScripts('http://localhost:8888/build/src/antlr4.js');
define(function (require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var Mirror = require("../worker/mirror").Mirror;
    var parser = require("./parser/parser");

    var NotepadWorker = exports.NotepadWorker = function (sender) {
        Mirror.call(this, sender);
        this.setTimeout(500);
        this.setOptions();
    };

    oop.inherits(NotepadWorker, Mirror);

    (function () {
        this.setOptions = function(options) {

        };

        this.onUpdate = function () {
            var errors = [];
            var value = this.doc.getValue();
            var start = new Date();
            var result = parser.parse(value, function(handler, token, row, column, msg, level) {
                errors.push({
                    row: row - 1,
                    column: column,
                    type: level,
                    text: msg
                });
            });
            console.log('Parse completed, time: ' + (new Date().getTime() - start.getTime()));
            // errors.push({
            //     row: 0,
            //     column: error.character - 1,
            //     text: error.reason,
            //     type: type,
            //     raw: raw
            // });


            this.sender.emit("annotate", errors);
        };

    }).call(NotepadWorker.prototype);

});

