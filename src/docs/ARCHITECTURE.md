# Project Architecture

## Overview

SEO Nexus Frontend uses a modular, component-based architecture with Pug templating, Bootstrap for styling, and i18next for localization.

## Core Architecture Pattern

```
Pug Templates (index.pug)
         ↓
    Compilation (compilepg.cjs)
         ↓
    HTML Output (output-*.html)
         ↓
    Browser Rendering
         ↓
    JavaScript Enhancement (main-custom.js)
         ↓
    Interactive Website
```

## Directory Organization

### Root Level Files

```
seo/
├── index.pug              # Main template file - single source of truth
├── compilepg.cjs          # Build script for Pug compilation
├── eslint.config.mjs      # ESLint configuration for code quality
├── package.json           # Project metadata and dependencies
├── prepros.config         # Prepros build tool configuration (optional)
└── .env                   # Environment variables (optional)
```

### `assets/` Directory Structure

```
assets/
├── css/
│   ├── main.css           # Global styles
│   ├── animated.css       # Animation styles
│   ├── fontawesome.css    # Icon library
│   ├── owl.css            # Carousel styles
│   └── color-palette/     # Theme color definitions
│       ├── Ignite.css
│       ├── navy.css
│       ├── new-corporate-tech.css
│       └── olive-garden-feast.css
├── js/
│   ├── main-custom.js     # Main application logic
│   ├── animation.js       # WOW.js animation setup
│   ├── owl-carousel.js    # Carousel initialization
│   ├── tabs.js            # Tab component logic
│   ├── isotope.js         # Filtering/sorting
│   ├── imagesloaded.js    # Image loading detection
│   ├── jquery.countup.min.js    # Counter animation plugin
│   ├── noframework.waypoints.min.js  # Scroll detection
│   └── utils.js           # Utility functions
├── images/                # Static images and graphics
└── fonts/                 # Custom font files
```

### `vendor/` Directory (Third-party Libraries)

```
vendor/
├── bootstrap/             # Bootstrap 5 framework
│   ├── css/               # Bootstrap styles
│   └── js/                # Bootstrap JavaScript
└── jquery/                # jQuery library
    ├── jquery.js
    ├── jquery.min.js
    ├── jquery.slim.js
    └── jquery.slim.min.js
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
│           (Edit .pug, .json, or .css)                   │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│         2. File Watcher Detects Change                  │
│            (nodemon monitoring)                         │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│      3. compilepg.cjs Executes Compilation              │
│                                                         │
│  - Reads index.pug                                      │
│  - Loads locale files (en.json, ar.json)               │
│  - Determines active theme                              │
│  - Processes Pug syntax                                │
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
│  - output-ar-theme-navy-light.html                     │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│    5. Browser Loads Generated HTML                      │
│    6. Browser Loads CSS & JavaScript                    │
│    7. Page Renders with Theme & Language                │
└─────────────────────────────────────────────────────────┘
```

## Template Architecture (index.pug)

### Pug Structure

```pug
doctype html
html(lang=lang)
  head
    // Meta tags
    // CSS imports
    // Font loading
  body(dir=lang === 'ar' ? 'rtl' : 'ltr', data-theme=mode)
    // Preloader
    // Header (Navigation)
    // Main Banner (Hero)
    // About Section
    // Services Section
    // Portfolio Section
    // Blog Section
    // Contact Section
    // Footer
    // Scripts
```

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
6. assets/js/main-custom.js (defer)
   ↓ (App initialization - runs last)
```

### Script Responsibilities

| Script | Function |
|--------|----------|
| `main-custom.js` | Form handling, interactivity, event listeners |
| `animation.js` | Scroll animations setup, WOW.js initialization |
| `owl-carousel.js` | Carousel/slider initialization and config |
| `tabs.js` | Tab switching functionality |
| `isotope.js` | Portfolio filtering and sorting |
| `imagesloaded.js` | Image load detection for animations |
| `jquery.countup.min.js` | Counter animation for statistics |
| `utils.js` | Helper functions, utilities |

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
    part1: "Spac"
    part2: "Dyna"

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
  └── .container (Bootstrap)
      └── .row (Grid row)
          ├── .col-lg-6 (6 columns on large screens)
          ├── .col-lg-4 (4 columns on large screens)
          └── .col-sm-12 (12 columns on small screens)
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
- JavaScript submission handling in `main-custom.js`
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
npm run watch (auto-recompile)
  ↓
output-*.html generated
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
3. **New Functionality**: Add to `main-custom.js`
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
