var gulp = require("gulp"),
    fs = require("fs"),
    less = require("gulp-less");


gulp.task("Build Test Less File", function () {
    return gulp.src('Styles/Test.less')
        .pipe(less())
        .pipe(gulp.dest('Styles/css'));
});



gulp.task('default', ['Build Test Less File']);