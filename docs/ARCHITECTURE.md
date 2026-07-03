# Project Architecture

## Overview

SEO Space Frontend uses a modular, component-based architecture with Pug templating, Bootstrap for styling, and i18next for localization.

## Core Architecture Pattern

```
Pug Templates (src/index.pug)
         ↓
    Compilation (gulp.cjs + rollup.config.mjs)
         ↓
    HTML Output (public/output-index-*.html)
         ↓
    Browser Rendering
         ↓
    JavaScript Enhancement (src/assets/js/main.js)
         ↓
    Interactive Website
```

## Directory Organization

### Root Level Files

```
seo_space/
├── src/                   # Source templates, styles, and scripts
├── public/                # Generated HTML, CSS, JS, and assets
├── docs/                  # Documentation files
├── config.js              # Shared theme/language/build settings
├── gulp.cjs               # Gulp build pipeline
├── rollup.config.mjs      # Rollup bundling config
├── babel.config.json      # Babel transpilation config
├── package.json           # Scripts and dependencies
├── firebase.json          # Firebase hosting settings
└── eslint.config.mjs     # ESLint configuration
```

### `assets/` Directory Structure

```
assets/
├── css/
│   ├── main.css           # Global styles and layout
│   ├── chatbox.css        # Chat component styles
│   ├── fontawesome.css    # Icon library
│   └── color-palette/     # Theme color definitions
│       ├── Ignite.css
│       ├── navy.css
│       ├── new-corporate-tech.css
│       └── olive-garden-feast.css
├── js/
│   ├── main.js            # Main application logic
│   ├── fbase.js           # Firebase integration
│   ├── tabs.js            # Tab component logic
│   ├── imagesloaded.js    # Image loading detection
│   └── utils.js           # Utility functions
├── images/                # Static images and graphics
├── fonts/                 # Custom font files
└── sounds/                # Audio files
    ├── open.wav           # UI sound effects
    └── close.mp3
```

### Third-party Libraries (via npm/node_modules)

Third-party libraries are installed via npm and located in `node_modules/`:
- **Bootstrap** (5.3.8) - CSS framework
- **jQuery** (4.0.0) - JavaScript utilities
- **Firebase** (12.9.0) - Backend services
- **gulp-pug** (5.0.0) - Pug template engine
- And other dependencies listed in `package.json`

### `pages/` Directory (Page Templates)

```
pages/
├── login.pug              # Login page template
├── profile.pug            # User profile page
└── signup.pug             # Registration page
```

### `mixins/` Directory (Reusable Components)

```
mixins/
├── about.pug              # About section mixin
├── assistants.pug         # Team/assistants display
├── auth/                  # Authentication components
├── banner.pug             # Banner section mixin
├── blog.pug               # Blog section mixin
├── contact.pug            # Contact form mixin
├── footer.pug             # Footer mixin
├── header.pug             # Header/navigation mixin
├── headSection.pug        # Section heading mixin
├── portfolio.pug          # Portfolio section mixin
├── preloader.pug          # Preloader mixin
└── services.pug           # Services section mixin
```

### `locals/` Directory (Localization)

```
locals/
├── en.json                # English translations
└── ar.json                # Arabic translations
```

## Build Process

### Compilation Flow

```
┌─────────────────────────────────────────────────────────┐
│              1. Development Change                       │
│     (Edit .pug, .json, .css, or .js in src/)            │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│         2. File Watcher Detects Change                  │
│        (Gulp watch or build tool monitoring)            │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│      3. gulp.cjs Executes Compilation                   │
│                                                         │
│  - Reads src/index.pug & mixins                        │
│  - Loads locale files (locals/en.json, ar.json)        │
│  - Processes Pug templates                             │
│  - Compiles CSS & concatenates stylesheets            │
│  - Transpiles & minifies JavaScript                    │
│  - Injects variables and translations                  │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│    4. Generate Multiple HTML Outputs                    │
│                                                         │
│  For each combination:                                  │
│  - Language (en, ar)                                   │
│  - Theme (ignite, navy, corporate-tech, etc)           │
│  - Mode (dark, light)                                   │
│                                                         │
│  Example:                                               │
│  - output-en-theme-navy-dark.html                      │
│  - output-en-theme-navy-light.html                     │
│  - output-ar-theme-navy-dark.html                      │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│    5. Browser Loads Generated HTML                      │
│    6. Browser Loads CSS & JavaScript                    │
│    7. Firebase Integration (if configured)              │
│    8. Page Renders with Theme & Language                │
└─────────────────────────────────────────────────────────┘
```

