# Changelog

All notable changes to the SEO Space template are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.4.2] - 2026-03-03

### Documentation
- **Enhanced Color Palette Documentation** - Complete overhaul of theme documentation
  - Added comprehensive inline comments to all CSS variable files for clarity
  - Added missing CSS variables (--text-muted-placeholder, --text-accent-color, --list-color) for consistency across themes
  - Updated COLOR_PALETTE.md with complete variable reference system (40+ variables categorized by purpose)
  - Fixed formatting issues and organized variables into logical sections
  - Synchronized documentation with actual CSS values from all five theme files
  - Added previously missing Cranberries theme to documentation
  - Updated all existing theme specifications with accurate color values

### Quality Improvements
- Improved CSS variable organization with section headers and comments
- Enhanced consistency across all five color palette files (Loyal Green, Navy, New Corporate Tech, Olive Garden Feast, Cranberries)
- Better developer experience with clear variable categorization and documentation

---

## [2.4.1] - 2026-02-23

### Features
- **Authentication Pages** - Complete auth system with login, profile, and signup pages
  - Individual page templates: `src/pages/login.pug`, `profile.pug`, `signup.pug`
  - Custom navbar component with auth integration
  - Page-specific translations and styling

- **Custom Navigation** - Enhanced navbar with auth-aware navigation
  - Dynamic navbar component in `src/mixins/auth/navbar.pug`
  - Support for authenticated and unauthenticated states

- **Preloader Component** - Visual loading indicator
  - Preloader mixin in `src/mixins/preloader.pug`
  - Auto-hide on page load

- **Theme Enhancement** - New color palette added
  - Added `loyal-green.css` theme variant
  - Updated color palette system for flexibility

### Build System
- **Rollup Integration** - JavaScript bundling and optimization
  - `rollup.config.mjs` for ES module bundling
  - Webpack plugin support for postcss
  
- **Gulp Updates** - Enhanced build pipeline
  - Updated `gulp.cjs` with latest configurations
  - Improved asset compilation workflow

### Dependencies
- Added rollup plugins for enhanced bundling
- Updated package dependencies for better performance
- jQuery added as npm package for improved performance

### Translations
- Updated translations for new authentication pages
- Added translations for profile and login flows
- Maintained multi-language support for all new features

### Bug Fixes
- Fixed expression handling in templates
- Fixed gulp script compatibility with auth pages
- Fixed layout and structuring for pug files
- Updated CSS and layout for better consistency

---

## [2.3.0] - 2026-02-20

### Features
- **AI Assistant Functionality** - Chatbot integration
  - AI assistant dialog/chat component
  - Firebase real-time integration ready

- **Dark/Light Mode Toggle** - Theme switching capability
  - User preference persistence via localStorage
  - Smooth transitions between themes
  - System preference detection support

- **Enhanced Color Themes** - Theme system improvements
  - Better color variable organization
  - More consistent theme application
  - Support for dynamic theme switching

### Build System
- **Rollup Integration** - JavaScript module bundling
  - ES6+ transformation and optimization
  - Tree shaking for smaller bundles
  - Source map generation

- **Updated npm Scripts** - Improved development workflow
  - Separate build and watch commands
  - Plugin management enhancements

### Styling
- **Chatbox Styling** - New styles for assistant component
  - `src/assets/css/chatbox.css` for chat interface
  - Responsive design for all screen sizes

### Infrastructure
- **Firebase Support** - Backend integration ready
  - Firebase hosting configuration
  - Real-time database support
  - Authentication prepared

### Improvements
- Added Babel for modern JavaScript transpilation
- Enhanced asset loading and caching
- Improved development server experience

---

## [2.2.3] - 2026-02-23

### Documentation

#### Updated
- **ARCHITECTURE.md** - Synchronized with current src folder structure
  - Updated Root Level Files section to show src/ subdirectories (components/, pages/, mixins/, etc.)
  - Updated `assets/` directory structure with actual file inventory:
    - Changed `main-custom.js` to `main.js`
    - Added `fbase.js` (Firebase integration)
    - Added `chatbox.css` to CSS section
    - Added `sounds/` folder with audio files (open.wav, close.mp3)
    - Removed obsolete animation files (animation.js, owl-carousel.js, isotope.js, jquery.countup, waypoints)
  - Added `pages/` directory documentation (login.pug, profile.pug, signup.pug)
  - Added `mixins/` directory with complete mixin inventory (about, assistants, auth, banner, blog, contact, footer, header, headSection, portfolio, preloader, services)
  - Updated Build Process flow to reference gulp.cjs with comprehensive compilation steps
  - Updated Script Loading Order and Responsibilities to reflect current JavaScript architecture
  - Updated Template Architecture section with src/index.pug, layout.pug, and pages structure

