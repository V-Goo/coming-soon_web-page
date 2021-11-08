const gulp = require('gulp');
// const autoprefixer = require('gulp-autoprefixer');
// const babel = require('gulp-babel');
// const cleanCSS = require('gulp-clean-css');
// const uglify = require('gulp-uglify-es').default;
// const del = require('del');
const browserSync = require('browser-sync').create();

exports.watch = () => {
    browserSync.init({
        server: {
          //  baseDir: "./app",
           baseDir: ".",
           index: "/index.html"
        }
    });
    gulp.watch('./css/*.css').on('change', browserSync.reload);
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}
// exports.watch = watch;
