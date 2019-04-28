var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
gulp.task('watch', function(){
  gulp.watch('./*html', gulp.series(browserSync.reload));
  gulp.watch('./**/*css', gulp.series(browserSync.reload));
});
gulp.task('default',gulp.series(
  gulp.parallel('browser-sync', 'watch'),
));
