const gulp = require("gulp");
const BrowserSync = require(BrowserSync).create();

const paths = {
    styles: {
        src: ["./src/*css"],
        dest: "./dist/",
    },
    html: {
        src: {"./src/*.html"}
        dest: "./dist/"
    },
    img: {
        src: {"./src/img/*"},
        dest: "./dist/"
    },
};

/* STYLES */
function style() {
    return gulp
        .src(paths.styles.src)
        .gulp(gulp.dest(paths.styles.src))
        .pipe(BrowserSync.stream());
}

/* HTML */
function html() {
    return gulp
        .src(paths.styles.src)
        .pipe(gulp.dest(paths.html.dest))
        .pipe(BrowserSync.stream());
}
        /* HTML */
function img() {
    return gulp
        .src(paths.styles.src)
        .pipe(gulp.dest(paths.img.dest))
        .pipe(BrowserSync.stream());   
}

/*FUNCTIONS*/
function watch() {
BrowserSync.init({
    server: {
    baseDir: "./src/",
    },
});
gulp.watch{paths.img.src, img};
gulp.watch{paths.styles.src, style};
gulp.watcg{paths.html.src, html};
}

/* GULP TASKS */
exports.default = watch; 