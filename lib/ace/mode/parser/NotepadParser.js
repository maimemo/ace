// Generated from NotepadParser.g4 by ANTLR 4.7.1
// jshint ignore: start
define(function(require, exports, module) {
    var antlr4 = self.antlr4;
    var NotepadParserListener = require('./NotepadParserListener').NotepadParserListener;
    var grammarFileName = "NotepadParser.g4";

    var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
        "\u0003\u001c\u0088\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
        "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
        "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
        "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
        "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0003\u0002",
        "\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002+\n\u0002\f\u0002\u000e",
        "\u0002.\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
        "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
        "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t",
        "\u0003\t\u0005\tB\n\t\u0003\t\u0005\tE\n\t\u0003\t\u0005\tH\n\t\u0003",
        "\t\u0003\t\u0007\tL\n\t\f\t\u000e\tO\u000b\t\u0003\n\u0003\n\u0003\n",
        "\u0007\nT\n\n\f\n\u000e\nW\u000b\n\u0003\n\u0003\n\u0003\u000b\u0003",
        "\u000b\u0003\u000b\u0007\u000b^\n\u000b\f\u000b\u000e\u000ba\u000b\u000b",
        "\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0005\fi\n",
        "\f\u0003\f\u0003\f\u0003\r\u0003\r\u0005\ro\n\r\u0003\r\u0007\rr\n\r",
        "\f\r\u000e\ru\u000b\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f",
        "\u0003\u0010\u0003\u0010\u0005\u0010}\n\u0010\u0003\u0010\u0003\u0010",
        "\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013",
        "\u0003\u0013\u0003\u0013\u0002\u0002\u0014\u0002\u0004\u0006\b\n\f\u000e",
        "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$\u0002\u0003\u0004",
        "\u0002\u0018\u0018\u001c\u001c\u0084\u0002,\u0003\u0002\u0002\u0002",
        "\u0004/\u0003\u0002\u0002\u0002\u00063\u0003\u0002\u0002\u0002\b5\u0003",
        "\u0002\u0002\u0002\n7\u0003\u0002\u0002\u0002\f:\u0003\u0002\u0002\u0002",
        "\u000e<\u0003\u0002\u0002\u0002\u0010>\u0003\u0002\u0002\u0002\u0012",
        "P\u0003\u0002\u0002\u0002\u0014Z\u0003\u0002\u0002\u0002\u0016d\u0003",
        "\u0002\u0002\u0002\u0018n\u0003\u0002\u0002\u0002\u001av\u0003\u0002",
        "\u0002\u0002\u001cx\u0003\u0002\u0002\u0002\u001ez\u0003\u0002\u0002",
        "\u0002 \u0081\u0003\u0002\u0002\u0002\"\u0083\u0003\u0002\u0002\u0002",
        "$\u0085\u0003\u0002\u0002\u0002&+\u0005\u0004\u0003\u0002\'+\u0005\n",
        "\u0006\u0002(+\u0005\u000e\b\u0002)+\u0005\u0010\t\u0002*&\u0003\u0002",
        "\u0002\u0002*\'\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002*)",
        "\u0003\u0002\u0002\u0002+.\u0003\u0002\u0002\u0002,*\u0003\u0002\u0002",
        "\u0002,-\u0003\u0002\u0002\u0002-\u0003\u0003\u0002\u0002\u0002.,\u0003",
        "\u0002\u0002\u0002/0\u0007\u0003\u0002\u000201\u0007\n\u0002\u00021",
        "2\u0007\u000b\u0002\u00022\u0005\u0003\u0002\u0002\u000234\u0007\u0003",
        "\u0002\u00024\u0007\u0003\u0002\u0002\u000256\u0007\u000b\u0002\u0002",
        "6\t\u0003\u0002\u0002\u000278\u0007\u0004\u0002\u000289\u0007\f\u0002",
        "\u00029\u000b\u0003\u0002\u0002\u0002:;\u0007\f\u0002\u0002;\r\u0003",
        "\u0002\u0002\u0002<=\u0007\b\u0002\u0002=\u000f\u0003\u0002\u0002\u0002",
        ">?\u0005\u001a\u000e\u0002?A\u0007\t\u0002\u0002@B\u0005\u0012\n\u0002",
        "A@\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002BD\u0003\u0002\u0002",
        "\u0002CE\u0005\u0014\u000b\u0002DC\u0003\u0002\u0002\u0002DE\u0003\u0002",
        "\u0002\u0002EG\u0003\u0002\u0002\u0002FH\u0005\u0016\f\u0002GF\u0003",
        "\u0002\u0002\u0002GH\u0003\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002",
        "IM\u0007\u0010\u0002\u0002JL\u0007\u0005\u0002\u0002KJ\u0003\u0002\u0002",
        "\u0002LO\u0003\u0002\u0002\u0002MK\u0003\u0002\u0002\u0002MN\u0003\u0002",
        "\u0002\u0002N\u0011\u0003\u0002\u0002\u0002OM\u0003\u0002\u0002\u0002",
        "PQ\u0007\r\u0002\u0002QU\u0007\u0011\u0002\u0002RT\u0005\u001c\u000f",
        "\u0002SR\u0003\u0002\u0002\u0002TW\u0003\u0002\u0002\u0002US\u0003\u0002",
        "\u0002\u0002UV\u0003\u0002\u0002\u0002VX\u0003\u0002\u0002\u0002WU\u0003",
        "\u0002\u0002\u0002XY\u0007\u0013\u0002\u0002Y\u0013\u0003\u0002\u0002",
        "\u0002Z[\u0007\u000e\u0002\u0002[_\u0007\u0011\u0002\u0002\\^\u0005",
        "\u001c\u000f\u0002]\\\u0003\u0002\u0002\u0002^a\u0003\u0002\u0002\u0002",
        "_]\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002`b\u0003\u0002\u0002",
        "\u0002a_\u0003\u0002\u0002\u0002bc\u0007\u0013\u0002\u0002c\u0015\u0003",
        "\u0002\u0002\u0002de\u0007\u000f\u0002\u0002eh\u0007\u0014\u0002\u0002",
        "fi\u0005\u0018\r\u0002gi\u0007\u0016\u0002\u0002hf\u0003\u0002\u0002",
        "\u0002hg\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002ij\u0003\u0002",
        "\u0002\u0002jk\t\u0002\u0002\u0002k\u0017\u0003\u0002\u0002\u0002lo",
        "\u0005\u001e\u0010\u0002mo\u0005$\u0013\u0002nl\u0003\u0002\u0002\u0002",
        "nm\u0003\u0002\u0002\u0002os\u0003\u0002\u0002\u0002pr\u0005\"\u0012",
        "\u0002qp\u0003\u0002\u0002\u0002ru\u0003\u0002\u0002\u0002sq\u0003\u0002",
        "\u0002\u0002st\u0003\u0002\u0002\u0002t\u0019\u0003\u0002\u0002\u0002",
        "us\u0003\u0002\u0002\u0002vw\u0007\u0007\u0002\u0002w\u001b\u0003\u0002",
        "\u0002\u0002xy\u0007\u0012\u0002\u0002y\u001d\u0003\u0002\u0002\u0002",
        "z|\u0007\u0015\u0002\u0002{}\u0005 \u0011\u0002|{\u0003\u0002\u0002",
        "\u0002|}\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002~\u007f\u0007",
        "\u001a\u0002\u0002\u007f\u0080\u0007\u001b\u0002\u0002\u0080\u001f\u0003",
        "\u0002\u0002\u0002\u0081\u0082\u0007\u0019\u0002\u0002\u0082!\u0003",
        "\u0002\u0002\u0002\u0083\u0084\u0007\u001b\u0002\u0002\u0084#\u0003",
        "\u0002\u0002\u0002\u0085\u0086\u0007\u0017\u0002\u0002\u0086%\u0003",
        "\u0002\u0002\u0002\u000e*,ADGMU_hns|"].join("");


    var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

    var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

    var sharedContextCache = new antlr4.PredictionContextCache();

    var literalNames = [ null, null, "'#'", null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, "']'" ];

    var symbolicNames = [ null, "ATTR_KEYS", "CHAPTER_MARK", "NL", "S", "WORD",
        "SINGLE_WORD", "BLOCK_VOC_START", "EQ", "ATTR_V",
        "CHAPTER_V", "INTERP", "PHRASE", "NOTE", "VOC_EXIT",
        "BLOCK_START", "LINE", "INTERP_EXIT", "BLOCK_NOTE_START",
        "TL", "EMPTY_LINE", "NOTE_LINE_0", "NOTE_EXIT_0",
        "NOTE_TYPE", "TR", "NOTE_LINE", "NOTE_EXIT" ];

    var ruleNames =  [ "enter", "attr", "attr_k", "attr_v", "chapter", "chapter_v",
        "single_word", "block_voc", "block_interp", "block_phrase",
        "block_note", "note_body", "word", "line", "note_type",
        "type", "note_line", "note_line_invalid" ];

    function NotepadParser (input) {
        antlr4.Parser.call(this, input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ruleNames;
        this.literalNames = literalNames;
        this.symbolicNames = symbolicNames;
        return this;
    }

    NotepadParser.prototype = Object.create(antlr4.Parser.prototype);
    NotepadParser.prototype.constructor = NotepadParser;

    Object.defineProperty(NotepadParser.prototype, "atn", {
        get : function() {
            return atn;
        }
    });

    NotepadParser.EOF = antlr4.Token.EOF;
    NotepadParser.ATTR_KEYS = 1;
    NotepadParser.CHAPTER_MARK = 2;
    NotepadParser.NL = 3;
    NotepadParser.S = 4;
    NotepadParser.WORD = 5;
    NotepadParser.SINGLE_WORD = 6;
    NotepadParser.BLOCK_VOC_START = 7;
    NotepadParser.EQ = 8;
    NotepadParser.ATTR_V = 9;
    NotepadParser.CHAPTER_V = 10;
    NotepadParser.INTERP = 11;
    NotepadParser.PHRASE = 12;
    NotepadParser.NOTE = 13;
    NotepadParser.VOC_EXIT = 14;
    NotepadParser.BLOCK_START = 15;
    NotepadParser.LINE = 16;
    NotepadParser.INTERP_EXIT = 17;
    NotepadParser.BLOCK_NOTE_START = 18;
    NotepadParser.TL = 19;
    NotepadParser.EMPTY_LINE = 20;
    NotepadParser.NOTE_LINE_0 = 21;
    NotepadParser.NOTE_EXIT_0 = 22;
    NotepadParser.NOTE_TYPE = 23;
    NotepadParser.TR = 24;
    NotepadParser.NOTE_LINE = 25;
    NotepadParser.NOTE_EXIT = 26;

    NotepadParser.RULE_enter = 0;
    NotepadParser.RULE_attr = 1;
    NotepadParser.RULE_attr_k = 2;
    NotepadParser.RULE_attr_v = 3;
    NotepadParser.RULE_chapter = 4;
    NotepadParser.RULE_chapter_v = 5;
    NotepadParser.RULE_single_word = 6;
    NotepadParser.RULE_block_voc = 7;
    NotepadParser.RULE_block_interp = 8;
    NotepadParser.RULE_block_phrase = 9;
    NotepadParser.RULE_block_note = 10;
    NotepadParser.RULE_note_body = 11;
    NotepadParser.RULE_word = 12;
    NotepadParser.RULE_line = 13;
    NotepadParser.RULE_note_type = 14;
    NotepadParser.RULE_type = 15;
    NotepadParser.RULE_note_line = 16;
    NotepadParser.RULE_note_line_invalid = 17;

    function EnterContext(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        antlr4.ParserRuleContext.call(this, parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NotepadParser.RULE_enter;
        return this;
    }

    EnterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
    EnterContext.prototype.constructor = EnterContext;

    EnterContext.prototype.attr = function(i) {
        if(i===undefined) {
            i = null;
        }
        if(i===null) {
            return this.getTypedRuleContexts(AttrContext);
        } else {
            return this.getTypedRuleContext(AttrContext,i);
        }
    };

    EnterContext.prototype.chapter = function(i) {
        if(i===undefined) {
            i = null;
        }
        if(i===null) {
            return this.getTypedRuleContexts(ChapterContext);
        } else {
            return this.getTypedRuleContext(ChapterContext,i);
        }
    };

    EnterContext.prototype.single_word = function(i) {
        if(i===undefined) {
            i = null;
        }
        if(i===null) {
            return this.getTypedRuleContexts(Single_wordContext);
        } else {
            return this.getTypedRuleContext(Single_wordContext,i);
        }
    };

    EnterContext.prototype.block_voc = function(i) {
        if(i===undefined) {
            i = null;
        }
        if(i===null) {
            return this.getTypedRuleContexts(Block_vocContext);
        } else {
            return this.getTypedRuleContext(Block_vocContext,i);
        }
    };

    EnterContext.prototype.enterRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.enterEnter(this);
        }
    };

    EnterContext.prototype.exitRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.exitEnter(this);
        }
    };




    NotepadParser.EnterContext = EnterContext;

    NotepadParser.prototype.enter = function() {

        var localctx = new EnterContext(this, this._ctx, this.state);
        this.enterRule(localctx, 0, NotepadParser.RULE_enter);
        var _la = 0; // Token type
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 42;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NotepadParser.ATTR_KEYS) | (1 << NotepadParser.CHAPTER_MARK) | (1 << NotepadParser.WORD) | (1 << NotepadParser.SINGLE_WORD))) !== 0)) {
                this.state = 40;
                switch(this._input.LA(1)) {
                    case NotepadParser.ATTR_KEYS:
                        this.state = 36;
                        this.attr();
                        break;
                    case NotepadParser.CHAPTER_MARK:
                        this.state = 37;
                        this.chapter();
                        break;
                    case NotepadParser.SINGLE_WORD:
                        this.state = 38;
                        this.single_word();
                        break;
                    case NotepadParser.WORD:
                        this.state = 39;
                        this.block_voc();
                        break;
                    default:
                        throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 44;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        } catch (re) {
            if(re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    };

    function AttrContext(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        antlr4.ParserRuleContext.call(this, parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NotepadParser.RULE_attr;
        return this;
    }

    AttrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
    AttrContext.prototype.constructor = AttrContext;

    AttrContext.prototype.ATTR_KEYS = function() {
        return this.getToken(NotepadParser.ATTR_KEYS, 0);
    };

    AttrContext.prototype.EQ = function() {
        return this.getToken(NotepadParser.EQ, 0);
    };

    AttrContext.prototype.ATTR_V = function() {
        return this.getToken(NotepadParser.ATTR_V, 0);
    };

    AttrContext.prototype.enterRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.enterAttr(this);
        }
    };

    AttrContext.prototype.exitRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.exitAttr(this);
        }
    };




    NotepadParser.AttrContext = AttrContext;

    NotepadParser.prototype.attr = function() {

        var localctx = new AttrContext(this, this._ctx, this.state);
        this.enterRule(localctx, 2, NotepadParser.RULE_attr);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 45;
            this.match(NotepadParser.ATTR_KEYS);
            this.state = 46;
            this.match(NotepadParser.EQ);
            this.state = 47;
            this.match(NotepadParser.ATTR_V);
        } catch (re) {
            if(re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    };

    function Attr_kContext(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        antlr4.ParserRuleContext.call(this, parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NotepadParser.RULE_attr_k;
        return this;
    }

    Attr_kContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
    Attr_kContext.prototype.constructor = Attr_kContext;

    Attr_kContext.prototype.ATTR_KEYS = function() {
        return this.getToken(NotepadParser.ATTR_KEYS, 0);
    };

    Attr_kContext.prototype.enterRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.enterAttr_k(this);
        }
    };

    Attr_kContext.prototype.exitRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.exitAttr_k(this);
        }
    };




    NotepadParser.Attr_kContext = Attr_kContext;

    NotepadParser.prototype.attr_k = function() {

        var localctx = new Attr_kContext(this, this._ctx, this.state);
        this.enterRule(localctx, 4, NotepadParser.RULE_attr_k);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 49;
            this.match(NotepadParser.ATTR_KEYS);
        } catch (re) {
            if(re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    };

    function Attr_vContext(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        antlr4.ParserRuleContext.call(this, parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NotepadParser.RULE_attr_v;
        return this;
    }

    Attr_vContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
    Attr_vContext.prototype.constructor = Attr_vContext;

    Attr_vContext.prototype.ATTR_V = function() {
        return this.getToken(NotepadParser.ATTR_V, 0);
    };

    Attr_vContext.prototype.enterRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.enterAttr_v(this);
        }
    };

    Attr_vContext.prototype.exitRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.exitAttr_v(this);
        }
    };




    NotepadParser.Attr_vContext = Attr_vContext;

    NotepadParser.prototype.attr_v = function() {

        var localctx = new Attr_vContext(this, this._ctx, this.state);
        this.enterRule(localctx, 6, NotepadParser.RULE_attr_v);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 51;
            this.match(NotepadParser.ATTR_V);
        } catch (re) {
            if(re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    };

    function ChapterContext(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        antlr4.ParserRuleContext.call(this, parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NotepadParser.RULE_chapter;
        return this;
    }

    ChapterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
    ChapterContext.prototype.constructor = ChapterContext;

    ChapterContext.prototype.CHAPTER_MARK = function() {
        return this.getToken(NotepadParser.CHAPTER_MARK, 0);
    };

    ChapterContext.prototype.CHAPTER_V = function() {
        return this.getToken(NotepadParser.CHAPTER_V, 0);
    };

    ChapterContext.prototype.enterRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.enterChapter(this);
        }
    };

    ChapterContext.prototype.exitRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.exitChapter(this);
        }
    };




    NotepadParser.ChapterContext = ChapterContext;

    NotepadParser.prototype.chapter = function() {

        var localctx = new ChapterContext(this, this._ctx, this.state);
        this.enterRule(localctx, 8, NotepadParser.RULE_chapter);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 53;
            this.match(NotepadParser.CHAPTER_MARK);
            this.state = 54;
            this.match(NotepadParser.CHAPTER_V);
        } catch (re) {
            if(re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    };

    function Chapter_vContext(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        antlr4.ParserRuleContext.call(this, parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NotepadParser.RULE_chapter_v;
        return this;
    }

    Chapter_vContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
    Chapter_vContext.prototype.constructor = Chapter_vContext;

    Chapter_vContext.prototype.CHAPTER_V = function() {
        return this.getToken(NotepadParser.CHAPTER_V, 0);
    };

    Chapter_vContext.prototype.enterRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.enterChapter_v(this);
        }
    };

    Chapter_vContext.prototype.exitRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.exitChapter_v(this);
        }
    };




    NotepadParser.Chapter_vContext = Chapter_vContext;

    NotepadParser.prototype.chapter_v = function() {

        var localctx = new Chapter_vContext(this, this._ctx, this.state);
        this.enterRule(localctx, 10, NotepadParser.RULE_chapter_v);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 56;
            this.match(NotepadParser.CHAPTER_V);
        } catch (re) {
            if(re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    };

    function Single_wordContext(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        antlr4.ParserRuleContext.call(this, parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NotepadParser.RULE_single_word;
        return this;
    }

    Single_wordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
    Single_wordContext.prototype.constructor = Single_wordContext;

    Single_wordContext.prototype.SINGLE_WORD = function() {
        return this.getToken(NotepadParser.SINGLE_WORD, 0);
    };

    Single_wordContext.prototype.enterRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.enterSingle_word(this);
        }
    };

    Single_wordContext.prototype.exitRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.exitSingle_word(this);
        }
    };




    NotepadParser.Single_wordContext = Single_wordContext;

    NotepadParser.prototype.single_word = function() {

        var localctx = new Single_wordContext(this, this._ctx, this.state);
        this.enterRule(localctx, 12, NotepadParser.RULE_single_word);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 58;
            this.match(NotepadParser.SINGLE_WORD);
        } catch (re) {
            if(re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    };

    function Block_vocContext(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        antlr4.ParserRuleContext.call(this, parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NotepadParser.RULE_block_voc;
        return this;
    }

    Block_vocContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
    Block_vocContext.prototype.constructor = Block_vocContext;

    Block_vocContext.prototype.word = function() {
        return this.getTypedRuleContext(WordContext,0);
    };

    Block_vocContext.prototype.BLOCK_VOC_START = function() {
        return this.getToken(NotepadParser.BLOCK_VOC_START, 0);
    };

    Block_vocContext.prototype.VOC_EXIT = function() {
        return this.getToken(NotepadParser.VOC_EXIT, 0);
    };

    Block_vocContext.prototype.block_interp = function() {
        return this.getTypedRuleContext(Block_interpContext,0);
    };

    Block_vocContext.prototype.block_phrase = function() {
        return this.getTypedRuleContext(Block_phraseContext,0);
    };

    Block_vocContext.prototype.block_note = function() {
        return this.getTypedRuleContext(Block_noteContext,0);
    };

    Block_vocContext.prototype.NL = function(i) {
        if(i===undefined) {
            i = null;
        }
        if(i===null) {
            return this.getTokens(NotepadParser.NL);
        } else {
            return this.getToken(NotepadParser.NL, i);
        }
    };


    Block_vocContext.prototype.enterRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.enterBlock_voc(this);
        }
    };

    Block_vocContext.prototype.exitRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.exitBlock_voc(this);
        }
    };




    NotepadParser.Block_vocContext = Block_vocContext;

    NotepadParser.prototype.block_voc = function() {

        var localctx = new Block_vocContext(this, this._ctx, this.state);
        this.enterRule(localctx, 14, NotepadParser.RULE_block_voc);
        var _la = 0; // Token type
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 60;
            this.word();
            this.state = 61;
            this.match(NotepadParser.BLOCK_VOC_START);
            this.state = 63;
            _la = this._input.LA(1);
            if(_la===NotepadParser.INTERP) {
                this.state = 62;
                this.block_interp();
            }

            this.state = 66;
            _la = this._input.LA(1);
            if(_la===NotepadParser.PHRASE) {
                this.state = 65;
                this.block_phrase();
            }

            this.state = 69;
            _la = this._input.LA(1);
            if(_la===NotepadParser.NOTE) {
                this.state = 68;
                this.block_note();
            }

            this.state = 71;
            this.match(NotepadParser.VOC_EXIT);
            this.state = 75;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===NotepadParser.NL) {
                this.state = 72;
                this.match(NotepadParser.NL);
                this.state = 77;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        } catch (re) {
            if(re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    };

    function Block_interpContext(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        antlr4.ParserRuleContext.call(this, parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NotepadParser.RULE_block_interp;
        return this;
    }

    Block_interpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
    Block_interpContext.prototype.constructor = Block_interpContext;

    Block_interpContext.prototype.INTERP = function() {
        return this.getToken(NotepadParser.INTERP, 0);
    };

    Block_interpContext.prototype.BLOCK_START = function() {
        return this.getToken(NotepadParser.BLOCK_START, 0);
    };

    Block_interpContext.prototype.INTERP_EXIT = function() {
        return this.getToken(NotepadParser.INTERP_EXIT, 0);
    };

    Block_interpContext.prototype.line = function(i) {
        if(i===undefined) {
            i = null;
        }
        if(i===null) {
            return this.getTypedRuleContexts(LineContext);
        } else {
            return this.getTypedRuleContext(LineContext,i);
        }
    };

    Block_interpContext.prototype.enterRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.enterBlock_interp(this);
        }
    };

    Block_interpContext.prototype.exitRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.exitBlock_interp(this);
        }
    };




    NotepadParser.Block_interpContext = Block_interpContext;

    NotepadParser.prototype.block_interp = function() {

        var localctx = new Block_interpContext(this, this._ctx, this.state);
        this.enterRule(localctx, 16, NotepadParser.RULE_block_interp);
        var _la = 0; // Token type
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 78;
            this.match(NotepadParser.INTERP);
            this.state = 79;
            this.match(NotepadParser.BLOCK_START);
            this.state = 83;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===NotepadParser.LINE) {
                this.state = 80;
                this.line();
                this.state = 85;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 86;
            this.match(NotepadParser.INTERP_EXIT);
        } catch (re) {
            if(re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    };

    function Block_phraseContext(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        antlr4.ParserRuleContext.call(this, parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NotepadParser.RULE_block_phrase;
        return this;
    }

    Block_phraseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
    Block_phraseContext.prototype.constructor = Block_phraseContext;

    Block_phraseContext.prototype.PHRASE = function() {
        return this.getToken(NotepadParser.PHRASE, 0);
    };

    Block_phraseContext.prototype.BLOCK_START = function() {
        return this.getToken(NotepadParser.BLOCK_START, 0);
    };

    Block_phraseContext.prototype.INTERP_EXIT = function() {
        return this.getToken(NotepadParser.INTERP_EXIT, 0);
    };

    Block_phraseContext.prototype.line = function(i) {
        if(i===undefined) {
            i = null;
        }
        if(i===null) {
            return this.getTypedRuleContexts(LineContext);
        } else {
            return this.getTypedRuleContext(LineContext,i);
        }
    };

    Block_phraseContext.prototype.enterRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.enterBlock_phrase(this);
        }
    };

    Block_phraseContext.prototype.exitRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.exitBlock_phrase(this);
        }
    };




    NotepadParser.Block_phraseContext = Block_phraseContext;

    NotepadParser.prototype.block_phrase = function() {

        var localctx = new Block_phraseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 18, NotepadParser.RULE_block_phrase);
        var _la = 0; // Token type
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 88;
            this.match(NotepadParser.PHRASE);
            this.state = 89;
            this.match(NotepadParser.BLOCK_START);
            this.state = 93;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===NotepadParser.LINE) {
                this.state = 90;
                this.line();
                this.state = 95;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 96;
            this.match(NotepadParser.INTERP_EXIT);
        } catch (re) {
            if(re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    };

    function Block_noteContext(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        antlr4.ParserRuleContext.call(this, parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NotepadParser.RULE_block_note;
        return this;
    }

    Block_noteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
    Block_noteContext.prototype.constructor = Block_noteContext;

    Block_noteContext.prototype.NOTE = function() {
        return this.getToken(NotepadParser.NOTE, 0);
    };

    Block_noteContext.prototype.BLOCK_NOTE_START = function() {
        return this.getToken(NotepadParser.BLOCK_NOTE_START, 0);
    };

    Block_noteContext.prototype.NOTE_EXIT = function() {
        return this.getToken(NotepadParser.NOTE_EXIT, 0);
    };

    Block_noteContext.prototype.NOTE_EXIT_0 = function() {
        return this.getToken(NotepadParser.NOTE_EXIT_0, 0);
    };

    Block_noteContext.prototype.note_body = function() {
        return this.getTypedRuleContext(Note_bodyContext,0);
    };

    Block_noteContext.prototype.EMPTY_LINE = function() {
        return this.getToken(NotepadParser.EMPTY_LINE, 0);
    };

    Block_noteContext.prototype.enterRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.enterBlock_note(this);
        }
    };

    Block_noteContext.prototype.exitRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.exitBlock_note(this);
        }
    };




    NotepadParser.Block_noteContext = Block_noteContext;

    NotepadParser.prototype.block_note = function() {

        var localctx = new Block_noteContext(this, this._ctx, this.state);
        this.enterRule(localctx, 20, NotepadParser.RULE_block_note);
        var _la = 0; // Token type
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 98;
            this.match(NotepadParser.NOTE);
            this.state = 99;
            this.match(NotepadParser.BLOCK_NOTE_START);
            this.state = 102;
            switch (this._input.LA(1)) {
                case NotepadParser.TL:
                case NotepadParser.NOTE_LINE_0:
                    this.state = 100;
                    this.note_body();
                    break;
                case NotepadParser.EMPTY_LINE:
                    this.state = 101;
                    this.match(NotepadParser.EMPTY_LINE);
                    break;
                case NotepadParser.NOTE_EXIT_0:
                case NotepadParser.NOTE_EXIT:
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 104;
            _la = this._input.LA(1);
            if(!(_la===NotepadParser.NOTE_EXIT_0 || _la===NotepadParser.NOTE_EXIT)) {
                this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
        } catch (re) {
            if(re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    };

    function Note_bodyContext(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        antlr4.ParserRuleContext.call(this, parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NotepadParser.RULE_note_body;
        return this;
    }

    Note_bodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
    Note_bodyContext.prototype.constructor = Note_bodyContext;

    Note_bodyContext.prototype.note_type = function() {
        return this.getTypedRuleContext(Note_typeContext,0);
    };

    Note_bodyContext.prototype.note_line_invalid = function() {
        return this.getTypedRuleContext(Note_line_invalidContext,0);
    };

    Note_bodyContext.prototype.note_line = function(i) {
        if(i===undefined) {
            i = null;
        }
        if(i===null) {
            return this.getTypedRuleContexts(Note_lineContext);
        } else {
            return this.getTypedRuleContext(Note_lineContext,i);
        }
    };

    Note_bodyContext.prototype.enterRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.enterNote_body(this);
        }
    };

    Note_bodyContext.prototype.exitRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.exitNote_body(this);
        }
    };




    NotepadParser.Note_bodyContext = Note_bodyContext;

    NotepadParser.prototype.note_body = function() {

        var localctx = new Note_bodyContext(this, this._ctx, this.state);
        this.enterRule(localctx, 22, NotepadParser.RULE_note_body);
        var _la = 0; // Token type
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 108;
            switch(this._input.LA(1)) {
                case NotepadParser.TL:
                    this.state = 106;
                    this.note_type();
                    break;
                case NotepadParser.NOTE_LINE_0:
                    this.state = 107;
                    this.note_line_invalid();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 113;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===NotepadParser.NOTE_LINE) {
                this.state = 110;
                this.note_line();
                this.state = 115;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        } catch (re) {
            if(re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    };

    function WordContext(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        antlr4.ParserRuleContext.call(this, parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NotepadParser.RULE_word;
        return this;
    }

    WordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
    WordContext.prototype.constructor = WordContext;

    WordContext.prototype.WORD = function() {
        return this.getToken(NotepadParser.WORD, 0);
    };

    WordContext.prototype.enterRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.enterWord(this);
        }
    };

    WordContext.prototype.exitRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.exitWord(this);
        }
    };




    NotepadParser.WordContext = WordContext;

    NotepadParser.prototype.word = function() {

        var localctx = new WordContext(this, this._ctx, this.state);
        this.enterRule(localctx, 24, NotepadParser.RULE_word);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 116;
            this.match(NotepadParser.WORD);
        } catch (re) {
            if(re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    };

    function LineContext(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        antlr4.ParserRuleContext.call(this, parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NotepadParser.RULE_line;
        return this;
    }

    LineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
    LineContext.prototype.constructor = LineContext;

    LineContext.prototype.LINE = function() {
        return this.getToken(NotepadParser.LINE, 0);
    };

    LineContext.prototype.enterRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.enterLine(this);
        }
    };

    LineContext.prototype.exitRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.exitLine(this);
        }
    };




    NotepadParser.LineContext = LineContext;

    NotepadParser.prototype.line = function() {

        var localctx = new LineContext(this, this._ctx, this.state);
        this.enterRule(localctx, 26, NotepadParser.RULE_line);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 118;
            this.match(NotepadParser.LINE);
        } catch (re) {
            if(re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    };

    function Note_typeContext(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        antlr4.ParserRuleContext.call(this, parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NotepadParser.RULE_note_type;
        return this;
    }

    Note_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
    Note_typeContext.prototype.constructor = Note_typeContext;

    Note_typeContext.prototype.TL = function() {
        return this.getToken(NotepadParser.TL, 0);
    };

    Note_typeContext.prototype.TR = function() {
        return this.getToken(NotepadParser.TR, 0);
    };

    Note_typeContext.prototype.NOTE_LINE = function() {
        return this.getToken(NotepadParser.NOTE_LINE, 0);
    };

    Note_typeContext.prototype.type = function() {
        return this.getTypedRuleContext(TypeContext,0);
    };

    Note_typeContext.prototype.enterRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.enterNote_type(this);
        }
    };

    Note_typeContext.prototype.exitRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.exitNote_type(this);
        }
    };




    NotepadParser.Note_typeContext = Note_typeContext;

    NotepadParser.prototype.note_type = function() {

        var localctx = new Note_typeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 28, NotepadParser.RULE_note_type);
        var _la = 0; // Token type
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 120;
            this.match(NotepadParser.TL);
            this.state = 122;
            _la = this._input.LA(1);
            if(_la===NotepadParser.NOTE_TYPE) {
                this.state = 121;
                this.type();
            }

            this.state = 124;
            this.match(NotepadParser.TR);
            this.state = 125;
            this.match(NotepadParser.NOTE_LINE);
        } catch (re) {
            if(re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    };

    function TypeContext(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        antlr4.ParserRuleContext.call(this, parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NotepadParser.RULE_type;
        return this;
    }

    TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
    TypeContext.prototype.constructor = TypeContext;

    TypeContext.prototype.NOTE_TYPE = function() {
        return this.getToken(NotepadParser.NOTE_TYPE, 0);
    };

    TypeContext.prototype.enterRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.enterType(this);
        }
    };

    TypeContext.prototype.exitRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.exitType(this);
        }
    };




    NotepadParser.TypeContext = TypeContext;

    NotepadParser.prototype.type = function() {

        var localctx = new TypeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 30, NotepadParser.RULE_type);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 127;
            this.match(NotepadParser.NOTE_TYPE);
        } catch (re) {
            if(re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    };

    function Note_lineContext(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        antlr4.ParserRuleContext.call(this, parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NotepadParser.RULE_note_line;
        return this;
    }

    Note_lineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
    Note_lineContext.prototype.constructor = Note_lineContext;

    Note_lineContext.prototype.NOTE_LINE = function() {
        return this.getToken(NotepadParser.NOTE_LINE, 0);
    };

    Note_lineContext.prototype.enterRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.enterNote_line(this);
        }
    };

    Note_lineContext.prototype.exitRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.exitNote_line(this);
        }
    };




    NotepadParser.Note_lineContext = Note_lineContext;

    NotepadParser.prototype.note_line = function() {

        var localctx = new Note_lineContext(this, this._ctx, this.state);
        this.enterRule(localctx, 32, NotepadParser.RULE_note_line);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 129;
            this.match(NotepadParser.NOTE_LINE);
        } catch (re) {
            if(re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    };

    function Note_line_invalidContext(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        antlr4.ParserRuleContext.call(this, parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NotepadParser.RULE_note_line_invalid;
        return this;
    }

    Note_line_invalidContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
    Note_line_invalidContext.prototype.constructor = Note_line_invalidContext;

    Note_line_invalidContext.prototype.NOTE_LINE_0 = function() {
        return this.getToken(NotepadParser.NOTE_LINE_0, 0);
    };

    Note_line_invalidContext.prototype.enterRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.enterNote_line_invalid(this);
        }
    };

    Note_line_invalidContext.prototype.exitRule = function(listener) {
        if(listener instanceof NotepadParserListener ) {
            listener.exitNote_line_invalid(this);
        }
    };




    NotepadParser.Note_line_invalidContext = Note_line_invalidContext;

    NotepadParser.prototype.note_line_invalid = function() {

        var localctx = new Note_line_invalidContext(this, this._ctx, this.state);
        this.enterRule(localctx, 34, NotepadParser.RULE_note_line_invalid);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 131;
            this.match(NotepadParser.NOTE_LINE_0);
        } catch (re) {
            if(re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    };


    exports.NotepadParser = NotepadParser;
});
