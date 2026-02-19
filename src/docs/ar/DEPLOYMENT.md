# دليل النشر

## نظرة عامة

SEO Space قالب HTML ثابت يمكن نشره على أي مزود استضافة ويب. لا حاجة لمعالجة من جانب الخادم.

## قائمة التحقق قبل النشر

- [x] جميع الترجمات مكتملة (en.json وar.json)
- [x] جميع سمات الألوان مُختبَرة في الوضعين الداكن والفاتح
- [x] جميع الروابط تشير إلى عناوين URL صحيحة
- [x] نموذج التواصل له نقطة نهاية خلفية صالحة (إن لزم)
- [x] الصور مُحسَّنة ومضغوطة
- [x] جميع ملفات HTML مُولَّدة (`npm start`)
- [x] الكود يجتاز فحص القواعد (`npm run lint`)
- [x] اكتمل اختبار المتصفح (Chrome، Firefox، Safari، Edge)
- [x] تم التحقق من التصميم سريع الاستجابة على الجوال
- [x] تم اختبار الأداء (Google PageSpeed)

## توليد ملفات الإنتاج

```bash
# 1. تنظيف البناء السابق
npm run gulp

# 2. التحقق من توليد الملفات
dir public\output-*.html    # Windows
ls -la public/output-*.html # macOS/Linux

# 3. فحص Babel
npm run babel
```

## طرق النشر

### الطريقة 1: استضافة ويب تقليدية

**مزودو استضافة HTML الثابتة:**
- GoDaddy، Bluehost، HostGator، SiteGround
- Namecheap، 1&1، Hostinger
- أي استضافة تعتمد على FTP

**الخطوات:**

1. **أنشئ مجلد الإخراج** على جهازك
2. **انسخ ملفات HTML المُولَّدة** إلى المجلد
3. **انسخ مجلد `assets/`** بالكامل
4. **انسخ مجلد `vendor/`** بالكامل
5. **اتصل عبر FTP**:
   ```
   المضيف: ftp.yourdomain.com
   اسم المستخدم: your_username
   كلمة المرور: your_password
   ```
6. **رفع جميع الملفات** إلى مجلد `public_html` أو `www`
7. **حدد الملف الرئيسي** `output-en-theme-navy-dark.html` (أو الإصدار الذي تختاره)
8. **اختبر في المتصفح** — قم بزيارة yourdomain.com

**هيكل الملفات على الخادم:**
```
public_html/
├── index.html (أو ملف الإخراج الذي اخترته)
├── output-*.html (إصدارات اللغة/السمة الأخرى)
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── fonts/
└── vendor/
    ├── bootstrap/
    └── jquery/
```

### الطريقة 2: Firebase Hosting (مُدمَجة)

هذا المشروع يتضمن إعداد Firebase Hosting مسبقاً!

**المتطلبات:**
- حساب Firebase (مجاني)
- Firebase CLI مثبّت: `npm install -g firebase-tools`

**الخطوات:**

1. **تسجيل الدخول إلى Firebase**:
   ```bash
   firebase login
   ```

2. **بناء المشروع**:
   ```bash
   npm run gulp
   npm run babel
   ```

3. **نشر مباشر**:
   ```bash
   npm run deploy
   ```

4. **أو استخدم الأمر الشامل** (يبني وينشر):
   ```bash
   npm start
   ```

**الرابط**: موقعك متاح على `https://your-project-id.web.app`

### الطريقة 3: GitHub Pages (مجانية)

**المتطلبات:**
- حساب GitHub (مجاني)
- git مثبت محلياً

**الخطوات:**

1. **أنشئ مستودع GitHub**

2. **استنسخ المستودع**:
   ```bash
   git clone https://github.com/username/seo-space.git
   cd seo-space
   ```

3. **أضف ملفاتك**:
   ```bash
   cp public/output-en-theme-navy-dark.html index.html
   cp -r public/assets/ .
   cp -r public/vendor/ .
   ```

4. **ادفع إلى GitHub**:
   ```bash
   git add .
   git commit -m "Initial SEO Space deployment"
   git push origin main
   ```

5. **فعّل GitHub Pages**:
   - انتقل إلى إعدادات المستودع
   - مرّر إلى قسم "GitHub Pages"
   - اختر الفرع "main"
   - انقر حفظ

6. **الرابط**: `https://username.github.io/seo-space`

### الطريقة 4: Netlify (موصى بها للمبتدئين)

**الخطوات:**

1. **أنشئ حساباً على Netlify** على netlify.com
2. **اربط مستودع GitHub**
   - انقر "New site from Git"
   - اختر GitHub
   - اختر مستودعك
3. **اضبط البناء** (اختياري للـ HTML الثابت)
   - أمر البناء: `npm run gulp`
   - مجلد النشر: `public`
4. **انشر** — Netlify يُنشر تلقائياً عند كل دفعة

### الطريقة 5: Vercel

**الخطوات:**

1. **أنشئ حساباً على Vercel** على vercel.com
2. **استورد مستودع GitHub**
3. **اضبط المشروع**:
   - الإطار: Other
   - مجلد الجذر: `./`
   - أوامر البناء: `npm run gulp`
   - مجلد الإخراج: `public`
4. **انشر** — Vercel يتولى الأمر تلقائياً

### الطريقة 6: AWS S3 + CloudFront

**الخطوات:**

1. **أنشئ دلو S3**:
   ```bash
   aws s3 mb s3://yourdomain.com
   ```

2. **فعّل استضافة الموقع الثابت**:
   - خصائص الدلو → استضافة الموقع الثابت
   - وثيقة الفهرس: `output-en-theme-navy-dark.html`

