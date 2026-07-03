# بنية المشروع

## نظرة عامة

يستخدم SEO Space بنية مكونية معيارية مع قوالب Pug وBootstrap لأنماط التصميم وi18next للتوطين.

## نمط البنية الأساسية

```
قوالب Pug (index.pug)
         ↓
    التجميع (gulp.cjs)
         ↓
    إخراج HTML (public/output-*.html)
         ↓
    عرض المتصفح
         ↓
    تحسين JavaScript (main.js)
         ↓
    موقع تفاعلي
```

## تنظيم المجلدات

### ملفات المستوى الجذري

```
seo/
├── src/
│   ├── index.pug          # قالب الدخول الرئيسي
│   ├── layout.pug         # قالب التخطيط الرئيسي
│   ├── components/        # قوالب مكونات قابلة لإعادة الاستخدام
│   ├── pages/             # قوالب خاصة بالصفحات
│   ├── partials/          # ملفات القالب الجزئية
│   ├── sections/          # مكونات الأقسام
│   ├── mixins/            # تعريفات mixins في Pug
│   ├── assets/            # الملفات الثابتة
│   ├── vendor/            # مكتبات الطرف الثالث
│   ├── docs/              # ملفات التوثيق
│   └── ...
├── eslint.config.mjs      # إعداد ESLint لجودة الكود
├── package.json           # بيانات المشروع والتبعيات
└── .env                   # متغيرات البيئة (اختياري)
```

### مجلد `src/assets/`

```
src/assets/
├── css/
│   ├── main.css           # الأنماط العامة والتخطيط
│   ├── chatbox.css        # أنماط مكون الدردشة
│   ├── fontawesome.css    # مكتبة الأيقونات
│   └── color-palette/     # تعريفات ألوان السمات
│       ├── Ignite.css
│       ├── navy.css
│       ├── new-corporate-tech.css
│       └── olive-garden-feast.css
├── js/
│   ├── main.js            # منطق التطبيق الرئيسي
│   ├── fbase.js           # تكامل Firebase
│   ├── tabs.js            # منطق مكون التبويب
│   ├── imagesloaded.js    # كشف تحميل الصور
│   └── utils.js           # دوال المرافق
├── images/                # الصور الثابتة والرسوم
├── fonts/                 # ملفات الخطوط المخصصة
└── sounds/                # ملفات صوتية
    ├── open.wav           # مؤثرات صوتية للواجهة
    └── close.mp3
```

### مجلد `vendor/` (مكتبات الطرف الثالث)

```
vendor/
├── bootstrap/             # إطار عمل Bootstrap 5
│   ├── css/               # أنماط Bootstrap
│   └── js/                # JavaScript في Bootstrap
└── jquery/                # مكتبة jQuery
    └── jquery.js (إصدارات متعددة)
```

### مجلد `pages/` (قوالب الصفحات)

```
pages/
├── login.pug              # قالب صفحة تسجيل الدخول
├── profile.pug            # صفحة ملف المستخدم
└── signup.pug             # صفحة التسجيل
```

### مجلد `mixins/` (مكونات قابلة لإعادة الاستخدام)

```
mixins/
├── about.pug              # mixin قسم من نحن
├── assistants.pug         # عرض الفريق/المساعدين
├── auth/                  # مكونات المصادقة
├── banner.pug             # mixin قسم البانر
├── blog.pug               # mixin قسم المدونة
├── contact.pug            # mixin نموذج الاتصال
├── footer.pug             # mixin التذييل
├── header.pug             # mixin الرأسية/التنقل
├── headSection.pug        # mixin عنوان القسم
├── portfolio.pug          # mixin قسم المحفظة
├── preloader.pug          # mixin شاشة التحميل
└── services.pug           # mixin قسم الخدمات
```

### مجلد `locals/` (التوطين)

```
locals/
├── en.json                # الترجمات الإنجليزية
└── ar.json                # الترجمات العربية
```

## عملية البناء

### سير التجميع

