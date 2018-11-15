// Generated from NotepadParser.g4 by ANTLR 4.7.1
// jshint ignore: start
define(function(require, exports, module) {
    var antlr4 = self.antlr4;
  var NotepadParserListener = require('./NotepadParserListener').NotepadParserListener;
  var grammarFileName = "NotepadParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001f\u0083\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0007\u0002*\n\u0002\f\u0002\u000e\u0002",
    "-\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0005\u00044\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0007",
    "\b@\n\b\f\b\u000e\bC\u000b\b\u0003\b\u0003\b\u0003\b\u0007\bH\n\b\f",
    "\b\u000e\bK\u000b\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\n",
    "\u0003\n\u0007\nT\n\n\f\n\u000e\nW\u000b\n\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0007\u000b]\n\u000b\f\u000b\u000e\u000b`\u000b\u000b\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0005\fg\n\f\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0005\rm\n\r\u0003\r\u0007\rp\n\r\f\r\u000e\rs\u000b",
    "\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0005\u0010{\n\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0002\u0002\u0013\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"\u0002\u0003\u0004\u0002\u001b\u001b\u001f\u001f\u0002\u0082\u0002",
    "+\u0003\u0002\u0002\u0002\u0004.\u0003\u0002\u0002\u0002\u00060\u0003",
    "\u0002\u0002\u0002\b5\u0003\u0002\u0002\u0002\n8\u0003\u0002\u0002\u0002",
    "\f:\u0003\u0002\u0002\u0002\u000e<\u0003\u0002\u0002\u0002\u0010N\u0003",
    "\u0002\u0002\u0002\u0012Q\u0003\u0002\u0002\u0002\u0014Z\u0003\u0002",
    "\u0002\u0002\u0016c\u0003\u0002\u0002\u0002\u0018l\u0003\u0002\u0002",
    "\u0002\u001at\u0003\u0002\u0002\u0002\u001cv\u0003\u0002\u0002\u0002",
    "\u001ex\u0003\u0002\u0002\u0002 ~\u0003\u0002\u0002\u0002\"\u0080\u0003",
    "\u0002\u0002\u0002$*\u0005\u0006\u0004\u0002%*\u0005\b\u0005\u0002&",
    "*\u0005\f\u0007\u0002\'*\u0005\u000e\b\u0002(*\u0005\u0004\u0003\u0002",
    ")$\u0003\u0002\u0002\u0002)%\u0003\u0002\u0002\u0002)&\u0003\u0002\u0002",
    "\u0002)\'\u0003\u0002\u0002\u0002)(\u0003\u0002\u0002\u0002*-\u0003",
    "\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002",
    ",\u0003\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002./\u0007\u0007",
    "\u0002\u0002/\u0005\u0003\u0002\u0002\u000201\u0007\u0003\u0002\u0002",
    "13\u0007\f\u0002\u000224\u0007\r\u0002\u000232\u0003\u0002\u0002\u0002",
    "34\u0003\u0002\u0002\u00024\u0007\u0003\u0002\u0002\u000256\u0007\u0004",
    "\u0002\u000267\u0007\u000e\u0002\u00027\t\u0003\u0002\u0002\u000289",
    "\u0007\u000e\u0002\u00029\u000b\u0003\u0002\u0002\u0002:;\u0007\t\u0002",
    "\u0002;\r\u0003\u0002\u0002\u0002<=\u0005\u001a\u000e\u0002=A\u0007",
    "\n\u0002\u0002>@\u0005\u0010\t\u0002?>\u0003\u0002\u0002\u0002@C\u0003",
    "\u0002\u0002\u0002A?\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002",
    "BI\u0003\u0002\u0002\u0002CA\u0003\u0002\u0002\u0002DH\u0005\u0012\n",
    "\u0002EH\u0005\u0014\u000b\u0002FH\u0005\u0016\f\u0002GD\u0003\u0002",
    "\u0002\u0002GE\u0003\u0002\u0002\u0002GF\u0003\u0002\u0002\u0002HK\u0003",
    "\u0002\u0002\u0002IG\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002",
    "JL\u0003\u0002\u0002\u0002KI\u0003\u0002\u0002\u0002LM\u0007\u0014\u0002",
    "\u0002M\u000f\u0003\u0002\u0002\u0002NO\u0007\u0010\u0002\u0002OP\u0007",
    "\u0015\u0002\u0002P\u0011\u0003\u0002\u0002\u0002QU\u0007\u0011\u0002",
    "\u0002RT\u0005\u001c\u000f\u0002SR\u0003\u0002\u0002\u0002TW\u0003\u0002",
    "\u0002\u0002US\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002VX\u0003",
    "\u0002\u0002\u0002WU\u0003\u0002\u0002\u0002XY\u0007\u0017\u0002\u0002",
    "Y\u0013\u0003\u0002\u0002\u0002Z^\u0007\u0012\u0002\u0002[]\u0005\u001c",
    "\u000f\u0002\\[\u0003\u0002\u0002\u0002]`\u0003\u0002\u0002\u0002^\\",
    "\u0003\u0002\u0002\u0002^_\u0003\u0002\u0002\u0002_a\u0003\u0002\u0002",
    "\u0002`^\u0003\u0002\u0002\u0002ab\u0007\u0017\u0002\u0002b\u0015\u0003",
    "\u0002\u0002\u0002cf\u0007\u0013\u0002\u0002dg\u0005\u0018\r\u0002e",
    "g\u0007\u0019\u0002\u0002fd\u0003\u0002\u0002\u0002fe\u0003\u0002\u0002",
    "\u0002fg\u0003\u0002\u0002\u0002gh\u0003\u0002\u0002\u0002hi\t\u0002",
    "\u0002\u0002i\u0017\u0003\u0002\u0002\u0002jm\u0005\u001e\u0010\u0002",
    "km\u0005\"\u0012\u0002lj\u0003\u0002\u0002\u0002lk\u0003\u0002\u0002",
    "\u0002mq\u0003\u0002\u0002\u0002np\u0005 \u0011\u0002on\u0003\u0002",
    "\u0002\u0002ps\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002qr\u0003",
    "\u0002\u0002\u0002r\u0019\u0003\u0002\u0002\u0002sq\u0003\u0002\u0002",
    "\u0002tu\u0007\b\u0002\u0002u\u001b\u0003\u0002\u0002\u0002vw\u0007",
    "\u0016\u0002\u0002w\u001d\u0003\u0002\u0002\u0002xz\u0007\u0018\u0002",
    "\u0002y{\u0007\u001c\u0002\u0002zy\u0003\u0002\u0002\u0002z{\u0003\u0002",
    "\u0002\u0002{|\u0003\u0002\u0002\u0002|}\u0007\u001d\u0002\u0002}\u001f",
    "\u0003\u0002\u0002\u0002~\u007f\u0007\u001e\u0002\u0002\u007f!\u0003",
    "\u0002\u0002\u0002\u0080\u0081\u0007\u001a\u0002\u0002\u0081#\u0003",
    "\u0002\u0002\u0002\u000e)+3AGIU^flqz"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "'#'", null, null, null, null, null, null,
                     null, null, null, null, "'{'", null, null, null, null,
                     null, null, null, null, null, null, null, null, null,
                     "']'" ];

var symbolicNames = [ null, "ATTR_KEYS", "CHAPTER_MARK", "NL", "S", "COMMENT",
                      "WORD", "SINGLE_WORD", "BLOCK_VOC_START", "ATTR_EXIT",
                      "EQ", "ATTR_V", "CHAPTER_V", "VOC_BLOCK_START", "VATTR",
                      "INTERP", "PHRASE", "NOTE", "VOC_EXIT", "VVALUE",
                      "LINE", "INTERP_EXIT", "TL", "EMPTY_LINE", "NOTE_LINE_0",
                      "NOTE_EXIT_0", "NOTE_TYPE", "TR", "NOTE_LINE", "NOTE_EXIT" ];

var ruleNames =  [ "enter", "comment", "attr", "chapter", "chapter_v", "single_word",
                   "block_voc", "vattr", "block_interp", "block_phrase",
                   "block_note", "note_body", "word", "line", "note_type",
                   "note_line", "note_line_invalid" ];

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
NotepadParser.COMMENT = 5;
NotepadParser.WORD = 6;
NotepadParser.SINGLE_WORD = 7;
NotepadParser.BLOCK_VOC_START = 8;
NotepadParser.ATTR_EXIT = 9;
NotepadParser.EQ = 10;
NotepadParser.ATTR_V = 11;
NotepadParser.CHAPTER_V = 12;
NotepadParser.VOC_BLOCK_START = 13;
NotepadParser.VATTR = 14;
NotepadParser.INTERP = 15;
NotepadParser.PHRASE = 16;
NotepadParser.NOTE = 17;
NotepadParser.VOC_EXIT = 18;
NotepadParser.VVALUE = 19;
NotepadParser.LINE = 20;
NotepadParser.INTERP_EXIT = 21;
NotepadParser.TL = 22;
NotepadParser.EMPTY_LINE = 23;
NotepadParser.NOTE_LINE_0 = 24;
NotepadParser.NOTE_EXIT_0 = 25;
NotepadParser.NOTE_TYPE = 26;
NotepadParser.TR = 27;
NotepadParser.NOTE_LINE = 28;
NotepadParser.NOTE_EXIT = 29;

NotepadParser.RULE_enter = 0;
NotepadParser.RULE_comment = 1;
NotepadParser.RULE_attr = 2;
NotepadParser.RULE_chapter = 3;
NotepadParser.RULE_chapter_v = 4;
NotepadParser.RULE_single_word = 5;
NotepadParser.RULE_block_voc = 6;
NotepadParser.RULE_vattr = 7;
NotepadParser.RULE_block_interp = 8;
NotepadParser.RULE_block_phrase = 9;
NotepadParser.RULE_block_note = 10;
NotepadParser.RULE_note_body = 11;
NotepadParser.RULE_word = 12;
NotepadParser.RULE_line = 13;
NotepadParser.RULE_note_type = 14;
NotepadParser.RULE_note_line = 15;
NotepadParser.RULE_note_line_invalid = 16;

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

EnterContext.prototype.comment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CommentContext);
    } else {
        return this.getTypedRuleContext(CommentContext,i);
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
        this.state = 41;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NotepadParser.ATTR_KEYS) | (1 << NotepadParser.CHAPTER_MARK) | (1 << NotepadParser.COMMENT) | (1 << NotepadParser.WORD) | (1 << NotepadParser.SINGLE_WORD))) !== 0)) {
            this.state = 39;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case NotepadParser.ATTR_KEYS:
                this.state = 34;
                this.attr();
                break;
            case NotepadParser.CHAPTER_MARK:
                this.state = 35;
                this.chapter();
                break;
            case NotepadParser.SINGLE_WORD:
                this.state = 36;
                this.single_word();
                break;
            case NotepadParser.WORD:
                this.state = 37;
                this.block_voc();
                break;
            case NotepadParser.COMMENT:
                this.state = 38;
                this.comment();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 43;
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

function CommentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NotepadParser.RULE_comment;
    return this;
}

CommentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommentContext.prototype.constructor = CommentContext;

CommentContext.prototype.COMMENT = function() {
    return this.getToken(NotepadParser.COMMENT, 0);
};

CommentContext.prototype.enterRule = function(listener) {
    if(listener instanceof NotepadParserListener ) {
        listener.enterComment(this);
	}
};

CommentContext.prototype.exitRule = function(listener) {
    if(listener instanceof NotepadParserListener ) {
        listener.exitComment(this);
	}
};




NotepadParser.CommentContext = CommentContext;

NotepadParser.prototype.comment = function() {

    var localctx = new CommentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, NotepadParser.RULE_comment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        this.match(NotepadParser.COMMENT);
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
    this.enterRule(localctx, 4, NotepadParser.RULE_attr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        this.match(NotepadParser.ATTR_KEYS);
        this.state = 47;
        this.match(NotepadParser.EQ);
        this.state = 49;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===NotepadParser.ATTR_V) {
            this.state = 48;
            this.match(NotepadParser.ATTR_V);
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
    this.enterRule(localctx, 6, NotepadParser.RULE_chapter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        this.match(NotepadParser.CHAPTER_MARK);
        this.state = 52;
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
    this.enterRule(localctx, 8, NotepadParser.RULE_chapter_v);
    try {
        this.enterOuterAlt(localctx, 1);
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
    this.enterRule(localctx, 10, NotepadParser.RULE_single_word);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
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

Block_vocContext.prototype.vattr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VattrContext);
    } else {
        return this.getTypedRuleContext(VattrContext,i);
    }
};

Block_vocContext.prototype.block_interp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Block_interpContext);
    } else {
        return this.getTypedRuleContext(Block_interpContext,i);
    }
};

