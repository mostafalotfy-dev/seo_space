# دليل الإعدادات

يشرح هذا الملف كيفية ضبط متغيرات البيئة، اختيار الثيم واللغة، وإعداد ملف `compilepg.cjs` لتوليد المخرجات المطلوبة.

## ملف `.env` مقترح

```env
LANG=en
THEME=navy
MODE=dark
NODE_ENV=development
BUILD_PATH=./
DEV_HOST=localhost
DEV_PORT=8080
```

## تغيير الثيم أو اللغة

- عبر `.env` أو تعديل كائن التكوين في `compilepg.cjs`.
- لإضافة لغة جديدة، أنشئ `locals/xx.json` وأضفها إلى مصفوفة `languages` في السكربت.
