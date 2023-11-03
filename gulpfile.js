const gulp = require('gulp');
const htmlMin = require('gulp-htmlmin');
const cssMin = require('gulp-cssmin');
const jsMin = require('gulp-jsmin');

gulp.task('minifyHtml', () => {
    return gulp.src('src/index.html')
        .pipe(htmlMin({collapseWhitespace: true}))
        .pipe(gulp.dest('build'));
});

gulp.task('minifyCss', function () {
    gulp.src('src/styles/**/*.css')
        .pipe(cssMin())
        .pipe(gulp.dest('build/styles'));
});

gulp.task('minifyJs', function () {
    gulp.src('src/**/*.js')
        .pipe(jsMin())
        .pipe(gulp.dest('build/scripts'));
});
