# Quick Reference Guide

## Common Commands

### Development

```bash
# Start watching and auto-recompiling
npm run watch

# Compile once
npm start

# Check for outdated packages
npm outdated

# Update all packages
npm update

# Run linting
npx eslint .

# List all installed packages
npm list
```

### File Structure Reminder

```
Edit These Files          →  Output Files Generated
─────────────────────────────────────────────────
index.pug                 →  output-*.html
locals/en.json            →  Translations
locals/ar.json            
assets/css/main.css       →  Styling
assets/css/color-palette/ →  Themes
assets/js/main-custom.js  →  Behavior
```

## Quick Edits

### Change Text

**Location:** `index.pug` or translation files

```pug
// In index.pug
h1 #{t('banner.welcome')}

// In locals/en.json
"banner": {
  "welcome": "Your text here"
}
```

### Change Colors

**Location:** `assets/css/color-palette/theme-name.css`

```css
:root {
  --main-color: #000000;           /* Change this */
  --third-color: #FF5733;
  --accent-color: #FFC300;
}
```

### Add Section

**Steps:**
1. Edit `index.pug` - add section HTML
2. Add translations to `locals/en.json` & `locals/ar.json`
3. Add styles to `assets/css/main.css`
4. Run `npm run watch`

### Add Image

**Steps:**
1. Place image in `assets/images/`
2. Reference in `index.pug`: `img(src="assets/images/filename.png")`
3. Recompile

### Change Logo

**Option 1 - Image Logo:**
```pug
img(src="assets/images/your-logo.png" alt="Logo")
```

**Option 2 - Text Logo:**
```pug
span Your Brand Name
```

## Keyboard Shortcuts (VS Code)

```
Ctrl+S          Save file
Ctrl+/          Toggle comment
Ctrl+Shift+P    Command palette
Alt+Up/Down     Move line up/down
Ctrl+D          Select next occurrence
Ctrl+H          Find & replace
F2              Rename symbol
Ctrl+G          Go to line
Ctrl+~          Open terminal
```

## Testing Checklist

- [ ] All pages load without errors
- [ ] Links work correctly
- [ ] Forms submit properly
- [ ] Responsive design works (test on mobile)
- [ ] Both languages display correctly
- [ ] All themes look good
- [ ] Dark/Light mode works
- [ ] Images display correctly
- [ ] No 404 errors in console
- [ ] No JavaScript errors in console

## Browser DevTools

### Check Errors

```
Press F12 → Console tab
Look for red error messages
```

### Inspect Elements

```
Press F12 → Inspector tab
Right-click element → Inspect
Check CSS and HTML
```

### Check Network

```
Press F12 → Network tab
Reload page
See all loaded files and their sizes
```

## Translation Key Naming Convention

```
// Pattern: feature.section.item
menu.home
menu.about
menu.services

banner.welcome
banner.description

services.skills.seo
services.skills.analytics

contact.form.name
contact.form.email
```

## Theme File Locations

| Theme | File |
|-------|------|
| Ignite | `assets/css/color-palette/Ignite.css` |
| Navy | `assets/css/color-palette/navy.css` |
| Corporate Tech | `assets/css/color-palette/new-corporate-tech.css` |
| Olive Garden | `assets/css/color-palette/olive-garden-feast.css` |

## CSS Classes Reference

```css
/* Spacing */
.p-3        padding: 3rem
.m-2        margin: 2rem
.mt-5       margin-top: 5rem
.mb-4       margin-bottom: 4rem

/* Text */
.text-center        text-align: center
.text-muted         color: muted
.fw-bold            font-weight: bold

/* Display */
.d-flex             display: flex
.justify-content-center   justify-content: center
.align-items-center align-items: center

/* Responsive */
.d-none             display: none
.d-lg-block         display: block (on large screens)
.col-md-6           50% width (on medium+ screens)
```

## Git Commands

```bash
# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to remote
git push

# View history
git log --oneline

# Revert to previous version
git revert HEAD
```

## Debugging Tips

### Templates Not Compiling

```bash
# Check if compilepg.cjs exists
ls compilepg.cjs

# Check Node version
node --version

# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Styles Not Applying

```
1. Hard refresh browser (Ctrl+Shift+R)
2. Check CSS file is loaded (DevTools → Network)
3. Check CSS path in HTML
4. Check CSS specificity in styles
5. Clear browser cache
```

### JavaScript Not Working

```
1. Check DevTools → Console for errors
2. Verify jQuery loaded first
3. Check script src paths
4. Check syntax in main-custom.js
5. Use debugger to trace code
```

## Useful Links

### Documentation
- Pug: https://pugjs.org/api/getting-started.html
- Bootstrap: https://getbootstrap.com/docs/5.3/
- i18next: https://www.i18next.com/
- jQuery: https://jquery.com/

### Tools
- VS Code: https://code.visualstudio.com/
- Git: https://git-scm.com/
- Node.js: https://nodejs.org/

### Design Tools
- Color Picker: https://color.adobe.com/
- Font Pairing: https://fonts.google.com/
- Image Optimization: https://tinypng.com/

## Getting Help

1. **Check documentation first** - Read relevant .md files
2. **Search Google** - Search error message
3. **Stack Overflow** - Tag with [pug], [bootstrap], [javascript]
4. **Project Repository** - Check issues/discussions
5. **Contact Support** - Reach out to project maintainer

## Performance Tips

- Keep images under 100KB each
- Minimize custom JavaScript
- Use browser caching headers
- Compress files with gzip
- Use CDN for libraries
- Lazy load images below fold
- Minify CSS/JavaScript

## Security Notes

- Update npm packages regularly: `npm update`
- Audit for vulnerabilities: `npm audit`
- Don't commit sensitive data (.env with real credentials)
- Validate all form inputs on backend
- Use HTTPS in production
- Update Node.js version regularly

---

Need more help? Check the full documentation in the `docs/` folder or visit the project repository.
