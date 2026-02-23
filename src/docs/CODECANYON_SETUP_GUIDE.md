# SEO Space - CodeCanyon Setup Guide

## Pre-Sale Information

### Purchase Includes
- ✓ Fully functional HTML5 template
- ✓ 16 pre-compiled HTML files (all theme/language combinations)
- ✓ Source Pug template for customization
- ✓ All assets (CSS, JavaScript, images, fonts)
- ✓ Comprehensive documentation
- ✓ Multi-language support (English & Arabic)
- ✓ Multiple color themes
- ✓ Dark/Light mode variants

### What You Get

1. **16 Pre-Built HTML Files**
   - 2 Languages (English, Arabic)
   - 4 Themes (Ignite, Navy, Corporate Tech, Olive Garden)
   - 2 Modes (Dark, Light)
   - Total: 2 × 4 × 2 = 16 variations

2. **Complete Source Code**
   - Pug template (index.pug)
   - CSS stylesheets
   - JavaScript files
   - Localization files
   - Configuration files

3. **Full Documentation**
   - 8+ comprehensive guides
   - Code examples
   - Customization instructions
   - Troubleshooting tips

## Installation & Setup

### Method 1: Quick Start (Recommended for Most Users)

**No Installation Needed! Use Pre-Built HTML Files Directly**

1. **Download the template package**
2. **Extract to your desired location**
3. **Open any HTML file in your browser**
4. **Done! Template is ready to use**

### Method 2: With Node.js (For Advanced Customization)

**Prerequisites:**
- Node.js v14+ installed
- npm v6+ (comes with Node.js)

**Steps:**

```bash
# 1. Extract the template package
# 2. Open command prompt/terminal in the template folder
# 3. Install dependencies
npm install

# 4. Start watching for changes
npm run watch

# 5. Edit files in index.pug, locals/, and assets/
# 6. HTML files auto-regenerate

# 7. Open generated HTML in browser to preview
```

### Method 3: Direct HTML Editing (No Coding Knowledge)

1. **Extract template**
2. **Open HTML file with text editor** (Notepad++, Sublime Text, VS Code)
3. **Find text you want to change**
4. **Edit directly in the file**
5. **Save the file**
6. **Refresh browser to see changes**

## File Selection Guide

### Which HTML File to Use?

**For English Sites:**
- `output-en-theme-navy-dark.html` - Professional navy (dark)
- `output-en-theme-navy-light.html` - Professional navy (light)
- `output-en-theme-ignite-dark.html` - Energetic ignite (dark)
- `output-en-theme-ignite-light.html` - Energetic ignite (light)
- `output-en-theme-new-corporate-tech-dark.html` - Modern tech (dark)
- `output-en-theme-new-corporate-tech-light.html` - Modern tech (light)
- `output-en-theme-olive-garden-feast-dark.html` - Earthy olive (dark)
- `output-en-theme-olive-garden-feast-light.html` - Earthy olive (light)

**For Arabic Sites:**
- `output-ar-theme-*` - Arabic versions with RTL support
- (Same theme options as English)

**Default Recommendation:**
Start with `output-en-theme-navy-dark.html` for professional appearance.

## File Structure Overview

```
template-folder/
├── HTML Files (Ready to use)
├── assets/
│   ├── css/        (Stylesheets)
│   ├── js/         (JavaScript)
│   ├── images/     (Graphics)
│   └── fonts/      (Custom fonts)
├── vendor/         (Bootstrap, jQuery)
├── locals/         (Translations)
└── Documentation/  (Guides & Help)
```

**Important:** Keep all files in the same folder structure for template to work correctly!

## Basic Customization

### 1. Change Website Title

**Easy Way (HTML Editor):**

```html
<!-- Find this line in the HTML file: -->
<title>SEO Space - SEO HTML5 Template</title>

<!-- Change to: -->
<title>Your Company Name - Digital Marketing Agency</title>
```

### 2. Change Logo Text

**Easy Way (HTML Editor):**

```html
<!-- Find: -->
<h4>
  Spac
  <span>Dyna</span>
</h4>

<!-- Change to: -->
<h4>
  Your
  <span>Brand</span>
</h4>
```

### 3. Change Company Description

**Easy Way (HTML Editor):**

```html
<!-- Find the banner section and replace text: -->
<h2>
  We Make <em>Digital Ideas</em> & <span>SEO</span> Marketing
</h2>
<p>Your description text here...</p>
```

### 4. Replace Images

1. **Prepare new images** (save to assets/images/)
2. **Find image references** in HTML:
```html
<img src="assets/images/banner-right-image.png" alt="">
```
3. **Change filename** to your image:
```html
<img src="assets/images/your-image.png" alt="">
```

