"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync");
var mqpacker = require("css-mqpacker");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");
var run = require("run-sequence");
var del = require("del");
var cheerio = require("gulp-cheerio");
var replace = require("gulp-replace");

gulp.task("style", function() {
  gulp.src("style/style.css")
    .pipe(plumber())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ]}),
      mqpacker({
        sort: true
      })
    ]))
    .pipe(gulp.dest("style"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("style"))
    .pipe(server.reload({stream: true}));
});

gulp.task("symbols", function() {
  return gulp.src("img/icons/*.svg")
  .pipe(cheerio({
    run: function ($) {
      $("[fill]").removeAttr("fill");
      $("[stroke]").removeAttr("stroke");
      $("[style]").removeAttr("style");
    },
    parserOptions: {xmlMode: true}
   }))
   .pipe(replace("&gt;", ">"))
   .pipe(svgmin())
   .pipe(svgstore({
      inlineSvg: true
    }))
   .pipe(rename("symbols.svg"))
  .pipe(gulp.dest("img"));
});

gulp.task("serve", function() {
  server.init({
    server: "./"
  });

  gulp.watch("style.css", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});

gulp.task("build", function(fn) {
  run("style",
   "symbols",
    fn
  );
})
