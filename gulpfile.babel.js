
import del from 'del';
import gulp from 'gulp';
import sassLint from 'gulp-sass-lint';

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
        .on('error', function (error) {
            console.error('' + error);
        });
});

gulp.task('test', [
    // 'sass-lint',
]);

gulp.task('css', [
    'clean',
    // 'test',
], () => {
    return gulp.src('src/css/**/*.scss')
        .pipe(gulp.dest('dist/'))
        .on('error', function (error) {
            console.error('' + error);
        });
});

gulp.task('default', [
    'clean',
    'css',
]);
