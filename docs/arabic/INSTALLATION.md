# دليل التثبيت

## متطلبات النظام

- **Node.js**: v18.0.0 أو أعلى
- **npm**: v8.0.0 أو أعلى (يأتي مع Node.js)
- **نظام التشغيل**: Windows أو macOS أو Linux
- **مساحة القرص**: ~500 ميجابايت (بما فيها node_modules)
- **RAM**: 2 جيجابايت كحد أدنى

## التثبيت خطوة بخطوة

### 1. استنسخ المشروع أو نزّل الملفات

```bash
# الخيار الأول: عبر git
git clone <رابط-المستودع>
cd seo

# الخيار الثاني: فك ضغط الأرشيف
cd path/to/seo
```

### 2. تثبيت تبعيات Node.js

```bash
npm install
```

سيؤدي ذلك إلى تثبيت جميع الحزم المدرجة في `package.json`:
- محرك قوالب Pug
- إطار Bootstrap
- jQuery
- توطين i18next
- ESLint لجودة الكود
- Gulp لبناء المشروع
- Babel لتحويل JavaScript
- وغيرها...

**وقت التثبيت**: عادةً 2-5 دقائق حسب سرعة الاتصال

### 3. التحقق من التثبيت

تحقق من تثبيت التبعيات بشكل صحيح:

```bash
npm list
```

أو تحقق من حزم محددة:

```bash
npm list pug
npm list bootstrap
npm list gulp
```

### 4. بدء التطوير

```bash
# وضع المراقبة — إعادة التجميع التلقائية عند تغيير الملفات
npm run watch

# أو تجميع مرة واحدة
npm start
```

**الإخراج**: يتم توليد ملفات HTML في مجلد `public/` بنمط التسمية:
`output-[لغة]-theme-[اسم-السمة]-[وضع].html`

## استكشاف أخطاء التثبيت وإصلاحها

### المشكلة: `npm: command not found`
**الحل**: ثبّت Node.js من https://nodejs.org/

### المشكلة: رفض الإذن (Permission Denied)
**الحل** (macOS/Linux):
```bash
sudo npm install -g npm
```

### المشكلة: بطء شديد في `npm install`
**الحلول**:
- تحقق من اتصال الإنترنت
- امسح ذاكرة التخزين المؤقت لـ npm: `npm cache clean --force`
- استخدم مرآة أسرع: `npm config set registry https://registry.npmjs.org/`

### المشكلة: فشل تجميع Pug
**الحلول**:
- احذف `node_modules` وأعد التثبيت: `rm -rf node_modules && npm install`
- تحقق من إصدار Node.js: `node --version` (يجب v14+)
- تأكد من وجود `gulp.cjs` في المجلد الجذري

### المشكلة: خطأ في Babel
**الحلول**:
- تحقق من وجود `babel.config.json`
- تأكد من تثبيت `@babel/core` و`@babel/preset-env`

## إعداد ما بعد التثبيت

### 1. إعداد متغيرات البيئة (عند الحاجة)

أنشئ ملف `.env` في المجلد الجذري:

```env
NODE_ENV=development
LANG=en
THEME=navy
MODE=dark
```

### 2. التحقق من ملفات الإخراج

تحقق من توليد ملفات HTML:

```bash
# Windows
dir public\output-*.html

# macOS/Linux
ls -la public/output-*.html
```

الملفات المتوقعة في `public/`:
- `output-en-theme-navy-dark.html`
- `output-en-theme-navy-light.html`
- `output-ar-theme-navy-dark.html`
- `output-ar-theme-navy-light.html`
- (وتوليفات السمات الأخرى)

### 3. اختبار في المتصفح

افتح ملف HTML المُولَّد في المتصفح:
- انقر بزر الماوس الأيمن على الملف → افتح بـ [المتصفح]
- أو في Windows: `start public\output-en-theme-navy-dark.html`
- أو في macOS: `open public/output-en-theme-navy-dark.html`

## إعداد بيئة التطوير

### توصيات المحرر/IDE

1. **Visual Studio Code** (المُوصى)
   - قم بتثبيت الإضافات:
     - Pug Beautifier
     - ESLint
     - Prettier
     - Live Server

2. **WebStorm**
   - دعم Pug مدمج
   - مهام npm متكاملة

3. **Sublime Text**
   - حزمة إبراز بناء جملة Pug

### إعداد المتصفح للتطوير

1. **Chrome DevTools**
   - فحص العنصر للتحقق من بنية HTML
   - التحقق من CSS في لوحة الأنماط
   - استخدام وحدة التحكم للتصحيح

2. **إضافات المتصفح**
   - Web Developer Tools
   - Responsive Viewer

### خادم التطوير المحلي (اختياري)

```bash
# تثبيت Live Server عالمياً
npm install -g live-server

# التشغيل في مجلد المشروع
live-server public/
```

## تحديث التبعيات

### التحقق من الحزم القديمة

```bash
npm outdated
```

### التحديث إلى أحدث الإصدارات

```bash
# تحديث جميع الحزم
npm update

# أو تحديث حزمة محددة
npm install pug@latest
```

## إلغاء التثبيت

### حذف node_modules

```bash
# حذف مجلد node_modules
rm -rf node_modules

# مسح ذاكرة التخزين المؤقت لـ npm
npm cache clean --force
```

### إعادة التثبيت من الصفر

```bash
rm -rf node_modules
npm install
```

## المهام الشائعة بعد التثبيت

### أول بناء

```bash
npm run watch
```

سيؤدي ذلك إلى:
1. تجميع `index.pug` إلى ملفات HTML
2. مراقبة التغييرات
3. إعادة التجميع التلقائي عند الحفظ
4. توليد الإخراج في `public/` بجميع توليفات اللغة/السمة

### بناء مرة واحدة

```bash
npm start
```

تجميع مرة واحدة بدون مراقبة.

### فحص الكود

```bash
npx eslint .
```

## الخطوات التالية

بعد التثبيت الناجح:

1. اقرأ [README.md](README.md) للحصول على نظرة عامة
2. راجع [CONFIGURATION.md](CONFIGURATION.md) لخيارات الإعداد
3. راجع [DEVELOPMENT.md](DEVELOPMENT.md) لإرشادات التطوير
4. اقرأ [LOCALIZATION.md](LOCALIZATION.md) للعمل مع الترجمات
5. راجع [COLOR_PALETTE.md](COLOR_PALETTE.md) لتخصيص السمات

## الموارد والدعم

- **التوثيق الرسمي**:
  - Pug: https://pugjs.org/api/getting-started.html
  - Bootstrap: https://getbootstrap.com/docs/5.3/
  - Gulp: https://gulpjs.com/docs/en/
  - Firebase: https://firebase.google.com/docs/hosting

- **استكشاف الأخطاء**:
  - Node.js: https://nodejs.org/en/docs/
  - npm: https://docs.npmjs.com/

## ملاحظات الأمان

- حافظ على تحديث Node.js وnpm
- شغّل `npm audit` للتحقق من الثغرات:
  ```bash
  npm audit
  ```
- إصلاح الثغرات:
  ```bash
  npm audit fix
  ```

---

اكتمل التثبيت! أنت جاهز لبدء التطوير. 🚀

---

**آخر تحديث:** 23 فبراير 2026  
**الإصدار:** 2.4.1
