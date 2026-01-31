// Import dependencies
const pug = require('pug');
const fs = require('fs');
const path = require('path');

// Load translation files

const translations = {
  en:require('./locals/en.json'),
  ar:require('./locals/ar.json'),
};
// Function to compile with locals + translations
function compileTemplate(lang = 'en', locals = {}) {
  const pugFile = path.join(path.dirname("./"), 'index.pug');

  // Merge locals with translations
  const data = {
    ...locals, 
   t: (key) => { // Split nested keys like "banner.placeholder.website_url" 
   const parts = key.split('.'); let value = translations[lang] || translations.en; 
   for (const part of parts) { 
    value = value?.[part]; 
    } 
      return value || key; // fallback: return key if not found
    } 
  };
  

  // Compile and render
  const compiledFunction = pug.compileFile(pugFile);
  const html = compiledFunction({
    pretty:true,
    ...data
  }); 

  // Save output
  const outFile = path.join(path.dirname("./"), `output-${lang}.html`);
  fs.writeFileSync(outFile, html);

  console.log(`✅ Compiled Pug template with ${lang} translations → ${outFile}`);
}

// Example usage
compileTemplate('en', { username: 'Mostafa',lang:"en" });
compileTemplate('ar', { username: 'مصطفى',lang:"ar" });