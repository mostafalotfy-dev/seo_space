# توثيق لوحة الألوان

## نظرة عامة

يتضمن SEO Space أربع لوحات ألوان مصممة باحترافية مع دعم كامل لوضعي الداكن/الفاتح. كل سمة مُعرَّفة في ملف CSS منفصل يحتوي على خصائص CSS المخصصة (المتغيرات) لتسهيل التخصيص.

## ملفات السمات

| السمة | الملف | حالة الاستخدام |
|-------|-------|----------------|
| **Ignite** | `assets/css/color-palette/ignite.css` | علامة تجارية حيوية ونابضة |
| **Navy** | `assets/css/color-palette/navy.css` | مهني واحترافي |
| **New Corporate Tech** | `assets/css/color-palette/new-corporate-tech.css` | شركة تقنية حديثة |
| **Olive Garden Feast** | `assets/css/color-palette/olive-garden-feast.css` | علامة طبيعية وأرضية |

## نظام متغيرات الألوان

### المتغيرات الأساسية

جميع السمات تعرّف هذه الخصائص المخصصة لـ CSS:

```css
:root {
  /* الخلفيات */
  --main-color              /* الخلفية الأساسية للأقسام */
  --secondary-color         /* خلفية البطاقات والحاويات */
  --light-bg-color          /* مناطق الخلفية الفاتحة */
  
  /* ألوان النص */
  --text-color              /* نص الفقرات الرئيسي */
  --title-color             /* العناوين والرؤوس */
  --paragraph-color         /* النص الوصفي */
  --text-muted              /* النص الثانوي/المعطل */
  --text-hover-color        /* النص عند حالات التحويم */
  
  /* ألوان العلامة التجارية */
  --third-color             /* اللون الأساسي (الروابط، الأيقونات) */
  --accent-color            /* أزرار CTA والتمييزات */
  --secondary-hover-color   /* حالة التحويم للعناصر الثانوية */
  
  /* ألوان الخدمة */
  --light-color             /* الأبيض/الفاتح النقي */
  --dark-color              /* الداكن/الأسود النقي */
  --selection-color         /* خلفية تحديد النص */
  
  /* الطباعة */
  --font-family             /* مجموعة الخطوط الأساسية */
}
```

## سمة Olive Garden Feast (مثال)

### الوضع الداكن (الافتراضي)

```css
:root,[data-theme="dark"] {
  --main-color:           #020617;          /* أزرق-أسود عميق */
  --secondary-color:      #020617;
  --light-bg-color:       #020617;
  
  --third-color:          #3B82F6;          /* أزرق ساطع */
  --accent-color:         #F59E0B;          /* عنبري/ذهبي */
  --secondary-hover-color:#2563EB;          /* أزرق أغمق */
  
  --text-color:           #E5E7EB;          /* رمادي فاتح */
  --title-color:          #E5E7EB;
  --paragraph-color:      #E5E7EB;
  --text-muted:           #94A3B8;          /* رمادي باهت */
  --text-hover-color:     #FBBF24;          /* عنبري أفتح */
  
  --light-color:          #FFFFFF;
  --dark-color:           #020617;
  --selection-color:      var(--accent-color);
  --font-family:          'Poppins', sans-serif;
}
```

