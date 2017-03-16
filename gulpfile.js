var gulp = require('gulp');
var postcss = require('gulp-postcss');
var browserSync = require('browser-sync').create();
var precss = require('precss');
var cssnext = require('cssnext');
var autoprefixer = require('autoprefixer');
var fontMagician = require('postcss-font-magician');
var spritesmith  = require('gulp.spritesmith');
var postcssCssReset = require('postcss-css-reset');
var postcssAnimation = require('postcss-animation');
var sort = require('gulp-sort');
var imagemin = require('gulp-imagemin');
var requirejs = require('requirejs');



gulp.task('default', ['watch']);

gulp.task('watch', function() {
  browserSync.init({
    server: "./"
  });
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('style/*', ['postcss']);
});

gulp.task('postcss', function () {
  var processors = [
    precss,
    cssnext,
    autoprefixer,
    fontMagician,
    postcssCssReset,
    postcssAnimation
  ];
  return gulp.src('style/*')
    .pipe(postcss(processors))
    .pipe(gulp.dest('post-css'));
});


gulp.task('sprite', function() {
    var spriteData = 
        gulp.src('D:/projects/alik/sprite/img/*.*') // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css',
                algorithm: 'left-right',
                algorithmOpts: {sort: false}
            }));

    spriteData.img.pipe(gulp.dest('./sprite/')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('./sprite/')); // путь, куда сохраняем стили
});


  gulp.task('compress', function() {
    gulp.src('img/sprite/*')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('post-img/sprite/'));
  });
