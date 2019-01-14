var gulp = require("gulp"),
    fs = require("fs"),
    less = require("gulp-less");


gulp.task("Build Less File", function () {
    return gulp.src('Assets/styles.less')
        .pipe(less())
        .pipe(gulp.dest('Assets'));
});



gulp.task('default', ['Build Less File']);