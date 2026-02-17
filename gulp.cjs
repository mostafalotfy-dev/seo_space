const gulp = require("gulp");
const uglify = require("gulp-uglify");
const pug = require("pug");
require("dotenv").config();
const concat = require('gulp-concat');
const path = require("path")
const fs = require("fs")
const themes = [
  "olive-garden-feast.css",
  "navy.css",
  "new-corporate-tech.css",
  "ignite.css",
];
// Translations 
const translations = {
  en: require("./locals/en.json"),
  ar: require("./locals/ar.json"),
};
// Compile Pug
function compileTemplate(lang = "en", locals = {}) {
  const pugFile = path.join(path.dirname("./src/views/"), "index.pug");

  // Merge locals with translations
  const data = {
    ...locals,
    t: (key) => {
      // Split nested keys like "banner.placeholder.website_url"
      const parts = key.split(".");
      let value = translations[lang] || translations.en;
      for (const part of parts) {
        value = value?.[part];
      }
      return value || key; // fallback: return key if not found
    },
  };

  // Compile and render
  const compiledFunction = pug.compileFile(pugFile, {
    pretty: true,
  });

  // Save output

  const outFileTheme = path.join(
    path.dirname("./public/"),
    `output-${lang}-theme-${locals.theme_name.replace(".css", "")}-${locals.mode}.html`,
  );
  console.log("😊 Transpiling Pugjs -> Html\n")
  const html = compiledFunction({
    theme_name: locals.theme_name,
    ...data,
  });
  fs.writeFileSync(path.dirname(".") + "/public/" + outFileTheme, html);

  console.log(
    `✅ Compiled Pug template with ${lang} translations → ${outFileTheme}\n`,
  );
}
// JS task 
gulp.task('app-js', function () { 

  return gulp.src('src/assets/js/*.(js|mjs)')   
  .pipe(concat('app.mjs')) 
  .pipe(uglify({
    output:{
      wrap_iife:true,
      ascii_only:true
    },
    compress:{
      dead_code:true,
    },
    mangle:true
  }))
  
  .pipe(gulp.dest("public/dist")); 
});
// CSS Task
gulp.task('app-css', function () { 

  return gulp.src('src/assets/css/*.(css|sass)') 
  .pipe(concat('app.css')) 
  
  .pipe(gulp.dest("public/dist")); 
});
gulp.task("watch", function () 
{ 
  gulp.watch("src/assets/js/*.{js,mjs}"
    , gulp.series("app-js")
  ); 
  gulp.watch("src/assets/css/*.css", gulp.series("app-css"));
 });
gulp.task("pug",function(cb){
   for (const theme of themes) {
  compileTemplate("en", {
    username: "Mostafa",
    yearNumber: new Date().getFullYear(),
    lang: "en",
    theme_name: theme,
    mode: "dark",
  });
  compileTemplate("en", {
    username: "Mostafa",
    yearNumber: new Date().getFullYear(),
    lang: "en",
    theme_name: theme,
    mode: "light",
  });
  compileTemplate("ar", {
    username: "مصطفى",
    yearNumber: new Date().getFullYear(),
    lang: "ar",
    theme_name: theme,
    mode: "dark",
  });
  compileTemplate("ar", {
    username: "مصطفى",
    yearNumber: new Date().getFullYear(),
    lang: "ar",
    theme_name: theme,
    mode: "light",
  });
}

  cb()
})
exports.default = gulp.series("app-css","app-js","pug")
