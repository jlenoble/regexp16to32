// Generated from /home/jason/Projets/u16to32/src/static/antlr4/grammars/U16To32.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\tO\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u00079\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e",
    "\u0002\u0002\u000f\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b",
    "\u0007\r\u0002\u000f\u0002\u0011\u0002\u0013\u0002\u0015\u0002\u0017",
    "\b\u0019\t\u001b\u0002\u0003\u0002\u0007\u0004\u0002FFff\u0003\u0002",
    "29\u0005\u0002:;CDcd\u0004\u0002EHeh\u0005\u00022;CHch\u0002I\u0002",
    "\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002",
    "\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002",
    "\u000b\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002",
    "\u0019\u0003\u0002\u0002\u0002\u0003\u001d\u0003\u0002\u0002\u0002\u0005",
    " \u0003\u0002\u0002\u0002\u0007$\u0003\u0002\u0002\u0002\t(\u0003\u0002",
    "\u0002\u0002\u000b+\u0003\u0002\u0002\u0002\r8\u0003\u0002\u0002\u0002",
    "\u000f:\u0003\u0002\u0002\u0002\u0011?\u0003\u0002\u0002\u0002\u0013",
    "D\u0003\u0002\u0002\u0002\u0015G\u0003\u0002\u0002\u0002\u0017I\u0003",
    "\u0002\u0002\u0002\u0019K\u0003\u0002\u0002\u0002\u001bM\u0003\u0002",
    "\u0002\u0002\u001d\u001e\u0005\u0013\n\u0002\u001e\u001f\u0005\r\u0007",
    "\u0002\u001f\u0004\u0003\u0002\u0002\u0002 !\u0005\t\u0005\u0002!\"",
    "\u0005\u0015\u000b\u0002\"#\u0005\t\u0005\u0002#\u0006\u0003\u0002\u0002",
    "\u0002$%\u0005\u000b\u0006\u0002%&\u0005\u0015\u000b\u0002&\'\u0005",
    "\u000b\u0006\u0002\'\b\u0003\u0002\u0002\u0002()\u0005\u0013\n\u0002",
    ")*\u0005\u000f\b\u0002*\n\u0003\u0002\u0002\u0002+,\u0005\u0013\n\u0002",
    ",-\u0005\u0011\t\u0002-\f\u0003\u0002\u0002\u0002./\n\u0002\u0002\u0002",
    "/0\u0005\u001b\u000e\u000201\u0005\u001b\u000e\u000212\u0005\u001b\u000e",
    "\u000229\u0003\u0002\u0002\u000234\t\u0002\u0002\u000245\t\u0003\u0002",
    "\u000256\u0005\u001b\u000e\u000267\u0005\u001b\u000e\u000279\u0003\u0002",
    "\u0002\u00028.\u0003\u0002\u0002\u000283\u0003\u0002\u0002\u00029\u000e",
    "\u0003\u0002\u0002\u0002:;\t\u0002\u0002\u0002;<\t\u0004\u0002\u0002",
    "<=\u0005\u001b\u000e\u0002=>\u0005\u001b\u000e\u0002>\u0010\u0003\u0002",
    "\u0002\u0002?@\t\u0002\u0002\u0002@A\t\u0005\u0002\u0002AB\u0005\u001b",
    "\u000e\u0002BC\u0005\u001b\u000e\u0002C\u0012\u0003\u0002\u0002\u0002",
    "DE\u0007^\u0002\u0002EF\u0007w\u0002\u0002F\u0014\u0003\u0002\u0002",
    "\u0002GH\u0007/\u0002\u0002H\u0016\u0003\u0002\u0002\u0002IJ\u0007]",
    "\u0002\u0002J\u0018\u0003\u0002\u0002\u0002KL\u0007_\u0002\u0002L\u001a",
    "\u0003\u0002\u0002\u0002MN\t\u0006\u0002\u0002N\u001c\u0003\u0002\u0002",
    "\u0002\u0004\u00028\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function U16To32Lexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

U16To32Lexer.prototype = Object.create(antlr4.Lexer.prototype);
U16To32Lexer.prototype.constructor = U16To32Lexer;

U16To32Lexer.EOF = antlr4.Token.EOF;
U16To32Lexer.Rep = 1;
U16To32Lexer.RangeHigh = 2;
U16To32Lexer.RangeLow = 3;
U16To32Lexer.RepHigh = 4;
U16To32Lexer.RepLow = 5;
U16To32Lexer.OpenBracket = 6;
U16To32Lexer.CloseBracket = 7;

U16To32Lexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

U16To32Lexer.prototype.modeNames = [ "DEFAULT_MODE" ];

U16To32Lexer.prototype.literalNames = [ null, null, null, null, null, null, 
                                        "'['", "']'" ];

U16To32Lexer.prototype.symbolicNames = [ null, "Rep", "RangeHigh", "RangeLow", 
                                         "RepHigh", "RepLow", "OpenBracket", 
                                         "CloseBracket" ];

U16To32Lexer.prototype.ruleNames = [ "Rep", "RangeHigh", "RangeLow", "RepHigh", 
                                     "RepLow", "CodePointAsCodeUnit", "HighSurrogate", 
                                     "LowSurrogate", "EscapeU", "Dash", 
                                     "OpenBracket", "CloseBracket", "HexDigit" ];

U16To32Lexer.prototype.grammarFileName = "U16To32.g4";



exports.U16To32Lexer = U16To32Lexer;

