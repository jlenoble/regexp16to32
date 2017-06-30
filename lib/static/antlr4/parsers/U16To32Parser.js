'use strict';

// Generated from /home/jason/Projets/u16to32/src/static/antlr4/grammars/U16To32.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var U16To32Listener = require('./U16To32Listener').U16To32Listener;
var grammarFileName = "U16To32.g4";

var serializedATN = ['\x03\u608B\uA72A\u8133\uB9ED\u417C\u3BE7\u7786\u5964', '\x03\nN\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04', '\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07\x04\b', '\t\b\x04\t\t\t\x04\n\t\n\x04\x0B\t\x0B\x03\x02\x07\x02', '\x18\n\x02\f\x02\x0E\x02\x1B\x0B\x02\x03\x02\x03', '\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05', '\x03$\n\x03\x03\x04\x06\x04\'\n\x04\r\x04\x0E\x04', '(\x03\x05\x03\x05\x07\x05-\n\x05\f\x05\x0E\x050', '\x0B\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06', '\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x06\b<\n\b\r', '\b\x0E\b=\x03\b\x03\b\x03\t\x03\t\x06\tD\n\t\r\t\x0E\t', 'E\x03\t\x03\t\x03\n\x03\n\x03\x0B\x03\x0B\x03\x0B', '\x02\x02\f\x02\x04\x06\b\n\f\x0E\x10\x12\x14\x02', '\x04\x04\x02\x04\x04\x06\x06\x04\x02\x05\x05\x07', '\x07\x02L\x02\x19\x03\x02\x02\x02\x04#\x03\x02', '\x02\x02\x06&\x03\x02\x02\x02\b*\x03\x02\x02\x02', '\n3\x03\x02\x02\x02\f6\x03\x02\x02\x02\x0E9\x03', '\x02\x02\x02\x10A\x03\x02\x02\x02\x12I\x03\x02', '\x02\x02\x14K\x03\x02\x02\x02\x16\x18\x05\x04', '\x03\x02\x17\x16\x03\x02\x02\x02\x18\x1B\x03\x02', '\x02\x02\x19\x17\x03\x02\x02\x02\x19\x1A\x03\x02', '\x02\x02\x1A\x1C\x03\x02\x02\x02\x1B\x19\x03\x02', '\x02\x02\x1C\x1D\x07\x02\x02\x03\x1D\x03\x03\x02', '\x02\x02\x1E$\x05\f\x07\x02\x1F$\x05\n\x06\x02 ', '$\x07\x03\x02\x02!$\x05\x06\x04\x02"$\x05\b\x05', '\x02#\x1E\x03\x02\x02\x02#\x1F\x03\x02\x02\x02', '# \x03\x02\x02\x02#!\x03\x02\x02\x02#"\x03\x02', '\x02\x02$\x05\x03\x02\x02\x02%\'\x07\n\x02\x02&', '%\x03\x02\x02\x02\'(\x03\x02\x02\x02(&\x03\x02\x02', '\x02()\x03\x02\x02\x02)\x07\x03\x02\x02\x02*.\x07', '\b\x02\x02+-\x05\x04\x03\x02,+\x03\x02\x02\x02-', '0\x03\x02\x02\x02.,\x03\x02\x02\x02./\x03\x02\x02', '\x02/1\x03\x02\x02\x020.\x03\x02\x02\x0212\x07\t', '\x02\x022\t\x03\x02\x02\x0234\x07\x06\x02\x0245', '\x07\x07\x02\x025\x0B\x03\x02\x02\x0267\x05\x0E', '\b\x0278\x05\x10\t\x028\r\x03\x02\x02\x029;\x07\b', '\x02\x02:<\x05\x12\n\x02;:\x03\x02\x02\x02<=\x03', '\x02\x02\x02=;\x03\x02\x02\x02=>\x03\x02\x02\x02', '>?\x03\x02\x02\x02?@\x07\t\x02\x02@\x0F\x03\x02', '\x02\x02AC\x07\b\x02\x02BD\x05\x14\x0B\x02CB\x03', '\x02\x02\x02DE\x03\x02\x02\x02EC\x03\x02\x02\x02', 'EF\x03\x02\x02\x02FG\x03\x02\x02\x02GH\x07\t\x02', '\x02H\x11\x03\x02\x02\x02IJ\t\x02\x02\x02J\x13\x03', '\x02\x02\x02KL\t\x03\x02\x02L\x15\x03\x02\x02\x02', '\b\x19#(.=E'].join("");

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
    return new antlr4.dfa.DFA(ds, index);
});

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [null, null, null, null, null, null, "'['", "']'"];

