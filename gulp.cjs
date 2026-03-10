const gulp = require("gulp");
const pug = require("gulp-pug");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const path = require("path");
require("dotenv").config();
const fs = require("fs");
const purgecss = require("gulp-purgecss");
const config = require("./config.js");

function getTranslator(lang) {
  return (key) => {
    const parts = key.split(".");
    let value = config.translations[lang] || config.translations.en;
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
      gulp
        .src("src/assets/css/color-palette/*.css")
        .pipe(gulp.dest("public/dist/css/color-palette"));
      gulp.src("src/assets/css/blog.css").pipe(gulp.dest("public/dist/css/"));
      fs.cpSync("src/assets/fonts", "public/dist/webfonts", {
        recursive: true,
      });
      gulp
        .src("src/assets/css/all.min.css")
        .pipe(gulp.dest("public/dist/css/"));
    });
});

gulp.task("purgecss", () => {
  return gulp
    .src(["./public/dist/css/*.css",])
    .pipe(
      purgecss({
        content: ["public/*.html","public/dist/bundle.js"],
      }),
    )
    .pipe(gulp.dest("public/dist/css"));


});
// Pug task with rename
gulp.task("pug", function () {
  const tasks = [];
  const config = require("./config.js");

  for (const theme of config.themes) {
    if (tasks.length > config.themes) {
      break;
    }
    for (const lang of config.languages) {
      for (const mode of config.modes) {
        const username = lang === "en" ? "Mostafa" : "مصطفى";

        tasks.push(
          gulp
            .src(config.pug_to_compile)
            .pipe(
              rename(function (filePath) {
                const baseName = path.basename(filePath.basename, ".pug");
                filePath.basename = config.output_default_name
                  .replace("{baseName}", baseName)
                  .replace("{lang}", lang)
                  .replace("{mode}", mode)
                  .replace("{theme}", theme.replace(".css", ""));
                filePath.extname = ".html";
              }),
            )
            .pipe(
              pug({
                pretty: true,

                data: {
                  pre_loader: config.preloader,
                  username,
                  ai_assistant: config.ai_asssitant,
                  yearNumber: new Date().getFullYear(),
                  lang,
                  theme_name: theme,
                  mode,
                  dir: lang === "ar" ? "rtl" : "ltr",
                  t: getTranslator(lang),
                  user: true,
                  full_theme_name: (function () {
                    return config.output_default_name
                      .replace("{baseName}", "index")
                      .replace("{lang}", lang)
                      .replace("{mode}", mode)
                      .replace("{theme}", theme.replace(".css", ""));
                  })(),
                  posts: [
                    {
                      title: "Post 1",
                      image: "https://placehold.co/600x400",
                      slug: "post-1",
                      excerpt: "hello",
                      content: "Content of post 1",
                    },
                    {
                      title: "Post 2",
                      image: "https://placehold.co/600x400",
                      slug: "post-2",
                      excerpt: "hello",
                      content: "Content of post 2",
                    },
                    {
                      title: "Post 3",
                      image: "https://placehold.co/600x400",
                      slug: "post-3",
                      excerpt: "hello",
                      content: "Content of post 3",
                    },
                  ],
                },
              }),
            )
            .pipe(gulp.dest("public/")),
        );
      }
    }
  }

  return tasks.length ? tasks[tasks.length - 1] : Promise.resolve();
});
gulp.task("image", (cb) => {
  console.log("copying images...");
  fs.cpSync("src/assets/images", "public/assets/images", { recursive: true });
  fs.cpSync("src/assets/images", "public/dist/images", { recursive: true });
  cb();
});
// Watch task
gulp.task("watch", function () {
  gulp.watch("src/assets/css/*.css", gulp.series("app-css"));
  gulp.watch("src/assets/css/color-palette/*.css", gulp.series("app-css"));
  gulp.watch("public/dist/css/*.css",gulp.series("purgecss"))
  gulp.watch(
    ["src/**/*.pug", "locals/*.json", "!src/assets", "!src/docs"],
    gulp.series("pug"),
  );
  gulp.watch(
    [
      "src/assets/images/*.png",
      "src/assets/images/*.jpg",
      "src/assets/images/*.jpeg",
    ],
    gulp.series("image"),
  );
});

// Default task
exports.default = gulp.series("app-css", "pug", "image","purgecss");
