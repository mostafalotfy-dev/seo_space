# دليل التطوير

## إعداد بيئة التطوير

### المتطلبات الأساسية

- Node.js v18+ (https://nodejs.org/)
- npm v8+ (يأتي مع Node.js)
- محرر كود (يُوصى بـ VS Code)
- Git (اختياري، للتحكم في الإصدارات)

### الإعداد الأولي

```bash
# 1. الانتقال إلى المشروع
cd d:\projects\seo_space

# 2. تثبيت التبعيات
npm install

# 3. بدء التطوير
npm run watch

# 4. الفتح في المتصفح
# انتقل إلى output-en-theme-navy-dark.html المُولَّد
```

## سير عمل التطوير

### هيكل الملفات للتطوير

```
ملفات العمل (قم بتحريرها):
├── src/index.pug              ← القالب الرئيسي - حرّر هذا
├── locals/
│   ├── en.json                ← الترجمات الإنجليزية - حرّر هذا
│   └── ar.json                ← الترجمات العربية - حرّر هذا
├── src/assets/
│   ├── css/
│   │   ├── main.css           ← الأنماط العامة - حرّر هذا
│   │   ├── color-palette/     ← ألوان السمات - حرّر هذه
│   │   └── *.css              ← أنماط أخرى
│   └── js/
│       ├── main-custom.js     ← منطق التطبيق - حرّر هذا
│       └── *.js               ← سكريبتات أخرى
└── .env                       ← الإعداد - حرّر هذا

الملفات المُولَّدة (تلقائية):
├── public/output-*.html       ← لا تُحرِّر مباشرةً
└── (تُعاد الكتابة عند الحفظ)
```

### دورة التطوير النموذجية

```
1. تحرير الملف المصدر (index.pug, main.css, إلخ)
                ↓
2. Gulp يكتشف التغيير
                ↓
3. gulp.cjs يعمل تلقائياً
                ↓
4. إعادة توليد ملفات HTML
                ↓
5. تحديث المتصفح
                ↓
6. مشاهدة التغييرات فوراً
```

## تحرير القالب (index.pug)

### أساسيات بناء جملة Pug

```pug
// التعليقات (في الكود، ليس في مخرجات HTML)

// عناصر HTML (المسافة البادئة مهمة!)
div.class-name
  p هذه فقرة

// السمات
a(href="/" class="link" target="_blank") رابط

// استيفاء النص
h1 مرحباً #{userName}

// المتغيرات والشروط
if isLoggedIn
  p مرحباً عضو!
else
  p الرجاء تسجيل الدخول

// الحلقات
each item in items
  li= item

// اختصار HTML
#id-name
.class-name
p.text-center نص هنا
```

### إضافة أقسام جديدة

1. **أنشئ قسماً جديداً في index.pug**:

```pug
// ***** بداية القسم الجديد *****
#new-section.new-section-class.section
  .container
    .row
      .col-lg-12
        h2 #{t('newsection.heading')}
        p #{t('newsection.description')}
// ***** نهاية القسم الجديد *****
```

2. **أضف الترجمات إلى locals/en.json**:

```json
{
  "newsection": {
    "heading": "Your Heading",
    "description": "Your description text"
  }
}
```

3. **أضف إلى locals/ar.json** (النسخة العربية):

```json
{
  "newsection": {
    "heading": "عنوانك",
    "description": "نص وصفك"
  }
}
```

4. **أضف الأنماط إلى src/assets/css/main.css**:

```css
.new-section-class {
  background-color: var(--secondary-color);
  padding: 60px 0;
}

.new-section-class h2 {
  color: var(--title-color);
  margin-bottom: 20px;
}
```

5. **احفظ وأعد البناء**:

```bash
npm run watch
# تُجمَّع الملفات تلقائياً
```

### تعديل الأقسام الموجودة

مثال: تغيير نص البانر

1. **ابحث عن القسم** في index.pug
2. **غيّر مرجع مفتاح الترجمة**:

```pug
// قبل
h2
  | #{t('banner.we_make')}

// بعد
h2
  | #{t('banner.welcome')}
```

أو **غيّر الترجمة** في locals/ar.json:

```json
{
  "banner": {
    "we_make": "النص الجديد هنا"
  }
}
```

## تحرير الأنماط

### بنية CSS

```
Bootstrap (CDN)
      ↓
ألوان السمة (color-palette/*.css)
      ↓
الأنماط العامة (main.css)
      ↓
أنماط المكونات (في main.css)
      ↓
الاستجابة (استعلامات الوسائط)
      ↓
التحريك (animated.css)
```

### الأنماط العامة (main.css)

```css
/* استخدم متغيرات CSS من السمة */
body {
  background-color: var(--main-color);
  color: var(--text-color);
  font-family: var(--font-family);
}

/* الأنماط المتجاوبة */
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}

/* أنماط المكونات */
.button-primary {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  color: var(--light-color);
}

.button-primary:hover {
  background-color: var(--secondary-hover-color);
}
```

### تخصيص لوحة الألوان

عدّل `src/assets/css/color-palette/navy.css`:

```css
:root {
  --main-color: #003f87;        /* تغيير اللون الأساسي */
  --accent-color: #00d4ff;      /* تغيير لون التمييز */
  --text-color: #e5e7eb;        /* تغيير لون النص */
}
```

### إنشاء أنماط المكونات

```css
/* مكوّن البطاقة */
.service-card {
  background: var(--secondary-color);
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s ease;
}

.service-card:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

.service-card-icon {
  font-size: 32px;
  color: var(--accent-color);
  margin-bottom: 15px;
}
```

## تحرير JavaScript

### ملف التطبيق الرئيسي (main-custom.js)

```javascript
// عند جاهزية الصفحة
$(document).ready(function() {
  initializeForms();
  initializeEvents();
});

// معالجة النماذج
function initializeForms() {
  $('#contact').on('submit', function(e) {
    e.preventDefault();
    
    const formData = {
      name: $('#name').val(),
      email: $('#email').val(),
      message: $('#message').val()
    };
    
    if (!validateForm(formData)) {
      console.log('النموذج غير صالح');
      return;
    }
    
    $.ajax({
      url: '/api/contact',
      method: 'POST',
      data: formData,
      success: function(response) {
        alert('تم إرسال الرسالة!');
        $(this).reset();
      },
      error: function(error) {
        alert('خطأ في إرسال الرسالة');
      }
    });
  });
}

// معالجة الأحداث
function initializeEvents() {
  // التمرير السلس
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
}

// التحقق من صحة النموذج
function validateForm(data) {
  if (!data.name || data.name.trim() === '') return false;
  if (!data.email || !isValidEmail(data.email)) return false;
  if (!data.message || data.message.trim() === '') return false;
  return true;
}
```

### إضافة مستمعي الأحداث

```javascript
// أحداث النقر
$('.menu-trigger').on('click', function() {
  $('.nav').toggleClass('active');
});

// أحداث التمرير
$(window).on('scroll', function() {
  if ($(window).scrollTop() > 100) {
    $('.header-area').addClass('scrolled');
  } else {
    $('.header-area').removeClass('scrolled');
  }
});
```

## المهام التطويرية الشائعة

### المهمة: تغيير نص شعار الرأسية

1. عدّل `locals/ar.json`:
```json
{
  "header": {
    "logo": {
      "part1": "علامتك",
      "part2": "التجارية"
    }
  }
}
```

### المهمة: إضافة عنصر قائمة تنقل جديد

1. عدّل `index.pug`:
```pug
li.scroll-to-section
  a(href="#portfolio") #{t('menu.portfolio')}
li.scroll-to-section
  a(href="#testimonials") #{t('menu.testimonials')}  // جديد
```

2. أضف إلى `locals/ar.json`:
```json
{
  "menu": {
    "testimonials": "شهادات"
  }
}
```

### المهمة: تغيير سمة الألوان

1. عدّل `.env`:
```env
THEME=ignite
```

أو في `gulp.cjs`:
```javascript
const theme = 'ignite';
```

2. أعد التجميع:
```bash
npm run watch
```

### المهمة: إضافة تحريك لعنصر

1. عدّل `index.pug`:
```pug
// قبل
.section
  h2 العنوان

// بعد
.section.wow.slideInUp(data-wow-duration="1s" data-wow-delay="0.3s")
  h2 العنوان
```

### المهمة: تعديل حقول النموذج

1. عدّل `index.pug`:
```pug
form#contact
  .row
    .col-lg-6
      input(type="text" placeholder="الاسم")
    .col-lg-6
      input(type="email" placeholder="البريد الإلكتروني")
    .col-lg-12
      textarea(placeholder="الرسالة")
    .col-lg-12
      button(type="submit") إرسال
```

2. أضف الأنماط في `main.css`:
```css
form input, form textarea {
  background-color: var(--light-bg-color);
  border: 1px solid var(--text-muted);
  color: var(--text-color);
  padding: 12px;
  border-radius: 4px;
}
```

## التصحيح

### أدوات DevTools للمتصفح

**فحص HTML:**
- انقر بزر الماوس الأيمن على العنصر ← فحص
- تحقق من الهيكل في لوحة العناصر

**التحقق من CSS:**
- حدد العنصر
- راقب لوحة الأنماط
- تحقق من الأنماط المُطبَّقة والمُتجاوَزة

**تصحيح JavaScript:**
- افتح تبويب Console
- تحقق من الأخطاء
- ضع نقاط التوقف (breakpoints)
- سجّل المتغيرات: `console.log(variable)`

### التصحيح في وحدة التحكم

```javascript
// تسجيل القيم
console.log('المتغير:', myVar);

// التحقق من العنصر
console.log($('#contact'));

// التحقق من النمط المحسوب
console.log(
  getComputedStyle(document.body)
    .getPropertyValue('--main-color')
);
```

### المشكلات الشائعة والحلول

| المشكلة | الحل |
|---------|------|
| الأنماط لا تُطبَّق | امسح الذاكرة المؤقتة، أعد تشغيل watch، تحقق من ملف CSS |
| الترجمات لا تظهر | تحقق من تهجئة المفتاح، تأكد من صحة JSON |
| التحريكات لا تعمل | تأكد من تحميل animate.css، تحقق من WOW.js |
| النموذج لا يُرسَل | تحقق من عنوان URL للـ endpoint، تأكد من إعداد AJAX |
| قائمة الجوال لا تعمل | تحقق من تحميل Bootstrap JS، تحقق من حدث النقر |

## تحسين الأداء

### نصائح التحسين

```javascript
// ✓ جيد: تخزين محددات jQuery مؤقتاً
const $form = $('#contact');
$form.on('submit', function() {
  // استخدم $form في كل مكان
});

// ✗ تجنب: استعلامات DOM المتكررة
$('#form').on('submit', function() {
  $('#name').val(); // يستعلم عن DOM في كل مرة
});
```

### تحسين CSS

```css
/* ✓ جيد: استخدم متغيرات CSS */
button {
  background-color: var(--accent-color);
}

/* ✗ تجنب: ألوان مُشفَّرة بصلابة في كل مكان */
button {
  background-color: #F59E0B;
}
```

## الاختبار أثناء التطوير

### قائمة فحص الاختبار اليدوي

- [ ] عرض متصفح سطح المكتب
- [ ] استجابة الجهاز اللوحي (768px)
- [ ] استجابة الجوال (320px)
- [ ] مظهر الوضع الداكن
- [ ] مظهر الوضع الفاتح
- [ ] عرض اللغة الإنجليزية
- [ ] اللغة العربية (RTL)
- [ ] إرسال النموذج
- [ ] تنقل الروابط
- [ ] سلاسة التحريكات
- [ ] توافق المتصفحات المختلفة

## جودة الكود

### ESLint

```bash
# فحص الكود
npm run lint

# إصلاح تلقائي للمشكلات
npm run lint:fix

# فحص ملف محدد
npx eslint src/assets/js/main-custom.js
```

### أفضل ممارسات أسلوب الكود

```javascript
// JavaScript
// ✓ استخدم const/let بدلاً من var
const config = {};
let count = 0;

// ✓ استخدم أسماء ذات معنى
const userEmail = 'user@example.com';

// ✓ استخدم الدوال السهمية
const greeting = () => 'مرحباً';

// ✓ استخدم Template literals
const message = `مرحباً، ${name}`;
```

## التحكم في الإصدارات (Git)

### سير عمل Git الأساسي

```bash
# التحقق من الحالة
git status

# إضافة التغييرات
git add .

# الإيداع
git commit -m "وصف التغييرات"

# عرض السجل
git log --oneline
```

### Git Ignore

أنشئ `.gitignore`:

```
node_modules/
.env
public/output-*.html
public/dist/
.DS_Store
```

## إضافات VS Code الموصى بها

1. **Pug** - إبراز البناء الجملي
2. **ESLint** - جودة الكود
3. **Prettier** - تنسيق الكود
4. **Live Server** - خادم تطوير محلي
5. **Color Picker** - اختيار الألوان
6. **Arabic Language Pack** - دعم اللغة العربية

## الموارد

- **توثيق Pug**: https://pugjs.org/api/getting-started.html
- **توثيق Bootstrap**: https://getbootstrap.com/docs/5.3/
- **توثيق i18next**: https://www.i18next.com/
- **توثيق jQuery**: https://api.jquery.com/
- **توثيق Gulp**: https://gulpjs.com/docs/en/
- **MDN Web Docs**: https://developer.mozilla.org/

---

برمجة سعيدة! 🚀

---

**آخر تحديث:** 20 فبراير 2026  
**الإصدار:** 2.2.2
