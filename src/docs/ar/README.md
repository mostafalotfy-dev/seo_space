# SEO Space - توثيق المشروع

> قالب HTML5 احترافي لوكالات التسويق الرقمي وخدمات تحسين محركات البحث

## نظرة عامة

SEO Space قالب حديث وسريع الاستجابة ومصمم باحترافية لوكالات التسويق الرقمي ومزودي خدمات SEO. تم بناؤه باستخدام **قوالب Pug** و**Bootstrap 5** و**توطين i18next**، ويوفر حلاً شاملاً جاهزاً للإنتاج لعرض خدمات SEO وقدرات التسويق الرقمي.

يأتي القالب مع 16 ملف HTML مُجمَّعاً مسبقاً يدعم لغتين (الإنجليزية والعربية) و4 سمات ألوان احترافية ووضعين للعرض (داكن وفاتح).

## الميزات الرئيسية

### التصميم والمظهر
- 🎨 **4 سمات ألوان احترافية** — Ignite، Navy، Corporate Tech، Olive Garden Feast
- 🌓 **وضع داكن/فاتح** — تبديل السمات الديناميكي مع دعم كامل
- ⚡ **تجاوب كامل** — إطار Bootstrap 5.3.8 بمبدأ الجوّال أولاً
- 🎬 **تحريكات سلسة** — تحريكات WOW.js عند التمرير وانتقالات CSS
- 📱 **مُحسَّن للجوال** — يدعم جميع الأجهزة وأحجام الشاشات الحديثة

### التوطين والمحتوى
- 🌍 **دعم متعدد اللغات** — الإنجليزية (en) والعربية (ar) مع دعم RTL
- 📝 **تكامل i18next** — نظام مرن لإدارة الترجمات
- 🗣️ **تبديل اللغات** — تحديد اللغة بسهولة

### التطوير والتخصيص
- 🏗️ **قوالب Pug** — بناء جملة قالب نظيف وسهل الصيانة
- 🛠️ **أدوات بناء حديثة** — سير عمل تجميع وتطوير آلي
- 📦 **مُعبَّأ مسبقاً** — 16 ملف HTML جاهزة للاستخدام
- 🔍 **تكامل ESLint** — فحص جودة الكود المدمج
- 📋 **موثّق جيداً** — توثيق شامل لجميع الميزات

### إمكانية الوصول وتحسين محركات البحث
- ♿ **قابلية الوصول** — HTML5 دلالية وسمات ARIA
- 🎯 **مُحسَّن لمحركات البحث** — ممارسات SEO المدمجة
- 🔎 **البيانات المنظمة** — جاهز لتنفيذ ترميز schema
- 📈 **أداء مُحسَّن** — تحميل سريع وتجربة سلسة

## هيكل المشروع

```
seo/
├── index.pug                          # ملف القالب الرئيسي
├── package.json                       # تبعيات Node.js
├── gulp.cjs                           # سكريبت بناء Gulp
├── eslint.config.mjs                  # إعداد ESLint
├── babel.config.json                  # إعداد Babel
│
├── src/assets/                        # الملفات الثابتة
│   ├── css/                           # أوراق الأنماط
│   │   ├── main.css                   # الأنماط الرئيسية
│   │   ├── animated.css               # أنماط التحريك
│   │   ├── fontawesome.css            # مكتبة الأيقونات
│   │   ├── owl.css                    # أنماط الكاروسيل
│   │   └── color-palette/             # لوحات ألوان السمات
│   │       ├── ignite.css
│   │       ├── navy.css
│   │       ├── new-corporate-tech.css
│   │       └── olive-garden-feast.css
│   ├── js/                            # ملفات JavaScript
│   │   ├── main-custom.js             # منطق التطبيق المخصص
│   │   ├── animation.js               # مؤثرات التحريك
│   │   ├── tabs.js                    # وظيفة التبويب
│   │   └── utils.js                   # دوال مساعدة
│   └── images/                        # الصور والرسوم
│
├── locals/                            # ملفات التوطين
│   ├── en.json                        # الترجمات الإنجليزية
│   └── ar.json                        # الترجمات العربية
│
├── public/                            # ملفات الإخراج المُجمَّعة
│   ├── output-*.html                  # ملفات HTML المُولَّدة
│   ├── dist/                          # حزمة JS/CSS المُصغَّرة
│   └── vendor/                        # مكتبات الطرف الثالث
│
└── src/docs/                          # توثيق المشروع
    ├── README.md                      # هذا الملف
    ├── INSTALLATION.md                # تعليمات الإعداد
    ├── ARCHITECTURE.md                # هيكل المشروع
    ├── COLOR_PALETTE.md               # توثيق السمات
    ├── CONFIGURATION.md               # دليل الإعداد
    ├── DEVELOPMENT.md                 # إرشادات التطوير
    └── LOCALIZATION.md                # دليل الترجمة
```

## دليل البدء السريع

