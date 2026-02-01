# Localization Guide

## Overview

SEO Nexus uses **i18next** for multi-language support with built-in support for English (en) and Arabic (ar). The system supports right-to-left (RTL) text for Arabic and handles localized strings throughout the application.

## Supported Languages

| Language | Code | Script | Text Direction |
|----------|------|--------|-----------------|
| English | `en` | Latin | LTR (Left-to-Right) |
| Arabic | `ar` | Arabic | RTL (Right-to-Left) |

## File Structure

```
locals/
├── en.json    ← English translations
└── ar.json    ← Arabic translations
```

## Translation Files Structure

### en.json (English)

```json
{
  "title": {
    "main": "SEO Nexus - SEO HTML5 Template"
  },
  "header": {
    "logo": {
      "part1": "Spac",
      "part2": "Dyna"
    }
  },
  "menu": {
    "home": "Home",
    "about": "About Us",
    "services": "Services",
    "portfolio": "Portfolio",
    "blog": "Blog",
    "message_us": "Message Us",
    "contact_now": "Contact Now",
    "trigger": "Menu"
  },
  "banner": {
    "welcome": "Welcome to SEO Nexus",
    "we_make": "We Make ",
    "digital_ideas": "Digital Ideas",
    // ... more keys
  }
  // ... more sections
}
```

### ar.json (Arabic)

Must have identical key structure with Arabic translations:

```json
{
  "title": {
    "main": "سيو نيكسس - قالب HTML5 لتحسين محركات البحث"
  },
  "header": {
    "logo": {
      "part1": "سبيس",
      "part2": "داينا"
    }
  },
  "menu": {
    "home": "الرئيسية",
    "about": "من نحن",
    "services": "الخدمات",
    "portfolio": "أعمالنا",
    "blog": "المدونة",
    "message_us": "تواصل معنا",
    "contact_now": "تواصل الآن",
    "trigger": "القائمة"
  },
  // ... rest with Arabic translations
}
```

## Translation Key Naming Convention

Use nested dot notation for organization:

```
section.subsection.key

Examples:
- title.main
- header.logo.part1
- menu.home
- banner.welcome
- services.heading.part1
- contact.form.name
```

### Best Practices for Key Names

```
✓ Good Practice:
- Use lowercase
- Use underscores for multi-word keys
- Group related content
- Use descriptive names

✗ Avoid:
- Mixed case (use lowercase)
- Spaces in keys
- Generic names (key1, text1, etc)
- Single character abbreviations
```

## Using Translations in Templates

### Basic Translation

In Pug template:

```pug
// Simple translation
h1 #{t('title.main')}

// Outputs: <h1>SEO Nexus - SEO HTML5 Template</h1>
// (or Arabic equivalent in ar.json)
```

### Nested Translation Keys

```pug
// Access nested values
h4 #{t('header.logo.part1')}
span #{t('header.logo.part2')}

// Menu items
ul.nav
  li
    a(href="#home") #{t('menu.home')}
  li
    a(href="#about") #{t('menu.about')}
```

### Translation with Interpolation

```pug
// Using template variables
h2 Welcome, #{t('menu.home')}

// With conditional logic
if isLoggedIn
  p #{t('greeting.user')}
else
  p #{t('greeting.guest')}
```

## Adding New Translation Keys

### Step-by-Step Process

#### 1. Identify the Text to Translate

Decide what content needs translation and create a logical key structure.

```
Content: "Submit Your Information"
Key: form.submit_button
```

#### 2. Add to en.json

```json
{
  "form": {
    "submit_button": "Submit Your Information"
  }
}
```

#### 3. Add to ar.json (Arabic)

```json
{
  "form": {
    "submit_button": "قدم معلوماتك"
  }
}
```

#### 4. Use in Template

```pug
button #{t('form.submit_button')}
```

#### 5. Recompile

```bash
npm run watch
```

The change applies to all language variants automatically.

## Adding a New Language

### Step 1: Create New Translation File

Create `locals/xx.json` (where `xx` is language code):

