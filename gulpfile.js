"use strict";

var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function () {
  var spriteData = gulp.src('./img/icons/*.png').pipe(spritesmith({
	imgName: 'sprite.png',
	cssName: 'sprite.scss',
	padding: 20,
	algorithm: 'top-down',
	imgPath: '../sprites/sprite.png'
  }));
  return spriteData.pipe(gulp.dest('./sprites/'));
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        proxy: "amident/"
    });

    gulp.watch("./sass/**/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
	gulp.watch("./js/*.js").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
	return gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(rename(function(path) {
            path.dirname = path.dirname.replace('sass/', 'css/');
            path.extname = '.min.css';
        }))
        .pipe(gulp.dest('css/'))
		.pipe(browserSync.stream());
});

gulp.task('default', ['serve']);