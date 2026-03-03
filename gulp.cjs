const gulp = require("gulp");
const pug = require("gulp-pug");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const path = require("path");
require("dotenv").config();
const fs = require("fs");
console.log("copying images...");
fs.cpSync("src/assets/images", "public/assets/images", { recursive: true });
const themes = [
  "olive-garden-feast.css",
  "navy.css",
  "new-corporate-tech.css",
  "loyal-green.css",
  "cranberries.css",
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



// CSS task
gulp.task("app-css", function () {
  return gulp
    .src(["src/assets/css/*.css", "!src/assets/css/(blog|all.min).css"])
    .pipe(concat("app.css"))
    .pipe(gulp.dest("public/dist/css"))
    .on("end", () => {
      gulp.src("src/assets/css/color-palette/*.css")
        .pipe(gulp.dest("public/dist/css/color-palette"));
      gulp.src("src/assets/css/blog.css")
        .pipe(gulp.dest("public/dist/css/"));
        fs.cpSync("src/assets/fonts", "public/dist/webfonts", { recursive: true });
        gulp.src("src/assets/css/all.min.css")
        .pipe(gulp.dest("public/dist/css/"));
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
          gulp.src(["src/pages/*.pug","src/index.pug","src/pages/blog/main.pug"])
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
                dir: lang === "ar" ? "rtl" : "ltr",
                t: getTranslator(lang),
                user:true,
                full_theme_name : "output-index-"+lang+"-"+mode+"-"+theme.replace(".css","")+".html",
                posts: [
                  { title: "Post 1",image:"https://placehold.co/600x400",slug:"post-1",excerpt:"hello", content: "Content of post 1" },
                  { title: "Post 2",image:"https://placehold.co/600x400",slug:"post-2",excerpt:"hello", content: "Content of post 2" },
                  { title: "Post 3",image:"https://placehold.co/600x400",slug:"post-3",excerpt:"hello", content: "Content of post 3" },
                ],
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
  
  gulp.watch("src/assets/css/*.css", gulp.series("app-css"));
  gulp.watch("src/assets/css/color-palette/*.css", gulp.series("app-css"));
  
  gulp.watch(["src/**/*.pug","locals/*.json","!src/assets","!src/docs"], gulp.series("pug"));
  
 
  
});

// Default task
exports.default = gulp.series("app-css", "pug");