Block_vocContext.prototype.block_phrase = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Block_phraseContext);
    } else {
        return this.getTypedRuleContext(Block_phraseContext,i);
    }
};

Block_vocContext.prototype.block_note = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Block_noteContext);
    } else {
        return this.getTypedRuleContext(Block_noteContext,i);
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
    this.enterRule(localctx, 12, NotepadParser.RULE_block_voc);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 58;
        this.word();
        this.state = 59;
        this.match(NotepadParser.BLOCK_VOC_START);
        this.state = 63;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NotepadParser.VATTR) {
            this.state = 60;
            this.vattr();
            this.state = 65;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 71;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NotepadParser.INTERP) | (1 << NotepadParser.PHRASE) | (1 << NotepadParser.NOTE))) !== 0)) {
            this.state = 69;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case NotepadParser.INTERP:
                this.state = 66;
                this.block_interp();
                break;
            case NotepadParser.PHRASE:
                this.state = 67;
                this.block_phrase();
                break;
            case NotepadParser.NOTE:
                this.state = 68;
                this.block_note();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 73;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 74;
        this.match(NotepadParser.VOC_EXIT);
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

function VattrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NotepadParser.RULE_vattr;
    return this;
}

VattrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VattrContext.prototype.constructor = VattrContext;

VattrContext.prototype.VATTR = function() {
    return this.getToken(NotepadParser.VATTR, 0);
};

