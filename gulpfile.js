// Include gulp
var gulp = require('gulp');

// Include Plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');

// Tasks sass
gulp.task('sass', function () {
	return gulp.src(['./sass/main.scss'])
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded'
		}))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write(''))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./css'))
		.pipe(cssnano({
			autoprefixer: {
				add: true
			}
		}))
		.pipe(sourcemaps.write(''))
		.pipe(concat('style.min.css'))
		.pipe(gulp.dest('./css'));
});

// Watch Files For Changes
gulp.task('watch', function () {
	gulp.watch('sass/*.scss', ['sass']);
});

// Execute
gulp.task('default', ['sass', 'watch']);