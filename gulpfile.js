var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');
var watch = require('gulp-watch');

gulp.task('jasmine', function () {
    var filesForTest = ['./unit-tests/jasmine-standalone-3.3.0/src/calculator.js', './unit-tests/jasmine-standalone-3.3.0/spec/calculatorspec.js'];
    return gulp.src(filesForTest)
        .pipe(watch(filesForTest))
        .pipe(jasmineBrowser.specRunner())
        .pipe(jasmineBrowser.server({ port: 8000 }));
});