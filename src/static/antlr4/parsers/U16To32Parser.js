// Generated from /home/jason/Projets/u16to32/src/static/antlr4/grammars/U16To32.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var U16To32Listener = require('./U16To32Listener').U16To32Listener;
var grammarFileName = "U16To32.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\t1\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0003\u0002",
    "\u0006\u0002\u0010\n\u0002\r\u0002\u000e\u0002\u0011\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0019\n\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0006\u0006#\n\u0006\r\u0006\u000e\u0006$\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0006\u0007+\n\u0007\r\u0007",
    "\u000e\u0007,\u0003\u0007\u0003\u0007\u0003\u0007\u0002\u0002\b\u0002",
    "\u0004\u0006\b\n\f\u0002\u0004\u0004\u0002\u0004\u0004\u0006\u0006\u0004",
    "\u0002\u0005\u0005\u0007\u0007\u0002/\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0004\u0018\u0003\u0002\u0002\u0002\u0006\u001a\u0003\u0002\u0002",
    "\u0002\b\u001d\u0003\u0002\u0002\u0002\n \u0003\u0002\u0002\u0002\f",
    "(\u0003\u0002\u0002\u0002\u000e\u0010\u0005\u0004\u0003\u0002\u000f",
    "\u000e\u0003\u0002\u0002\u0002\u0010\u0011\u0003\u0002\u0002\u0002\u0011",
    "\u000f\u0003\u0002\u0002\u0002\u0011\u0012\u0003\u0002\u0002\u0002\u0012",
    "\u0013\u0003\u0002\u0002\u0002\u0013\u0014\u0007\u0002\u0002\u0003\u0014",
    "\u0003\u0003\u0002\u0002\u0002\u0015\u0019\u0005\b\u0005\u0002\u0016",
    "\u0019\u0005\u0006\u0004\u0002\u0017\u0019\u0007\u0003\u0002\u0002\u0018",
    "\u0015\u0003\u0002\u0002\u0002\u0018\u0016\u0003\u0002\u0002\u0002\u0018",
    "\u0017\u0003\u0002\u0002\u0002\u0019\u0005\u0003\u0002\u0002\u0002\u001a",
    "\u001b\u0007\u0006\u0002\u0002\u001b\u001c\u0007\u0007\u0002\u0002\u001c",
    "\u0007\u0003\u0002\u0002\u0002\u001d\u001e\u0005\n\u0006\u0002\u001e",
    "\u001f\u0005\f\u0007\u0002\u001f\t\u0003\u0002\u0002\u0002 \"\u0007",
    "\b\u0002\u0002!#\t\u0002\u0002\u0002\"!\u0003\u0002\u0002\u0002#$\u0003",
    "\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002",
    "%&\u0003\u0002\u0002\u0002&\'\u0007\t\u0002\u0002\'\u000b\u0003\u0002",
    "\u0002\u0002(*\u0007\b\u0002\u0002)+\t\u0003\u0002\u0002*)\u0003\u0002",
    "\u0002\u0002+,\u0003\u0002\u0002\u0002,*\u0003\u0002\u0002\u0002,-\u0003",
    "\u0002\u0002\u0002-.\u0003\u0002\u0002\u0002./\u0007\t\u0002\u0002/",
    "\r\u0003\u0002\u0002\u0002\u0006\u0011\u0018$,"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, "'['", "']'" ];

var symbolicNames = [ null, "Rep", "RangeHigh", "RangeLow", "RepHigh", "RepLow", 
                      "OpenBracket", "CloseBracket" ];

var ruleNames =  [ "data", "representation", "repPair", "reps", "classHigh", 
                   "classLow" ];

function U16To32Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

U16To32Parser.prototype = Object.create(antlr4.Parser.prototype);
U16To32Parser.prototype.constructor = U16To32Parser;

