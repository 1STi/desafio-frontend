const gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  rename = require('gulp-rename');

gulp.task('build-css', () => {
  return gulp.src('./src/css/style.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/css/'));
});
