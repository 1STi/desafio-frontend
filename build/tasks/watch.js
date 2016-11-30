const gulp = require('gulp');

gulp.task('watch', () => {
  gulp.watch('./src/css/**/*.styl', ['build-css']);
  gulp.watch('./src/js/main.js', ['build-js']);
});
