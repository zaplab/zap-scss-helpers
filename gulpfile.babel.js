
import del from 'del';
import gulp from 'gulp';
import sassLint from 'gulp-sass-lint';
import gutil from 'gulp-util';

function onWarning(error) {
    gutil.log(error);
}

function onError(error) {
    gutil.log(error);
    process.exit(1);
}

gulp.task('clean', gulpCallback => {
    del([
        'dist',
    ]).then(() => {
        gulpCallback();
    });
});

gulp.task('sass-lint', () => {
    return gulp.src('src/css/**/*.scss')
        .pipe(sassLint({
            options: {
                'config-file': 'tests/.sass-lint.yml',
            },
        }))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
        .on('error', onWarning);
});

gulp.task('test', [
    'sass-lint',
]);

gulp.task('css', [
    'clean',
    'test',
], () => {
    return gulp.src('src/css/**/*.scss')
        .pipe(gulp.dest('dist/'))
        .on('error', onError);
});

gulp.task('default', [
    'clean',
    'css',
]);
