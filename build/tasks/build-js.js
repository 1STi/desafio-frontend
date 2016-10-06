const gulp = require('gulp'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify');

gulp.task('build-js', () => {
  return gulp.src('./src/js/main.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/js/'));
});
