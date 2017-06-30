'use strict';

// Generated from /home/jason/Projets/u16to32/src/static/antlr4/grammars/U16To32.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by U16To32Parser.
function U16To32Listener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

U16To32Listener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
U16To32Listener.prototype.constructor = U16To32Listener;

// Enter a parse tree produced by U16To32Parser#data.
U16To32Listener.prototype.enterData = function (ctx) {};

// Exit a parse tree produced by U16To32Parser#data.
U16To32Listener.prototype.exitData = function (ctx) {};

// Enter a parse tree produced by U16To32Parser#representation.
U16To32Listener.prototype.enterRepresentation = function (ctx) {};

// Exit a parse tree produced by U16To32Parser#representation.
U16To32Listener.prototype.exitRepresentation = function (ctx) {};

// Enter a parse tree produced by U16To32Parser#anything.
U16To32Listener.prototype.enterAnything = function (ctx) {};

// Exit a parse tree produced by U16To32Parser#anything.
U16To32Listener.prototype.exitAnything = function (ctx) {};

// Enter a parse tree produced by U16To32Parser#bracketedAnything.
U16To32Listener.prototype.enterBracketedAnything = function (ctx) {};

// Exit a parse tree produced by U16To32Parser#bracketedAnything.
U16To32Listener.prototype.exitBracketedAnything = function (ctx) {};

// Enter a parse tree produced by U16To32Parser#repPair.
U16To32Listener.prototype.enterRepPair = function (ctx) {};

// Exit a parse tree produced by U16To32Parser#repPair.
U16To32Listener.prototype.exitRepPair = function (ctx) {};

// Enter a parse tree produced by U16To32Parser#reps.
U16To32Listener.prototype.enterReps = function (ctx) {};

// Exit a parse tree produced by U16To32Parser#reps.
U16To32Listener.prototype.exitReps = function (ctx) {};

// Enter a parse tree produced by U16To32Parser#classHigh.
U16To32Listener.prototype.enterClassHigh = function (ctx) {};

// Exit a parse tree produced by U16To32Parser#classHigh.
U16To32Listener.prototype.exitClassHigh = function (ctx) {};

// Enter a parse tree produced by U16To32Parser#classLow.
U16To32Listener.prototype.enterClassLow = function (ctx) {};

// Exit a parse tree produced by U16To32Parser#classLow.
U16To32Listener.prototype.exitClassLow = function (ctx) {};

// Enter a parse tree produced by U16To32Parser#patternHigh.
U16To32Listener.prototype.enterPatternHigh = function (ctx) {};

// Exit a parse tree produced by U16To32Parser#patternHigh.
U16To32Listener.prototype.exitPatternHigh = function (ctx) {};

// Enter a parse tree produced by U16To32Parser#patternLow.
U16To32Listener.prototype.enterPatternLow = function (ctx) {};

// Exit a parse tree produced by U16To32Parser#patternLow.
U16To32Listener.prototype.exitPatternLow = function (ctx) {};

exports.U16To32Listener = U16To32Listener;