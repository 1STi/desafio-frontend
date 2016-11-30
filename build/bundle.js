const gulp = require('gulp');

require('./tasks/build-js');
require('./tasks/build-css');
require('./tasks/clean');
require('./tasks/watch');

gulp.task('build', ['clean', 'build-js', 'build-css']);