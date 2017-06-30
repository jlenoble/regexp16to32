import path from 'path';

const base = process.cwd();
const rel = path.relative(base, 'src/static/antlr4/parsers');
const {U16To32Listener} = require(path.join(base, rel, 'U16To32Listener'));

const convert = (uHigh, uLow) => {
  const high = parseInt(uHigh.replace('\\u', '0x'), 16);
  const low = parseInt(uLow.replace('\\u', '0x'), 16);

  return '\\u{' + (1024 * high + low - 56613888).toString(16) + '}';
};

const write = process.stdout.write.bind(process.stdout);

export class Translator extends U16To32Listener {
  enterRepresentation (ctx) {
    if (ctx.Rep()) { // eslint-disable-line new-cap
      write(ctx.getText().toLowerCase());
    } else if (ctx.anything()) {
      write(ctx.getText());
    }
  }

  enterRepPair (ctx) {
    console.log(ctx.getText())
    write(convert(
      ctx.RepHigh().getText(), // eslint-disable-line new-cap
      ctx.RepLow().getText() // eslint-disable-line new-cap
    ));
  }

  enterReps (ctx) {
    const highs = ctx.classHigh().patternHigh()
      .map(pat => pat.getText().split('-'));
    const lows = ctx.classLow().patternLow()
      .map(pat => pat.getText().split('-'));
    const ranges = [];

    highs.forEach(high => {
      lows.forEach(low => {
        let range = '';

        if (high.length === 1) {
          low.forEach(lo => {
            if (range) {
              range += '-';
            }
            range += convert(high[0], lo);
          });
        } else {
          if (low[0].toLowerCase() === '\\udc00' &&
            low[1].toLowerCase() === '\\udfff') {
            range = convert(high[0], '\\udc00') + '-' +
              convert(high[1], '\\udfff');
          }
        }

        ranges.push(range);
      });
    });

    write('[' + ranges.join('') + ']');
  }

  enterBracketedAnything () {
    write('[');
  }

  exitBracketedAnything () {
    write(']');
  }
}
