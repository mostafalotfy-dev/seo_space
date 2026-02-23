# دليل التوطين

## نظرة عامة

يستخدم SEO Space **i18next** للدعم متعدد اللغات مع دعم مدمج للإنجليزية (en) والعربية (ar). يدعم النظام النص من اليمين لليسار (RTL) للعربية ويتعامل مع النصوص المحلية في جميع أنحاء التطبيق.

## اللغات المدعومة

| اللغة | الكود | الخط | اتجاه النص |
|-------|-------|------|------------|
| الإنجليزية | `en` | لاتيني | LTR (يسار-لليمين) |
| العربية | `ar` | عربي | RTL (يمين-لليسار) |

## هيكل الملفات

```
locals/
├── en.json    ← الترجمات الإنجليزية
└── ar.json    ← الترجمات العربية
```

## هيكل ملفات الترجمة

### en.json (الإنجليزية)

```json
{
  "title": {
    "main": "SEO Space - SEO HTML5 Template"
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
    "welcome": "Welcome to SEO Space",
    "we_make": "We Make ",
    "digital_ideas": "Digital Ideas"
  }
}
```

### ar.json (العربية)

يجب أن يكون له نفس هيكل المفاتيح مع الترجمات العربية:

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
  }
}
```

## اصطلاح تسمية مفاتيح الترجمة

استخدم نقطة التسمية المتداخلة للتنظيم:

```
section.subsection.key

أمثلة:
- title.main
- header.logo.part1
- menu.home
- banner.welcome
- services.heading.part1
- contact.form.name
```

### أفضل الممارسات لأسماء المفاتيح

```
✓ الممارسات الجيدة:
- استخدم أحرف صغيرة
- استخدم الشرطة السفلية للمفاتيح متعددة الكلمات
- جمّع المحتوى ذا الصلة
- استخدم أسماء وصفية

✗ تجنب:
- الحروف المختلطة (استخدم الأحرف الصغيرة)
- المسافات في المفاتيح
- الأسماء العامة (key1, text1, إلخ)
- الاختصارات ذات الحرف الواحد
```

## استخدام الترجمات في القوالب

### الترجمة الأساسية

في قالب Pug:

```pug
// ترجمة بسيطة
h1 #{t('title.main')}

// المخرج: <h1>SEO Space - SEO HTML5 Template</h1>
// (أو المكافئ العربي في ar.json)
```

### مفاتيح الترجمة المتداخلة

```pug
// الوصول إلى القيم المتداخلة
h4 #{t('header.logo.part1')}
span #{t('header.logo.part2')}

// عناصر القائمة
ul.nav
  li
    a(href="#home") #{t('menu.home')}
  li
    a(href="#about") #{t('menu.about')}
```

### الترجمة مع الاستيفاء

```pug
// استخدام متغيرات القالب
h2 مرحباً، #{t('menu.home')}

// مع منطق شرطي
if isLoggedIn
  p #{t('greeting.user')}
else
  p #{t('greeting.guest')}
```

## إضافة مفاتيح ترجمة جديدة

### العملية خطوة بخطوة

#### 1. تحديد النص المُراد ترجمته

قرر ما هو المحتوى المحتاج للترجمة وأنشئ هيكل مفتاح منطقي.

```
المحتوى: "Submit Your Information"
المفتاح: form.submit_button
```

#### 2. إضافة إلى en.json

```json
{
  "form": {
    "submit_button": "Submit Your Information"
  }
}
```

#### 3. إضافة إلى ar.json (العربية)

```json
{
  "form": {
    "submit_button": "قدم معلوماتك"
  }
}
```

#### 4. الاستخدام في القالب

```pug
button #{t('form.submit_button')}
```

#### 5. إعادة التجميع

```bash
npm run watch
```

يُطبَّق التغيير على جميع صيغ اللغة تلقائياً.

## إضافة لغة جديدة

### الخطوة 1: إنشاء ملف الترجمة الجديد

أنشئ `locals/xx.json` (حيث `xx` هو رمز اللغة):

```json
// locals/fr.json (مثال على الفرنسية)
{
  "title": {
    "main": "SEO Space - Modèle HTML5 SEO"
  },
  "menu": {
    "home": "Accueil",
    "about": "À Propos",
    "services": "Services"
  }
}
```

### الخطوة 2: تحديث سكريبت التجميع

عدّل `gulp.cjs` لتضمين اللغة الجديدة:

```javascript
// أضف اللغة الجديدة إلى object الترجمات
const translations = {
  en: require('./locals/en.json'),
  ar: require('./locals/ar.json'),
  fr: require('./locals/fr.json'), // أضف fr
};
```

### الخطوة 3: إعادة التجميع

```bash
npm run watch
```

سيتم توليد ملفات HTML جديدة للغة الجديدة مع جميع توليفات السمات/الأوضاع.

### الخطوة 4: إضافة محوّل اللغة (اختياري)

أنشئ محدد اللغة في JavaScript:

```javascript
// محوّل اللغة
$('.lang-selector').on('click', function() {
  const lang = $(this).data('lang');
  localStorage.setItem('language', lang);
  
  // التوجيه إلى ملف HTML المناسب
  const theme = getActiveTheme();
  const mode = getActiveMode();
  window.location.href = `output-${lang}-theme-${theme}-${mode}.html`;
});
```

## اتجاه النص (RTL/LTR)

### التعامل التلقائي مع الاتجاه

في `index.pug`:

```pug
html(lang=lang)
  body(dir=lang == 'ar' ? 'rtl' : 'ltr')