Object.defineProperty(U16To32Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

U16To32Parser.EOF = antlr4.Token.EOF;
U16To32Parser.Rep = 1;
U16To32Parser.RangeHigh = 2;
U16To32Parser.RangeLow = 3;
U16To32Parser.RepHigh = 4;
U16To32Parser.RepLow = 5;
U16To32Parser.OpenBracket = 6;
U16To32Parser.CloseBracket = 7;

U16To32Parser.RULE_data = 0;
U16To32Parser.RULE_representation = 1;
U16To32Parser.RULE_repPair = 2;
U16To32Parser.RULE_reps = 3;
U16To32Parser.RULE_classHigh = 4;
U16To32Parser.RULE_classLow = 5;

function DataContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = U16To32Parser.RULE_data;
    return this;
}

DataContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataContext.prototype.constructor = DataContext;

DataContext.prototype.EOF = function() {
    return this.getToken(U16To32Parser.EOF, 0);
};

DataContext.prototype.representation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RepresentationContext);
    } else {
        return this.getTypedRuleContext(RepresentationContext,i);
    }
};

DataContext.prototype.enterRule = function(listener) {
    if(listener instanceof U16To32Listener ) {
        listener.enterData(this);
	}
};

DataContext.prototype.exitRule = function(listener) {
    if(listener instanceof U16To32Listener ) {
        listener.exitData(this);
	}
};




U16To32Parser.DataContext = DataContext;

U16To32Parser.prototype.data = function() {

    var localctx = new DataContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, U16To32Parser.RULE_data);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 13; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 12;
            this.representation();
            this.state = 15; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << U16To32Parser.Rep) | (1 << U16To32Parser.RepHigh) | (1 << U16To32Parser.OpenBracket))) !== 0));
        this.state = 17;
        this.match(U16To32Parser.EOF);
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

function RepresentationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = U16To32Parser.RULE_representation;
    return this;
}

RepresentationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RepresentationContext.prototype.constructor = RepresentationContext;

RepresentationContext.prototype.reps = function() {
    return this.getTypedRuleContext(RepsContext,0);
};

RepresentationContext.prototype.repPair = function() {
    return this.getTypedRuleContext(RepPairContext,0);
};

RepresentationContext.prototype.Rep = function() {
    return this.getToken(U16To32Parser.Rep, 0);
};

RepresentationContext.prototype.enterRule = function(listener) {
    if(listener instanceof U16To32Listener ) {
        listener.enterRepresentation(this);
	}
};

RepresentationContext.prototype.exitRule = function(listener) {
    if(listener instanceof U16To32Listener ) {
        listener.exitRepresentation(this);
	}
};




U16To32Parser.RepresentationContext = RepresentationContext;

U16To32Parser.prototype.representation = function() {

    var localctx = new RepresentationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, U16To32Parser.RULE_representation);
    try {
        this.state = 22;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case U16To32Parser.OpenBracket:
            this.enterOuterAlt(localctx, 1);
            this.state = 19;
            this.reps();
            break;
        case U16To32Parser.RepHigh:
            this.enterOuterAlt(localctx, 2);
            this.state = 20;
            this.repPair();
            break;
        case U16To32Parser.Rep:
            this.enterOuterAlt(localctx, 3);
            this.state = 21;
            this.match(U16To32Parser.Rep);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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

function RepPairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = U16To32Parser.RULE_repPair;
    return this;
}

RepPairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RepPairContext.prototype.constructor = RepPairContext;

RepPairContext.prototype.RepHigh = function() {
    return this.getToken(U16To32Parser.RepHigh, 0);
};

RepPairContext.prototype.RepLow = function() {
    return this.getToken(U16To32Parser.RepLow, 0);
};

RepPairContext.prototype.enterRule = function(listener) {
    if(listener instanceof U16To32Listener ) {
        listener.enterRepPair(this);
	}
};

RepPairContext.prototype.exitRule = function(listener) {
    if(listener instanceof U16To32Listener ) {
        listener.exitRepPair(this);
	}
};




U16To32Parser.RepPairContext = RepPairContext;

U16To32Parser.prototype.repPair = function() {

    var localctx = new RepPairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, U16To32Parser.RULE_repPair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
        this.match(U16To32Parser.RepHigh);
        this.state = 25;
        this.match(U16To32Parser.RepLow);
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

function RepsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = U16To32Parser.RULE_reps;
    return this;
}

RepsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RepsContext.prototype.constructor = RepsContext;

RepsContext.prototype.classHigh = function() {
    return this.getTypedRuleContext(ClassHighContext,0);
};

