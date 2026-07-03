# Troubleshooting Guide

## Installation Issues

### "npm: command not found"

**Problem:** npm is not installed or not in PATH

**Solutions:**
1. Install Node.js from https://nodejs.org/
2. Choose LTS version (v18 or newer recommended)
3. Complete the installer and restart terminal
4. Verify: `node --version` and `npm --version`

### "npm ERR! code EACCES"

**Problem:** Permission denied (macOS/Linux)

**Solutions:**
```bash
# Option 1: Fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH

# Option 2: Use sudo (not recommended)
sudo npm install -g npm

# Option 3: Fix directory permissions
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

### "Module not found" errors

**Problem:** Dependencies not installed or corrupted

**Solutions:**
```bash
# Complete reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install

# Or just reinstall
npm install --legacy-peer-deps
```

### Installation hangs or takes too long

**Problem:** Network issues or mirror problems

**Solutions:**
```bash
# Change npm registry
npm config set registry https://registry.npmjs.org/

# Try installing with different settings
npm install --no-optional

# Check network connectivity
ping registry.npmjs.org
```

## Compilation Issues

### "Templates Not Compiling"

**Problem:** Gulp watch mode not detecting changes or compilation fails

**Solutions:**

1. **Check if Gulp is running:**
   ```bash
   npm run watch:gulp
   ```

2. **Check Node.js and npm versions:**
   ```bash
   node --version    # Should be v18+
   npm --version     # Should be v8+
   ```

3. **Check Pug syntax in index.pug:**
   - Ensure proper indentation (Pug is indent-sensitive)
   - Verify all tags are balanced
   - Check for unclosed attributes
   - Line numbers in error messages help identify issues

4. **Reinstall dependencies:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run watch:gulp
   ```

5. **Check file permissions:**
   ```bash
   # On macOS/Linux
   chmod -R 755 src/
   ```

6. **Clear build artifacts:**
   ```bash
   rm -rf public/output-*.html
   npm run gulp    # Recompile
   ```

### "SyntaxError in Pug template"

**Problem:** Invalid Pug syntax in index.pug

**Example errors:**
```
• Error: Unexpected token
• Error: Unexpected indent
• Error: Unexpected end of file
```

**Solutions:**
1. Check indentation (Pug is indent-sensitive)
2. Verify all tags are properly closed
3. Check for unmatched parentheses
4. Use VS Code Pug extension for syntax highlighting
5. Look at line number in error message

### Output files not generated

**Problem:** HTML files not created after compilation

**Solutions:**
1. Check current directory: `pwd` (should be seo_space root)
2. Verify gulp.cjs is running correctly: `npm run gulp`
3. Check if node_modules/gulp-pug exists:
   ```bash
   npm list gulp-pug
   ```
4. Verify output directory is set correctly (should be public/)
5. Check the logs for errors during compilation

## Development Issues

### Browser not showing changes

**Problem:** Cache or watch mode not working

**Solutions:**
1. **Hard refresh browser:**
   - Windows/Linux: Ctrl+Shift+Delete
   - macOS: Cmd+Shift+Delete
2. **Disable cache in DevTools:**
   - Press F12 → Network tab
   - Check "Disable cache"
3. **Restart watch mode:**
   ```bash
   # Stop current watch (Ctrl+C)
   npm run watch
   ```
4. **Check if watch is actually running:**
   - Should say "watching for changes"
   - Not just "compiled successfully"

### CSS/Styling issues

**Problem:** Styles not applying or colors wrong

**Solutions:**
1. **Clear cache:**
   ```
   Press Ctrl+F5 (hard refresh)
   ```
2. **Check CSS file is loaded:**
   - Press F12 → Network tab
   - Look for CSS files (should show 200 status)
3. **Verify CSS path in HTML:**
   ```html
   <!-- Should be: -->
   <link rel="stylesheet" href="assets/css/main.css">
   ```
4. **Check CSS specificity:**
   - Use browser DevTools to inspect element
   - See which CSS rules are applied
5. **Force recompile:**
   ```bash
   npm start
   ```

### JavaScript errors in console

**Problem:** Console shows red error messages

**Solutions:**
1. **Check jQuery is loaded first:**
   - Press F12 → Network tab
   - jquery.min.js should load before other scripts
2. **Verify paths to script files:**
   - Check script src attributes in HTML
   - Should be: `assets/js/main.js`
3. **Fix syntax errors:**
   - Look at line number in error
   - Check main.js or other JS files
4. **Test in console:**
   - Press F12 → Console tab
   - Type `$` - if it returns function, jQuery is loaded

### Form not submitting

**Problem:** Contact form doesn't send

