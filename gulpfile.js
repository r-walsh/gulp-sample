var 	gulp = require('gulp')
	,	stylus = require('gulp-stylus')
	,	concat = require('gulp-concat')
	,	uglify = require('gulp-uglify')
	,	uglifyCss = require('gulp-uglifycss')
	,	ngAnnotate = require('gulp-ng-annotate')
	,	watcher = gulp.watch(['./main/src/*.js', './main/styles/*.styl'], ['default']);

watcher.on('change', function( event ) {
	console.log('File ' + event.path + ' was ' + event.type + ' at ' + new Date() + ' , running tasks...');
});

gulp.task('stylus', function() {
	gulp.src('./main/styles/*.styl')
		.pipe(stylus())
		.pipe(uglifyCss())
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('./public/styles/'))
});

gulp.task('javascript', function() {
	gulp.src('./main/src/*.js')
		.pipe(ngAnnotate())
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./public/scripts/'))
});

gulp.task('default', ['stylus', 'javascript']);