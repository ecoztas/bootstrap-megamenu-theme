/**
 * JADE-KIT for JADE development.
 *
 *
 *
 * @package     jade-kit
 * @author      ÖZTAŞ, Emre Can <me@emrecanoztas.com>
 * @copyright   2020
 * @license     MIT
 * @link        https://github.com/ecoztas/jade-kit
 * @since       v1.0
 */

// DEFINE: Package(s).
// =============================================================================
var gulp = require("gulp");
var jade = require("gulp-jade");

// TASK: Default
// =============================================================================
gulp.task("default", function () {
    console.log("Works fine!");
});

// TASK: JADE
// =============================================================================
gulp.task("jade", function () {
    return gulp
        .src("./*.jade")
        .pipe(
            jade({
                pretty: true,
            })
        )
        .pipe(gulp.dest("./"));
});
