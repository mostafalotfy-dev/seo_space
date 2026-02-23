# دليل الإعداد

## نظرة عامة

يشرح هذا الدليل كيفية تهيئة جوانب مختلفة من مشروع SEO Space، بما في ذلك إعدادات البناء ومتغيرات البيئة والسمات واللغات وخيارات التطوير.

## متغيرات البيئة

### إعداد ملف .env

أنشئ ملف `.env` في المجلد الجذري للمشروع:

```env
# إعداد اللغة
LANG=en

# إعداد السمة
THEME=navy

# إعداد الوضع
MODE=dark

# إعداد البناء
NODE_ENV=development
BUILD_PATH=./public

# خادم التطوير (اختياري)
DEV_HOST=localhost
DEV_PORT=8080
```

### مرجع متغيرات البيئة

| المتغير | القيم | الافتراضي | الغرض |
|---------|-------|-----------|--------|
| `LANG` | `en`, `ar` | `en` | اللغة الأساسية |
| `THEME` | انظر قائمة السمات | `navy` | سمة لوحة الألوان |
| `MODE` | `dark`, `light` | `dark` | وضع الألوان |
| `NODE_ENV` | `development`, `production` | `development` | بيئة البناء |
| `BUILD_PATH` | مسار | `./public` | مجلد الإخراج |
| `DEV_HOST` | اسم المضيف | `localhost` | مضيف خادم التطوير |
| `DEV_PORT` | رقم المنفذ | `8080` | منفذ خادم التطوير |

## إعداد السمة

### السمات المتاحة

```javascript
// في gulp.cjs
const themes = [
  'ignite',                    // حيوي ونابض بالحياة
  'navy',                      // أزرق احترافي
  'new-corporate-tech',        // تقنية حديثة
  'olive-garden-feast'         // نغمات أرضية
];
```

### اختيار السمة النشطة

#### الطريقة 1: متغير البيئة

```env
THEME=navy
```

#### الطريقة 2: إعداد gulp.cjs

```javascript
// gulp.cjs
const themes = ['navy']; // أو أكثر من سمة
```

#### الطريقة 3: التبديل في وقت التشغيل (JavaScript)

```javascript
// في وحدة تحكم المتصفح أو JavaScript
document.body.dataset.theme = 'light';

// لتغيير لوحة الألوان
document.querySelector('link[href*="color-palette"]').href = 
  'assets/css/color-palette/navy.css';
```

### هيكل السمة

كل سمة مُعرَّفة في:
```
src/assets/css/color-palette/[اسم-السمة].css
```

مثال: `src/assets/css/color-palette/navy.css`

## إعداد اللغة

### اللغات المدعومة

| الكود | اللغة | الملف |
|-------|-------|-------|
| `en` | الإنجليزية | `locals/en.json` |
| `ar` | العربية | `locals/ar.json` |

### ضبط اللغة الافتراضية

```env
LANG=en
```

أو في `gulp.cjs`:

```javascript
const translations = {
  en: require('./locals/en.json'),
  ar: require('./locals/ar.json'),
};
```

### إضافة لغة جديدة

1. **أنشئ ملف الترجمة** `locals/xx.json`:

```json
{
  "title": {
    "main": "عنوان الصفحة"
  },
  "menu": {
    "home": "الرئيسية",
    "about": "من نحن"
  }
}
```

2. **حدّث منطق التجميع** في `gulp.cjs` لتضمين اللغة الجديدة

3. **أعد التجميع**:
```bash
npm run watch
```

### منطق تبديل اللغة

```pug
// في index.pug
html(lang=lang)
  body(dir=lang == 'ar' ? 'rtl' : 'ltr')
    // RTL (يمين-لليسار) للعربية
    // LTR (يسار-لليمين) للإنجليزية
```

### اصطلاح تسمية مفاتيح الترجمة

```json
{
  "section": {
    "subsection": {
      "key": "النص المُترجَم"
    }
  }
}
```

**مثال على الهرمية:**
```
title.main
header.logo.part1
menu.home
banner.welcome
services.skills.website_analysis
```

## إعداد البناء

### مهام Gulp (gulp.cjs)

```javascript
const gulp = require('gulp');
const pug = require('pug');
const { series, watch } = gulp;

// مهمة JS
gulp.task('app-js', function () {
  return gulp.src('src/assets/js/*.(js|mjs)')
    .pipe(concat('app.mjs'))
    .pipe(uglify({ mangle: true }))
    .pipe(gulp.dest('public/dist'));
});

// مهمة CSS
gulp.task('app-css', function () {
  return gulp.src('src/assets/css/*.(css|sass)')
    .pipe(concat('app.css'))
    .pipe(gulp.dest('public/dist/css'));
});

// مهمة Pug
gulp.task('pug', function(cb) {
  for (const theme of themes) {
    compileTemplate('en', { theme_name: theme, mode: 'dark', ... });
    compileTemplate('en', { theme_name: theme, mode: 'light', ... });
    compileTemplate('ar', { theme_name: theme, mode: 'dark', ... });
    compileTemplate('ar', { theme_name: theme, mode: 'light', ... });
  }
  cb();
});

exports.default = series('app-css', 'app-js', 'pug');
```

