# SEO Nexus - Frontend Project Documentation

## Overview

SEO Nexus is a modern, responsive HTML5 template for a digital marketing and SEO agency. Built with **Pug templating**, **Bootstrap 5**, and **i18next localization**, it provides a comprehensive solution for showcasing SEO services and digital marketing capabilities.

## Features

- 🌍 **Multi-language Support** - English (en) and Arabic (ar) localization
- 🎨 **Multiple Color Themes** - Ignite, Navy, Corporate Tech, Olive Garden Feast
- 🌓 **Dark/Light Mode** - Dynamic theme switching
- ⚡ **Responsive Design** - Mobile-first Bootstrap 5 framework
- 🎯 **SEO Optimized** - Built with SEO best practices
- 📦 **Modern Build Tools** - Pug templating, ESLint, automated compilation
- ♿ **Accessible** - Semantic HTML and ARIA attributes
- 🎬 **Smooth Animations** - WOW.js animations and CSS transitions
- 📅 **Auto-compilation** - Watch mode for development

## Project Structure

```
seo/
├── index.pug                          # Main template file
├── package.json                       # Node.js dependencies
├── compilepg.cjs                      # Pug compilation script
├── eslint.config.mjs                  # ESLint configuration
├── prepros.config                     # Prepros build tool config
│
├── assets/                            # Static assets
│   ├── css/                           # Stylesheets
│   │   ├── main.css                   # Main styles
│   │   ├── animated.css               # Animation styles
│   │   ├── fontawesome.css            # Icon library
│   │   ├── owl.css                    # Carousel styles
│   │   └── color-palette/             # Theme color palettes
│   │       ├── Ignite.css
│   │       ├── navy.css
│   │       ├── new-corporate-tech.css
│   │       └── olive-garden-feast.css
│   ├── js/                            # JavaScript files
│   │   ├── main-custom.js             # Custom app logic
│   │   ├── animation.js               # Animation effects
│   │   ├── tabs.js                    # Tab functionality
│   │   ├── owl-carousel.js            # Carousel script
│   │   ├── isotope.js                 # Filtering library
│   │   ├── imagesloaded.js            # Image loading detection
│   │   ├── jquery.countup.min.js      # Counter animation
│   │   ├── noframework.waypoints.min.js # Scroll detection
│   │   └── utils.js                   # Utility functions
│   ├── fonts/                         # Custom fonts
│   └── images/                        # Images and graphics
│
├── locals/                            # Localization files
│   ├── en.json                        # English translations
│   └── ar.json                        # Arabic translations
│
├── vendor/                            # Third-party libraries
│   ├── bootstrap/                     # Bootstrap framework
│   └── jquery/                        # jQuery library
│
├── output-*.html                      # Generated HTML files
│   └── (auto-generated from index.pug)
│
└── Documentation/                     # Project documentation
    ├── README.md                      # This file
    ├── INSTALLATION.md                # Setup instructions
    ├── ARCHITECTURE.md                # Project structure
    ├── COLOR_PALETTE.md               # Theme documentation
    ├── CONFIGURATION.md               # Configuration guide
    ├── DEVELOPMENT.md                 # Development guidelines
    └── LOCALIZATION.md                # Translation guide
```

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd d:\projects\seo

# Install dependencies
npm install

# Start development server with watch mode
npm run watch

