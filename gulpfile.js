var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');




// SERVER
gulp.task('serv', function() {
    gulp.src('./app')
        .pipe(server({
            livereload: true,
            port: 3000,
            open: true
        }));
});

//STYLES
gulp.task('style', function () {
    return gulp.src('./app/sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./app/css'));
});

gulp.task('watch', function () {
    gulp.watch('./app/sass/**/*.sass', ['style']);
});

gulp.task('default', ['serv', 'watch']);
