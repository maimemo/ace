// Generated from NotepadParser.g4 by ANTLR 4.7.1
// jshint ignore: start
// This class defines a complete listener for a parse tree produced by NotepadParser.
define(function(require, exports, module) {
    var antlr4 = self.antlr4;

// This class defines a complete listener for a parse tree produced by NotepadParser.
    function NotepadParserListener() {
        antlr4.tree.ParseTreeListener.call(this);
        return this;
    }

    NotepadParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
    NotepadParserListener.prototype.constructor = NotepadParserListener;

// Enter a parse tree produced by NotepadParser#enter.
    NotepadParserListener.prototype.enterEnter = function(ctx) {
    };

// Exit a parse tree produced by NotepadParser#enter.
    NotepadParserListener.prototype.exitEnter = function(ctx) {
    };


// Enter a parse tree produced by NotepadParser#attr.
    NotepadParserListener.prototype.enterAttr = function(ctx) {
    };

// Exit a parse tree produced by NotepadParser#attr.
    NotepadParserListener.prototype.exitAttr = function(ctx) {
    };


// Enter a parse tree produced by NotepadParser#attr_k.
    NotepadParserListener.prototype.enterAttr_k = function(ctx) {
    };

// Exit a parse tree produced by NotepadParser#attr_k.
    NotepadParserListener.prototype.exitAttr_k = function(ctx) {
    };


// Enter a parse tree produced by NotepadParser#attr_v.
    NotepadParserListener.prototype.enterAttr_v = function(ctx) {
    };

// Exit a parse tree produced by NotepadParser#attr_v.
    NotepadParserListener.prototype.exitAttr_v = function(ctx) {
    };


// Enter a parse tree produced by NotepadParser#chapter.
    NotepadParserListener.prototype.enterChapter = function(ctx) {
    };

// Exit a parse tree produced by NotepadParser#chapter.
    NotepadParserListener.prototype.exitChapter = function(ctx) {
    };


// Enter a parse tree produced by NotepadParser#chapter_v.
    NotepadParserListener.prototype.enterChapter_v = function(ctx) {
    };

// Exit a parse tree produced by NotepadParser#chapter_v.
    NotepadParserListener.prototype.exitChapter_v = function(ctx) {
    };


// Enter a parse tree produced by NotepadParser#single_word.
    NotepadParserListener.prototype.enterSingle_word = function(ctx) {
    };

// Exit a parse tree produced by NotepadParser#single_word.
    NotepadParserListener.prototype.exitSingle_word = function(ctx) {
    };


// Enter a parse tree produced by NotepadParser#block_voc.
    NotepadParserListener.prototype.enterBlock_voc = function(ctx) {
    };

// Exit a parse tree produced by NotepadParser#block_voc.
    NotepadParserListener.prototype.exitBlock_voc = function(ctx) {
    };


// Enter a parse tree produced by NotepadParser#block_interp.
    NotepadParserListener.prototype.enterBlock_interp = function(ctx) {
    };

// Exit a parse tree produced by NotepadParser#block_interp.
    NotepadParserListener.prototype.exitBlock_interp = function(ctx) {
    };


// Enter a parse tree produced by NotepadParser#block_phrase.
    NotepadParserListener.prototype.enterBlock_phrase = function(ctx) {
    };

// Exit a parse tree produced by NotepadParser#block_phrase.
    NotepadParserListener.prototype.exitBlock_phrase = function(ctx) {
    };


// Enter a parse tree produced by NotepadParser#block_note.
    NotepadParserListener.prototype.enterBlock_note = function(ctx) {
    };

// Exit a parse tree produced by NotepadParser#block_note.
    NotepadParserListener.prototype.exitBlock_note = function(ctx) {
    };


// Enter a parse tree produced by NotepadParser#note_body.
    NotepadParserListener.prototype.enterNote_body = function(ctx) {
    };

// Exit a parse tree produced by NotepadParser#note_body.
    NotepadParserListener.prototype.exitNote_body = function(ctx) {
    };


// Enter a parse tree produced by NotepadParser#word.
    NotepadParserListener.prototype.enterWord = function(ctx) {
    };

// Exit a parse tree produced by NotepadParser#word.
    NotepadParserListener.prototype.exitWord = function(ctx) {
    };


// Enter a parse tree produced by NotepadParser#line.
    NotepadParserListener.prototype.enterLine = function(ctx) {
    };

// Exit a parse tree produced by NotepadParser#line.
    NotepadParserListener.prototype.exitLine = function(ctx) {
    };


// Enter a parse tree produced by NotepadParser#note_type.
    NotepadParserListener.prototype.enterNote_type = function(ctx) {
    };

// Exit a parse tree produced by NotepadParser#note_type.
    NotepadParserListener.prototype.exitNote_type = function(ctx) {
    };


// Enter a parse tree produced by NotepadParser#type.
    NotepadParserListener.prototype.enterType = function(ctx) {
    };

// Exit a parse tree produced by NotepadParser#type.
    NotepadParserListener.prototype.exitType = function(ctx) {
    };


// Enter a parse tree produced by NotepadParser#note_line.
    NotepadParserListener.prototype.enterNote_line = function(ctx) {
    };

// Exit a parse tree produced by NotepadParser#note_line.
    NotepadParserListener.prototype.exitNote_line = function(ctx) {
    };


// Enter a parse tree produced by NotepadParser#note_line_invalid.
    NotepadParserListener.prototype.enterNote_line_invalid = function(ctx) {
    };

// Exit a parse tree produced by NotepadParser#note_line_invalid.
    NotepadParserListener.prototype.exitNote_line_invalid = function(ctx) {
    };



    exports.NotepadParserListener = NotepadParserListener;
});