var symbolicNames = [null, "Rep", "RangeHigh", "RangeLow", "RepHigh", "RepLow", "OpenBracket", "CloseBracket", "DISCARD"];

var ruleNames = ["data", "representation", "anything", "bracketedAnything", "repPair", "reps", "classHigh", "classLow", "patternHigh", "patternLow"];

function U16To32Parser(input) {
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
    get: function get() {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = U16To32Parser.RULE_data;
    return this;
}

DataContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataContext.prototype.constructor = DataContext;

DataContext.prototype.EOF = function () {
    return this.getToken(U16To32Parser.EOF, 0);
};

DataContext.prototype.representation = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(RepresentationContext);
    } else {
        return this.getTypedRuleContext(RepresentationContext, i);
    }
};

DataContext.prototype.enterRule = function (listener) {
    if (listener instanceof U16To32Listener) {
        listener.enterData(this);
    }
};

DataContext.prototype.exitRule = function (listener) {
    if (listener instanceof U16To32Listener) {
        listener.exitData(this);
    }
};

U16To32Parser.DataContext = DataContext;

U16To32Parser.prototype.data = function () {

    var localctx = new DataContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, U16To32Parser.RULE_data);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((_la & ~0x1f) == 0 && (1 << _la & (1 << U16To32Parser.Rep | 1 << U16To32Parser.RepHigh | 1 << U16To32Parser.OpenBracket | 1 << U16To32Parser.DISCARD)) !== 0) {
            this.state = 20;
            this.representation();
            this.state = 25;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 26;
        this.match(U16To32Parser.EOF);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = U16To32Parser.RULE_representation;
    return this;
}

RepresentationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RepresentationContext.prototype.constructor = RepresentationContext;

RepresentationContext.prototype.reps = function () {
    return this.getTypedRuleContext(RepsContext, 0);
};

RepresentationContext.prototype.repPair = function () {
    return this.getTypedRuleContext(RepPairContext, 0);
};

RepresentationContext.prototype.Rep = function () {
    return this.getToken(U16To32Parser.Rep, 0);
};

RepresentationContext.prototype.anything = function () {
    return this.getTypedRuleContext(AnythingContext, 0);
};

RepresentationContext.prototype.bracketedAnything = function () {
    return this.getTypedRuleContext(BracketedAnythingContext, 0);
};

RepresentationContext.prototype.enterRule = function (listener) {
    if (listener instanceof U16To32Listener) {
        listener.enterRepresentation(this);
    }
};

RepresentationContext.prototype.exitRule = function (listener) {
    if (listener instanceof U16To32Listener) {
        listener.exitRepresentation(this);
    }
};

U16To32Parser.RepresentationContext = RepresentationContext;

U16To32Parser.prototype.representation = function () {

    var localctx = new RepresentationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, U16To32Parser.RULE_representation);
    try {
        this.state = 33;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 1, this._ctx);
        switch (la_) {
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
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = U16To32Parser.RULE_anything;
    return this;
}

AnythingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AnythingContext.prototype.constructor = AnythingContext;

AnythingContext.prototype.DISCARD = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(U16To32Parser.DISCARD);
    } else {
        return this.getToken(U16To32Parser.DISCARD, i);
    }
};

AnythingContext.prototype.enterRule = function (listener) {
    if (listener instanceof U16To32Listener) {
        listener.enterAnything(this);
    }
};

