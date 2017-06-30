import gulp from 'gulp';
import antlr4 from 'gulp-antlr4';

const grammarGlob = [
  'src/static/antlr4/grammars/**/*.g4',
];
const parserDir = 'src/static/antlr4/parsers';
const dataGlob = [
  'src/static/data/**/*.*',
];
const grammar = 'U16To32';
const rule = 'data';
const listener = 'Translator';
const listenerDir = 'src/static/antlr4';

export const makeParser = () => {
  if (require && require.cache) {
    // Remove parser files from Babel cache
    Object.keys(require.cache).filter(key => {
      return key.includes(parserDir) ||
        key.includes(listenerDir);
    }).forEach(key => {
      delete require.cache[key];
    });
  }

  return gulp.src(grammarGlob)
    .pipe(antlr4({
      'listener': true,
      'parserDir': 'src/static/antlr4/parsers',
      'visitor': false,
    }));
};

export const translate = () => {
  return gulp.src(dataGlob)
    .pipe(antlr4({
      grammar, parserDir, listener, listenerDir, rule,
    }));
};

gulp.task('translate', gulp.series(makeParser, translate));

export const parse = translate;

gulp.task('parse', gulp.series(makeParser, translate));

