@echo off
echo ========================================================
echo        UPDATING LIVE WEBSITE (VERCEL + GITHUB)
echo ========================================================
echo.
echo 1. Gathering all your changes...
git add .

echo.
set /p COMMIT_MSG="Enter a short note of what you changed (press Enter for default): "
if "%COMMIT_MSG%"=="" set COMMIT_MSG=Updated website content

echo.
echo 2. Saving changes...
git commit -m "%COMMIT_MSG%"

echo.
echo 3. Uploading to GitHub & Vercel...
git push

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo SUCCESS! Your changes have been sent to GitHub!
    echo Vercel will automatically update your live site in 10 seconds.
    echo ========================================================
) else (
    echo.
    echo An error occurred. Please check your internet connection or git status.
)

echo.
pause
