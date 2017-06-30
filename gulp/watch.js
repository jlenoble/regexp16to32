import gulp from 'gulp';
import {build} from './build';
import {test} from './test';
import {makeParser, parse} from './parse';

const allSrcGlob = [
  'src/**/*.js',
  'test/**/*.js',
  '!src/static/antlr4/parsers/**/*.js'
];
const allBuildGlob = [
  'build/src/**/*.js',
  'build/test/**/*.js'
];
const grammarGlob = [
  'src/static/antlr4/grammars/**/*.g4',
  'build/src/static/antlr4/Translator.js'
];
const dataGlob = [
  'src/static/data/**/*.*',
  'src/static/antlr4/parsers/U16To32Parser.js'
];

export const watch = done => {
  gulp.watch(allSrcGlob, build);
  gulp.watch(allBuildGlob, test);
  gulp.watch(grammarGlob, makeParser);
  gulp.watch(dataGlob, parse);
  done();
};

gulp.task('watch', watch);
