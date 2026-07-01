# Installation Guide

## System Requirements

- **Node.js**: v18.0.0 or higher
- **npm**: v8.0.0 or higher (comes with Node.js)
- **Operating System**: Windows, macOS, or Linux
- **Disk Space**: ~500MB (including node_modules)
- **RAM**: 2GB minimum recommended

## Step-by-Step Installation

### 1. Clone or Download Project

```bash
# Option A: If you have git installed
git clone <repository-url>
cd seo

# Option B: Download and extract zip file
cd path/to/seo
```

### 2. Install Node.js Dependencies

```bash
npm install
```

This installs the current toolchain from `package.json`, including Gulp, Rollup, Babel, Firebase, Bootstrap, and ESLint.

**Installation time**: Usually 2-5 minutes depending on internet speed.

### 3. Understand Project Structure

The project is organized as follows:

```
src/
├── index.pug                    # Main template entry point
├── layout.pug                   # Shared page layout
├── pages/                       # Login, signup, and profile templates
├── mixins/                      # Reusable UI sections
├── partials/                    # Shared partial templates
├── sections/                    # Page sections
├── assets/                      # Static files
│   ├── css/                     # Stylesheets and palettes
│   ├── js/                      # App logic and Firebase helpers
│   ├── images/                  # Images and graphics
│   ├── fonts/                   # Custom fonts
│   └── sounds/                  # Audio effects
└── locals/                      # Translation files
    ├── en.json                  # English strings
    └── ar.json                  # Arabic strings
```

### 4. Available npm Scripts

```bash
npm run gulp          # Compile templates and assets once
npm run watch:gulp    # Rebuild on template and stylesheet changes
npm run watch:rollup  # Rebuild JavaScript bundles on changes
npm run lint          # Check code quality
npm run lint:fix      # Auto-fix lint issues
npm run deploy        # Deploy the public/ folder to Firebase Hosting
```

### 5. Verify Installation

```bash
npm list --depth=0
npm list gulp rollup babel firebase bootstrap
```

### 6. Start Development

```bash
# Rebuild templates and assets when files change
npm run watch:gulp

# In a second terminal, watch JavaScript bundles
npm run watch:rollup
```

**Output**: HTML files are written to the `public/` directory using the pattern `output-index-{lang}-{mode}-{theme}.html`.

**Example generated files:**
- `public/output-index-en-dark-navy.html`
- `public/output-index-en-light-navy.html`
- `public/output-index-ar-dark-loyal-green.html`
- `public/output-index-ar-light-cranberries.html`
## Troubleshooting Installation

### Issue: "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org/

### Issue: Permission Denied
**Solution** (macOS/Linux):
```bash
sudo npm install -g npm
```

### Issue: npm install takes too long
**Solutions**:
- Check internet connection
- Clear npm cache: `npm cache clean --force`
- Use faster npm mirror: `npm config set registry https://registry.npmjs.org/`

### Issue: Pug compilation fails
**Solutions**:
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be v14+)
- Verify `gulp.cjs` exists in root directory
- Run: `npm run watch:gulp` to compile Pug templates

### Issue: Port already in use (if using dev server)
**Solution**: Change port in development configuration or kill process using the port

## Post-Installation Setup

### 1. Configure Environment Variables (if needed)

Create `.env` file in root directory:

```env
NODE_ENV=development
LANG=en
THEME=navy
MODE=dark
```

### 2. Verify Output Files

Check if HTML files were generated:

```bash
ls -la output-*.html
```

Expected files:
- `output-en-theme-navy-dark.html`
- `output-en-theme-navy-light.html`
- `output-ar-theme-navy-dark.html`
- `output-ar-theme-navy-light.html`
- (And other theme combinations)

### 3. Test in Browser

Open generated HTML file in web browser:
- Right-click on HTML file → Open with browser
- Or: `open output-en-theme-navy-dark.html` (macOS)
- Or: `start output-en-theme-navy-dark.html` (Windows)

## Development Environment Setup

### IDE/Editor Recommendations

1. **Visual Studio Code** (Recommended)
   - Install extensions:
     - Pug beautifier
     - ESLint
     - Prettier
     - Live Server

2. **WebStorm**
   - Built-in Pug support
   - Integrated npm tasks

3. **Sublime Text**
   - Pug Syntax highlighting package

### Browser Setup for Development

1. **Chrome DevTools**
   - Inspect element to verify HTML structure
   - Check CSS in Styles panel
   - Use Console for JavaScript debugging

2. **Browser Extensions**
   - Web Developer Tools
   - ColorPick Eyedropper (for color matching)
   - Responsive Viewer

### Local Development Server (Optional)

For hot-reload development server:

```bash
# Install Live Server globally
npm install -g live-server

# Run in project directory
live-server
```

## Updating Dependencies

### Check for Outdated Packages

```bash
npm outdated
```

### Update to Latest Versions

```bash
# Update all packages to latest
npm update

# Or update specific package
npm install pug@latest
```

## Uninstallation

### Remove Node Modules

```bash
# Delete node_modules folder
rm -rf node_modules

# Clear npm cache
npm cache clean --force
```

### Reinstall from Scratch

```bash
# Remove dependencies
rm -rf node_modules

# Install fresh
npm install
```

## Common Tasks After Installation

### First-time Build

```bash
npm run watch
```

This will:
1. Compile `index.pug` to HTML files
2. Watch for changes
3. Auto-recompile on save
4. Generate output in root directory with all language/theme combinations

### Generate Single Build

```bash
npm start
```

One-time compilation without watching.

### Lint Code

```bash
npx eslint .
```

### Check Version of Installed Packages

```bash
npm list pug
npm list bootstrap
npm list i18next
```

## Next Steps

After successful installation:

1. Read [README.md](README.md) for project overview
2. Check [CONFIGURATION.md](CONFIGURATION.md) for setup options
3. Review [DEVELOPMENT.md](DEVELOPMENT.md) for development guidelines
4. Read [LOCALIZATION.md](LOCALIZATION.md) to work with translations
5. Check [COLOR_PALETTE.md](COLOR_PALETTE.md) for theme customization

## Support & Resources

- **Official Documentation**:
  - Pug: https://pugjs.org/api/getting-started.html
  - Bootstrap: https://getbootstrap.com/docs/5.3/
  - i18next: https://www.i18next.com/
  - jQuery: https://jquery.com/

- **Troubleshooting**:
  - Node.js: https://nodejs.org/en/docs/
  - npm: https://docs.npmjs.com/

- **Community Help**:
  - Stack Overflow: Tag with [pug], [bootstrap], [i18next]
  - GitHub Issues: Check project repository

## Security Notes

- Keep Node.js and npm updated
- Run `npm audit` to check for vulnerabilities:
  ```bash
  npm audit
  ```
- Fix vulnerabilities:
  ```bash
  npm audit fix
  ```

---

Installation complete! You're ready to start developing. 🚀

---

**Last Updated:** February 23, 2026  
**Version:** 2.4.1
