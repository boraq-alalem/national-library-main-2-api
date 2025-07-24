@echo off
echo Building National Library Android App...

echo Step 1: Building React app...
call npm run build
if %errorlevel% neq 0 (
    echo Failed to build React app
    exit /b 1
)

echo Step 2: Syncing with Capacitor...
call npx cap sync android
if %errorlevel% neq 0 (
    echo Failed to sync with Capacitor
    exit /b 1
)

echo Step 3: Opening Android Studio...
call npx cap open android

echo.
echo ========================================
echo Build process completed!
echo.
echo Next steps:
echo 1. Android Studio should now be open
echo 2. In Android Studio, go to Build > Build Bundle(s) / APK(s) > Build APK(s)
echo 3. The APK will be generated in: android\app\build\outputs\apk\debug\
echo ========================================
pause