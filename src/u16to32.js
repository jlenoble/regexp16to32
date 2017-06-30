import gulp from 'gulp';
import antlr4 from 'gulp-antlr4';
import path from 'path';

const base = process.cwd();
const parserDir = path.join(base, 'src/static/antlr4/parsers');
const grammar = 'U16To32';
const rule = 'data';
const listener = 'Translator';
const listenerDir = path.join(__dirname, 'static/antlr4');

export default function u16to32 (dataGlob) {
  return gulp.src(dataGlob)
    .pipe(antlr4({
      grammar, parserDir, listener, listenerDir, rule,
    }));
}
