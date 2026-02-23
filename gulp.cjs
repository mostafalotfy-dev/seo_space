const gulp = require("gulp");
const pug = require("gulp-pug");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const path = require("path");
require("dotenv").config();

const themes = [
  "olive-garden-feast.css",
  "navy.css",
  "new-corporate-tech.css",
  "loyal-green.css",
];

const translations = {
  en: require("./locals/en.json"),
  ar: require("./locals/ar.json"),
};

function getTranslator(lang) {
  return (key) => {
    const parts = key.split(".");
    let value = translations[lang] || translations.en;
    for (const part of parts) {
      value = value?.[part];
    }
    return value || key;
  };
}

// JS task
gulp.task("app-js", function () {
  return gulp
    .src("src/assets/js/*.{js,mjs}")
    .pipe(concat("app.js"))
    .pipe(gulp.dest("public/dist"));
});

// CSS task
gulp.task("app-css", function () {
  return gulp
    .src(["src/assets/css/*.css", "src/assets/css/*.sass"])
    .pipe(concat("app.css"))
    .pipe(gulp.dest("public/dist/css"))
    .on("end", () => {
      gulp.src("src/assets/css/color-palette/*.css")
        .pipe(gulp.dest("public/dist/css/color-palette"));
    });
});

// Pug task with rename
gulp.task("pug", function () {
  const tasks = [];
  
  for (const theme of themes) {
    for (const lang of ["en", "ar"]) {
      for (const mode of ["dark", "light"]) {
        const username = lang === "en" ? "Mostafa" : "مصطفى";

        tasks.push(
          gulp.src(["src/pages/*.pug","src/index.pug"])
            .pipe(rename(function (filePath) {
              const baseName = path.basename(filePath.basename, ".pug");
              filePath.basename = `output-${baseName}-${lang}-${mode}-${theme.replace(".css", "")}`;
              filePath.extname = ".html";
            }))
            .pipe(pug({
              pretty: true,
              data: {
                username,
                yearNumber: new Date().getFullYear(),
                lang,
                theme_name: theme,
                mode,
                t: getTranslator(lang),
                user:true,
                full_theme_name : "output-index-"+lang+"-"+mode+"-"+theme.replace(".css","")+".html",
                
              }
            }))
            .pipe(gulp.dest("public/"))
        );
      }
    }
  }

  return tasks.length ? tasks[tasks.length - 1] : Promise.resolve();
});

// Watch task
gulp.task("watch", function () {
  gulp.watch("src/assets/js/*.{js,mjs}", gulp.series("app-js"));
  gulp.watch(["src/assets/css/*.css", "src/assets/css/*.sass"], gulp.series("app-css"));
  gulp.watch("src/assets/css/color-palette/*.css", gulp.series("app-css"));
  gulp.watch("src/**/*.pug", gulp.series("pug"));
  gulp.watch("locals/*.json", gulp.series("pug"));
});

// Default task
exports.default = gulp.series("app-css", "app-js", "pug");
