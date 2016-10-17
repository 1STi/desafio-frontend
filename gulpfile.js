const gulp 					= require('gulp')
const stylus 				= require('gulp-stylus')
const connect 			= require('gulp-connect')
const uglify 				= require('gulp-uglify')
const autoprefixer 	= require('autoprefixer-stylus')

gulp.task('bundle:js', () => {
	return gulp.src('./app/js/**/*.js')
		.pipe(connect.reload())
		.pipe(gulp.dest('./app/js/'))
})

gulp.task('bundle:styl', () => {
	return gulp.src('./app/styl/**/*.styl')
		.pipe(stylus({
			use: [autoprefixer()]
		}))
		.pipe(connect.reload())
		.pipe(gulp.dest('./app/css/'))
})

gulp.task('connect', () => {
	connect.server({
		root: './',
		livereload: true
	})
})

gulp.task('connect:reload', () => {
	connect.reload()
})

gulp.task('watch', () => {
	gulp.watch('./app/js/**/*.js', ['bundle:js'])
	gulp.watch('./app/styl/**/*.styl', ['bundle:styl'])
})

gulp.task('default', ['bundle:js', 'bundle:styl', 'watch', 'connect'])