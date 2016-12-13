// Include gulp
var gulp = require('gulp');

// Include Plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

// Tasks sass
gulp.task('sass', function () {
	return gulp.src(['./sass/main.scss'])
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded'//outputStyle: nested - expanded - compact - compressed
		}).on('error', sass.logError)) 
		.pipe(autoprefixer())
		.pipe(concat('style.css'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./css'));
});

// Watch Files For Changes
gulp.task('watch', function () {
	gulp.watch('sass/*.scss', ['sass']);
});

// Execute
gulp.task('default', ['sass', 'watch']);