AnythingContext.prototype.exitRule = function (listener) {
    if (listener instanceof U16To32Listener) {
        listener.exitAnything(this);
    }
};

U16To32Parser.AnythingContext = AnythingContext;

U16To32Parser.prototype.anything = function () {

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
            _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
        } while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = U16To32Parser.RULE_bracketedAnything;
    return this;
}

BracketedAnythingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BracketedAnythingContext.prototype.constructor = BracketedAnythingContext;

BracketedAnythingContext.prototype.OpenBracket = function () {
    return this.getToken(U16To32Parser.OpenBracket, 0);
};

BracketedAnythingContext.prototype.CloseBracket = function () {
    return this.getToken(U16To32Parser.CloseBracket, 0);
};

BracketedAnythingContext.prototype.representation = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(RepresentationContext);
    } else {
        return this.getTypedRuleContext(RepresentationContext, i);
    }
};

BracketedAnythingContext.prototype.enterRule = function (listener) {
    if (listener instanceof U16To32Listener) {
        listener.enterBracketedAnything(this);
    }
};

BracketedAnythingContext.prototype.exitRule = function (listener) {
    if (listener instanceof U16To32Listener) {
        listener.exitBracketedAnything(this);
    }
};

U16To32Parser.BracketedAnythingContext = BracketedAnythingContext;

U16To32Parser.prototype.bracketedAnything = function () {

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
        while ((_la & ~0x1f) == 0 && (1 << _la & (1 << U16To32Parser.Rep | 1 << U16To32Parser.RepHigh | 1 << U16To32Parser.OpenBracket | 1 << U16To32Parser.DISCARD)) !== 0) {
            this.state = 41;
            this.representation();
            this.state = 46;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 47;
        this.match(U16To32Parser.CloseBracket);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = U16To32Parser.RULE_repPair;
    return this;
}

RepPairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RepPairContext.prototype.constructor = RepPairContext;

RepPairContext.prototype.RepHigh = function () {
    return this.getToken(U16To32Parser.RepHigh, 0);
};

RepPairContext.prototype.RepLow = function () {
    return this.getToken(U16To32Parser.RepLow, 0);
};

RepPairContext.prototype.enterRule = function (listener) {
    if (listener instanceof U16To32Listener) {
        listener.enterRepPair(this);
    }
};

RepPairContext.prototype.exitRule = function (listener) {
    if (listener instanceof U16To32Listener) {
        listener.exitRepPair(this);
    }
};

U16To32Parser.RepPairContext = RepPairContext;

U16To32Parser.prototype.repPair = function () {

    var localctx = new RepPairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, U16To32Parser.RULE_repPair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this.match(U16To32Parser.RepHigh);
        this.state = 50;
        this.match(U16To32Parser.RepLow);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = U16To32Parser.RULE_reps;
    return this;
}

RepsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RepsContext.prototype.constructor = RepsContext;

RepsContext.prototype.classHigh = function () {
    return this.getTypedRuleContext(ClassHighContext, 0);
};

RepsContext.prototype.classLow = function () {
    return this.getTypedRuleContext(ClassLowContext, 0);
};

RepsContext.prototype.enterRule = function (listener) {
    if (listener instanceof U16To32Listener) {
        listener.enterReps(this);
    }
};

RepsContext.prototype.exitRule = function (listener) {
    if (listener instanceof U16To32Listener) {
        listener.exitReps(this);
    }
};

U16To32Parser.RepsContext = RepsContext;

U16To32Parser.prototype.reps = function () {

    var localctx = new RepsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, U16To32Parser.RULE_reps);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
        this.classHigh();
        this.state = 53;
        this.classLow();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = U16To32Parser.RULE_classHigh;
    return this;
}

ClassHighContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassHighContext.prototype.constructor = ClassHighContext;

ClassHighContext.prototype.OpenBracket = function () {
    return this.getToken(U16To32Parser.OpenBracket, 0);
};

ClassHighContext.prototype.CloseBracket = function () {
    return this.getToken(U16To32Parser.CloseBracket, 0);
};

