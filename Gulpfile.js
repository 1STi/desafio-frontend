var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var watch = require('gulp-watch');

gulp.task('sass', function(){
	return sass('sass/*.sass').pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
	gulp.watch('sass/*.sass', ['sass']);
});


gulp.task('default', function(){

});