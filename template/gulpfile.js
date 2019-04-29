var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        notify: false
    });
});
gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('app/**/*.css', browserSync.reload);
    gulp.watch('*.html', browserSync.reload);
});
gulp.task('default', ['watch']);