### تسمية ملف الإخراج

تتبع الملفات المُولَّدة النمط:

```
output-[لغة]-theme-[اسم-السمة]-[وضع].html
```

**أمثلة:**
- `output-en-theme-navy-dark.html`
- `output-en-theme-navy-light.html`
- `output-ar-theme-navy-dark.html`
- `output-ar-theme-olive-garden-feast-light.html`

## إعداد إعادة التجميع التلقائية (watch)

```bash
# يراقب ويعيد البناء تلقائياً
npm run watch

# أو مباشرة عبر gulp
gulp -f gulp.cjs watch
```

مهمة المراقبة تراقب:
- `src/assets/js/*.{js,mjs}` — إعادة بناء JS
- `src/assets/css/*.css` — إعادة بناء CSS
- `src/index.pug` — إعادة تجميع Pug

## إعداد Babel

ملف `babel.config.json`:

```json
{
  "presets": [
    ["@babel/preset-env", {
      "targets": "> 0.25%, not dead",
      "useBuiltIns": "usage",
      "corejs": 3
    }]
  ]
}
```

تشغيل Babel يدوياً:

```bash
npm run babel
```

## إعداد Firebase Hosting

ملف `firebase.json`:

```json
{
  "hosting": {
    "public": "public",
    "ignore": ["firebase.json", "**/.*"]
  }
}
```

ملف `.firebaserc`:

```json
{
  "projects": {
    "default": "your-project-id"
  }
}
```

النشر:

```bash
npm run deploy
```

## إعداد ESLint

ملف: `eslint.config.mjs`

```javascript
import js from "@eslint/js";
import json from "@eslint/json";
import css from "@eslint/css";
import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaVersion: "latest" }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  }
];
```

### فحص الكود

```bash
# فحص JavaScript وCSS
npm run lint

# فحص مع إصلاح تلقائي
npm run lint:fix

# فحص ملف محدد
npx eslint src/assets/js/main-custom.js
```

## سكريبتات package.json

### السكريبتات الحالية

```json
{
  "scripts": {
    "start": "concurrently \"npm run gulp\" \"npm run lint\" \"npm run deploy\" \"npm run babel\"",
    "watch": "gulp -f gulp.cjs watch",
    "lint": "npx eslint ./src/assets/css/main.css ./src/assets/js/main.js",
    "lint:fix": "npx eslint ./src/assets/css/main.css ./src/assets/js/main.js --fix",
    "deploy": "firebase deploy --only hosting",
    "gulp": "gulp -f gulp.cjs",
    "babel": "npx babel src/assets/js --out-dir public/dist --extensions .ts,.js,.tsx,.jsx"
  }
}
```

## إعداد الخطوط

### Google Fonts

الإعداد الحالي في `index.pug`:

```pug
link(href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet")
```

### تغيير الخط

```pug
// خيار 1: خط Google مختلف
link(href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet")

// خيار 2: خطوط النظام
style
  :root
    --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
```

## إعداد Bootstrap

### الإصدار

يستخدم Bootstrap 5.3.8 من CDN حالياً

### خيارات التخصيص

لتجاوز متغيرات Bootstrap:

```css
:root {
  --bs-primary: #003f87;
  --bs-body-font-family: 'Poppins', sans-serif;
}
```

## إعداد التحريكات

### إعدادات WOW.js

ملف: `src/assets/js/animation.js`

```javascript
new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: true,
  live: true
}).init();
```

### تخصيص التحريكات

```pug
.element.wow.fadeIn(data-wow-duration="2s" data-wow-delay="0.5s")
```

التحريكات المتاحة: `fadeIn`, `slideInUp`, `slideInDown`, `bounceIn`, `zoomIn`, وغيرها.

## استكشاف أخطاء الإعداد

### الإعداد لا يُطبَّق

```bash
# مسح ذاكرة التخزين المؤقت وإعادة البناء
rm -rf node_modules
npm cache clean --force
npm install
npm run watch
```

### السمة لا تتغير

```javascript
// فحص يدوي
console.log(document.body.dataset.theme);

// ضبط يدوي
document.body.dataset.theme = 'dark';
```

### اللغة لا تتبدل

```javascript
// التحقق من اللغة الحالية
console.log(localStorage.getItem('language'));

// ضبط يدوي
localStorage.setItem('language', 'ar');
location.reload();
```

---

للإعدادات المتقدمة، ارجع إلى التوثيق الخاص بكل تقنية:
- Pug: https://pugjs.org/api/reference.html
- Bootstrap: https://getbootstrap.com/docs/5.3/
- Gulp: https://gulpjs.com/docs/en/
- Firebase: https://firebase.google.com/docs/hosting

---

**آخر تحديث:** 20 فبراير 2026  
**الإصدار:** 2.2.2