VattrContext.prototype.VVALUE = function() {
    return this.getToken(NotepadParser.VVALUE, 0);
};

VattrContext.prototype.enterRule = function(listener) {
    if(listener instanceof NotepadParserListener ) {
        listener.enterVattr(this);
	}
};

VattrContext.prototype.exitRule = function(listener) {
    if(listener instanceof NotepadParserListener ) {
        listener.exitVattr(this);
	}
};




NotepadParser.VattrContext = VattrContext;

NotepadParser.prototype.vattr = function() {

    var localctx = new VattrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, NotepadParser.RULE_vattr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        this.match(NotepadParser.VATTR);
        this.state = 77;
        this.match(NotepadParser.VVALUE);
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
        this.state = 79;
        this.match(NotepadParser.INTERP);
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
        this.state = 92;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NotepadParser.LINE) {
            this.state = 89;
            this.line();
            this.state = 94;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 95;
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
        this.state = 97;
        this.match(NotepadParser.NOTE);
        this.state = 100;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
        case NotepadParser.TL:
        case NotepadParser.NOTE_LINE_0:
        	this.state = 98;
        	this.note_body();
        	break;
        case NotepadParser.EMPTY_LINE:
        	this.state = 99;
        	this.match(NotepadParser.EMPTY_LINE);
        	break;
        case NotepadParser.NOTE_EXIT_0:
        case NotepadParser.NOTE_EXIT:
        	break;
        default:
        	break;
        }
        this.state = 102;
        _la = this._input.LA(1);
        if(!(_la===NotepadParser.NOTE_EXIT_0 || _la===NotepadParser.NOTE_EXIT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
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
        this.state = 106;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case NotepadParser.TL:
            this.state = 104;
            this.note_type();
            break;
        case NotepadParser.NOTE_LINE_0:
            this.state = 105;
            this.note_line_invalid();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 111;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NotepadParser.NOTE_LINE) {
            this.state = 108;
            this.note_line();
            this.state = 113;
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
        this.state = 114;
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
        this.state = 116;
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

Note_typeContext.prototype.NOTE_TYPE = function() {
    return this.getToken(NotepadParser.NOTE_TYPE, 0);
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
        this.state = 118;
        this.match(NotepadParser.TL);
        this.state = 120;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===NotepadParser.NOTE_TYPE) {
            this.state = 119;
            this.match(NotepadParser.NOTE_TYPE);
        }

        this.state = 122;
        this.match(NotepadParser.TR);
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
    this.enterRule(localctx, 30, NotepadParser.RULE_note_line);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
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
    this.enterRule(localctx, 32, NotepadParser.RULE_note_line_invalid);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 126;
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