ClassHighContext.prototype.patternHigh = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(PatternHighContext);
    } else {
        return this.getTypedRuleContext(PatternHighContext, i);
    }
};

ClassHighContext.prototype.enterRule = function (listener) {
    if (listener instanceof U16To32Listener) {
        listener.enterClassHigh(this);
    }
};

ClassHighContext.prototype.exitRule = function (listener) {
    if (listener instanceof U16To32Listener) {
        listener.exitClassHigh(this);
    }
};

U16To32Parser.ClassHighContext = ClassHighContext;

U16To32Parser.prototype.classHigh = function () {

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
        } while (_la === U16To32Parser.RangeHigh || _la === U16To32Parser.RepHigh);
        this.state = 61;
        this.match(U16To32Parser.CloseBracket);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = U16To32Parser.RULE_classLow;
    return this;
}

ClassLowContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassLowContext.prototype.constructor = ClassLowContext;

ClassLowContext.prototype.OpenBracket = function () {
    return this.getToken(U16To32Parser.OpenBracket, 0);
};

ClassLowContext.prototype.CloseBracket = function () {
    return this.getToken(U16To32Parser.CloseBracket, 0);
};

ClassLowContext.prototype.patternLow = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(PatternLowContext);
    } else {
        return this.getTypedRuleContext(PatternLowContext, i);
    }
};

ClassLowContext.prototype.enterRule = function (listener) {
    if (listener instanceof U16To32Listener) {
        listener.enterClassLow(this);
    }
};

ClassLowContext.prototype.exitRule = function (listener) {
    if (listener instanceof U16To32Listener) {
        listener.exitClassLow(this);
    }
};

U16To32Parser.ClassLowContext = ClassLowContext;

U16To32Parser.prototype.classLow = function () {

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
        } while (_la === U16To32Parser.RangeLow || _la === U16To32Parser.RepLow);
        this.state = 69;
        this.match(U16To32Parser.CloseBracket);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = U16To32Parser.RULE_patternHigh;
    return this;
}

PatternHighContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PatternHighContext.prototype.constructor = PatternHighContext;

PatternHighContext.prototype.RangeHigh = function () {
    return this.getToken(U16To32Parser.RangeHigh, 0);
};

PatternHighContext.prototype.RepHigh = function () {
    return this.getToken(U16To32Parser.RepHigh, 0);
};

PatternHighContext.prototype.enterRule = function (listener) {
    if (listener instanceof U16To32Listener) {
        listener.enterPatternHigh(this);
    }
};

PatternHighContext.prototype.exitRule = function (listener) {
    if (listener instanceof U16To32Listener) {
        listener.exitPatternHigh(this);
    }
};

U16To32Parser.PatternHighContext = PatternHighContext;

U16To32Parser.prototype.patternHigh = function () {

    var localctx = new PatternHighContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, U16To32Parser.RULE_patternHigh);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        _la = this._input.LA(1);
        if (!(_la === U16To32Parser.RangeHigh || _la === U16To32Parser.RepHigh)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = U16To32Parser.RULE_patternLow;
    return this;
}

PatternLowContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PatternLowContext.prototype.constructor = PatternLowContext;

PatternLowContext.prototype.RangeLow = function () {
    return this.getToken(U16To32Parser.RangeLow, 0);
};

PatternLowContext.prototype.RepLow = function () {
    return this.getToken(U16To32Parser.RepLow, 0);
};

PatternLowContext.prototype.enterRule = function (listener) {
    if (listener instanceof U16To32Listener) {
        listener.enterPatternLow(this);
    }
};

PatternLowContext.prototype.exitRule = function (listener) {
    if (listener instanceof U16To32Listener) {
        listener.exitPatternLow(this);
    }
};

U16To32Parser.PatternLowContext = PatternLowContext;

U16To32Parser.prototype.patternLow = function () {

    var localctx = new PatternLowContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, U16To32Parser.RULE_patternLow);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 73;
        _la = this._input.LA(1);
        if (!(_la === U16To32Parser.RangeLow || _la === U16To32Parser.RepLow)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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