- **ARCHITECTURE.md (Arabic)** - Full Arabic translation updated with same structure changes
  - Complete synchronization with English version
  - All directory structures translated to Arabic
  - Updated compilation process description in Arabic
  - Updated script responsibilities table in Arabic

#### Synchronized
- Pulled latest changes from origin/dev branch
- Documentation now reflects actual project structure (as of Feb 23, 2026)

---

## [2.2.2] - 2026-02-20

### Fixed
- Updated `.gitignore` to better exclude build artifacts and environment files.

---

## [2.2.1] - 2026-02-16

### Build & Tooling

#### Added
- Integrated Babel for modern JavaScript transpilation.
- Added Gulp watch modes for automated rebuilds during development.

#### Fixed
- Corrected various image path resolutions in themes.
- Adjusted message alignment in UI components.

---

## [1.2.1] - 2026-02-15

### Build & Tooling

#### Fixed
- Corrected path resolution in `gulp.cjs` for Pug compilation output directory
- Resolved minor CSS concatenation issues in the `app-css` Gulp task
- Improved Babel transpilation output compatibility across target browsers

#### Changed
- Updated New Corporate Tech theme image preview asset
- Tweaked CSS styles for improved visual consistency across themes
- Refreshed `.browserslistrc` targets for more accurate Babel and CSS processing

---

## [1.2.0] - 2026-02-10

### Major Build System Overhaul

Complete replacement of the legacy `compilepg.cjs` script with a full **Gulp-based build pipeline**, adding Firebase hosting deployment, Babel transpilation, and consolidated asset bundling.

#### Added

**Gulp Build System (`gulp.cjs`)**
- `gulp` (v5.0.1) as the primary task runner
- `app-js` task — concatenates and minifies all JS files via `gulp-uglify` → `public/dist/app.mjs`
- `app-css` task — concatenates all CSS files → `public/dist/css/app.css`
- `pug` task — compiles Pug templates for all 4 themes × 2 languages × 2 modes (16 HTML files) → `public/`
- `watch` task — live-watches `src/assets/js/`, `src/assets/css/`, and `src/index.pug`
- Default export runs `app-css → app-js → pug` in sequence
- `gulp-concat` (v2.6.1), `gulp-uglify` (v3.0.2), `gulp-pug` (v5.0.0), `gulp-preprocess` (v6.0.0)

**npm Scripts (updated `package.json`)**
- `npm start` — runs all processes concurrently (gulp, lint, deploy, babel)
- `npm run watch` — `gulp -f gulp.cjs watch`
- `npm run gulp` — runs the full build pipeline
- `npm run babel` — transpiles JS via Babel to `public/dist/`
- `npm run deploy` — deploys to Firebase Hosting
- `npm run lint` / `npm run lint:fix` — ESLint for CSS and JS

**Babel Transpilation**
- `@babel/cli` (v7.28.6), `@babel/core` (v7.29.0), `@babel/preset-env` (v7.29.0) added
- `babel.config.json` — configures preset-env with `core-js` polyfills
- `core-js` (v3.48.0) — runtime polyfills for modern JS features

**Firebase Hosting Integration**
- `firebase` (v12.9.0) dependency added
- `firebase.json` — hosting configuration pointing to the `public/` directory
- `.firebaserc` — project alias configuration
- `.firebase/` — Firebase deployment state and manifest

**Security & Utilities**
- `dompurify` (v3.3.1) — HTML sanitization library added for safer DOM manipulation
- `jsdom` (v28.1.0) — DOM simulation for server-side processing
- `dotenv` (v17.2.3) — `.env` file support (loaded in `gulp.cjs`)
- `concurrently` (v9.2.1) — parallel npm script runner

