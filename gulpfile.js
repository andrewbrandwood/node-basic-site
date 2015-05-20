/*jslint node: true */
'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    sgc = require('sass-generate-contents'),
	config = require('./_config/project.json'),
	creds = require('./_config/creds.json');

/* ============================================================ *\
    SCRIPTS / JS
\* ============================================================ */

gulp.task('scripts:lint', function () {
	gulp.src([config.js_file, config.tests + '/**/*.js'])
			.pipe(plugins.jshint());
});

/* ============================================================ *\
    GENERATE SASS IMPORTS AND
\* ============================================================ */

gulp.task('sass-generate-contents', function () {
	gulp.src([config.src + '/' + config.dirs.styles + '/_settings/*.scss',
	config.src + '/' + config.dirs.styles + '/_tools/_tools.mixins.scss',
	config.src + '/' + config.dirs.styles + '/_tools/_tools.functions.scss',
	config.src + '/' + config.dirs.styles + '/_tools/*.scss',
	config.src + '/' + config.dirs.styles + '/_scope/*.scss',
	config.src + '/' + config.dirs.styles + '/_generic/*.scss',
	config.src + '/' + config.dirs.styles + '/_elements/*.scss',
	config.src + '/' + config.dirs.styles + '/_objects/*.scss',
	config.src + '/' + config.dirs.styles + '/_components/*.scss',
	config.src + '/' + config.dirs.components + '/**/*.scss',
	config.src + '/' + config.dirs.styles + '/_trumps/refresh-overrides.scss'])
	.pipe(sgc(config.src + '/' + config.dirs.styles + '/main.scss', creds))
	.pipe(gulp.dest(config.src + '/' + config.dirs.styles));
});

/* ============================================================ *\
    STYLES / SCSS
\* ============================================================ */

gulp.task('sass:dev', function () {
	gulp.src(config.src + '/' + config.dirs.styles + '/main.scss')
			.pipe(plugins.sass({ errLogToConsole: true, includePaths: [config.src + '/' + config.dirs.components], outputStyle: 'compact' }))
			.pipe(plugins.autoprefixer({ browsers: ['> 5%', 'Android 3'] }))
			.pipe(plugins.pixrem(config.pixelBase))
			.pipe(gulp.dest(config.dest + '/' + config.dirs.styles));
});

/* ============================================================ *\
    MAIN TASKS
\* ============================================================ */


gulp.task('watch', function () {
	gulp.watch([config.src + '/' + config.dirs.styles + '/**/*.scss', config.src + '/' + config.dirs.components + '/**/*.scss'], ['sass:dev']);
});



gulp.task('default', ['sass-generate-contents', 'sass:dev', 'watch']);
