var gulp = require('gulp');

gulp.task('css', function () {
    var postcss      = require('gulp-postcss');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');
    var cssnano = require('gulp-cssnano');
    var sass = require('gulp-sass');

    return gulp.src('./css/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./build/css'));
});


gulp.task('js', function () {
    var babel      = require('gulp-babel');
    var sourcemaps   = require('gulp-sourcemaps');

    return gulp.src('./js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./build/js'));
});

gulp.task('html', function() {
    return gulp.src('./*.html')
        .pipe(gulp.dest('./build'));
});

gulp.task('watch-html', function() {
    var watch = require('gulp-watch');
    var batch = require('gulp-batch');
    watch('./*.html', batch(function (events, done) {
        gulp.start('html', done);
    }));
})

gulp.task('img', function() {
	return gulp.src('./img/**/*')
        .pipe(gulp.dest('./build/img'));
});

gulp.task('watch-img', function() {
    var watch = require('gulp-watch');
    var batch = require('gulp-batch');
    watch('./img/**/*', batch(function (events, done) {
        gulp.start('img', done);
    }));
})

gulp.task('watch-css', function() {
    var watch = require('gulp-watch');
    var batch = require('gulp-batch');
    watch('./css/**/*.scss', batch(function (events, done) {
        gulp.start('css', done);
    }));
})

gulp.task('watch-js', function() {
    var watch = require('gulp-watch');
    var batch = require('gulp-batch');
    watch('./js/**/*.js', batch(function (events, done) {
        gulp.start('js', done);
    }));
})

gulp.task('default', ['html', 'css', 'js', 'img'])
gulp.task('watch', ['watch-html', 'watch-css', 'watch-js', 'watch-img'])