var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        notify: false
    });
});

gulp.task('sass', function() {
  return gulp.src('app/**/*.scss')
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({stream: true}))
});
gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/**/*.css', browserSync.reload);
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('app/sass/**/*.scss', ['sass']);
});
gulp.task('default', ['watch']);