RepsContext.prototype.classLow = function() {
    return this.getTypedRuleContext(ClassLowContext,0);
};

RepsContext.prototype.enterRule = function(listener) {
    if(listener instanceof U16To32Listener ) {
        listener.enterReps(this);
	}
};

RepsContext.prototype.exitRule = function(listener) {
    if(listener instanceof U16To32Listener ) {
        listener.exitReps(this);
	}
};




U16To32Parser.RepsContext = RepsContext;

U16To32Parser.prototype.reps = function() {

    var localctx = new RepsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, U16To32Parser.RULE_reps);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 27;
        this.classHigh();
        this.state = 28;
        this.classLow();
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

function ClassHighContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = U16To32Parser.RULE_classHigh;
    return this;
}

ClassHighContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassHighContext.prototype.constructor = ClassHighContext;

ClassHighContext.prototype.OpenBracket = function() {
    return this.getToken(U16To32Parser.OpenBracket, 0);
};

ClassHighContext.prototype.CloseBracket = function() {
    return this.getToken(U16To32Parser.CloseBracket, 0);
};

ClassHighContext.prototype.RangeHigh = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(U16To32Parser.RangeHigh);
    } else {
        return this.getToken(U16To32Parser.RangeHigh, i);
    }
};


ClassHighContext.prototype.RepHigh = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(U16To32Parser.RepHigh);
    } else {
        return this.getToken(U16To32Parser.RepHigh, i);
    }
};


ClassHighContext.prototype.enterRule = function(listener) {
    if(listener instanceof U16To32Listener ) {
        listener.enterClassHigh(this);
	}
};

ClassHighContext.prototype.exitRule = function(listener) {
    if(listener instanceof U16To32Listener ) {
        listener.exitClassHigh(this);
	}
};




U16To32Parser.ClassHighContext = ClassHighContext;

U16To32Parser.prototype.classHigh = function() {

    var localctx = new ClassHighContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, U16To32Parser.RULE_classHigh);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 30;
        this.match(U16To32Parser.OpenBracket);
        this.state = 32; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 31;
            _la = this._input.LA(1);
            if(!(_la===U16To32Parser.RangeHigh || _la===U16To32Parser.RepHigh)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 34; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===U16To32Parser.RangeHigh || _la===U16To32Parser.RepHigh);
        this.state = 36;
        this.match(U16To32Parser.CloseBracket);
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

function ClassLowContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = U16To32Parser.RULE_classLow;
    return this;
}

ClassLowContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassLowContext.prototype.constructor = ClassLowContext;

ClassLowContext.prototype.OpenBracket = function() {
    return this.getToken(U16To32Parser.OpenBracket, 0);
};

ClassLowContext.prototype.CloseBracket = function() {
    return this.getToken(U16To32Parser.CloseBracket, 0);
};

ClassLowContext.prototype.RangeLow = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(U16To32Parser.RangeLow);
    } else {
        return this.getToken(U16To32Parser.RangeLow, i);
    }
};


ClassLowContext.prototype.RepLow = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(U16To32Parser.RepLow);
    } else {
        return this.getToken(U16To32Parser.RepLow, i);
    }
};


ClassLowContext.prototype.enterRule = function(listener) {
    if(listener instanceof U16To32Listener ) {
        listener.enterClassLow(this);
	}
};

ClassLowContext.prototype.exitRule = function(listener) {
    if(listener instanceof U16To32Listener ) {
        listener.exitClassLow(this);
	}
};




U16To32Parser.ClassLowContext = ClassLowContext;

U16To32Parser.prototype.classLow = function() {

    var localctx = new ClassLowContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, U16To32Parser.RULE_classLow);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
        this.match(U16To32Parser.OpenBracket);
        this.state = 40; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 39;
            _la = this._input.LA(1);
            if(!(_la===U16To32Parser.RangeLow || _la===U16To32Parser.RepLow)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 42; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===U16To32Parser.RangeLow || _la===U16To32Parser.RepLow);
        this.state = 44;
        this.match(U16To32Parser.CloseBracket);
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


exports.U16To32Parser = U16To32Parser;
