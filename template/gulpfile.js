var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var plumber     = require('gulp-plumber');
// Static server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        },
        notify: false
    });
});

gulp.task('sass', function() {
   return gulp.src('app/sass/**/*.scss')
  .pipe(plumber())
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({stream: true}))
});
gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('*.html', browserSync.reload);
});
gulp.task('default', ['watch']);