## Template Architecture

### Main Template Structure

**src/index.pug** - Main entry template
```pug
doctype html
html(lang=lang)
  head
    // Meta tags & SEO
    // CSS imports (main, themes, icons)
    // Font loading
  body(dir=lang === 'ar' ? 'rtl' : 'ltr', data-theme=mode)
    // Preloader mixin
    // Header mixin
    // Page content (via layout.pug or pages/*.pug)
    // Footer mixin
    // Scripts & Firebase integration
```

**src/layout.pug** - Master layout wrapper
**src/pages/*** - Page-specific templates (login, profile, signup)
**src/mixins/*** - Reusable component mixins

### Template Variables Used

| Variable | Type | Purpose |
|----------|------|---------|
| `lang` | string | Current language ('en' or 'ar') |
| `theme_name` | string | Current theme name |
| `mode` | string | Theme mode ('dark' or 'light') |
| `t()` | function | i18next translation function |

### Pug Features Used

- **Variables**: `#{variable}` for interpolation
- **Functions**: `t('key')` for translations
- **Conditionals**: `if`, `else if`, `else`
- **Loops**: `each item in array`
- **Mixins**: Reusable template components
- **Classes**: Conditional class application
- **Attributes**: Dynamic HTML attributes

## CSS Architecture

### Cascade Organization

```
Bootstrap Base (CDN)
  ↓
Color Palette Theme (dynamic loading)
  ↓
main.css (global styles)
  ↓
animated.css (animations)
  ↓
owl.css (carousel)
  ↓
fontawesome.css (icons)
```

### Color Palette System

Each theme file defines:

```css
:root {
  --main-color          /* Primary background */
  --secondary-color     /* Card/Section background */
  --third-color         /* Links, primary interactive */
  --accent-color        /* Buttons, highlights */
  --text-color          /* Main text */
  --text-hover-color    /* Hover text */
  --text-muted          /* Secondary text */
  --light-bg-color      /* Light backgrounds */
  --light-color         /* Pure white/light */
  --dark-color          /* Pure dark/black */
  /* ... more variables */
}

[data-theme="dark"] { /* Dark mode */ }
[data-theme="light"] { /* Light mode */ }
```

### Responsive Grid

Bootstrap breakpoints used:

```css
xs: < 576px         /* Mobile */
sm: ≥ 576px         /* Mobile landscape */
md: ≥ 768px         /* Tablet */
lg: ≥ 992px         /* Desktop */
xl: ≥ 1200px        /* Large desktop */
xxl: ≥ 1400px       /* Extra large desktop */
```

## JavaScript Architecture

### Script Loading Order

```html
1. vendor/jquery/jquery.min.js
   ↓ (jQuery provides $ global)
2. Bootstrap 5 Bundle (from CDN)
   ↓ (Adds Bootstrap components)
3. assets/js/owl-carousel.js
   ↓ (Carousel functionality)
4. assets/js/animation.js
   ↓ (WOW.js animations)
5. assets/js/imagesloaded.js
   ↓ (Image detection)
6. assets/js/main.js (defer)
   ↓ (App initialization - runs last)
```

### Script Responsibilities

| Script | Function |
|--------|----------|
| `main.js` | Form handling, interactivity, event config |
| `fbase.js` | Firebase authentication and real-time database |
| `tabs.js` | Tab switching functionality |
| `imagesloaded.js` | Image load detection for animations |
| `utils.js` | Helper functions and utilities |

## Localization Architecture

### i18next Setup

```
locals/
├── en.json    → English text strings
└── ar.json    → Arabic text strings

Both files have identical structure:
{
  "section": {
    "key": "translated text"
  }
}
```

### Translation Keys Hierarchy

```
title/
  main: Page title

header/
  logo/
    part1: "Seo"
    part2: "Space"

menu/
  home, about, services, etc.

banner/
  welcome, description, etc.

about/services/
  data_analysis, data_reporting, etc.

... (continues for each section)
```

### Dynamic Text Rendering

```pug
// Simple translation
h1 #{t('title.main')}

// With interpolation
p #{t('message')}

// Conditional logic with translation
if condition
  span #{t('conditional.text')}
```

## Theme System

### Available Themes

1. **Ignite** - Vibrant, energetic colors
2. **Navy** - Professional, corporate look
3. **New Corporate Tech** - Modern tech aesthetic
4. **Olive Garden Feast** - Earthy, natural tones

### Theme Switching Mechanism

```
CSS Custom Properties (--variables)
  ↓
color-palette/theme-name.css
  ↓
Applied via data-theme attribute
  ↓
