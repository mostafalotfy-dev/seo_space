# Configuration Guide

## Overview

This guide explains how to configure various aspects of the SEO Space project including build settings, environment variables, themes, languages, and development options.

## Environment Variables

### Setting Up .env File

Create a `.env` file in the project root directory:

```env
# Language Configuration
LANG=en

# Theme Configuration
THEME=navy

# Mode Configuration
MODE=dark

# Build Configuration
NODE_ENV=development
BUILD_PATH=./

# Optional: Custom host/port for development server
DEV_HOST=localhost
DEV_PORT=8080
```

### Environment Variables Reference

| Variable | Values | Default | Purpose | Example |
|----------|--------|---------|---------|----------|
| `LANG` | `en`, `ar` | `en` | Primary language | `LANG=ar` for Arabic |
| `THEME` | `navy`, `ignite`, `new-corporate-tech`, `olive-garden-feast`, `loyal-green`, `cranberries` | `navy` | Color palette theme | `THEME=ignite` |
| `MODE` | `dark`, `light` | `dark` | Color scheme | `MODE=light` |
| `NODE_ENV` | `development`, `production` | `development` | Build environment | `NODE_ENV=production` |
| `BUILD_PATH` | Path string | `./` | Output directory | `BUILD_PATH=./public/` |
| `DEV_HOST` | Hostname string | `localhost` | Dev server host | `DEV_HOST=127.0.0.1` |
| `DEV_PORT` | Port number | `8080` | Dev server port | `DEV_PORT=3000` |

## Theme Configuration

### Available Themes

```javascript
// Themes available in the color-palette directory
const themes = [
  'navy.css',
  'loyal-green.css',
  'cranberries.css'
];
```

### Selecting Active Theme

#### Method 1: Environment Variable

```env
THEME=navy
```

#### Method 2: gulp.cjs Configuration

```javascript
// gulp.cjs - configure theme in gulpfile
const config = {
  theme: 'navy',
  language: 'en',
  mode: 'dark'
};
```

#### Method 3: Runtime Switching (JavaScript)

```javascript
// In browser console or JavaScript
document.body.dataset.theme = 'light';

// To change color palette
document.querySelector('link[href*="color-palette"]').href = 
  'assets/css/color-palette/navy.css';
```

### Theme Structure

Each theme is defined in:
```
assets/css/color-palette/[theme-name].css
```

Example: `assets/css/color-palette/navy.css`

## Language Configuration

### Supported Languages

| Code | Language | File |
|------|----------|------|
| `en` | English | `locals/en.json` |
| `ar` | Arabic | `locals/ar.json` |

### Setting Default Language

```env
LANG=en
```

Or edit `.env` file to select language before compilation.

### Adding New Language

1. **Create translation file** `locals/xx.json`:

```json
{
  "title": {
    "main": "Page Title"
  },
  "menu": {
    "home": "Home",
    "about": "About"
  }
  // ... rest of translations
}
```

2. **Update .env** to include new language:

```env
LANG=xx
```

3. **Recompile**:
```bash
npm run watch:gulp
```

### Language Switching Logic

```pug
// In index.pug
html(lang=lang)
  body(dir=lang == 'ar' ? 'rtl' : 'ltr')
    // RTL (right-to-left) for Arabic
    // LTR (left-to-right) for English
```

### Translation Key Naming Convention

```json
{
  "section": {
    "subsection": {
      "key": "Translated text"
    }
  }
}
```

**Example Hierarchy:**
```
title.main
header.logo.part1
menu.home
banner.welcome
services.skills.website_analysis
```

## Build System Configuration

### Gulp Task Runner

The project uses **Gulp** for Pug template compilation. Configuration is in `gulp.cjs`:

```javascript
// gulp.cjs - Main build configuration
// Defines tasks for pug compilation, asset processing, etc.
```

### Output File Naming

Generated files follow the pattern:

```
output-index-{lang}-{mode}-{theme}.html
```

**Examples:**
- `output-index-en-dark-navy.html`
- `output-index-en-light-navy.html`
- `output-index-ar-dark-loyal-green.html`
- `output-index-ar-light-cranberries.html`

### Modifying Build Output

Edit `gulp.cjs` or `config.js` to customize compilation:

```bash
# Run compilation once
npm run gulp

# Watch for changes
npm run watch:gulp

# Watch JavaScript bundles separately
npm run watch:rollup
```

## Development Server Configuration

### Using Live Server

```bash
# Install globally
npm install -g live-server

# Start server in project directory
live-server --port=3000
```

### Custom Dev Server Setup

Create `.env`:

```env
DEV_HOST=localhost
DEV_PORT=3000
AUTO_OPEN=true
```

## ESLint Configuration

### ESLint Rules

File: `eslint.config.mjs`

```javascript
import js from "@eslint/js";
import json from "@eslint/json";
import css from "@eslint/css";
import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  }
];
```

### Linting

Check code quality:

```bash
# Lint JavaScript files
npx eslint .

# Lint with fix
npx eslint . --fix

# Lint specific file
npx eslint src/assets/js/main.js
```

## Babel Configuration

File: `babel.config.json`

Babel transpiles modern JavaScript to compatible versions:

```bash
# Run Babel transpilation
npm run babel
```

## Build System Scripts

### Current Scripts