```
┌─────────────────────────────────────────────────────────┐
│             1. تغيير أثناء التطوير                      │
│    (تعديل .pug أو .json أو .css أو .js في src/)     │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│       2. مراقب الملفات يكتشف التغيير                    │
│        (مراقبة Gulp أو أداة البناء)                   │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│      3. gulp.cjs ينفذ التجميع                          │
│                                                         │
│  - يقرأ src/index.pug و mixins                         │
│  - يحمّل ملفات اللغة (locals/en.json, ar.json)        │
│  - يعالج قوالب Pug                                    │
│  - يجميع CSS وينسّق أوراق الأنماط                    │
│  - ينقل وينضغط JavaScript                             │
│  - يحقن المتغيرات والترجمات                            │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│      4. توليد مخرجات HTML متعددة                       │
│                                                         │
│  لكل توليفة:                                           │
│  - اللغة (en, ar)                                      │
│  - السمة (ignite, navy, corporate-tech, إلخ)           │
│  - الوضع (dark, light)                                 │
│                                                         │
│  مثال:                                                 │
│  - output-en-theme-navy-dark.html                      │
│  - output-en-theme-navy-light.html                     │
│  - output-ar-theme-navy-dark.html                      │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│    5. يحمّل المتصفح HTML المُولَّد                      │
│    6. يحمّل المتصفح CSS وJavaScript                    │
│    7. تكامل Firebase (إن كان مُعدَّ)                   │
│    8. تُعرض الصفحة بالسمة واللغة المحددتين             │
└─────────────────────────────────────────────────────────┘
```

## بنية القالب

### هيكل القالب الرئيسي

**src/index.pug** - قالب الدخول الرئيسي
```pug
doctype html
html(lang=lang)
  head
    // علامات Meta والـ SEO
    // استيراد CSS (الرئيسي والسمات والأيقونات)
    // تحميل الخطوط
  body(dir=lang === 'ar' ? 'rtl' : 'ltr', data-theme=mode)
    // mixin شاشة التحميل
    // mixin الرأسية
    // محتوى الصفحة (عبر layout.pug أو pages/*.pug)
    // mixin التذييل
    // السكريبتات وتكامل Firebase
```

**src/layout.pug** - غلاف التخطيط الرئيسي
**src/pages/*** - قوالب خاصة بالصفحات (تسجيل الدخول، الملف الشخصي، التسجيل)
**src/mixins/*** - mixins مكونات قابلة لإعادة الاستخدام

### المتغيرات المستخدمة في القالب

| المتغير | النوع | الغرض |
|---------|-------|--------|
| `lang` | string | اللغة الحالية ('en' أو 'ar') |
| `theme_name` | string | اسم السمة الحالية |
| `mode` | string | وضع السمة ('dark' أو 'light') |
| `t()` | function | دالة ترجمة  |

### ميزات Pug المستخدمة

- **المتغيرات**: `#{variable}` للاستيفاء
- **الدوال**: `t('key')` للترجمات
- **الشروط**: `if`، `else if`، `else`
- **الحلقات**: `each item in array`
- **الـ Mixins**: مكونات قالب قابلة لإعادة الاستخدام
- **الفئات**: تطبيق فئات CSS شرطية
- **السمات**: سمات HTML ديناميكية

## بنية CSS

### ترتيب التتالي

```
Bootstrap الأساسي (CDN)
  ↓
لوحة الألوان (التحميل الديناميكي)
  ↓
main.css (الأنماط العامة)

```

### نظام لوحة الألوان

كل ملف سمة يعرّف:

```css
:root {
  --main-color          /* الخلفية الأساسية */
  --secondary-color     /* خلفية البطاقات/الأقسام */
  --third-color         /* الروابط والأيقونات الأساسية */
  --accent-color        /* الأزرار والتمييزات */
  --text-color          /* النص الرئيسي */
  --text-hover-color    /* نص عند التحويم */
  --text-muted          /* النص الثانوي */
  --light-bg-color      /* الخلفيات الفاتحة */
  --light-color         /* الأبيض/الفاتح النقي */
  --dark-color          /* الأسود/الداكن النقي */
}

[data-theme="dark"]  { /* الوضع الداكن */ }
[data-theme="light"] { /* الوضع الفاتح */ }
```

### الشبكة سريعة الاستجابة

نقاط التوقف Bootstrap المستخدمة:

```css
xs: < 576px         /* الجوال */
sm: ≥ 576px         /* الجوال (أفقي) */
md: ≥ 768px         /* الجهاز اللوحي */
lg: ≥ 992px         /* سطح المكتب */
xl: ≥ 1200px        /* سطح المكتب الكبير */
xxl: ≥ 1400px       /* سطح المكتب الكبير جداً */
```

## بنية JavaScript

### ترتيب تحميل السكريبت

```html
1. vendor/jquery/jquery.min.js
   ↓ (jQuery يوفر global $)
2. Bootstrap 5 Bundle (من CDN)
   ↓ (يضيف مكونات Bootstrap)
3. assets/js/fbase.js
   ↓ (تكامل Firebase)
4. assets/js/imagesloaded.js
   ↓ (كشف الصور)
5. assets/js/main.js (defer)
   ↓ (تهيئة التطبيق — يعمل أخيراً)
