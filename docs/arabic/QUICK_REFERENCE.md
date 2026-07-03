# المرجع السريع

## الأوامر الشائعة

### التطوير

```bash
# بدء المراقبة وإعادة التجميع التلقائي
npm run watch

# تجميع مرة واحدة
npm start

# التحقق من الحزم القديمة
npm outdated

# تحديث جميع الحزم
npm update

# تشغيل فحص الكود
npm run lint

# عرض جميع الحزم المثبتة
npm list
```

### Firebase والنشر

```bash
# نشر على Firebase Hosting
npm run deploy

# بناء ونشر في خطوة واحدة
npm start
```

### Babel

```bash
# تحويل JavaScript
npm run babel
```

## تذكير هيكل الملفات

```
تحرير هذه الملفات     →  الملفات المُولَّدة
──────────────────────────────────────────────
index.pug              →  output-*.html
locals/en.json         →  الترجمات
locals/ar.json
src/assets/css/main.css       →  الأنماط
src/assets/css/color-palette/ →  السمات
src/assets/js/main.js  →  السلوك
```

## تعديلات سريعة

### تغيير النص

**الموقع:** `index.pug` أو ملفات الترجمة

```pug
// في index.pug
h1 #{t('banner.welcome')}

// في locals/en.json
"banner": {
  "welcome": "نصك هنا"
}
```

### تغيير الألوان

**الموقع:** `src/assets/css/color-palette/اسم-السمة.css`

```css
:root {
  --main-color: #000000;           /* غيّر هذا */
  --third-color: #FF5733;
  --accent-color: #FFC300;
}
```

### إضافة قسم

**الخطوات:**
1. عدّل `index.pug` — أضف HTML القسم
2. أضف الترجمات إلى `locals/en.json` و`locals/ar.json`
3. أضف الأنماط إلى `src/assets/css/main.css`
4. شغّل `npm run watch`

### إضافة صورة

**الخطوات:**
1. ضع الصورة في `assets/images/`
2. أشر إليها في `index.pug`: `img(src="assets/images/filename.png")`
3. أعد التجميع

### تغيير الشعار

**الخيار 1 - شعار صورة:**
```pug
img(src="assets/images/your-logo.png" alt="Logo")
```

**الخيار 2 - شعار نصي:**
```pug
span اسم علامتك التجارية
```

## اختصارات لوحة المفاتيح (VS Code)

```
Ctrl+S          حفظ الملف
Ctrl+/          تبديل التعليق
Ctrl+Shift+P    لوحة الأوامر
Alt+Up/Down     تحريك السطر لأعلى/أسفل
Ctrl+D          تحديد التكرار التالي
Ctrl+H          البحث والاستبدال
F2              إعادة تسمية الرمز
Ctrl+G          الانتقال إلى سطر
Ctrl+~          فتح الطرفية
```

## قائمة فحص الاختبار

- [x] جميع الصفحات تُحمَّل بدون أخطاء
- [x] الروابط تعمل بشكل صحيح
- [x] النماذج تُرسَل بشكل صحيح
- [x] التصميم سريع الاستجابة يعمل (اختبر على الجوال)
- [x] كلتا اللغتين تُعرضان بشكل صحيح
- [x] جميع السمات تبدو جيدة
- [x] وضع الداكن/الفاتح يعمل
- [x] الصور تُعرض بشكل صحيح
- [x] لا توجد أخطاء 404 في وحدة التحكم
- [x] لا توجد أخطاء JavaScript في وحدة التحكم

## أدوات DevTools للمتصفح

### التحقق من الأخطاء

```
اضغط F12 ← تبويب Console
ابحث عن رسائل الخطأ الحمراء
```

### فحص العناصر

```
اضغط F12 ← تبويب Inspector
انقر بزر الماوس الأيمن على العنصر ← فحص
تحقق من CSS وHTML
```

### التحقق من الشبكة

```
اضغط F12 ← تبويب Network
أعد تحميل الصفحة
راقب جميع الملفات المُحمَّلة وأحجامها
```

## اصطلاح تسمية مفاتيح الترجمة

