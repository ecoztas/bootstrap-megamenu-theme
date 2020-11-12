/**
 * Bootstrap Mega Menu - Theme
 *
 *
 *
 * @package     bootstrap-megamenu-theme
 * @author      ÖZTAŞ, Emre Can <me@emrecanoztas.com>
 * @copyright   2020
 * @license     MIT
 * @link        https://github.com/ecoztas/bootstrap-megamenu-theme
 * @since       v1.0
 */

// DEFINE: Package(s).
// =============================================================================
var gulp = require("gulp");
var sass = require("gulp-sass");
var jade = require("gulp-jade");
var cssmin = require("gulp-cssmin");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");

// TASK: Default
// =============================================================================
gulp.task("default", function () {
    console.log("Works fine!");
});

// TASK: SASS
// =============================================================================
gulp.task("sass", function () {
    return gulp
        .src("public/template/sass-kit/theme.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest("public/styles"))
        .pipe(cssmin())
        .pipe(
            rename({
                suffix: ".min",
            })
        )
        .pipe(gulp.dest("public/styles"));
});

// TASK: JADE
// =============================================================================
gulp.task("jade", function () {
    return gulp
        .src("public/template/jade-kit/*.jade")
        .pipe(
            jade({
                pretty: true,
            })
        )
        .pipe(gulp.dest("./"));
});
