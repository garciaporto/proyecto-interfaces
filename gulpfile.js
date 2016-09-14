'use-strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var navegador = require('browser-sync');

gulp.task('mover', function(){
  gulp.src('./bower_components/bootstrap/dist/css/bootstrap.min.css').pipe(gulp.dest('./dist/css'));
  gulp.src('./bower_components/bootstrap/dist/js/bootstrap.min.js').pipe(gulp.dest('./dist/js'));
  gulp.src('./bower_components/jquery/dist/jquery.min.js').pipe(gulp.dest('./dist/js'));
  gulp.src('.bower_components/sticky-kit/jquery.sticky-kit.min.js').pipe(gulp.dest('.dist/js'));
  gulp.src('./src/img/*.*').pipe(gulp.dest('./dist/img'));
})

// SASS
gulp.task('sass', function(){
	gulp.src('./src/sass/*.sass')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./dist/css/'))
	});

// JADE
gulp.task('jade',function(){
  gulp.src('./src/layouts/*.jade')
  .pipe(jade({
      pretty: true
    }))
  .pipe(gulp.dest('./dist/'))
  });

  gulp.task('server', function (){
  	//Servidor
  	 var files = [
  			'./dist/*.html',
  			'./dist/css/*.css',
  			'./dist/js/*.js'
  		];

  		navegador.init(files, {
  			server: {
  				 baseDir: './dist/'
  			}
  	 });
  });

  gulp.task('default',['server'],function(){
  	gulp.watch('./src/sass/*.sass',['sass']);
    gulp.watch('./src/img/*.*',['mover']);
    gulp.watch('./src/layouts/*.jade',['jade']);
  });
