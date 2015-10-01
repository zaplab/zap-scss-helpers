
'use strict';

var del = require('del');
var gulp = require('gulp');
var sassLint = require('gulp-sass-lint');

gulp.task('clean', function (cb) {
    del([
        'dist'
    ], cb);
});

gulp.task('css', ['clean'], function() {
    return gulp.src('src/css/**/*.scss')
        //.pipe(sassLint())
        //.pipe(sassLint.format())
        //.pipe(sassLint.failOnError())
        .pipe(gulp.dest('dist/'))
        .on('error', function (error) {
            console.error('' + error);
        });
});

gulp.task('default', [
    'clean',
    'css'
]);
