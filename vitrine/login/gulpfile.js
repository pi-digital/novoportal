const gulp = require('gulp');
const sass = require('gulp-sass');
const sourceMaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync')

//SCSS

function style() {
    return gulp.src('https://pi-digital.github.io/novoportal/vitrine/login/assets/scss/login.scss')
    .pipe(sourceMaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourceMaps.write('./'))
    .pipe(gulp.dest('https://pi-digital.github.io/novoportal/vitrine/login/assets/css/login.css'))
    .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './',
        },
        startPath: './index.html',
        ghostMode: false,
        notify: false
    });
    gulp.watch('https://pi-digital.github.io/novoportal/vitrine/login/assets/scss/login.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./assets/js/*.js').on('change', browserSync.reload);

}

exports.style = style;
exports.watch = watch;
