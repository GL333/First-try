const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');




gulp.task('test', function () {
  console.log('Gulp is running');
});

//gulp sass pluginas
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')

    .pipe(sass().on('error', sass.logError)) //padarom sass

    .pipe(autoprefixer({                     //uzdeda prexisus
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))  //sudeda i viena eilute css faila
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});