# Or compile once
npm start
```

### Output Files

Generated HTML files are automatically created in the root directory:
- `output-en-theme-*.html` - English versions with different themes
- `output-ar-theme-*.html` - Arabic versions with different themes

## Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Pug** | 3.0.3 | Template engine |
| **Bootstrap** | 5.3.8 | CSS framework |
| **jQuery** | 4.0.0 | JavaScript library |
| **i18next** | 25.8.0 | Localization |
| **ESLint** | 9.39.2 | Code quality |
| **nodemon** | 3.1.11 | Development auto-reload |
| **Animate.css** | 4.1.1 | CSS animations |
| **WOW.js** | - | Scroll animations |
| **Owl Carousel** | 0.9.1 | Image carousel |


## Page Sections

### 1. **Header**
- Sticky navigation bar with smooth scrolling
- Logo branding
- Menu items with active state
- Mobile menu trigger
- CTA button (Contact Now)

### 2. **Hero Banner**
- Welcome message and headline
- Subheading with emphasis
- Call-to-action search form
- Banner image

### 3. **About Section**
- About company overview
- Four service highlight cards:
  - Data Analysis
  - Data Reporting
  - Web Analytics
  - SEO Suggestions

### 4. **Services Section**
- Detailed service description
- Skill progress bars showing expertise:
  - Website Analysis (84%)
  - SEO Reports (88%)
  - Page Optimizations (94%)
- Service illustration image

### 5. **Portfolio Section**
- Showcase of completed projects/case studies
- Hover effects revealing project details
- Portfolio grid layout

### 6. **Blog Section**
- Blog articles section heading
- Decorative elements

### 7. **Contact Section**
- Contact form with fields:
  - Name
  - Surname
  - Email
  - Message
- Phone contact information
- Form validation

### 8. **Footer**
- Copyright information
- Design credits

## Features Details

### Multi-Language Support
- Seamlessly switch between English and Arabic
- RTL support for Arabic text
- Language-specific translations in `locals/` folder

### Theme System
- Four pre-designed color palettes
- Dark/Light mode toggle
- Dynamic theme switching via data attributes
- CSS custom properties for easy customization

### Animations
- Page load animations using WOW.js
- Smooth scroll effects
- Hover state animations
- Counter animations for statistics

### Responsive Design
- Mobile-first Bootstrap 5 grid
- Touch-friendly interface
- Optimized for all screen sizes
- Breakpoints: xs, sm, md, lg, xl, xxl

## Configuration

See [CONFIGURATION.md](CONFIGURATION.md) for:
- Environment variables
- Theme customization
- Build settings
- Development server configuration

## Development

See [DEVELOPMENT.md](DEVELOPMENT.md) for:
- Code structure and conventions
- Adding new features
- Customizing styles
- Debugging tips
- Performance optimization

## Localization

See [LOCALIZATION.md](LOCALIZATION.md) for:
- Adding new languages
- Managing translations
- String interpolation
- RTL text handling

## Color Palettes

See [COLOR_PALETTE.md](COLOR_PALETTE.md) for:
- Theme color specifications
- Dark/Light mode defaults
- Creating custom themes
- Color variable reference

## Architecture

See [ARCHITECTURE.md](ARCHITECTURE.md) for:
- Project organization
- Component structure
- Build process
- File compilation flow

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Scripts

### Available NPM Scripts

```bash
npm start        # Compile Pug templates once
npm run watch    # Watch mode - auto-recompile on changes
```

### Manual Compilation

The project uses `compilepg.cjs` for Pug compilation:
```bash
node compilepg.cjs
```

## Performance

- Optimized images and assets
- Lazy loading support for images
- Minified CSS and JavaScript
- CDN delivery for Bootstrap and jQuery
- Preload for Google Fonts

## SEO Optimization

- Semantic HTML markup
- Meta tags configuration
- Open Graph support ready
- Structured data ready
- Sitemap compatible structure

## Common Tasks

### Change Theme
Modify the `theme_name` variable in compilation process or update `data-theme` attribute.

### Add New Page Section
1. Create new Pug mixin in `index.pug`
2. Add translations to `locals/en.json` and `locals/ar.json`
3. Add styling to `assets/css/main.css`
4. Recompile using `npm run watch`

### Switch Language
Update language variable before compilation or use dynamic language switcher in JavaScript.

### Customize Colors
Edit CSS variables in `assets/css/color-palette/theme-name.css`

## Troubleshooting

- **Templates not compiling**: Check `compilepg.cjs` configuration and Node.js path
- **Styles not applying**: Clear browser cache, verify CSS file paths
- **Translations missing**: Check `locals/` JSON files for correct keys
- **Animations not working**: Ensure `assets/js/animation.js` is loaded

## License

ISC License - See package.json for details

## Author

Created by Mostafa Lotfy

---