```json
// locals/fr.json (French example)
{
  "title": {
    "main": "SEO Nexus - Modèle HTML5 SEO"
  },
  "menu": {
    "home": "Accueil",
    "about": "À Propos",
    "services": "Services",
    // ... rest of translations
  }
  // ... complete translation structure
}
```

### Step 2: Update Compilation Script

Edit `compilepg.cjs` to include new language:

```javascript
const languages = ['en', 'ar', 'fr']; // Add 'fr'

// In compilation loop
for (const lang of languages) {
  // Generate HTML for French
  // Outputs: output-fr-theme-navy-dark.html, etc.
}
```

### Step 3: Recompile

```bash
npm run watch
```

New HTML files will be generated for the new language with all theme/mode combinations.

### Step 4: Add Language Switcher (Optional)

Create language selector in JavaScript:

```javascript
// Language switcher
$('.lang-selector').on('click', function() {
  const lang = $(this).data('lang');
  localStorage.setItem('language', lang);
  
  // Redirect to appropriate HTML file
  const theme = getActiveTheme();
  const mode = getActiveMode();
  window.location.href = 
    `output-${lang}-theme-${theme}-${mode}.html`;
});
```

## Text Direction (RTL/LTR)

### Automatic Direction Handling

In `index.pug`:

```pug
html(lang=lang)
  body(dir=lang == 'ar' ? 'rtl' : 'ltr')
```

The direction automatically sets to:
- `dir="ltr"` for English and other LTR languages
- `dir="rtl"` for Arabic and other RTL languages

### CSS for RTL Support

Bootstrap 5 automatically handles RTL layout. Custom CSS should use logical properties:

```css
/* ✓ Good: Use logical properties */
.box {
  padding-inline-start: 20px;  /* Adapts to LTR/RTL */
  margin-block-end: 10px;       /* Works for all directions */
}

/* ✓ Alternative: Use LTR/RTL specific */
[dir="ltr"] .box {
  padding-left: 20px;
}

[dir="rtl"] .box {
  padding-right: 20px;
}

/* ✗ Avoid: Hardcoded left/right only */
.box {
  padding-left: 20px;           /* Won't work in RTL */
}
```

### Flex Direction for RTL

```css
.flex-container {
  display: flex;
  flex-direction: row;  /* LTR: left to right */
}

[dir="rtl"] .flex-container {
  flex-direction: row-reverse;  /* RTL: right to left */
}

/* Or use CSS logical properties */
.flex-container {
  display: flex;
  flex-direction: inline;  /* Responsive to dir attribute */
}
```

## Translation Best Practices

### 1. Keep Strings in Translation Files

❌ **Bad**: Hardcoded text in template
```pug
h1 Welcome to Our Site
```

✓ **Good**: Use translation key
```pug
h1 #{t('heading.welcome')}
```

### 2. Logical Key Hierarchy

```json
{
  "header": {},
  "navigation": {},
  "hero": {},
  "services": {},
  "contact": {},
  "footer": {}
}
```

### 3. Consistent Terminology

In `en.json`:
```json
{
  "header": {
    "logo_text": "Company"
  },
  "footer": {
    "company_name": "Company"  // ✓ Use same term
  }
}
```

### 4. Handle Plurals and Numbers

```json
{
  "stats": {
    "projects_one": "1 Project",
    "projects_other": "{count} Projects"
  }
}
```

Usage in template:
```pug
p #{t('stats.projects', { count: projects.length })}
```

### 5. Date and Number Formatting

```json
{
  "formats": {
    "date": "MM/DD/YYYY",
    "currency": "$"
  }
}
```

## Language-Specific Content

### Conditional Content

```pug
// Different content for different languages
if lang === 'ar'
  p نحن نتحدث العربية
else if lang === 'en'
  p We speak English

// Using translation function
p #{t(`language.${lang}.welcome`)}
```

### Language-Specific Images

```pug
// Different image for Arabic
if lang === 'ar'
  img(src="assets/images/hero-ar.png" alt="")
else
  img(src="assets/images/hero-en.png" alt="")
```

## Translation Workflow for Teams

### 1. Developer Creates Keys

In `en.json`:
```json
{
  "new_feature": {
    "title": "New Feature Title"
  }
}
```

