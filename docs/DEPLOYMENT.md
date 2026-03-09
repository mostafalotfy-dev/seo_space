# Deployment Guide

## Overview

SEO Space is a static HTML template that can be deployed to any web hosting provider. No server-side processing required.

## Pre-Deployment Checklist

- [ ] All translations are complete (en.json & ar.json)
- [ ] All color themes tested in both dark and light modes
- [ ] All links point to correct URLs
- [ ] Contact form has valid backend endpoint (if needed)
- [ ] Images are optimized and compressed
- [ ] All HTML files are generated (`npm start`)
- [ ] Code passes linting (`npx eslint .`)
- [ ] Browser testing completed (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsive design verified
- [ ] Performance tested (Google PageSpeed)

## Pre-Deployment Checklist

**Content & Configuration:**
- [ ] All sections have content (banner, services, portfolio, etc.)
- [ ] All translations complete for both EN and AR (`locals/en.json` & `locals/ar.json`)
- [ ] All color themes tested in both dark & light modes
- [ ] All internal links are correct and functional
- [ ] External links open in new tabs (target="_blank")
- [ ] Logo and branding images are optimized
- [ ] Favicon set correctly
- [ ] Meta tags and SEO information added

**Code Quality:**
- [ ] Code passes linting: `npm run lint`
- [ ] No console errors in browser DevTools
- [ ] JavaScript works without errors
- [ ] All forms validate input correctly
- [ ] Contact form has working backend endpoint

**Testing:**
- [ ] All HTML files generated: `npm run gulp`
- [ ] Desktop browsers tested (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsive on phones & tablets
- [ ] Touch interactions work on mobile
- [ ] All animations play correctly
- [ ] Dark/light modes toggle correctly
- [ ] Language switching works
- [ ] Performance tested with Google PageSpeed
- [ ] Images load quickly (optimize if needed)

**Deployment Prep:**
- [ ] Production environment variables set
- [ ] Firebase hosting configured (if using)
- [ ] SSL/HTTPS enabled on hosting
- [ ] Backups created
- [ ] Domain DNS configured

## Generating Production Files

```bash
# 1. Run all build processes
npm start

# Or compile each separately:
npm run gulp           # Compile Pug → HTML
npm run babel          # Transpile JavaScript
npm run lint           # Verify code quality

# 2. Verify all HTML files were generated
ls -la public/output-*.html

# Expected output (20 files total):
# output-en-theme-navy-dark.html
# output-en-theme-navy-light.html
# output-en-theme-ignite-dark.html
# ... (English + Arabic x 5 themes x 2 modes)

# 3. Check file sizes
du -h public/output-*.html

# 4. Verify no broken links
grep -r "href=\"[^\\"]*\"" public/ | grep -v "http" | head -20
```

## Deployment Methods

### Method 1: Traditional Web Hosting (Recommended)

**Hosts that support static HTML:**
- GoDaddy, Bluehost, HostGator, SiteGround
- Namecheap, 1&1, Hostinger
- Any FTP-based hosting

**Steps:**

1. **Create output folder** on your computer
2. **Copy all generated HTML files** to output folder
3. **Copy entire `assets/` folder** to output folder
4. **Copy entire `vendor/` folder** to output folder
5. **Connect via FTP**
   ```
   Host: ftp.yourdomain.com
   Username: your_username
   Password: your_password
   ```
6. **Upload all files** to public_html or www folder
7. **Set main file** as `output-en-theme-navy-dark.html` (or your chosen version)
8. **Test in browser** - visit yourdomain.com

**File Structure on Server:**
```
public_html/
├── index.html (or your chosen output file)
├── output-*.html (other language/theme versions)
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── fonts/
└── vendor/
    ├── bootstrap/
    └── jquery/
```

### Method 2: GitHub Pages (Free)

**Requirements:**
- GitHub account (free)
- Git installed locally

**Steps:**

1. **Create GitHub repository**
   - Go to github.com, create new repo
   - Name: `username.github.io` (for user site) or `seo-Space` (for project)
   - Make it public
   - Initialize with README

2. **Clone repository**
   ```bash
   git clone https://github.com/username/seo-Space.git
   cd seo-Space
   ```

3. **Add your files**
   ```bash
   # Copy generated files
   cp output-en-theme-navy-dark.html index.html
   cp -r assets/ .
   cp -r vendor/ .
   ```

4. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial SEO Space deployment"
   git push origin main
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "GitHub Pages" section
   - Select "main" branch
   - Click Save

6. **Access your site**
   - URL: `https://username.github.io/seo-Space`
   - Wait 1-2 minutes for deployment

### Method 3: Netlify (Recommended for Beginners)

**Requirements:**
- Netlify account (free)
- GitHub account (recommended)

**Steps:**

1. **Create Netlify account** at netlify.com
2. **Connect GitHub repository**
   - Click "New site from Git"
   - Select GitHub
   - Choose your repository
3. **Configure build** (optional for static HTML)
   - Build command: (leave empty)
   - Publish directory: (your root folder)
4. **Deploy**
   - Click "Deploy site"
   - Netlify auto-deploys on push
5. **Custom domain**
   - Go to Domain settings
   - Add your domain
   - Update DNS records

### Method 4: Vercel

**Steps:**

1. **Create Vercel account** at vercel.com
2. **Import GitHub repository**
3. **Configure project**
   - Framework: Other
   - Root Directory: ./
4. **Deploy** - Vercel handles it automatically

### Method 5: AWS S3 + CloudFront

**Steps:**

1. **Create S3 bucket**
   ```bash
   aws s3 mb s3://yourdomain.com
   ```

2. **Enable static website hosting**
   - Bucket Properties → Static Website Hosting
   - Index document: `output-en-theme-navy-dark.html`

3. **Upload files**
   ```bash
   aws s3 sync ./assets s3://yourdomain.com/assets
   aws s3 sync ./vendor s3://yourdomain.com/vendor
   aws s3 cp output-en-theme-navy-dark.html s3://yourdomain.com/
   ```

4. **Make files public**
   ```bash
   aws s3api put-bucket-acl --bucket yourdomain.com --acl public-read
   ```

5. **Access via CloudFront** (optional, for better performance)

## Post-Deployment

### Verify Deployment

1. **Test all pages**
   - Navigate through all sections
   - Click all links
   - Test responsive design

2. **Check performance**
   - Use Google PageSpeed Insights
   - Check load time
   - Verify all assets load

3. **Test in browsers**
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers (iOS Safari, Chrome Mobile)
   - Tablet devices

4. **Validate HTML**
   - Go to validator.w3.org
   - Check for errors

### Setup Forms (If Needed)

If using contact forms, configure backend:

1. **Option A: Third-party service**
   - Formspree (formspree.io)
   - Basin (usebasin.com)
   - Getform (getform.io)
   
2. **Option B: Your own backend**
   - Node.js/Express server
   - Python Flask/Django
   - PHP mail script

3. **Update form action in HTML**
   ```html
   <form action="https://formspree.io/f/YOUR_ID" method="POST">
   ```

### SSL Certificate

**For HTTPS (recommended):**

- Most hosting provides free SSL
- Let's Encrypt for free certificates
- Verify HTTPS in browser

### Performance Optimization

1. **Compress images**
   ```bash
   # Using ImageOptim (macOS) or similar tools
   ```

2. **Minify CSS/JS** (already done in compilation)

3. **Enable browser caching**
   ```
   Set cache headers in web server config
   ```

4. **Use CDN** (optional)
   - CloudFlare (free plan available)
   - Bunny CDN
   - Akamai

### SEO Optimization

1. **Update meta tags** in index.pug
   ```pug
   meta(name="description" content="Your description")
   meta(name="keywords" content="seo, services")
   ```

2. **Add Google Analytics**
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
   ```

3. **Submit sitemap** to Google Search Console

4. **Setup Google Business Profile**

## Maintenance

### Regular Updates

1. **Monitor dependencies**
   ```bash
   npm outdated
   npm update
   ```

2. **Security audits**
   ```bash
   npm audit
   ```

3. **Check links** (broken links)

4. **Update content**
   - Refresh team info
   - Update case studies
   - Add new services

### Backup Strategy

- Keep local copy of source files
- Version control (Git)
- Regular backups of hosted files
- Document all changes (CHANGELOG.md)

## Troubleshooting Deployment

### Issue: "404 Not Found"

**Cause:** Files not uploaded or wrong path
**Solution:** 
- Verify files uploaded to correct directory
- Check file permissions (755 for directories, 644 for files)
- Ensure index.html is in root

### Issue: Styles not loading

**Cause:** CSS file paths incorrect
**Solution:**
- Verify `assets/css/` folder uploaded
- Check CSS file paths in HTML
- Use absolute paths if needed

### Issue: JavaScript not working

**Cause:** JS file paths incorrect or jQuery not loaded
**Solution:**
- Verify `vendor/jquery/` uploaded
- Check script src attributes
- Ensure scripts load in correct order

### Issue: Images not displaying

**Cause:** Image paths incorrect
**Solution:**
- Verify `assets/images/` uploaded
- Check image src paths in HTML
- Use correct case (URLs are case-sensitive)

## Rollback

If something breaks:

1. **Keep previous version**
   ```bash
   # Keep backup of previous build
   cp -r output-*.html backup/
   ```

2. **Upload previous version**
   ```bash
   # If using FTP, upload previous files
   # If using Git, revert commit and push
   ```

3. **Test thoroughly** before next deployment

## Performance Benchmarks

**Target metrics:**
- Page Load: < 3 seconds
- Largest Contentful Paint (LCP): < 2.5 seconds
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

**Tools to measure:**
- Google PageSpeed Insights
- WebPageTest (webpagetest.org)
- GTmetrix (gtmetrix.com)
- Lighthouse (built into Chrome)

## Support & Troubleshooting

**Resources:**
- Web Hosting Support: Contact your hosting provider
- GitHub Issues: Check project repository
- Stack Overflow: Tag with [html], [css], [javascript]
- Netlify Docs: https://docs.netlify.com/
- GitHub Pages Docs: https://pages.github.com/

---

Deployment complete! Your SEO Space site is live. 🚀

---

**Last Updated:** February 20, 2026  
**Version:** 2.2.2
