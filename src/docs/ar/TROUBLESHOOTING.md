# دليل استكشاف الأخطاء وإصلاحها

## مشاكل التثبيت

- "npm: command not found": ثبت Node.js وأعد فتح الطرفية.
- "Module not found": احذف `node_modules` ثم نفّذ `npm install`.

## مشاكل التجميع

- تحقق من صحة `compilepg.cjs` وصيغة Pug (التحقق من المسافات البادئة).
- شغّل `node compilepg.cjs` لرؤية رسائل الخطأ التفصيلية.

## مشاكل الترجمة

- تأكد من أن ملفات `locals/*.json` بصيغة UTF-8 وأن بنية المفاتيح متطابقة.