**لوحة الألوان المرئية:**
- الخلفية: أزرق داكن جداً (#020617)
- اللون الأساسي: أزرق ساطع (#3B82F6)
- التمييزات/CTA: عنبري دافئ (#F59E0B)
- النص: رمادي فاتح (#E5E7EB)
- النص الباهت: رمادي متوسط (#94A3B8)

### الوضع الفاتح

```css
@media screen and (prefers-color-scheme: light) {
  :root {
    --main-color:           #F9FAFB;        /* أبيض مائل */
    --secondary-color:      #5365ce;        /* أزرق باهت */
    --light-bg-color:       #88d9e6;        /* سماوي فاتح */
    
    --third-color:          #2563EB;        /* أزرق متوسط */
    --accent-color:         #F97316;        /* برتقالي */
    --secondary-hover-color:#e27777;        /* وردي */
    --text-hover-color:     #dda15e;        /* بيج */
    
    --text-color:           #111827;        /* رمادي داكن/أسود */
    --paragraph-color:      #444444;
    --title-color:          #111827;
    --text-muted:           #6B7280;
    
    --light-color:          #fff;
    --dark-color:           black;
    --selection-color:      var(--third-color);
    --font-family:          'Poppins', sans-serif;
  }
}
```

## استخدام السمات

### اختيار سمة

أثناء التجميع، حدد اسم السمة في `gulp.cjs`:

```javascript
const themes = [
  'olive-garden-feast',
  'navy',
  'new-corporate-tech',
  'ignite',
];
```

### في إخراج HTML

يتم تحميل CSS للسمة ديناميكياً:

```html
<link rel="stylesheet" href="assets/css/color-palette/olive-garden-feast.css">
```

### تبديل السمات بـ JavaScript

```javascript
// تغيير الوضع في وقت التشغيل
document.body.dataset.theme = 'dark'; // أو 'light'

// تغيير لوحة الألوان (يتطلب ورقة أنماط جديدة)
const link = document.querySelector('link[href*="color-palette"]');
link.href = 'assets/css/color-palette/navy.css';
```

## إنشاء سمة مخصصة

### الخطوة 1: إنشاء ملف السمة الجديدة

أنشئ `assets/css/color-palette/my-custom-theme.css`:

```css
/* سمتي المخصصة */
/*----------------------------------------------------------
المؤلف: اسمك
-----------------------------------------------------------*/

/* =========================
   الوضع الداكن (الافتراضي)
   ========================= */
:root,[data-theme="dark"] {
  --main-color: #1a1a2e;
  --secondary-color: #16213e;
  --light-bg-color: #0f3460;
  
  --third-color: #e94560;
  --accent-color: #f39c12;
  --secondary-hover-color: #c0392b;
  
  --text-color: #ecf0f1;
  --title-color: #ecf0f1;
  --paragraph-color: #ecf0f1;
  --text-muted: #95a5a6;
  --text-hover-color: #f1c40f;
  
  --light-color: #ffffff;
  --dark-color: #1a1a2e;
  --selection-color: var(--accent-color);
  --font-family: 'Poppins', sans-serif;
}

/* =========================
   الوضع الفاتح
   ========================= */
@media screen and (prefers-color-scheme: light) {
  :root {
    --main-color: #f8f9fa;
    --secondary-color: #e9ecef;
    --light-bg-color: #e3f2fd;
    
    --third-color: #e74c3c;
    --accent-color: #e67e22;
    --secondary-hover-color: #c0392b;
    
    --text-color: #2c3e50;
    --title-color: #2c3e50;
    --paragraph-color: #34495e;
    --text-muted: #7f8c8d;
    --text-hover-color: #d35400;
    
    --light-color: #ffffff;
    --dark-color: #2c3e50;
    --selection-color: var(--third-color);
    --font-family: 'Poppins', sans-serif;
  }
}
```

### الخطوة 2: تحديث إعداد التجميع

في `gulp.cjs`، أضف سمتك الجديدة إلى مصفوفة `themes`.

### الخطوة 3: اختبار السمة

```bash
npm run watch
```

تحقق من HTML المُولَّد مع تطبيق سمتك الجديدة.

## نظرية الألوان وأفضل الممارسات

### متطلبات التباين اللوني

- **نص المحتوى على الخلفية**: نسبة تباين 4.5:1 كحد أدنى (WCAG AA)
- **العناوين**: نسبة تباين 3:1 كحد أدنى
- **العناصر التفاعلية**: تمييز بصري واضح

### توليفات الألوان الموصى بها

#### الوضع الداكن
```
الخلفية:        داكن جداً (#000-#1a)
النص:           رمادي فاتح (#e-#f)
اللون الأساسي:  لون ساطع (تشبّع عالٍ)
الثانوي:        لون داعم مُعتدل أو مُشبَّع
```

#### الوضع الفاتح
```
الخلفية:      أبيض مائل/كريمي (#f-#fff)
النص:         رمادي داكن/أسود (#0-#2)
اللون الأساسي: لون مُتوسط التشبّع
الثانوي:      لون داعم فاتح
```

## مواصفات السمات الحالية

### سمة Ignite
**الداكن**: أحمر وبرتقالي حيوي على خلفيات داكنة
- الأساسي: #ff6b6b
- التمييز: #ffd93d
- الخلفية: #0a0e27

**الفاتح**: ألوان ساطعة وحيوية
- الأساسي: #ff4757
- التمييز: #ffc107
- الخلفية: #ffffff

### سمة Navy
**الداكن**: أزرق navy احترافي
- الأساسي: #003f87
- التمييز: #00a8ff
- الخلفية: #0d1b2a

**الفاتح**: أبيض corporate نظيف
- الأساسي: #003f87
- التمييز: #0066cc
- الخلفية: #f0f4f8

### سمة New Corporate Tech
**الداكن**: جماليات تقنية حديثة
- الأساسي: #1e40af
- التمييز: #3b82f6
- الخلفية: #0f172a

**الفاتح**: تقنية احترافية نظيفة
- الأساسي: #1e3a8a
- التمييز: #3b82f6
- الخلفية: #f8fafc

## استخدام متغيرات CSS في الكود

### في CSS المكونات

```css
.section {
  background-color: var(--main-color);
  color: var(--text-color);
}

.button-primary {
  background-color: var(--accent-color);
  color: var(--light-color);
}

.button-primary:hover {
  background-color: var(--secondary-hover-color);
  color: var(--text-hover-color);
}

.heading {
  color: var(--title-color);
}
```

## اعتبارات إمكانية الوصول

### عمى الألوان
- لا تعتمد على اللون وحده لنقل المعلومات
- استخدم الأنماط والأيقونات أو التسميات النصية
- اختبر بأدوات إمكانية الوصول

### وضع التباين العالي
- تتكيف المتغيرات تلقائياً
- السمة الفاتحة توفر تباينًا عالياً افتراضياً
- السمة الداكنة تقدم تباينًا معكوساً

## اختبار السمات

### أدوات DevTools للمتصفح

```javascript
// اختبار متغير اللون
getComputedStyle(document.body).getPropertyValue('--main-color')

// تبديل السمات برمجياً
document.body.dataset.theme = 'light';
```

### قائمة فحص الاختبار

- [x] جميع النصوص مقروءة (تباين 4.5:1)
- [x] الروابط متميزة
- [x] حالات التحويم مرئية
- [x] حالات التركيز واضحة
- [x] يعمل في الوضع الداكن
- [x] يعمل في الوضع الفاتح
- [x] سريع الاستجابة على الجوال
- [x] الصور تتحمل بشكل صحيح مع السمة

## الموارد

- **أدوات الألوان**:
  - https://coolors.co/ — منشئ لوحات الألوان
  - https://colorhexa.com/ — معلومات الألوان
  - https://contrastchecker.com/ — فاحص تباين WCAG

- **إمكانية الوصول**:
  - https://www.w3.org/WAI/WCAG21/quickref/ — إرشادات WCAG
  - https://webaim.org/articles/contrast/ — تحليل التباين

---

استخدم هذه السمات كنقطة بداية لتخصيص علامتك التجارية!

---

**آخر تحديث:** 20 فبراير 2026  
**الإصدار:** 2.2.2
