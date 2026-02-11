// Import dependencies
const pug = require("pug");
const fs = require("fs");
const path = require("path");
require("dotenv").config();
 const themes = [
    "olive-garden-feast.css",
    "navy.css",
    "new-corporate-tech.css",
    "ignite.css",
  ];
// Load translation files

const translations = {
  en: require("./locals/en.json"),
  ar: require("./locals/ar.json"),
};
// Function to compile with locals + translations
function compileTemplate(lang = "en", locals = {}) {
  const pugFile = path.join(path.dirname("./"), "index.pug");

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
// for(const model of data.t("portfolio.items.models"))
// {
//   console.log(model.title)
// } Debug
  
  // Compile and render
  const compiledFunction = pug.compileFile(pugFile, {
    pretty: true,
  });

  // Save output
  
    const outFileTheme = path.join(
      path.dirname("./"),
      `output-${lang}-theme-${locals.theme_name.replace(".css", "")}-${locals.mode}.html`,
    );
    const html = compiledFunction({
      theme_name: locals.theme_name,
      ...data,
    });
    fs.writeFileSync(path.dirname(".") + "/public/" + outFileTheme, html);
    
    console.log(
      `✅ Compiled Pug template with ${lang} translations → ${outFileTheme}`,
    );
  }

for (const theme of themes) {
compileTemplate("en", { username: "Mostafa",yearNumber:Date.now(), lang: "en", theme_name: theme,mode:"dark" });
compileTemplate("en", { username: "Mostafa",yearNumber:Date.now(), lang: "en", theme_name: theme,mode:"light" });
compileTemplate("ar", { username: "مصطفى",yearNumber:Date.now(), lang: "ar", theme_name: theme,mode:"dark" });
compileTemplate("ar", { username: "مصطفى",yearNumber:Date.now(), lang: "ar", theme_name: theme,mode:"light" });
}