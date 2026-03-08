const config = {
  main_page_base_name: "index",
  output_default_name: "output-{baseName}-{lang}-{mode}-{theme}",
  preloader: true,
  modes: ["dark", "light"],
  languages: ["en", "ar"], // if you change this key (languages) change the 'translations' key
  themes: [
    "olive-garden-feast.css",
    "navy.css",
    "new-corporate-tech.css",
    "loyal-green.css",
    "cranberries.css",
  ],
  translations: {
    en: require("./locals/en.json"),
    ar: require("./locals/ar.json"),
  },
};

module.exports = config;
