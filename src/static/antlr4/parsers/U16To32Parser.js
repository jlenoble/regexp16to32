// Generated from /home/jason/Projets/u16to32/src/static/antlr4/grammars/U16To32.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var U16To32Listener = require('./U16To32Listener').U16To32Listener;
var grammarFileName = "U16To32.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\nN\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0007\u0002",
    "\u0018\n\u0002\f\u0002\u000e\u0002\u001b\u000b\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u0003$\n\u0003\u0003\u0004\u0006\u0004\'\n\u0004\r\u0004\u000e\u0004",
    "(\u0003\u0005\u0003\u0005\u0007\u0005-\n\u0005\f\u0005\u000e\u00050",
    "\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0006\b<\n\b\r",
    "\b\u000e\b=\u0003\b\u0003\b\u0003\t\u0003\t\u0006\tD\n\t\r\t\u000e\t",
    "E\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0002\u0002\f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0002",
    "\u0004\u0004\u0002\u0004\u0004\u0006\u0006\u0004\u0002\u0005\u0005\u0007",
    "\u0007\u0002L\u0002\u0019\u0003\u0002\u0002\u0002\u0004#\u0003\u0002",
    "\u0002\u0002\u0006&\u0003\u0002\u0002\u0002\b*\u0003\u0002\u0002\u0002",
    "\n3\u0003\u0002\u0002\u0002\f6\u0003\u0002\u0002\u0002\u000e9\u0003",
    "\u0002\u0002\u0002\u0010A\u0003\u0002\u0002\u0002\u0012I\u0003\u0002",
    "\u0002\u0002\u0014K\u0003\u0002\u0002\u0002\u0016\u0018\u0005\u0004",
    "\u0003\u0002\u0017\u0016\u0003\u0002\u0002\u0002\u0018\u001b\u0003\u0002",
    "\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u0019\u001a\u0003\u0002",
    "\u0002\u0002\u001a\u001c\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002",
    "\u0002\u0002\u001c\u001d\u0007\u0002\u0002\u0003\u001d\u0003\u0003\u0002",
    "\u0002\u0002\u001e$\u0005\f\u0007\u0002\u001f$\u0005\n\u0006\u0002 ",
    "$\u0007\u0003\u0002\u0002!$\u0005\u0006\u0004\u0002\"$\u0005\b\u0005",
    "\u0002#\u001e\u0003\u0002\u0002\u0002#\u001f\u0003\u0002\u0002\u0002",
    "# \u0003\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002#\"\u0003\u0002",
    "\u0002\u0002$\u0005\u0003\u0002\u0002\u0002%\'\u0007\n\u0002\u0002&",
    "%\u0003\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002(&\u0003\u0002\u0002",
    "\u0002()\u0003\u0002\u0002\u0002)\u0007\u0003\u0002\u0002\u0002*.\u0007",
    "\b\u0002\u0002+-\u0005\u0004\u0003\u0002,+\u0003\u0002\u0002\u0002-",
    "0\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002./\u0003\u0002\u0002",
    "\u0002/1\u0003\u0002\u0002\u00020.\u0003\u0002\u0002\u000212\u0007\t",
    "\u0002\u00022\t\u0003\u0002\u0002\u000234\u0007\u0006\u0002\u000245",
    "\u0007\u0007\u0002\u00025\u000b\u0003\u0002\u0002\u000267\u0005\u000e",
    "\b\u000278\u0005\u0010\t\u00028\r\u0003\u0002\u0002\u00029;\u0007\b",
    "\u0002\u0002:<\u0005\u0012\n\u0002;:\u0003\u0002\u0002\u0002<=\u0003",
    "\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002=>\u0003\u0002\u0002\u0002",
    ">?\u0003\u0002\u0002\u0002?@\u0007\t\u0002\u0002@\u000f\u0003\u0002",
    "\u0002\u0002AC\u0007\b\u0002\u0002BD\u0005\u0014\u000b\u0002CB\u0003",
    "\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002\u0002",
    "EF\u0003\u0002\u0002\u0002FG\u0003\u0002\u0002\u0002GH\u0007\t\u0002",
    "\u0002H\u0011\u0003\u0002\u0002\u0002IJ\t\u0002\u0002\u0002J\u0013\u0003",
    "\u0002\u0002\u0002KL\t\u0003\u0002\u0002L\u0015\u0003\u0002\u0002\u0002",
    "\b\u0019#(.=E"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, "'['", "']'" ];

