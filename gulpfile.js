var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
    bootstrapDir: './bower_components/bootstrap-sass',
    publicDir: './public',
    themeRoot: './',
};

var sassPaths = [
    './bower_components/bootstrap-sass'

];

gulp.task('css', function() {
    return gulp.src('./scss/style.scss')
        .pipe(sass({
            includePaths: [config.bootstrapDir + '/assets/stylesheets'],
            outputStyle: 'nested',
            sourceComments: 'map',
            includePaths: sassPaths
        }))
        .pipe(gulp.dest(config.publicDir + '/css'));
    //.pipe(gulp.dest(config.themeRoot + 'css'));
});

gulp.task('css-c', function() {
    return gulp.src('./scss/style.scss')
        .pipe(sass({
            includePaths: [config.bootstrapDir + '/assets/stylesheets'],
            outputStyle: 'compressed',
            includePaths: sassPaths
        }))
        .pipe(gulp.dest(config.publicDir + '/css'));
    //.pipe(gulp.dest(config.themeRoot + 'css'));
});

gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
        .pipe(gulp.dest(config.publicDir + '/fonts'));
    // .pipe(gulp.dest(config.themeRoot + 'fonts'));
});

gulp.task('default', ['css', 'fonts'], function() {
    gulp.watch(['./scss/**/*.scss'], ['css']);
});

//gulp prod - for compressed, production ready css

gulp.task('prod', ['css-c', 'fonts'], function() {
    gulp.watch(['./scss/**/*.scss'], ['css']);
});



