define(function(require, exports, module) {
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

    var transfer = function (tree, errorListener) {
        var reportErr = function(token, row, column, msg, level) {

        };
        console.log(tree);
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
                console.log(arguments);
                if (errorListener) {
                    errorListener(handler, token, c, f, g, 'error');
                }
            };
            this.reportAttemptingFullContext = function() {};
            this.reportAmbiguity = function() {
                console.log(arguments);
            };
        };
        lexer._factory = new TrimTokenFactory(false);
        lexer.addErrorListener(errorHandler);
        parser.addErrorListener(errorHandler);
        parser.buildParseTrees = true;
        var tree = parser.enter();
        return transfer(tree);
    };
});