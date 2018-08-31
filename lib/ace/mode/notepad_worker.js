// var antlrUrl = 'https://' + location.href.match(/https?:\/\/(.*com)/)[1] + '/res/editor/ace/antlr4.js';
// var antlrUrl = location.href.split('/').slice(0, 3).join('/') + '/build/src/antlr4.js';
var antlrUrl = location.origin + (location.origin.match('maimemo.com') ? '/res/editor' : '') +  '/ace/antlr4.js';
importScripts(antlrUrl);
define(function (require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var Mirror = require("../worker/mirror").Mirror;
    var parser = require("./parser/parser");

    var NotepadWorker = exports.NotepadWorker = function (sender) {
        Mirror.call(this, sender);
        this.setTimeout(0);
        this.setOptions();
    };

    oop.inherits(NotepadWorker, Mirror);

    let lastUpdateTime = 0;

    let timer = null;
    let delay = 1000;

    (function () {
        this.setOptions = function (options) {

        };

        this.update = function() {
          var errors = [];
          var value = this.doc.getValue();
          var start = new Date();
          var result = parser.parse(value, function (handler, token, row, column, msg, level) {
            errors.push({
              row: row - 1,
              column: column,
              type: level,
              text: msg
            });
          });
          console.log('Parse completed, time: ' + (new Date().getTime() - start.getTime()));

          this.sender.emit('data', result);
          this.sender.emit("annotate", errors);
        };

        this.onUpdate = function () {
          if (timer) {
            clearTimeout(timer);
          }
          timer = setTimeout(() => this.update(), delay);

        };

    }).call(NotepadWorker.prototype);

});