Body element: data-theme="dark" or data-theme="light"
  ↓
CSS selects via [data-theme="..."]
```

### RTL Support

```
lang === 'ar'
  ↓
dir="rtl" on body
  ↓
Bootstrap handles RTL layout
  ↓
CSS logical properties apply
```

## Responsive Layout

### Container System

```
Body
  └── .container (Bootstrap max-width container)
      └── .row (Flexbox grid row)
          ├── .col-lg-6 (6 columns on lg screens ≥992px)
          ├── .col-lg-4 (4 columns on lg screens ≥992px)
          ├── .col-md-8 (8 columns on md screens ≥768px)
          └── .col-sm-12 (12 columns on sm screens <768px)
```

### Responsive Breakpoints

Bootstrap 5 media query breakpoints:

```css
/* Mobile First Approach */
/* xs: < 576px (default) */
/* sm >= 576px */
@media (min-width: 576px) { ... }

/* md >= 768px */
@media (min-width: 768px) { ... }

/* lg >= 992px */
@media (min-width: 992px) { ... }

/* xl >= 1200px */
@media (min-width: 1200px) { ... }

/* xxl >= 1400px */
@media (min-width: 1400px) { ... }
```

### Utility Classes

- Flexbox: `d-flex`, `justify-content-center`, `align-items-center`
- Spacing: `p-*`, `m-*`, `mt-*`, `mb-*`
- Text: `text-center`, `text-muted`
- Display: `d-none`, `d-block`, `d-lg-block`

## Animation System

### WOW.js Implementation

```javascript
// In animation.js
new WOW().init();

// In HTML - adds animation classes
.wow.fadeInDown(data-wow-duration="1s" data-wow-delay="0.5s")
.wow.slideInUp(data-wow-duration="0.75s" data-wow-delay="0s")
```

### Preloader Animation

```
Preloader appears while page loads
  ↓ (Hides after page ready)
Content animates in progressively
```

## Form System

### Contact Form Structure

```
form#contact
  ├── input[name="name"]
  ├── input[name="surname"]
  ├── input[name="email"]
  ├── textarea[name="message"]
  └── button[type="submit"]
```

### Form Handling

- HTML5 validation (pattern, required attributes)
- JavaScript submission handling in `main.js`
- AJAX form submission or traditional POST

## Performance Optimization

### Techniques Used

1. **CSS**
   - Bootstrap CDN (cached by browsers)
   - Minified production builds
   - CSS custom properties for theme switching (no recompile needed)

2. **Images**
   - Optimized PNG/JPG formats
   - Lazy loading ready
   - Responsive image support

3. **JavaScript**
   - Defer attribute for non-critical scripts
   - Minified bundles
   - Selective jQuery usage

4. **Fonts**
   - Google Fonts with preconnect
   - Font-display: swap for performance

## Browser Compatibility

### Target Browsers

- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- Mobile: iOS Safari 12+, Chrome Mobile latest

### Polyfills & Fallbacks

- Bootstrap 5 handles modern CSS
- jQuery for cross-browser compatibility
- CSS Grid/Flexbox fallbacks in CSS

## Security Considerations

### Implemented Security

- Content Security Policy ready
- No inline scripts (all external)
- Form input validation
- CSRF token ready in forms (backend needed)

### Best Practices

- Keep dependencies updated: `npm audit`
- Sanitize user input on backend
- HTTPS for production
- Secure form submission endpoints

## Deployment Architecture

### Production Build

```
Development (watch mode)
  ↓
npm run watch:gulp (auto-recompile via Gulp)
  ↓
output-*.html generated in public/ directory
  ↓
Deploy to web server
```

### File Structure for Production

```
public/
├── index.html (or output-en-theme-navy-dark.html)
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── fonts/
└── vendor/
    ├── bootstrap/
    └── jquery/
```

## Scalability Considerations

### For Adding Features

1. **New Sections**: Add to `index.pug`, add translations to locals
2. **New Themes**: Create new CSS file in `color-palette/`
3. **New Functionality**: Add to `main.js`
4. **New Languages**: Create new JSON in `locals/`

### Component Reusability

Use Pug mixins for repeated components:

```pug
mixin serviceCard(title, description, icon)
  .service-card
    img(src=icon)
    h3= title
    p= description

// Usage
+serviceCard('SEO', 'Search optimization', 'icon.png')
```

---

This architecture supports scalability, maintainability, and smooth development workflow.

---

**Last Updated:** March 9, 2026
**Version:** 2.3.0
**Status:** Current & Maintained  
**Version:** 2.2.2