### المتطلبات الأساسية
- **Node.js** v14.0.0 أو أعلى ([تنزيل](https://nodejs.org/))
- **npm** v6.0.0 أو أعلى (يأتي مع Node.js)
- **محرر أكواد** (يُنصح بـ VS Code)
- ذاكرة RAM لا تقل عن 2 جيجابايت، ~500 ميجابايت مساحة قرص

### خطوات التثبيت

```bash
# 1. الانتقال إلى مجلد المشروع
cd d:\projects\seo_Space

# 2. تثبيت التبعيات (2-5 دقائق)
npm install

# 3. تشغيل وضع التطوير مع إعادة التجميع التلقائية
npm run watch

# أو تجميع مرة واحدة بدون مراقبة
npm start
```

### ملفات الإخراج المُولَّدة

بعد تشغيل `npm start` أو `npm run watch`، يتم توليد 16 ملف HTML تلقائياً في مجلد `public/`:

**الإصدارات الإنجليزية:**
- `output-en-theme-ignite-dark.html`
- `output-en-theme-ignite-light.html`
- `output-en-theme-navy-dark.html`
- `output-en-theme-navy-light.html`
- `output-en-theme-new-corporate-tech-dark.html`
- `output-en-theme-new-corporate-tech-light.html`
- `output-en-theme-olive-garden-feast-dark.html`
- `output-en-theme-olive-garden-feast-light.html`

**الإصدارات العربية (RTL):**
- `output-ar-theme-ignite-dark.html`
- `output-ar-theme-ignite-light.html`
- `output-ar-theme-navy-dark.html`
- `output-ar-theme-navy-light.html`
- `output-ar-theme-new-corporate-tech-dark.html`
- `output-ar-theme-new-corporate-tech-light.html`
- `output-ar-theme-olive-garden-feast-dark.html`
- `output-ar-theme-olive-garden-feast-light.html`

### الفتح في المتصفح

```bash
# Windows
start output-en-theme-navy-dark.html

# macOS
open output-en-theme-navy-dark.html

# Linux
xdg-open output-en-theme-navy-dark.html
```

أو ببساطة انقر نقراً مزدوجاً على ملف HTML في مستكشف الملفات.

## مكدس التقنيات

| التقنية | الإصدار | الغرض |
|---------|---------|--------|
| **Pug** | 3.0.3 | محرك القوالب |
| **Bootstrap** | 5.3.8 | إطار CSS |
| **jQuery** | 4.0.0 | مكتبة JavaScript |
| **Gulp** | 5.0.1 | أداة البناء |
| **Babel** | 7.x | تحويل JavaScript |
| **ESLint** | 9.39.2 | جودة الكود |
| **Firebase** | 12.9.0 | استضافة الويب |
| **DOMPurify** | 3.3.1 | تعقيم HTML |
| **Animate.css** | 4.1.1 | تحريكات CSS |

## أقسام الصفحة

### 1. **الرأسية (Header)**
- شريط تنقل ثابت مع تمرير سلس
- شعار العلامة التجارية
- عناصر القائمة مع حالة نشطة
- زر قائمة الجوال
- زر CTA (تواصل الآن)

### 2. **البانر الرئيسي (Hero)**
- رسالة ترحيب وعنوان رئيسي
- عنوان فرعي مميز
- نموذج بحث CTA
- صورة بانر

### 3. **قسم من نحن (About)**
- نظرة عامة على الشركة
- أربع بطاقات تسليط ضوء على الخدمات:
  - تحليل البيانات
  - تقارير البيانات
  - تحليلات الويب
  - اقتراحات SEO

### 4. **قسم الخدمات (Services)**
- وصف تفصيلي للخدمات
- أشرطة تقدم المهارات
- صورة توضيحية للخدمة

### 5. **قسم المحفظة (Portfolio)**
- عرض المشاريع المكتملة
- مؤثرات hover
- تخطيط شبكي للمحفظة

### 6. **قسم المدونة (Blog)**
- عنوان قسم المقالات
- عناصر زخرفية

### 7. **قسم التواصل (Contact)**
- نموذج تواصل
- معلومات الهاتف
- التحقق من صحة النموذج

### 8. **التذييل (Footer)**
- معلومات حقوق النشر
- اعتمادات التصميم

## التوثيق

التوثيق الكامل متاح في مجلد `docs/`:

### البدء
- **[INSTALLATION.md](INSTALLATION.md)** - دليل الإعداد خطوة بخطوة
- **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - مرجع سريع للأوامر

### التعلم والتطوير
- **[DEVELOPMENT.md](DEVELOPMENT.md)** - سير العمل وأفضل الممارسات
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - البنية التقنية وهيكل المشروع

### التخصيص والإعداد
- **[CONFIGURATION.md](CONFIGURATION.md)** - متغيرات البيئة وإعدادات البناء
- **[COLOR_PALETTE.md](COLOR_PALETTE.md)** - تخصيص السمات وأنظمة الألوان
- **[LOCALIZATION.md](LOCALIZATION.md)** - دعم متعدد اللغات

### النشر والدعم
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - أدلة النشر على منصات متعددة
- **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** - المشكلات الشائعة وحلولها
- **[FAQ.md](FAQ.md)** - الأسئلة الشائعة
- **[CHANGELOG.md](CHANGELOG.md)** - سجل الإصدارات

## دعم المتصفحات

- Chrome (الأحدث)
- Firefox (الأحدث)
- Safari (الأحدث)
- Edge (الأحدث)
- متصفحات الجوال (iOS Safari، Chrome Mobile)

## المهام الشائعة

### تغيير السمة
عدّل متغير `theme_name` في عملية التجميع أو حدد ملف HTML المطلوب مباشرةً.

### إضافة قسم جديد
1. أنشئ قسماً جديداً في `index.pug`
2. أضف الترجمات إلى `locals/en.json` و`locals/ar.json`
3. أضف الأنماط إلى `src/assets/css/main.css`
4. أعد التجميع باستخدام `npm run watch`

### تخصيص الألوان
عدّل متغيرات CSS في `src/assets/css/color-palette/theme-name.css`

## الترخيص

رخصة ISC — انظر `package.json` للتفاصيل

## المؤلف

تصميم وتطوير: مصطفى لطفي

---

**للدعم:** راجع ملفات التوثيق أو تصفح [INDEX.md](INDEX.md) للتنقل الكامل.

---

**آخر تحديث:** 20 فبراير 2026  
**إصدار المشروع:** 2.2.2  
