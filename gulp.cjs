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
      fs.cpSync("src/assets/fonts", "public/dist/fonts", {
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
function getUsername(lang) {
  return lang === "en" ? "Mostafa" : "مصطفى";
}

function buildFullThemeName(theme, lang, mode) {
  return config.output_default_name
    .replace("{baseName}", "index")
    .replace("{lang}", lang)
    .replace("{mode}", mode)
    .replace("{theme}", theme.replace(".css", ""));
}

function createPugData(lang, theme, mode) {
  return {
    pre_loader: config.preloader,
    username: getUsername(lang),
    active_number: config.active_number,
    ai_assistant: config.ai_asssitant,
    yearNumber: new Date().getFullYear(),
    lang,
    theme_name: theme,
    card_list: config.card_list,
    mode,
    dir: lang === "ar" ? "rtl" : "ltr",
    t: getTranslator(lang),
    user: true,
    full_theme_name: buildFullThemeName(theme, lang, mode),
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
  };
}

function createPugTask(theme, lang, mode) {
  return gulp
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
        data: createPugData(lang, theme, mode),
      }),
    )
    .pipe(gulp.dest("public/"));
}

// Pug task with rename
gulp.task("pug", function () {
  const tasks = [];

  for (const theme of config.themes) {
    for (const lang of config.languages) {
      for (const mode of config.modes) {
        tasks.push(createPugTask(theme, lang, mode));
      }
    }
  }

  return tasks.length ? tasks.at(-1) : Promise.resolve();
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
exports.default = gulp.series("app-css", "pug", "image");