### 5. Change Colors

**Easy Way (CSS):**

1. **Open** `assets/css/color-palette/navy.css`
2. **Find color variables:**
```css
:root {
  --main-color: #003f87;        /* Change this */
  --accent-color: #00a8ff;      /* Or this */
  --text-color: #e5e7eb;        /* Or this */
}
```
3. **Change hex values** to desired colors
4. **Save file**
5. **Refresh browser** to see changes

## Updating Contact Form

### Before Using Contact Form

The form needs backend integration to send emails.

### Option 1: Using FormSubmit (Free, No Setup)

1. **Find the form in HTML:**
```html
<form id="contact" action="" method="post">
```

2. **Change to:**
```html
<form id="contact" action="https://formsubmit.co/your@email.com" method="post">
```

3. **Replace** `your@email.com` with your actual email
4. **Save and test** - first submission will send you confirmation link

### Option 2: Using Netlify Forms

1. **Deploy on Netlify** (free hosting)
2. **Netlify automatically** detects and processes forms
3. **No code changes** needed

### Option 3: Backend Service

Use services like:
- Formspree (formspree.io)
- Basin (usebasin.com)
- Getform (getform.io)
- Or your own backend server

## Adding Pages

### Method 1: Create From Existing HTML

1. **Duplicate** `output-en-theme-navy-dark.html`
2. **Rename** to `services.html`
3. **Edit the content** you want to show
4. **Add navigation link** to main page:

```html
<a href="services.html">Services</a>
```

### Method 2: Add Section to Same Page

1. **Open HTML file** in editor
2. **Find where to add** (e.g., before footer)
3. **Copy an existing section** (like services section)
4. **Paste and modify:**

```html
<!-- Add this before </body> -->
<section id="testimonials" class="testimonials-section">
  <div class="container">
    <h2>What Our Clients Say</h2>
    <p>Your testimonials here...</p>
  </div>
</section>
```

## Responsive Testing

### Test on Different Devices

**Desktop:**
- Open HTML file in browser
- View at 1920px, 1366px, 1024px width

**Tablet:**
- Right-click → Inspect → Toggle device toolbar
- Select iPad or similar

**Mobile:**
- Right-click → Inspect → Toggle device toolbar
- Select iPhone or similar
- Test portrait and landscape

**Everything should work perfectly at all sizes!**

## Theme Switching

### Switch Between Themes

**Option 1: Use Different HTML File**
- Simply open different HTML file
- Each has different theme applied

**Example:**
- Using `output-en-theme-navy-dark.html` for navy theme
- Want to switch to ignite? Open `output-en-theme-ignite-dark.html` instead

**Option 2: Add Theme Switcher (Advanced)**

Add this code before closing `</body>`:

```html
<script>
  function switchTheme(themeName) {
    const link = document.querySelector('link[href*="color-palette"]');
    link.href = `assets/css/color-palette/${themeName}.css`;
  }
  
  function switchMode(mode) {
    document.body.dataset.theme = mode;
  }
</script>

<div class="theme-switcher">
  <button onclick="switchTheme('navy')">Navy</button>
  <button onclick="switchTheme('ignite')">Ignite</button>
  <button onclick="switchMode('dark')">Dark</button>
  <button onclick="switchMode('light')">Light</button>
</div>
```

## Language Switching

### Switch Between English & Arabic

**Option 1: Use Different HTML File**
- English: `output-en-theme-*.html`
- Arabic: `output-ar-theme-*.html`

**Arabic Advantages:**
- Automatic right-to-left (RTL) layout
- All text direction handled automatically
- Professional Arabic typography

## Deployment to Web

### Step 1: Choose Hosting

**Free Options:**
- Netlify (recommended)
- Vercel
- GitHub Pages
- Hostinger (free tier)

**Paid Options:**
- Bluehost
- GoDaddy
- SiteGround
- HostGator
- Any standard web hosting

### Step 2: Upload Files

**Via FTP (Hosting Control Panel):**

1. **Connect via FTP client** (FileZilla, WinSCP)
2. **Upload all files** to public_html folder
3. **Keep folder structure** intact
4. **Set index.html as default**

**Via Hosting Panel:**

1. **File Manager** → Upload files
2. **Upload entire template folder**
3. **Set permissions** (usually automatic)

**Via Git (Netlify/Vercel):**

1. **Push to GitHub**
2. **Connect to Netlify/Vercel**
3. **Auto-deploy** on push

### Step 3: Configure Domain

1. **Point domain** to hosting
2. **Update DNS records**
3. **Wait 24 hours** for propagation
4. **Visit domain** to verify

## Performance Optimization