var symbolicNames = [ null, "Rep", "RangeHigh", "RangeLow", "RepHigh", "RepLow", 
                      "OpenBracket", "CloseBracket", "DISCARD" ];

var ruleNames =  [ "data", "representation", "anything", "bracketedAnything", 
                   "repPair", "reps", "classHigh", "classLow", "patternHigh", 
                   "patternLow" ];

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
U16To32Parser.DISCARD = 8;

U16To32Parser.RULE_data = 0;
U16To32Parser.RULE_representation = 1;
U16To32Parser.RULE_anything = 2;
U16To32Parser.RULE_bracketedAnything = 3;
U16To32Parser.RULE_repPair = 4;
U16To32Parser.RULE_reps = 5;
U16To32Parser.RULE_classHigh = 6;
U16To32Parser.RULE_classLow = 7;
U16To32Parser.RULE_patternHigh = 8;
U16To32Parser.RULE_patternLow = 9;

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
        this.state = 23;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << U16To32Parser.Rep) | (1 << U16To32Parser.RepHigh) | (1 << U16To32Parser.OpenBracket) | (1 << U16To32Parser.DISCARD))) !== 0)) {
            this.state = 20;
            this.representation();
            this.state = 25;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 26;
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

RepresentationContext.prototype.anything = function() {
    return this.getTypedRuleContext(AnythingContext,0);
};

RepresentationContext.prototype.bracketedAnything = function() {
    return this.getTypedRuleContext(BracketedAnythingContext,0);
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
        this.state = 33;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 28;
            this.reps();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 29;
            this.repPair();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 30;
            this.match(U16To32Parser.Rep);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 31;
            this.anything();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 32;
            this.bracketedAnything();
            break;

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

function AnythingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = U16To32Parser.RULE_anything;
    return this;
}

AnythingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AnythingContext.prototype.constructor = AnythingContext;

AnythingContext.prototype.DISCARD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(U16To32Parser.DISCARD);
    } else {
        return this.getToken(U16To32Parser.DISCARD, i);
    }
};


AnythingContext.prototype.enterRule = function(listener) {
    if(listener instanceof U16To32Listener ) {
        listener.enterAnything(this);
	}
};

AnythingContext.prototype.exitRule = function(listener) {
    if(listener instanceof U16To32Listener ) {
        listener.exitAnything(this);
	}
};




U16To32Parser.AnythingContext = AnythingContext;

U16To32Parser.prototype.anything = function() {

    var localctx = new AnythingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, U16To32Parser.RULE_anything);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 36; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 35;
        		this.match(U16To32Parser.DISCARD);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 38; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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

function BracketedAnythingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = U16To32Parser.RULE_bracketedAnything;
    return this;
}

BracketedAnythingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BracketedAnythingContext.prototype.constructor = BracketedAnythingContext;

BracketedAnythingContext.prototype.OpenBracket = function() {
    return this.getToken(U16To32Parser.OpenBracket, 0);
};

BracketedAnythingContext.prototype.CloseBracket = function() {
    return this.getToken(U16To32Parser.CloseBracket, 0);
};

BracketedAnythingContext.prototype.representation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RepresentationContext);
    } else {
        return this.getTypedRuleContext(RepresentationContext,i);
    }
};

BracketedAnythingContext.prototype.enterRule = function(listener) {
    if(listener instanceof U16To32Listener ) {
        listener.enterBracketedAnything(this);
	}
};

BracketedAnythingContext.prototype.exitRule = function(listener) {
    if(listener instanceof U16To32Listener ) {
        listener.exitBracketedAnything(this);
	}
};




U16To32Parser.BracketedAnythingContext = BracketedAnythingContext;