```json
{
  "scripts": {
    "start": "concurrently \"npm run gulp\" \"npm run lint\" \"npm run deploy\" \"npm run babel\" \"npx rollup -c rollup.config.mjs\"",
    "watch:gulp": "gulp -f gulp.cjs watch",
    "watch:rollup": "npx rollup -c rollup.config.mjs -w",
    "lint": "npx eslint ./src/assets/css/main.css ./src/assets/js/main.js",
    "lint:fix": "npx eslint ./src/assets/css/main.css ./src/assets/js/main.js --fix",
    "deploy": "firebase deploy --only hosting",
    "gulp": "gulp -f gulp.cjs",
    "babel": "npx babel src/assets/js --config-file ./babel.config.json --out-dir public/dist"
  }
}
```

### Running Scripts

```bash
# Start development
npm start

# Watch Pug templates for changes
npm run watch:gulp

# Watch JavaScript bundling
npm run watch:rollup

# Compile Pug templates once
npm run gulp

# Check code quality
npm run lint

# Fix code quality issues
npm run lint:fix

# Deploy to Firebase hosting
npm run deploy

# Transpile JavaScript with Babel
npm run babel
```

## Font Configuration

### Google Fonts

Current setup in `index.pug`:

```pug
link(href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet")
```

### Changing Font

```pug
// Option 1: Different Google Font
link(href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet")

// Option 2: System fonts
style
  :root
    --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
```

### Font Variables in CSS

```css
:root {
  --font-family: 'Poppins', sans-serif;
}

body {
  font-family: var(--font-family);
}
```

## Bootstrap Configuration

### Version

Currently using Bootstrap 5.3.8 from CDN

### Customization Options

To override Bootstrap variables, create custom CSS before Bootstrap:

```css
/* Custom overrides before Bootstrap */
:root {
  --bs-primary: #003f87;      /* Bootstrap primary color */
  --bs-secondary: #6c757d;    /* Bootstrap secondary color */
  --bs-body-font-family: 'Poppins', sans-serif;
}
```

### Including Bootstrap Locally

Instead of CDN, install locally:

```bash
npm install bootstrap
```

Then in `index.pug`:

```pug
link(href="node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet")
script(src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js")
```

## Vendor Libraries Configuration

### jQuery Configuration

Current: CDN + minified version

To use slim version (lighter):

```pug
script(src="vendor/jquery/jquery.slim.min.js")
```

### Owl Carousel Configuration

File: `assets/js/owl-carousel.js`

```javascript
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 3 }
  }
});
```

## Animation Configuration

### WOW.js Settings

File: `assets/js/animation.js`

```javascript
new WOW({
  boxClass: 'wow',      // CSS class for animations
  animateClass: 'animated',
  offset: 0,            // Distance to trigger animation
  mobile: true,         // Enable on mobile
  live: true            // Watch for dynamically added elements
}).init();
```

### Customize Animations

```pug
// Change animation on element
.element.wow.fadeIn(data-wow-duration="2s" data-wow-delay="0.5s")
```

Available animations (from animate.css):
- `fadeIn`, `slideInUp`, `slideInDown`, `bounceIn`, `zoomIn`, etc.

## Performance Configuration

### Lazy Loading Images

```pug
// Add loading="lazy" attribute
img(src="image.png" loading="lazy")
```

### Preload Critical Resources

```pug
// Preload fonts
link(rel="preload" href="https://fonts.gstatic.com" as="fetch" crossorigin)

// Preload images
link(rel="preload" href="assets/images/banner.png" as="image")
```

### Cache Busting

Add version number to assets:

```pug
link(rel="stylesheet" href="assets/css/main.css?v=1.0.0")
script(src="assets/js/main.js?v=1.0.0")
```

## SEO Configuration

### Meta Tags

In `index.pug`:

```pug
meta(name="description" content="SEO Space - Digital Marketing Agency Template")
meta(name="keywords" content="SEO, Marketing, Digital")
meta(name="author" content="Your Company")
meta(name="robots" content="index, follow")
```

### Open Graph Tags

```pug
meta(property="og:title" content="SEO Space")
meta(property="og:description" content="Professional SEO Services")
meta(property="og:image" content="assets/images/og-image.png")
meta(property="og:url" content="https://yourdomain.com")
```

### Structured Data

```pug
script(type="application/ld+json")
  | {
  |   "@context": "https://schema.org",
  |   "@type": "Organization",
  |   "name": "SEO Space",
  |   "url": "https://yourdomain.com"
  | }
```

## Security Configuration

### Content Security Policy

Add to `index.pug` head:

```pug
meta(http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'")
```

### X-Frame-Options

```pug
meta(http-equiv="X-UA-Compatible" content="ie=edge")
```

## Troubleshooting Configuration

### Configuration Not Applying

```bash
# Clear cache and rebuild
rm -rf node_modules
npm cache clean --force
npm install
npm run watch
```

### Theme Not Changing

```javascript
// Manual check
console.log(document.body.dataset.theme);

// Manual set
document.body.dataset.theme = 'dark';
```

### Language Not Switching

```javascript
// Check current language
console.log(localStorage.getItem('language'));

// Manually set
localStorage.setItem('language', 'ar');
location.reload();
```

---

For more advanced configurations, refer to the respective documentation of each technology:
- Pug: https://pugjs.org/api/reference.html
- Bootstrap: https://getbootstrap.com/docs/5.3/
- ESLint: https://eslint.org/docs/rules/

---

**Last Updated:** February 20, 2026  
**Version:** 2.2.2
