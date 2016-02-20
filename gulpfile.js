var _ = require('lodash');
var del = require('del');
var gulp = require('gulp');
var merge = require('merge-stream');
var print = require('gulp-print');
var watch = require('gulp-watch');

var fileTypesToCopy = ['less', 'png', 'ico'];

// watch all fileTypesToCopy vendor files, update in lib when changed
gulp.task('stream-all', function() {
  var streams = _.map(fileTypesToCopy, function(fileType) {
    return gulp.src('./src/**/*.' + fileType, {
      base: './src'
    }).pipe(watch('./src/**/*.' + fileType)).pipe(gulp.dest('lib'));
  });
  return merge().add(streams);
});

// copy all fileTypesToCopy to lib
gulp.task('copy-all', function() {
  var streams = _.map(fileTypesToCopy, function(fileType) {
    return gulp.src('./src/**/*.' + fileType, {
      base: './src'
    }).pipe(print(function(filePath) {
      return 'copied: ' + filePath;
    })).pipe(gulp.dest('lib'));
  });
  return merge().add(streams);
});

// remove less files from lib - run after webpack
gulp.task('remove-less-from-lib', function() {
  return del('./lib/**/*.less');
});