### 2. Translator Fills in Other Languages

In `ar.json`:
```json
{
  "new_feature": {
    "title": "عنوان الميزة الجديدة"
  }
}
```

### 3. Review and Verify

- Check all keys exist in all language files
- Verify translations are accurate
- Test in browser with actual language

### 4. Version Control

```bash
git add locals/
git commit -m "Add translations for new feature"
```

## Checking Translation Completeness

### Script to Validate Translations

```javascript
// Check if all keys exist in all language files
const en = require('./locals/en.json');
const ar = require('./locals/ar.json');

function checkTranslations(obj, lang, path = '') {
  for (const key in obj) {
    const currentPath = path ? `${path}.${key}` : key;
    
    if (typeof obj[key] === 'object') {
      checkTranslations(obj[key], lang, currentPath);
    } else {
      const value = getNestedValue(lang, currentPath);
      if (!value) {
        console.warn(`Missing in target: ${currentPath}`);
      }
    }
  }
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((a, b) => a?.[b], obj);
}

checkTranslations(en, ar);
```

## Common Translation Patterns

### Punctuation

Ensure consistent punctuation in translations:

```json
{
  "en": {
    "question": "How can we help?",
    "statement": "We are here to serve."
  },
  "ar": {
    "question": "كيف يمكننا مساعدتك؟",
    "statement": "نحن هنا لخدمتك."
  }
}
```

### Numbers and Amounts

```json
{
  "en": {
    "price": "$99.99",
    "discount": "Save 50%"
  },
  "ar": {
    "price": "٩٩٫٩٩ دولار",
    "discount": "وفر ٥٠٪"
  }
}
```

### Time Formats

```json
{
  "en": {
    "date_format": "MM/DD/YYYY"
  },
  "ar": {
    "date_format": "DD/MM/YYYY"
  }
}
```

## Accessibility in Translations

### Language Attributes

```pug
html(lang=lang)
  head
    // Lang attribute set correctly
  body
    // Content in specified language
```

### Title and Meta Descriptions

```pug
meta(name="description" content=t('meta.description'))
meta(name="keywords" content=t('meta.keywords'))
title= t('title.main')
```

### ARIA Labels

```pug
button(aria-label=t('accessibility.close_menu'))
  span × 

nav(aria-label=t('accessibility.main_navigation'))
  ul.nav
    // Navigation items
```

## Troubleshooting Translations

### Issue: Translation Key Not Showing

```javascript
// Check if key exists
console.log(t('menu.home'));

// Check if language loaded
console.log(localStorage.getItem('language'));

// Check i18next initialized
console.log(i18next.language);
```

**Solution**:
1. Verify key exists in JSON file
2. Check JSON syntax is valid
3. Verify language is set correctly
4. Recompile: `npm run watch`

### Issue: Special Characters Not Displaying

```json
{
  "text": "Café au lait"    // ✓ Works
  "text": "Caf\u00e9 au lait"  // ✓ Also works
}
```

Use UTF-8 encoding in JSON files.

### Issue: RTL Content Breaking Layout

Check CSS uses logical properties or RTL-aware styling:

```css
[dir="rtl"] element {
  float: right;     // ✓ For RTL
}

[dir="ltr"] element {
  float: left;      // ✓ For LTR
}
```

## Performance Optimization

### Load Translations Lazily

For large translation files, load only active language:

```javascript
// Load only English initially
const language = navigator.language.startsWith('ar') ? 'ar' : 'en';

fetch(`locals/${language}.json`)
  .then(r => r.json())
  .then(translations => {
    i18next.addResourceBundle(language, 'translation', translations);
  });
```

### Cache Translations

```javascript
// Store in localStorage
localStorage.setItem('translations_en', JSON.stringify(en));

// Retrieve
const cached = JSON.parse(localStorage.getItem('translations_en'));
```

## Resources

- **i18next Documentation**: https://www.i18next.com/
- **RTL Considerations**: https://www.w3.org/International/questions/qa-html-dir
- **Unicode Characters**: https://unicode-table.com/
- **Language Codes**: https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes

---

Keep translations consistent and accurate for the best user experience across all languages! 🌍
