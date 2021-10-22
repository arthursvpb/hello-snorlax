/* eslint-disable func-names */
/* eslint-disable no-unused-vars */

const {
  src, dest, series, watch,
} = require('gulp');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const uglify = require('gulp-uglify');
const { sync, logError } = require('gulp-sass')(require('node-sass'));

function style(cb) {
  src('src/style/**/*.scss')
    .pipe(sync().on('error', logError))
    .pipe(concat('style.css'))
    .pipe(minifyCSS())
    .pipe(dest('dist'));

  cb();
}

function scripts(cb) {
  src('src/js/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(dest('dist'));

  cb();
}

function copy(cb) {
  src([
    'src/assets/**/*.jpg',
    'src/assets/**/*.png',
    'src/assets/**/*.webp',
  ]).pipe(dest('dist'));

  cb();
}

exports.default = function () {
  series(style, scripts, copy)();
  watch('src', series(style, scripts, copy));
};
