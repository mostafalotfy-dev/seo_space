/**
 * SEO Space Project Configuration
 * 
 * Description: Global configuration object for the SEO Space website.
 * This file centralizes all customizable settings for the build system,
 * theming, languages, and feature flags.
 * 
 * Features Configured:
 * - HTML output naming convention
 * - Preloader visibility toggle
 * - Dark/Light theme modes
 * - Supported languages (English, Arabic)
 * - Available color themes/palettes
 * - Translation dictionary imports
 * - AI assistant feature toggle
 * 
 * Usage:
 * - Imported by build scripts (Gulp, Rollup, Babel)
 * - Used by preprocessors to generate multiple output files
 * - Loaded by client-side code for localization
 * 
 * Type: CommonJS Module (requires Node.js style exports)
 * 
 * Important Notes:
 * - Changes to 'languages' array require corresponding changes to 'translations' key
 * - Typo in 'ai_asssitant' key (should be 'assistant') - maintain for compatibility
 * - Supported languages must have corresponding translation files in locals/ directory
 */

const config = {
  
  /**
   * Output File Naming Convention Template
   * 
   * Pattern: "output-{baseName}-{lang}-{mode}-{theme}"
   * 
   * Placeholders:
   * - {baseName}: Base filename without extension (index, login, etc.)
   * - {lang}: Language code (en, ar)
   * - {mode}: Display mode (dark, light)
   * - {theme}: Color theme name (navy, cranberries, etc.)
   * 
   * Example Output:
   * - output-index-en-dark-navy.html (English, dark mode, navy theme)
   * - output-login-ar-light-cranberries.html (Arabic, light mode, cranberries)
   * 
   * This pattern generates all combinations of:
   * - 2 Base templates (index, login)
   * - 2 Languages (en, ar)
   * - 2 Modes (dark, light)
   * - 5 Themes (navy, olive-garden-feast, etc.)
   * Total: 40 HTML output files
   * 
   * Used By: Gulp/build scripts for file generation
   */
  output_default_name: "output-{baseName}-{lang}-{mode}-{theme}",
  
  /**
   * Preloader Configuration
   * 
   * Boolean flag controlling page preloader visibility.
   * 
   * When true:
   * - Splash/loading screen displays on page load
   * - Fades out when page fully loaded (all resources)
   * - Provides perceived performance improvement
   * 
   * When false:
   * - No loading screen shown
   * - Page renders immediately (may show unstyled content)
   * - Better for cached/fast-loading pages
   * 
   * Controlled By: main.js window.load event handler
   * CSS Class: #js-preloader element with 'loaded' class
   * Animation: Defined in main.css preloader styles
   */
  preloader: true,
  
  /**
   * Display Modes Array
   * 
   * Supported color schemes for the website.
   * Each mode appears as a toggle option in the UI.
   * 
   * Modes:
   * - "dark": Dark theme (dark background, light text)
   * - "light": Light theme (light background, dark text)
   * 
   * For Each Mode:
   * - Combined with each theme to create complete styling
   * - CSS variables are defined per mode
   * - Bootstrap data-bs-theme attribute is toggled
   * 
   * Toggled By: #theme-toggle button click handler in main.js
   * Data Attribute: document <html> body data-theme="dark|light"
   * Bootstrap Attribute: body data-bs-theme="dark|light"
   * 
   * Addition Guide:
   * - Add mode name to this array
   * - Create corresponding CSS variables for: colors, backgrounds, borders
   * - Update toggle logic if adding more than 2 modes
   */
  modes: ["light", "dark"],
  
  /**
   * Supported Languages Array
   * 
   * Languages available in the website interface.
   * Each language has a translation dictionary.
   * 
   * Languages:
   * - "en": English (LTR - Left to Right)
   * - "ar": Arabic (RTL - Right to Left)
   * 
   * Critical Requirement:
   * ⚠️  Whenever you add/remove languages from this array,
   *     you MUST update the 'translations' object to match.
   *     If languages and translations don't match, translation loading will fail.
   * 
   * For Each Language:
   * - Requires translation file in locals/ directory (locals/en.json, locals/ar.json)
   * - Sets document lang attribute for accessibility
   * - Affects text direction (LTR vs RTL) via CSS
   * - Influences AI response formatting (text-justify direction)
   * 
   * Addition Guide:
   * 1. Create translation file locals/{code}.json (e.g., locals/fr.json)
   * 2. Add language code to this array: ["en", "ar", "fr"]
   * 3. Add require statement to translations object: fr: require("./locals/fr.json")
   * 4. Test RTL vs LTR support if adding Arabic-like languages
   * 
   * Used By: Build scripts, client-side localization, language switcher
   */
  languages: ["en", "ar"], // if you change this key (languages) change the 'translations' key
  
  /**
   * Available Color Theme Palettes
   * 
   * Array of CSS file names for different color schemes.
   * Each theme is a complete color palette that can be combined with any mode.
   * 
   * Available Themes:
   * - "olive-garden-feast.css": Olive and earth tones (professional, natural)
   * - "navy.css": Navy and blue tones (corporate, trusted)
   * - "new-corporate-tech.css": Modern corporate tech colors (innovative)
   * - "loyal-green.css": Green tones (nature, growth, eco-friendly)
   * - "cranberries.css": Red/burgundy tones (energetic, bold)
   * 
   * File Locations:
   * - src/assets/css/color-palette/{theme-name}
   * - Generated output: public/output-*-{theme}.html files
   * 
   * Theme Structure:
   * Each CSS file defines:
   * - Primary color: Main brand color
   * - Secondary color: Complementary color
   * - Accent color: Highlights and CTAs
   * - Background colors: For light and dark modes
   * - Text colors: For readability
   * - Border/divider colors
   * 
   * For Each Theme:
   * - Combined with each mode (dark/light) to create 2 variants
   * - Applied via CSS file import or CSS preprocessor
   * - Used by build system to generate 10 theme variants (2 languages × 2 modes × 5 themes)
   * 
   * Theme Selection:
   * - Users can switch themes dynamically (if implemented)
   * - Default theme selection handled by JavaScript
   * - Persists in localStorage (if implemented)
   * 
   * Addition Guide:
   * 1. Create color-palette CSS file: src/assets/css/color-palette/my-theme.css
   * 2. Define CSS variables for all colors used in stylesheets
   * 3. Add filename to this array: "my-theme.css"
   * 4. Build system automatically generates output files for new theme
   * 5. Test with both dark and light modes
   * 6. Verify accessibility (AA contrast ratio minimum)
   */
  themes: [
    
    "navy.css",
    "loyal-green.css",
    "cranberries.css",
  ],
  
  /**
   * Translation Dictionaries Object
   * 
   * Maps language codes to translation JSON files.
   * Contains all UI text strings for different languages.
   * 
   * Structure:
   * {
   *   languageCode: require("./locals/language-file.json")
   * }
   * 
   * Files:
   * - locals/en.json: English translations
   * - locals/ar.json: Arabic translations (RTL)
   * 
   * Critical Note:
   * ⚠️  Keys MUST match the languages array above.
   *     If you add a language to the 'languages' array,
   *     you MUST add a corresponding translations entry.
   *
   * Example Adding French:
   * 1. Create locals/fr.json with all translation keys
   * 2. Add to languages array: ["en", "ar", "fr"]
   * 3. Add to translations: fr: require("./locals/fr.json")
   * 
   * Translation File Format:
   * - JSON object with key-value pairs
   * - Keys: UI text identifiers (nav_home, hero_title, etc.)
   * - Values: Translated text strings
   * - Example: { "nav_home": "الرئيسية", "nav_about": "حول" }
   * 
   * Used By:
   * - Client-side JavaScript for dynamic text replacement
   * - Template engines for multi-language support
   * - Build scripts to generate output HTML files
   */
  translations: {
    en: require("./locals/en.json"),
    ar: require("./locals/ar.json"),
  },
  
  /**
   * AI Assistant Feature Toggle
   * 
   * Boolean flag enabling/disabling the AI chatbot functionality.
   * 
   * When true:
   * - AI assistant chatbox is visible and functional
   * - Firebase AI integration is loaded (fbase.js)
   * - Chat and SEO analysis features are available
   * - AI button appears in the UI
   * 
   * When false:
   * - Chat interface is hidden
   * - AI features are disabled
   * - Reduces JavaScript bundle size (if fbase.js can be excluded)
   * - Reduces Firebase costs (no AI API calls)
   * 
   * Controlled By:
   * - fbase.js: Initializes Firebase and Google AI if enabled
   * - main.js: Shows/hides AI interface elements
   * - Footer/sidebar: AI button visibility toggle
   * 
   * Note: Typo in key name "ai_asssitant" (extra 's')
   * Maintain this spelling for backward compatibility with existing code
   * 
   * Future Enhancement:
   * - Consider renaming to "aiAssistant" (camelCase) in version 3.0
   * - Add feature flags for individual AI features (chat, analysis)
   * - Possible values: 'enabled', 'beta', 'disabled' for more control
   */
  "ai_asssitant": true,
  "pug_to_compile":[
                //"src/pages/*.pug", Soon
                "src/index.pug",
                // "src/pages/blog/main.pug", Soon
              ]
};

/**
 * Export Configuration
 * 
 * Exposes the config object for use in other modules.
 * 
 * Usage in Other Files:
 * const config = require('./config.js');
 * const themes = config.themes;
 * 
 * Build Scripts (Gulp):
 * - Use config.output_default_name for file naming
 * - Iterate config.languages to generate localized files
 * - Iterate config.modes and config.themes combinations
 * 
 * Module Pattern:
 * - CommonJS module (uses require/module.exports)
 * - Can be replaced with ES6 export if project supports it
 * - Consider migrating to .config.mjs for consistency
 */
module.exports = config;