```
// النمط: ميزة.قسم.عنصر
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

## مواقع ملفات السمات

| السمة | الملف |
|-------|-------|
| Ignite | `src/assets/css/color-palette/ignite.css` |
| Navy | `src/assets/css/color-palette/navy.css` |
| Corporate Tech | `src/assets/css/color-palette/new-corporate-tech.css` |
| Olive Garden | `src/assets/css/color-palette/olive-garden-feast.css` |

## مرجع فئات CSS

```css
/* التباعد */
.p-3        padding: 3rem
.m-2        margin: 2rem
.mt-5       margin-top: 5rem
.mb-4       margin-bottom: 4rem

/* النص */
.text-center        text-align: center
.text-muted         اللون الباهت
.fw-bold            font-weight: bold

/* العرض */
.d-flex             display: flex
.justify-content-center   justify-content: center
.align-items-center align-items: center

/* الاستجابة */
.d-none             display: none
.d-lg-block         display: block (على الشاشات الكبيرة)
.col-md-6           عرض 50% (على الشاشات المتوسطة+)
```

## أوامر Git

```bash
# التحقق من الحالة
git status

# إضافة جميع التغييرات
git add .

# إيداع التغييرات
git commit -m "وصف التغييرات"

# الدفع إلى المستودع البعيد
git push

# عرض السجل
git log --oneline

# التراجع إلى الإصدار السابق
git revert HEAD
```

## نصائح تصحيح الأخطاء

### القوالب لا تُجمَّع

```bash
# التحقق من إصدار Node
node --version

# حذف node_modules وإعادة التثبيت
rm -rf node_modules
npm install

# إعادة البناء
npm run gulp
```

### الأنماط لا تُطبَّق

```
1. التحديث القسري للمتصفح (Ctrl+Shift+R)
2. تحقق من تحميل ملف CSS (DevTools ← Network)
3. تحقق من مسار CSS في HTML
4. تحقق من تفسير CSS في الأنماط
5. امسح ذاكرة التخزين المؤقت للمتصفح
```

### JavaScript لا يعمل

```
1. تحقق من DevTools ← Console للأخطاء
2. تأكد من تحميل jQuery أولاً
3. تحقق من مسارات src للسكريبت
4. تحقق من البناء الجملي في main.js
5. استخدم debugger لتتبع الكود
```

## روابط مفيدة

### التوثيق
- Pug: https://pugjs.org/api/getting-started.html
- Bootstrap: https://getbootstrap.com/docs/5.3/
- Gulp: https://gulpjs.com/docs/en/
- Firebase Hosting: https://firebase.google.com/docs/hosting

### الأدوات
- VS Code: https://code.visualstudio.com/
- Git: https://git-scm.com/
- Node.js: https://nodejs.org/

### أدوات التصميم
- منتقي الألوان: https://color.adobe.com/
- خطوط Google: https://fonts.google.com/
- تحسين الصور: https://tinypng.com/

## الحصول على المساعدة

1. **تحقق من التوثيق أولاً** — اقرأ ملفات .md ذات الصلة
2. **ابحث على Google** — ابحث عن رسالة الخطأ
3. **Stack Overflow** — استخدم وسوم [pug]، [bootstrap]، [javascript]
4. **مستودع المشروع** — تحقق من المشكلات/النقاشات
5. **تواصل مع الدعم** — تواصل مع مطوّر المشروع

## نصائح الأداء

- احتفظ بالصور أقل من 100 كيلوبايت لكل منها
- قلّل JavaScript المخصص
- استخدم رؤوس تخزين المتصفح المؤقت
- اضغط الملفات بـ gzip
- استخدم CDN للمكتبات (Firebase CDN متاح)
- حمّل الصور الكسولة أسفل الطية
- صغّر CSS/JavaScript (تُعالَج تلقائياً بواسطة Gulp)

## ملاحظات الأمان

- حدّث حزم npm بانتظام: `npm update`
- تدقيق الثغرات: `npm audit`
- لا تُودِع بيانات حساسة (.env مع بيانات اعتماد حقيقية)
- تحقق من جميع مدخلات النماذج على الخلفية
- استخدم HTTPS في الإنتاج
- حدّث إصدار Node.js بانتظام

---

هل تحتاج إلى مزيد من المساعدة؟ راجع التوثيق الكامل في مجلد `docs/` أو زر مستودع المشروع.

---

**آخر تحديث:** 20 فبراير 2026  
**الإصدار:** 2.2.2