**Development Tooling**
- `globals` (v17.2.0) — ESLint globals reference
- `scss` (v0.2.4) — SCSS support added to dev dependencies
- `gulp-sequence` (v1.0.0) — task sequencing utility
- TypeScript type definitions: `@types/jquery`, `@types/node`, `@types/pug`, `@types/core-js`
- `.prettierrc` — Prettier formatting configuration

**Output Directory Restructure**
- All compiled HTML output now goes to `public/` (renamed from previous `dist/`)
- `public/dist/` — minified JS and CSS bundles
- `public/assets/` — static assets (images, fonts)
- `public/vendor/` — third-party libraries
- `public/views/` — compiled view partials

#### Changed
- **Removed** `compilepg.cjs` — replaced by `gulp.cjs`
- **Removed** `nodemon` from dependencies (no longer needed; Gulp watch replaces it)
- **Removed** `pug` from runtime dependencies → moved to Gulp pipeline
- **Removed** `owljs`, `waypoints`, `i18next` from `package.json` (bundled via vendor folder directly)
- `package.json` version bumped to `1.2.0`

---

## [1.1.0] - 2026-02-05

### Documentation Expansion & New Corporate Tech Theme Enhancement

#### Added

**New Documentation Files**
- `DEPLOYMENT.md` — Comprehensive deployment guide covering FTP, GitHub Pages, Netlify, Vercel, AWS S3 + CloudFront, SSL/HTTPS setup, post-deployment verification, and performance benchmarks
- `QUICK_REFERENCE.md` — Developer cheat sheet: npm commands, translation key conventions, theme file locations, CSS class reference, Git commands, and browser DevTools shortcuts
- `TROUBLESHOOTING.md` — 349-line troubleshooting guide covering installation, compilation, localization, theming, performance, responsive design, and browser compatibility issues
- `INDEX.md` — Master documentation index with navigation guide for different user roles (new users, developers, designers, deployment specialists)
- `DOCUMENTATION_UPDATE_SUMMARY.md` — Internal summary of the documentation overhaul

**Arabic Documentation (`src/docs/ar/`)**
- Full Arabic translations of all 16 documentation files added under `src/docs/ar/`
- RTL-aware formatting for all Arabic documentation

#### Changed
- `README.md` — Enhanced with tagline, reorganized features by category, improved quick start guide with actual output file names, added documentation index
- `CHANGELOG.md` — Expanded from ~100 to 583 lines with detailed feature descriptions, roadmap, and component changelog
- New Corporate Tech theme — updated with additional image assets and refined color palette

#### Fixed
- Corrected duplicate `DEVELOPMENT.md` entry in the documentation list
- Improved translation key consistency across `en.json` and `ar.json`

---

## [1.0.0] - 2026-02-01

### Initial Release ✨

A complete, production-ready HTML5 template for digital marketing and SEO agencies with multi-language support, multiple themes, and a modern development workflow.

#### Added

**Core Template & Structure**
- Pug template engine (`src/index.pug`) — single source of truth for all HTML output
- 16 pre-compiled, production-ready HTML files
  - 2 languages: English (`en`) & Arabic (`ar`) with RTL support
  - 4 professional themes: Ignite, Navy, Corporate Tech, Olive Garden Feast
  - 2 display modes: Dark & Light
- Responsive Bootstrap 5.3.8 framework
- Complete page layout: header, hero, about, services, portfolio, blog, contact, footer
- Mobile-first responsive design
- SEO-optimized semantic HTML

**Design & Theming**
- 4 professionally designed color palettes:
  - **Ignite** — Energetic, vibrant brand colors
  - **Navy** — Professional, corporate aesthetic
  - **New Corporate Tech** — Modern technology-focused design
  - **Olive Garden Feast** — Earthy, organic tones
- Dark/Light mode toggle with persistent preference
- CSS custom properties (variables) system for easy color customization
- Animate.css 4.1.1 integration
- FontAwesome icons (5.6.3)
- Owl Carousel for image sliders
- Smooth transitions and hover effects

**Page Sections**
- **Header** — Sticky navigation with smooth scrolling and mobile menu
- **Hero/Banner** — Welcome section with CTA form and headline
- **About** — Company overview with 4 service highlight cards
- **Services** — Detailed service description with skill progress bars
- **Portfolio** — Project showcase with hover effects
- **Blog** — Articles section (extensible)
- **Contact** — Contact form with validation and phone information
- **Footer** — Copyright and company information

