var gulp = require('gulp'),
browserSync = require('browser-sync'),
sass = require('gulp-sass');


//Compile SASS
gulp.task('sass', function() {

	return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
		.pipe(sass())
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.stream());

});

//move files to JS 
gulp.task('js', function() {

	return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 
	'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
		.pipe(gulp.dest('src/js'))
		.pipe(browserSync.stream());	
});

// Watch sass and serve
gulp.task('serve', ['sass'], function() {

	notify: false,
	browserSync.init({

		server: "./src"

	});

	gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
	gulp.watch('src/*.html').on('change', browserSync.reload);
});

// Move font awesome folder to src
gulp.task('fonts', function() {

	return gulp.src('node_modules/font-awesome/fonts/*')
	.pipe(gulp.dest('src/fonts'));

}); 

gulp.task('fa', function() {

	return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
		.pipe(gulp.dest('src/css'));

});

gulp.task('default', ['js', 'serve', 'fa', 'fonts']);

	


