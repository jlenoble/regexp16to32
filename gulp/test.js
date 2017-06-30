import gulp from 'gulp';
import mocha from 'gulp-mocha';
import './build';
import './parse';

const testGlob = [
  'build/test/**/*.test.js'
];

export const test = () => {
  return gulp.src(testGlob)
    .pipe(mocha());
};

gulp.task('test', gulp.series(gulp.parallel('parse', 'build'), test));
