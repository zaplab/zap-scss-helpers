
'use strict';

var del = require('del');
var gulp = require('gulp');

gulp.task('clean', function (cb) {
    del([
        'dist'
    ], cb);
});

gulp.task('css', ['clean'], function() {
    return gulp.src('src/css/**/*.scss')
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', [
    'clean',
    'css'
]);
