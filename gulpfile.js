
'use strict';

var del = require('del');
var gulp = require('gulp');
var sassLint = require('gulp-sass-lint');

gulp.task('clean', function (cb) {
    del([
        'dist'
    ], cb);
});

gulp.task('sass-lint', function() {
    return gulp.src('src/css/**/*.scss')
        .pipe(sassLint({
            options: {
                'config-file': 'tests/.sass-lint.yml',
            },
        }))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
        .on('error', function (error) {
            console.error('' + error);
        });
});

gulp.task('test', [
    // 'sass-lint',
]);

gulp.task('css', [
    'clean',
    'test',
], function() {
    return gulp.src('src/css/**/*.scss')
        .pipe(gulp.dest('dist/'))
        .on('error', function (error) {
            console.error('' + error);
        });
});

gulp.task('default', [
    'clean',
    'css'
]);