**Interactive Features**
- WOW.js scroll animations with customizable delays
- Animated preloader on page load
- Form validation and submission handling
- Animated progress bars for skill display
- Counter animations for statistics (jQuery CountUp)
- Portfolio filtering with Isotope.js support
- Mobile-optimized touch interactions

**Localization & Multi-Language**
- `locals/en.json` — complete English translations
- `locals/ar.json` — complete Arabic translations with RTL support
- i18next integration (v25.8.0)
- Automatic LTR/RTL text direction switching
- Complete translation key hierarchy

**Development Tools & Configuration**
- `compilepg.cjs` — multi-output Pug compilation script (later replaced by Gulp in v1.2.0)
- `package.json` — dependency management
- `eslint.config.mjs` — ESLint configuration for code quality
- `prepros.config` — Prepros build tool configuration
- `.env` file support for environment variables
- npm scripts: `build` and `watch` modes

**Initial Dependencies**
- Bootstrap 5.3.8, jQuery 4.0.0, Pug 3.0.3, i18next 25.8.0
- Animate.css 4.1.1, Owl Carousel 0.9.1, Waypoints 4.0.1
- FontAwesome 5.6.3, nodemon 3.1.11
- ESLint 9.39.2, `@eslint/js`, `@eslint/css`, `@eslint/json`

**Initial Documentation (8 files)**
- `README.md` — Project overview and quick start
- `INSTALLATION.md` — Step-by-step setup and troubleshooting
- `ARCHITECTURE.md` — Technical architecture and project structure
- `COLOR_PALETTE.md` — Theme customization guide
- `CONFIGURATION.md` — Configuration reference
- `DEVELOPMENT.md` — Development workflow and guidelines
- `LOCALIZATION.md` — Translation management and language guide
- `FAQ.md` — Frequently asked questions and solutions
- `CHANGELOG.md` — Version history (this file)
- `CODECANYON_ITEM_DESCRIPTION.md` — CodeCanyon listing description
- `CODECANYON_SETUP_GUIDE.md` — Quick setup guide for CodeCanyon buyers

#### Version Details
- **Release Date:** February 1, 2026
- **Node.js Requirement:** v14.0.0+
- **npm Requirement:** v6.0.0+
- **Supported Browsers:** Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile Support:** Full responsive design for all screen sizes

#### Known Limitations
- Requires Node.js and npm for development (pre-compiled HTML files don't need them)
- Backend integration required for form submission
- Database integration not included

#### Migration Notes
- First release — no migration needed
- All 16 HTML files are independent and can be deployed separately

---

## Version History

| 2.2.2   | 2026-02-20   | **Current** |
| 2.2.1   | 2026-02-16   | Superseded  |
| 1.2.1   | 2026-02-15   | Superseded  |
| 1.2.0   | 2026-02-10   | Superseded  |
| 1.1.0   | 2026-02-05   | Superseded  |
| 1.0.0   | 2026-02-01   | Superseded  |

---

## Semantic Versioning

Format: `MAJOR.MINOR.PATCH`

- **MAJOR**: Breaking changes (e.g., complete build system overhaul)
- **MINOR**: New features, backward compatible
- **PATCH**: Bug fixes and minor improvements

---

## Roadmap

### Planned for Future Releases

- [ ] Additional language support (Spanish, French, German)
- [ ] More theme variations
- [ ] Component library documentation
- [ ] Video content sections
- [ ] Newsletter signup integration
- [ ] Client testimonials slider
- [ ] Team member showcase section
- [ ] Pricing section
- [ ] Blog listing and detail pages
- [ ] Search functionality
- [ ] Analytics integration examples
- [ ] React/Next.js version

---

## Credits

- **Design & Development:** Mostafa Lotfy
- **Bootstrap 5** (MIT License)
- **jQuery** (MIT License)
- **Pug** (MIT License)
- **i18next** (MIT License)
- **Animate.css** (Hippocratic License)
- **WOW.js** (MIT License)
- **Owl Carousel** (MIT License)
- **FontAwesome** (CC BY 4.0)
- **DOMPurify** (Apache-2.0 / MPL-2.0)
- **Firebase** (Apache-2.0)

---

**Last Updated:** February 23, 2026
**Current Version:** 2.4.1
**Status:** Active ✓

For detailed information, see the [documentation index](INDEX.md) or the [README](README.md).
