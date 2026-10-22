@echo off
setlocal
echo ========================================================
echo        PUSH MONA KAKE WEBSITE TO GITHUB
echo ========================================================
echo.
echo Please enter your GitHub Repository URL.
echo Example: https://github.com/karthikeyan2306/mona-kake.git
echo.
set /p REPO_URL="Enter GitHub Repo URL: "

if "%REPO_URL%"=="" (
    echo Error: No URL entered. Exiting.
    pause
    exit /b 1
)

echo.
echo Linking repository to %REPO_URL%...
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main

echo.
echo Pushing code to GitHub...
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo SUCCESS! Your code has been uploaded to GitHub!
    echo Now open Vercel.com and click "Import" on this repo.
    echo ========================================================
) else (
    echo.
    echo Something went wrong while pushing. Please check your URL and GitHub credentials.
)

pause