**Solutions:**
1. **Check form has action:**
   ```html
   <form action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
2. **Verify form fields have names:**
   ```html
   <input name="email" type="email">
   <textarea name="message"></textarea>
   ```
3. **Check for validation errors:**
   - Look at browser console for errors
   - Check email field format
4. **Test form submission:**
   ```bash
   # Open DevTools Network tab
   # Try submitting form
   # Check if POST request is sent
   ```

## Localization Issues

### Translations not showing

**Problem:** Page displays translation keys instead of text

**Solutions:**
1. **Verify translation files exist:**
   ```
   locals/en.json
   locals/ar.json
   ```
2. **Check JSON syntax is valid:**
   - Use https://jsonlint.com/
   - Must have matching braces
3. **Verify keys match in both files:**
   - English and Arabic files must have identical structure
4. **Check translation is loaded in Pug:**
   ```pug
   h1 #{t('title.main')}
   ```

### Arabic text not displaying

**Problem:** Arabic characters show wrong or not at all

**Solutions:**
1. **Check encoding:**
   - HTML head should have: `<meta charset="UTF-8">`
2. **Verify font supports Arabic:**
   - Check @font-face declaration
   - Or use system fonts: `font-family: Arial, sans-serif;`
3. Check RTL attribute:
   - The `<html>` tag should have: `dir="rtl"` when lang is 'ar'
4. **Verify ar.json file is UTF-8:**
   - Save file as UTF-8 encoding in editor

### Language switching not working

**Problem:** Changing language doesn't update text

**Solutions:**
1. **Recompile with different language:**
   ```bash
   # Edit .env file
   LANG=ar
   npm run gulp
   ```
2. **Check if JS language switcher exists:**
   - Look for language button/menu in HTML
   - Check main.js for event handler
3. **Clear cache and reload:**
   - Hard refresh browser (Ctrl+F5)

## Theme & Color Issues

### Colors not changing

**Problem:** Theme changes don't show

**Solutions:**
1. **Verify color-palette CSS is loaded:**
   - Check HTML has: `<link href="assets/css/color-palette/navy.css">`
2. **Check CSS variable syntax:**
   ```css
   :root {
     --main-color: #FFFFFF;
   }
   ```
3. **Hard refresh to clear cache:**
   - Ctrl+F5 or Cmd+Shift+R
4. **Check data-theme attribute:**
   ```html
   <!-- Should be on body: -->
   <body data-theme="dark">
   ```

### Dark/Light mode toggle not working

**Problem:** Mode switching doesn't change colors

**Solutions:**
1. **Check if toggle exists:**
   - Look for button or switch in header
   - Check main.js for toggle functionality
2. **Verify theme CSS has both modes:**
   ```css
   :root,[data-theme="dark"] { /* dark mode */ }
   [data-theme="light"] { /* light mode */ }
   ```
3. **Check localStorage is working:**
   - Press F12 → Application → localStorage
   - Should show theme preference
4. **Test manually in browser console:**
   ```javascript
   document.body.dataset.theme = 'light'
   // Page should update to light mode
   ```

## Performance Issues

### Page loads slowly

**Problem:** Slow page load time

**Solutions:**
1. **Check image file sizes:**
   - Images in assets/images/ should be < 100KB each
   - Use TinyPNG.com to optimize
2. **Check network in DevTools:**
   - Press F12 → Network tab
   - Reload page
   - Look for large files (> 1MB)
3. **Minimize CSS/JS:**
   - Bootstrap should be minified version
   - Check CSS file sizes
4. **Use CDN for libraries:**
   - Bootstrap and jQuery can load from CDN
5. **Check for render-blocking resources:**
   - Move non-critical scripts to defer
   - Move non-critical CSS to async load

### Excessive memory usage

**Problem:** Browser uses too much RAM

**Solutions:**
1. **Check for memory leaks:**
   - Press F12 → Memory tab
   - Take heap snapshot before/after
2. **Reduce animations:**
   - WOW.js can use memory
   - Limit animation elements
3. **Close unused tabs:**
   - Don't keep many browser tabs open while developing
4. **Check for infinite loops:**
   - Look in console for repeated messages
   - Check main.js for loops

## Responsive Design Issues

### Site not responsive on mobile

**Problem:** Layout breaks on small screens

**Solutions:**
1. **Check viewport meta tag:**
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```
2. **Test with browser DevTools:**
   - Press F12 → Toggle device toolbar
   - Test different screen sizes
3. **Check Bootstrap grid:**
   - Columns should stack on mobile
   - `col-md-6` should be 100% on small screens
4. **Fix overflow issues:**
   ```css
   /* Add to main.css if needed: */
   body { overflow-x: hidden; }
   ```

### Content cut off on mobile

**Problem:** Text or images cut off on small screens

**Solutions:**
1. **Check font-size on mobile:**
   - Use media queries for smaller font
2. **Check image dimensions:**
   - Images should be responsive
   - `max-width: 100%;` on images
3. **Check container width:**
   - Use Bootstrap .container
   - Or set max-width on containers

## Browser Compatibility Issues

### Works in Chrome but not Firefox

**Problem:** JavaScript errors in specific browser

**Solutions:**
1. **Check browser console:**
   - Different browsers may show different errors
2. **Test jQuery compatibility:**
   - Older jQuery versions may not support all features
3. **Check CSS vendor prefixes:**
   - Some CSS may need -webkit-, -moz-, -o- prefixes
4. **Update browser:**
   - Try latest version of Firefox

### Layout different in Safari

**Problem:** CSS looks different in Safari

**Solutions:**
1. **Add Safari-specific fixes:**
   ```css
   /* Safari specific */
   @supports (-webkit-appearance: none) {
     /* Safari-only CSS */
   }
   ```
2. **Check for iOS-specific issues:**
   - Mobile Safari may behave differently
   - Test on actual iOS device if possible

## Getting Help

### Before asking for help:

1. Check error message carefully
2. Search Google for error message
3. Check Stack Overflow (tagged with relevant technology)
4. Review project documentation
5. Try clearing cache and restarting

### When asking for help:

Include:
- **Error message** (exact text)
- **Steps to reproduce** (what did you do)
- **What you expected** (what should happen)
- **Environment** (Windows/Mac, browser, Node version)
- **Code snippet** (if applicable)

### Resources:

- Stack Overflow: https://stackoverflow.com/
- Pug Issues: https://github.com/pugjs/pug/issues
- Bootstrap: https://getbootstrap.com/docs/5.3/
- MDN (HTML/CSS/JS): https://developer.mozilla.org/

---

Still stuck? Create an issue on the project repository or contact support. Most issues have simple solutions!

---

**Last Updated:** February 20, 2026  
**Version:** 2.2.2