3. **رفع الملفات**:
   ```bash
   aws s3 sync ./public/assets s3://yourdomain.com/assets
   aws s3 sync ./public/vendor s3://yourdomain.com/vendor
   aws s3 cp public/output-en-theme-navy-dark.html s3://yourdomain.com/
   ```

4. **اجعل الملفات عامة**:
   ```bash
   aws s3api put-bucket-acl --bucket yourdomain.com --acl public-read
   ```

5. **الوصول عبر CloudFront** (اختياري، لأداء أفضل)

## ما بعد النشر

### التحقق من النشر

1. **اختبر جميع الصفحات**
   - تصفح جميع الأقسام
   - انقر جميع الروابط
   - اختبر التصميم سريع الاستجابة

2. **تحقق من الأداء**
   - استخدم Google PageSpeed Insights
   - تحقق من وقت التحميل
   - تأكد من تحميل جميع الملفات

3. **اختبر في المتصفحات**
   - Chrome، Firefox، Safari، Edge
   - متصفحات الجوال (iOS Safari، Chrome Mobile)
   - الأجهزة اللوحية

4. **تحقق من HTML**
   - انتقل إلى validator.w3.org
   - تحقق من الأخطاء

### إعداد النماذج (إن لزم)

إذا كنت تستخدم نماذج تواصل، اضبط الخلفية:

1. **الخيار أ: خدمة طرف ثالث**
   - Formspree (formspree.io)
   - Basin (usebasin.com)
   - Getform (getform.io)

2. **الخيار ب: خلفيتك الخاصة**
   - خادم Node.js/Express
   - Python Flask/Django
   - سكريبت PHP mail

3. **حدّث action النموذج في HTML**:
   ```html
   <form action="https://formspree.io/f/YOUR_ID" method="POST">
   ```

### شهادة SSL

**لـ HTTPS (مُوصى به):**
- معظم الاستضافات توفر SSL مجاناً
- Let's Encrypt للشهادات المجانية
- تحقق من HTTPS في المتصفح

### تحسين الأداء

1. **اضغط الصور** (TinyPNG أو ImageOptim)
2. **التصغير (Minify) مدمج بالفعل** في عملية البناء عبر Gulp
3. **فعّل تخزين المتصفح المؤقت** في إعدادات خادم الويب
4. **استخدم CDN** (اختياري — CloudFlare مجاني)

### تحسين SEO

1. **حدّث الوسوم Meta** في `index.pug`:
   ```pug
   meta(name="description" content="وصفك هنا")
   meta(name="keywords" content="كلماتك المفتاحية")
   ```

2. **أضف Google Analytics**:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
   ```

3. **أرسل خريطة الموقع** إلى Google Search Console

## الصيانة

### التحديثات الدورية

1. **راقب التبعيات**:
   ```bash
   npm outdated
   npm update
   ```

2. **مراجعات الأمان**:
   ```bash
   npm audit
   ```

3. **تحقق من الروابط** (الروابط المعطوبة)

4. **حدّث المحتوى**:
   - تحديث معلومات الفريق
   - تحديث دراسات الحالة
   - إضافة خدمات جديدة

### استراتيجية النسخ الاحتياطي

- احتفظ بنسخة محلية من ملفات المصدر
- استخدم التحكم في الإصدارات (Git)
- نسخ احتياطية منتظمة للملفات المستضافة
- وثّق جميع التغييرات (CHANGELOG.md)

## استكشاف أخطاء النشر

### المشكلة: "404 Not Found"

**السبب**: الملفات لم تُرفع أو المسار خاطئ
**الحل**:
- تحقق من رفع الملفات إلى المجلد الصحيح
- تحقق من أذونات الملفات (755 للمجلدات، 644 للملفات)
- تأكد من وجود index.html في المجلد الجذري

### المشكلة: الأنماط لا تُحمَّل

**السبب**: مسارات ملفات CSS غير صحيحة
**الحل**:
- تحقق من رفع مجلد `assets/css/`
- تحقق من مسارات ملفات CSS في HTML
- استخدم مسارات مطلقة إذا لزم

### المشكلة: JavaScript لا يعمل

**السبب**: مسارات ملفات JS غير صحيحة أو jQuery غير مُحمَّل
**الحل**:
- تحقق من رفع `vendor/jquery/`
- تحقق من سمات script src
- تأكد من تحميل السكريبتات بالترتيب الصحيح

### المشكلة: الصور لا تظهر

**السبب**: مسارات الصور غير صحيحة
**الحل**:
- تحقق من رفع `assets/images/`
- تحقق من مسارات src في HTML
- استخدم الحالة الصحيحة (عناوين URL حساسة لحالة الأحرف)

## التراجع (Rollback)

إذا حدث خطأ:

1. **احتفظ بالإصدار السابق**:
   ```bash
   # احتفظ بنسخة احتياطية من البناء السابق
   ```

2. **رفع الإصدار السابق**:
   - عبر FTP: رفع الملفات السابقة
   - عبر Git: `git revert HEAD && git push`
   - عبر Firebase: `firebase hosting:clone`

3. **اختبر بشكل شامل** قبل النشر التالي

## معايير الأداء

**المقاييس المستهدفة:**
- تحميل الصفحة: أقل من 3 ثوانٍ
- Largest Contentful Paint (LCP): أقل من 2.5 ثانية
- First Input Delay (FID): أقل من 100 مللي ثانية
- Cumulative Layout Shift (CLS): أقل من 0.1

**أدوات القياس:**
- Google PageSpeed Insights
- WebPageTest (webpagetest.org)
- GTmetrix (gtmetrix.com)
- Lighthouse (مدمج في Chrome)

---

اكتمال النشر! موقعك SEO Space حي الآن. 🚀

---

**آخر تحديث:** 20 فبراير 2026  
**الإصدار:** 2.2.2
