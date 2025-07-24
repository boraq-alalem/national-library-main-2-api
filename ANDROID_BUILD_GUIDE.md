# دليل بناء تطبيق Android - المكتبة الوطنية

## المتطلبات المسبقة
- Node.js مثبت
- Android Studio مثبت
- Java Development Kit (JDK) 11 أو أحدث

## طريقة البناء السريع

### الطريقة الأولى: استخدام الملف المساعد
```bash
# تشغيل ملف البناء التلقائي
build-android.bat
```

### الطريقة الثانية: خطوات يدوية
```bash
# 1. بناء تطبيق React
npm run build

# 2. مزامنة مع Capacitor
npx cap sync android

# 3. فتح Android Studio
npx cap open android
```

## بناء APK في Android Studio

1. افتح Android Studio (سيفتح تلقائياً بعد تشغيل الأوامر أعلاه)
2. انتظر حتى يكتمل تحميل المشروع
3. اذهب إلى: **Build > Build Bundle(s) / APK(s) > Build APK(s)**
4. انتظر حتى يكتمل البناء
5. ستجد ملف APK في: `android\app\build\outputs\apk\debug\app-debug.apk`

## معلومات التطبيق
- **اسم التطبيق**: National Library App
- **معرف الحزمة**: com.nationallibrary.app
- **الإصدار**: 1.0

## استكشاف الأخطاء

### إذا واجهت مشاكل في البناء:
1. تأكد من تثبيت Android SDK
2. تأكد من إعداد متغيرات البيئة ANDROID_HOME
3. تأكد من تثبيت Java JDK 11+

### إذا فشل في فتح Android Studio:
```bash
# تأكد من تثبيت Android Studio وإضافته لـ PATH
# أو افتح المجلد يدوياً في Android Studio:
# File > Open > اختر مجلد android
```

## ملاحظات مهمة
- ملف APK المُنتج سيكون للتطوير (debug) وليس للإنتاج
- لإنتاج APK للنشر، استخدم Build > Generate Signed Bundle / APK في Android Studio
- تأكد من تحديث إعدادات التطبيق في `capacitor.config.ts` حسب الحاجة