@echo off
color 0A
echo Sinkronisasi Database Website Dimulai...
echo.

setlocal enabledelayedexpansion

REM Memastikan folder utama tersedia
if not exist "assets\gallery" mkdir "assets\gallery"
if not exist "assets\events" mkdir "assets\events"
if not exist "assets\seasons" mkdir "assets\seasons"

set OUTPUT_FILE=assets\gallery_data.js

echo // File digenerate secara otomatis oleh Update_Galeri.bat > "%OUTPUT_FILE%"
echo. >> "%OUTPUT_FILE%"

REM ==========================================
REM 1. SINKRONISASI GALLERY
REM ==========================================
echo Menyinkronkan Galeri Masterpieces...
echo const galleryMasterpieces = [ >> "%OUTPUT_FILE%"
for %%f in ("assets\gallery\*.*") do (
    set "fname=%%~nxf"
    set "title=%%~nf"
    set "title=!title:_= !"
    set "title=!title:-= !"
    if not "!fname!"=="panduan_galeri.txt" (
        echo     ^{ >> "%OUTPUT_FILE%"
        echo         src: "assets/gallery/!fname!", >> "%OUTPUT_FILE%"
        echo         title: "!title!", >> "%OUTPUT_FILE%"
        echo         isTall: false >> "%OUTPUT_FILE%"
        echo     ^}, >> "%OUTPUT_FILE%"
    )
)
echo ]; >> "%OUTPUT_FILE%"
echo. >> "%OUTPUT_FILE%"

REM ==========================================
REM 2. SINKRONISASI SEASONS
REM ==========================================
echo Menyinkronkan Otun Seasons...
echo const otunSeasons = [ >> "%OUTPUT_FILE%"
for %%f in ("assets\seasons\*.*") do (
    set "fname=%%~nxf"
    set "title=%%~nf"
    set "title=!title:_= !"
    set "title=!title:-= !"
    if not "!fname!"=="panduan_seasons.txt" (
        echo     ^{ >> "%OUTPUT_FILE%"
        echo         src: "assets/seasons/!fname!", >> "%OUTPUT_FILE%"
        echo         title: "!title!" >> "%OUTPUT_FILE%"
        echo     ^}, >> "%OUTPUT_FILE%"
    )
)
echo ]; >> "%OUTPUT_FILE%"
echo. >> "%OUTPUT_FILE%"

REM ==========================================
REM 3. SINKRONISASI EVENTS (V1-V11)
REM ==========================================
echo Menyinkronkan Otun Events...
echo const otunEvents = [ >> "%OUTPUT_FILE%"
for %%f in ("assets\events\*.*") do (
    set "fname=%%~nxf"
    set "title=%%~nf"
    set "title=!title:_= !"
    set "title=!title:-= !"
    if not "!fname!"=="panduan_events.txt" (
        echo     ^{ >> "%OUTPUT_FILE%"
        echo         src: "assets/events/!fname!", >> "%OUTPUT_FILE%"
        echo         title: "!title!" >> "%OUTPUT_FILE%"
        echo     ^}, >> "%OUTPUT_FILE%"
    )
)
echo ]; >> "%OUTPUT_FILE%"
echo. >> "%OUTPUT_FILE%"

echo.
echo Selesai! Data Galeri, Season, dan Event berhasil di-update. Silakan periksa website Anda.
timeout /t 3 >nul
exit