```

### مسؤوليات السكريبتات

| السكريبت | الوظيفة |
|-----------|---------|
| `main.js` | معالجة النماذج، التفاعلية، مستمعو الأحداث |
| `fbase.js` | مصادقة Firebase وقاعدة البيانات الفورية |
| `tabs.js` | وظيفة تبديل التبويبات |
| `imagesloaded.js` | كشف تحميل الصور للتحريكات |
| `utils.js` | دوال المساعدة والمرافق |

### مجلد `locals/` (التوطين)

```
locals/
├── en.json                # الترجمات الإنجليزية
└── ar.json                # الترجمات العربية
```

## بنية التوطين

### إعداد i18next

```
locals/
├── en.json    → نصوص الإنجليزية
└── ar.json    → نصوص العربية

كلا الملفين لهما بنية مطابقة:
{
  "section": {
    "key": "النص المُترجَم"
  }
}
```

### هرمية مفاتيح الترجمة

```
title/
  main: عنوان الصفحة

header/
  logo/
    part1: "Spac"
    part2: "Dyna"

menu/
  home, about, services, etc.

banner/
  welcome, description, etc.

about/services/
  data_analysis, data_reporting, etc.
```

### عرض النص الديناميكي

```pug
// ترجمة بسيطة
h1 #{t('title.main')}

// مع استيفاء
p #{t('message')}

// منطق شرطي مع ترجمة
if condition
  span #{t('conditional.text')}
```

## نظام السمات

### السمات المتاحة

1. **Ignite** — ألوان حيوية ونابضة بالحياة
2. **Navy** — مظهر مهني واحترافي
3. **New Corporate Tech** — جماليات تقنية حديثة
4. **Olive Garden Feast** — نغمات طبيعية وأرضية

### آلية تبديل السمة

```
CSS Custom Properties (--variables)
  ↓
color-palette/theme-name.css
  ↓
يُطبَّق عبر سمة data-theme
  ↓
عنصر body: data-theme="dark" أو data-theme="light"
  ↓
CSS يختار عبر [data-theme="..."]
```

### دعم RTL

```
lang === 'ar'
  ↓
dir="rtl" على body
  ↓
Bootstrap يعالج تخطيط RTL
  ↓
تُطبَّق الخصائص المنطقية لـ CSS
```

## التخطيط سريع الاستجابة

### نظام الحاوية

```
Body
  └── .container (Bootstrap)
      └── .row (صف الشبكة)
          ├── .col-lg-6 (6 أعمدة على الشاشات الكبيرة)
          ├── .col-lg-4 (4 أعمدة على الشاشات الكبيرة)
          └── .col-sm-12 (12 عموداً على الشاشات الصغيرة)
```


## نظام النماذج

### هيكل نموذج التواصل

```
form#contact
  ├── input[name="name"]
  ├── input[name="surname"]
  ├── input[name="email"]
  ├── textarea[name="message"]
  └── button[type="submit"]
```

## تحسين الأداء

### التقنيات المستخدمة

1. **CSS**
   - Bootstrap CDN (مخزّن مؤقتاً من المتصفحات)
   - بنيات إنتاج مُصغَّرة
   - خصائص CSS المخصصة لتبديل السمات (لا حاجة لإعادة التجميع)

2. **الصور**
   - تنسيقات PNG/JPG مُحسَّنة
   - جاهزة للتحميل الكسول
   - دعم الصور سريعة الاستجابة

3. **JavaScript**
   - سمة defer للسكريبتات غير الحيوية
   - حزم مُصغَّرة
   - استخدام jQuery الانتقائي
   - مخرجات Babel مُحسَّنة عبر core-js

4. **الخطوط**
   - Google Fonts مع preconnect
   - font-display: swap للأداء

## اعتبارات القابلية للتوسع

### لإضافة ميزات

1. **أقسام جديدة**: أضف إلى `index.pug`، أضف ترجمات إلى locals
2. **سمات جديدة**: أنشئ ملف CSS جديداً في `color-palette/`
3. **وظائف جديدة**: أضف إلى `main.js`
4. **لغات جديدة**: أنشئ JSON جديداً في `locals/`

### إعادة استخدام المكونات

استخدم Pug mixins للمكونات المتكررة:

```pug
mixin serviceCard(title, description, icon)
  .service-card
    img(src=icon)
    h3= title
    p= description

// الاستخدام
+serviceCard('SEO', 'تحسين البحث', 'icon.png')
```

---

هذه البنية تدعم القابلية للتوسع وسهولة الصيانة وسير عمل تطوير سلس.

---

**آخر تحديث:** 23 فبراير 2026  
**الإصدار:** 2.4.1