U16To32Parser.prototype.bracketedAnything = function() {

    var localctx = new BracketedAnythingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, U16To32Parser.RULE_bracketedAnything);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 40;
        this.match(U16To32Parser.OpenBracket);
        this.state = 44;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << U16To32Parser.Rep) | (1 << U16To32Parser.RepHigh) | (1 << U16To32Parser.OpenBracket) | (1 << U16To32Parser.DISCARD))) !== 0)) {
            this.state = 41;
            this.representation();
            this.state = 46;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 47;
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
    this.enterRule(localctx, 8, U16To32Parser.RULE_repPair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this.match(U16To32Parser.RepHigh);
        this.state = 50;
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
    this.enterRule(localctx, 10, U16To32Parser.RULE_reps);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
        this.classHigh();
        this.state = 53;
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

ClassHighContext.prototype.patternHigh = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PatternHighContext);
    } else {
        return this.getTypedRuleContext(PatternHighContext,i);
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
    this.enterRule(localctx, 12, U16To32Parser.RULE_classHigh);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 55;
        this.match(U16To32Parser.OpenBracket);
        this.state = 57; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 56;
            this.patternHigh();
            this.state = 59; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===U16To32Parser.RangeHigh || _la===U16To32Parser.RepHigh);
        this.state = 61;
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

ClassLowContext.prototype.patternLow = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PatternLowContext);
    } else {
        return this.getTypedRuleContext(PatternLowContext,i);
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
    this.enterRule(localctx, 14, U16To32Parser.RULE_classLow);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        this.match(U16To32Parser.OpenBracket);
        this.state = 65; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 64;
            this.patternLow();
            this.state = 67; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===U16To32Parser.RangeLow || _la===U16To32Parser.RepLow);
        this.state = 69;
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

function PatternHighContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = U16To32Parser.RULE_patternHigh;
    return this;
}

PatternHighContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PatternHighContext.prototype.constructor = PatternHighContext;

PatternHighContext.prototype.RangeHigh = function() {
    return this.getToken(U16To32Parser.RangeHigh, 0);
};

PatternHighContext.prototype.RepHigh = function() {
    return this.getToken(U16To32Parser.RepHigh, 0);
};

PatternHighContext.prototype.enterRule = function(listener) {
    if(listener instanceof U16To32Listener ) {
        listener.enterPatternHigh(this);
	}
};

PatternHighContext.prototype.exitRule = function(listener) {
    if(listener instanceof U16To32Listener ) {
        listener.exitPatternHigh(this);
	}
};




U16To32Parser.PatternHighContext = PatternHighContext;

U16To32Parser.prototype.patternHigh = function() {

    var localctx = new PatternHighContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, U16To32Parser.RULE_patternHigh);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        _la = this._input.LA(1);
        if(!(_la===U16To32Parser.RangeHigh || _la===U16To32Parser.RepHigh)) {
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

function PatternLowContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = U16To32Parser.RULE_patternLow;
    return this;
}

PatternLowContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PatternLowContext.prototype.constructor = PatternLowContext;

PatternLowContext.prototype.RangeLow = function() {
    return this.getToken(U16To32Parser.RangeLow, 0);
};

PatternLowContext.prototype.RepLow = function() {
    return this.getToken(U16To32Parser.RepLow, 0);
};

PatternLowContext.prototype.enterRule = function(listener) {
    if(listener instanceof U16To32Listener ) {
        listener.enterPatternLow(this);
	}
};

PatternLowContext.prototype.exitRule = function(listener) {
    if(listener instanceof U16To32Listener ) {
        listener.exitPatternLow(this);
	}
};




U16To32Parser.PatternLowContext = PatternLowContext;

U16To32Parser.prototype.patternLow = function() {

    var localctx = new PatternLowContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, U16To32Parser.RULE_patternLow);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 73;
        _la = this._input.LA(1);
        if(!(_la===U16To32Parser.RangeLow || _la===U16To32Parser.RepLow)) {
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


exports.U16To32Parser = U16To32Parser;
