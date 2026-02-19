# Installation Guide

## System Requirements

- **Node.js**: v14.0.0 or higher
- **npm**: v6.0.0 or higher (comes with Node.js)
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

This will install all required packages listed in `package.json`:
- Pug template engine
- Bootstrap framework
- jQuery
- i18next localization
- ESLint for code quality
- nodemon for development watch mode
- And more...

**Installation time**: Usually 2-5 minutes depending on internet speed

### 3. Verify Installation

Check if dependencies installed correctly:

```bash
npm list
```

Or check specific packages:

```bash
npm list pug
npm list bootstrap
npm list i18next
```

### 4. Start Development

```bash
# Watch mode - automatically recompiles on file changes
npm run watch

# Or compile once
npm start
```

**Output**: HTML files will be generated in the root directory with pattern `output-[lang]-theme-[theme-name].html`

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
- Verify `compilepg.cjs` exists in root directory

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

**Last Updated:** February 20, 2026  
**Version:** 2.2.2