```

يتعيّن الاتجاه تلقائياً إلى:
- `dir="ltr"` للإنجليزية واللغات الأخرى من يسار لليمين
- `dir="rtl"` للعربية واللغات الأخرى من يمين لليسار

### CSS لدعم RTL

يتعامل Bootstrap 5 تلقائياً مع تخطيط RTL. يجب على CSS المخصص استخدام الخصائص المنطقية:

```css
/* ✓ جيد: استخدم الخصائص المنطقية */
.box {
  padding-inline-start: 20px;  /* يتكيف مع LTR/RTL */
  margin-block-end: 10px;       /* يعمل لجميع الاتجاهات */
}

/* ✓ بديل: استخدم RTL/LTR محدد */
[dir="ltr"] .box {
  padding-left: 20px;
}

[dir="rtl"] .box {
  padding-right: 20px;
}

/* ✗ تجنب: يسار/يمين مُشفَّر بصلابة فقط */
.box {
  padding-left: 20px;           /* لن يعمل في RTL */
}
```

### اتجاه Flex لـ RTL

```css
.flex-container {
  display: flex;
  flex-direction: row;  /* LTR: يسار لليمين */
}

[dir="rtl"] .flex-container {
  flex-direction: row-reverse;  /* RTL: يمين لليسار */
}
```

## أفضل ممارسات الترجمة

### 1. احتفظ بالنصوص في ملفات الترجمة

❌ **سيء**: نص مُشفَّر بصلابة في القالب
```pug
h1 Welcome to Our Site
```

✓ **جيد**: استخدم مفتاح الترجمة
```pug
h1 #{t('heading.welcome')}
```

### 2. هرمية مفاتيح منطقية

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

### 3. مصطلحات متسقة

```json
{
  "header": {
    "logo_text": "الشركة"
  },
  "footer": {
    "company_name": "الشركة"  // ✓ استخدم نفس المصطلح
  }
}
```

### 4. التعامل مع الجمع والأرقام

```json
{
  "stats": {
    "projects_one": "مشروع واحد",
    "projects_other": "{count} مشاريع"
  }
}
```

### 5. تنسيق التاريخ والأرقام

```json
{
  "en": {
    "date_format": "MM/DD/YYYY",
    "currency": "$"
  },
  "ar": {
    "date_format": "DD/MM/YYYY",
    "currency": "ر.س"
  }
}
```

## إمكانية الوصول في الترجمات

### سمات اللغة

```pug
html(lang=lang)
  head
    // سمة lang مُعيَّنة بشكل صحيح
  body
    // محتوى باللغة المحددة
```

### العناوين ووصف Meta

```pug
meta(name="description" content=t('meta.description'))
meta(name="keywords" content=t('meta.keywords'))
title= t('title.main')
```

### تسميات ARIA

```pug
button(aria-label=t('accessibility.close_menu'))
  span ×

nav(aria-label=t('accessibility.main_navigation'))
  ul.nav
    // عناصر التنقل
```

## استكشاف أخطاء الترجمات

### المشكلة: مفتاح الترجمة لا يظهر

```javascript
// تأكد من وجود المفتاح
console.log(t('menu.home'));

// تحقق من تحميل اللغة
console.log(localStorage.getItem('language'));
```

**الحل**:
1. تأكد من وجود المفتاح في ملف JSON
2. تحقق من صحة بناء JSON
3. تأكد من ضبط اللغة بشكل صحيح
4. أعد التجميع: `npm run watch`

### المشكلة: الحروف الخاصة لا تُعرض

```json
{
  "text": "مرحباً بالعالم"    // ✓ يعمل
}
```

استخدم ترميز UTF-8 في ملفات JSON.

### المشكلة: محتوى RTL يكسر التخطيط

تحقق من أن CSS يستخدم الخصائص المنطقية أو أنماط RTL:

```css
[dir="rtl"] element {
  float: right;     // ✓ لـ RTL
}

[dir="ltr"] element {
  float: left;      // ✓ لـ LTR
}
```

## سير عمل الترجمة للفرق

### 1. المطور يُنشئ المفاتيح

في `en.json`:
```json
{
  "new_feature": {
    "title": "New Feature Title"
  }
}
```

### 2. المترجم يملأ اللغات الأخرى

في `ar.json`:
```json
{
  "new_feature": {
    "title": "عنوان الميزة الجديدة"
  }
}
```

### 3. المراجعة والتحقق

- تأكد من وجود جميع المفاتيح في جميع ملفات اللغة
- تحقق من دقة الترجمات
- اختبر في المتصفح مع اللغة الفعلية

### 4. التحكم في الإصدارات

```bash
git add locals/
git commit -m "Add translations for new feature"
```

## أنماط الترجمة الشائعة

### علامات الترقيم

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

### الأرقام والمبالغ

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

## الموارد

- **توثيق i18next**: https://www.i18next.com/
- **اعتبارات RTL**: https://www.w3.org/International/questions/qa-html-dir
- **الحروف Unicode**: https://unicode-table.com/
- **رموز اللغات**: https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes

---

احتفظ بالترجمات متسقة ودقيقة لأفضل تجربة مستخدم عبر جميع اللغات! 🌍

---

**آخر تحديث:** 20 فبراير 2026  
**الإصدار:** 2.2.2
