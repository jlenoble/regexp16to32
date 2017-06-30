'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Translator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base = process.cwd();
var rel = _path2.default.relative(base, 'src/static/antlr4/parsers');

var _require = require(_path2.default.join(base, rel, 'U16To32Listener')),
    U16To32Listener = _require.U16To32Listener;

var convert = function convert(uHigh, uLow) {
  var high = parseInt(uHigh.replace('\\u', '0x'), 16);
  var low = parseInt(uLow.replace('\\u', '0x'), 16);

  return '\\u{' + (1024 * high + low - 56613888).toString(16) + '}';
};

var write = process.stdout.write.bind(process.stdout);

var Translator = exports.Translator = function (_U16To32Listener) {
  _inherits(Translator, _U16To32Listener);

  function Translator() {
    _classCallCheck(this, Translator);

    return _possibleConstructorReturn(this, (Translator.__proto__ || Object.getPrototypeOf(Translator)).apply(this, arguments));
  }

  _createClass(Translator, [{
    key: 'enterRepresentation',
    value: function enterRepresentation(ctx) {
      if (ctx.Rep()) {
        // eslint-disable-line new-cap
        write(ctx.getText().toLowerCase());
      } else if (ctx.anything()) {
        write(ctx.getText());
      }
    }
  }, {
    key: 'enterRepPair',
    value: function enterRepPair(ctx) {
      write(convert(ctx.RepHigh().getText(), // eslint-disable-line new-cap
      ctx.RepLow().getText() // eslint-disable-line new-cap
      ));
    }
  }, {
    key: 'enterReps',
    value: function enterReps(ctx) {
      var highs = ctx.classHigh().patternHigh().map(function (pat) {
        return pat.getText().split('-');
      });
      var lows = ctx.classLow().patternLow().map(function (pat) {
        return pat.getText().split('-');
      });
      var ranges = [];

      highs.forEach(function (high) {
        lows.forEach(function (low) {
          var range = '';

          if (high.length === 1) {
            low.forEach(function (lo) {
              if (range) {
                range += '-';
              }
              range += convert(high[0], lo);
            });
          } else {
            if (low[0].toLowerCase() === '\\udc00' && low[1].toLowerCase() === '\\udfff') {
              range = convert(high[0], '\\udc00') + '-' + convert(high[1], '\\udfff');
            }
          }

          ranges.push(range);
        });
      });

      write('[' + ranges.join('') + ']');
    }
  }, {
    key: 'enterBracketedAnything',
    value: function enterBracketedAnything() {
      write('[');
    }
  }, {
    key: 'exitBracketedAnything',
    value: function exitBracketedAnything() {
      write(']');
    }
  }]);

  return Translator;
}(U16To32Listener);