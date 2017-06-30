import gulp from 'gulp';
import mocha from 'gulp-mocha';
import './build';
import {makeParser} from './parse';
 
const testGlob = [
  'build/test/**/*.test.js',
];

export const test = () => {
  return gulp.src(testGlob)
    .pipe(mocha());
};

export const debug = () => {
  return gulp.src(testGlob)
    .pipe(mocha({
      inspectBrk: true,
    }));
};

gulp.task('test', gulp.series(makeParser, 'build', test));

gulp.task('debug', gulp.series(makeParser, 'build', debug));
