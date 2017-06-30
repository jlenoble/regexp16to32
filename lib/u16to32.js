'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = u16to32;

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpAntlr = require('gulp-antlr4');

var _gulpAntlr2 = _interopRequireDefault(_gulpAntlr);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var base = process.cwd();
var parserDir = _path2.default.join(base, 'src/static/antlr4/parsers');
var grammar = 'U16To32';
var rule = 'data';
var listener = 'Translator';
var listenerDir = _path2.default.join(__dirname, 'static/antlr4');

function u16to32(dataGlob) {
  return _gulp2.default.src(dataGlob).pipe((0, _gulpAntlr2.default)({
    grammar: grammar, parserDir: parserDir, listener: listener, listenerDir: listenerDir, rule: rule
  }));
}
module.exports = exports['default'];