### Optimize Images

1. **Compress images** using tools like:
   - TinyPNG (tinypng.com)
   - Imagemin
   - OptiPNG

2. **Replace original** with compressed versions

### Enable Caching

Add to `.htaccess` (Apache servers):

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### Minify Files

For production, minify CSS and JavaScript:

```html
<!-- Minified CSS -->
<link rel="stylesheet" href="assets/css/main.min.css">

<!-- Minified JS -->
<script src="assets/js/main-custom.min.js"></script>
```

## SEO Setup

### Update Meta Tags

In HTML `<head>` section:

```html
<meta name="description" content="Your company description - 150-160 characters">
<meta name="keywords" content="seo, marketing, digital, your keywords">
<meta name="author" content="Your Company Name">
```

### Add Social Meta Tags

```html
<meta property="og:title" content="Your Company - SEO Agency">
<meta property="og:description" content="Your description">
<meta property="og:image" content="path/to/image.jpg">
<meta property="og:url" content="https://yourwebsite.com">
```

### Structured Data

Add before closing `</head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Company",
  "url": "https://yourwebsite.com",
  "logo": "https://yourwebsite.com/path/to/logo.png"
}
</script>
```

## Troubleshooting

### Issue: Images not showing

**Solution:**
- Check image file paths are correct
- Verify all files are in `assets/images/` folder
- Ensure folder structure is maintained

### Issue: Styles not applying

**Solution:**
- Clear browser cache (Ctrl+Shift+Delete)
- Verify CSS file path is correct
- Check file extension (.css)
- Reload page (Ctrl+F5)

### Issue: Links not working

**Solution:**
- Use relative paths: `assets/css/main.css`
- Don't use absolute paths: `C:/Users/...`
- Verify file names match exactly
- Check for typos in href attributes

### Issue: Form not submitting

**Solution:**
- Verify form `action` attribute is correct
- Check email service setup (FormSubmit, Formspree)
- Open browser console (F12) to check errors
- Test with valid email format

### Issue: Template looks different on my device

**Solution:**
- Clear browser cache
- Try different browser
- Check responsive view (F12 → Device Toolbar)
- Verify all assets loaded successfully

## Advanced Customization

### Edit Pug Template

For advanced users who want to recompile:

1. **Install Node.js**
2. **Run**: `npm install`
3. **Edit**: `index.pug`
4. **Run**: `npm run watch`
5. **New HTML** files auto-generate

See `DEVELOPMENT.md` for detailed guide.

### Add New Theme

1. **Create file**: `assets/css/color-palette/my-theme.css`
2. **Copy color variables** from existing theme
3. **Modify hex color values**
4. **Update compilation** (for advanced users)
5. **Test** with HTML file

See `COLOR_PALETTE.md` for detailed guide.

### Add New Language

1. **Create file**: `locals/new-lang.json`
2. **Copy structure** from `locals/en.json`
3. **Translate all strings**
4. **Update compilation** (for advanced users)
5. **Generate new HTML** files

See `LOCALIZATION.md` for detailed guide.

## Support Resources

### Included Documentation
- 📖 README.md - Project overview
- 🚀 INSTALLATION.md - Setup guide
- 🏗️ ARCHITECTURE.md - Technical details
- 🎨 COLOR_PALETTE.md - Theme customization
- ⚙️ CONFIGURATION.md - Settings guide
- 💻 DEVELOPMENT.md - Dev guidelines
- 🌍 LOCALIZATION.md - Translation guide

### External Resources
- Bootstrap 5: https://getbootstrap.com/docs/5.3/
- jQuery: https://jquery.com/
- CSS Guide: https://developer.mozilla.org/en-US/docs/Web/CSS/
- HTML Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/

## Getting Help

### Common Questions

**Q: Which HTML file should I use?**
A: Start with `output-en-theme-navy-dark.html`. Most professional appearance.

**Q: Can I modify the template?**
A: Yes! All source code included. Modify CSS, images, text, everything!

**Q: Do I need any programming skills?**
A: No! You can edit HTML directly with notepad. Or use code editor for easier experience.

**Q: Is there a backend needed?**
A: No! Pure HTML/CSS/JS. Works on any hosting. For email forms, use free service like FormSubmit.

**Q: Can I use for clients?**
A: Yes! Under the license terms. Customize and sell to clients.

**Q: Mobile friendly?**
A: Yes! Fully responsive. Works perfect on all devices.

**Q: Can I change colors?**
A: Yes! Easy CSS customization. Change color values and refresh.

---

**You're all set!** Start customizing and deploying your website. 🚀

---

**Last Updated:** February 20, 2026  
**Version:** 2.2.2
