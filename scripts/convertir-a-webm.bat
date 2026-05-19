@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

set "MAX_WIDTH=1600"
set "COLORS=192"
set "WEBM_CRF=35"
set "OUTPUT_DIR=optimizados final"
set "MAGICK_TMPDIR=D:\temp_magick_lunaria"

where magick >nul 2>&1 || (echo ERROR: magick no encontrado & pause & exit /b 1)
where ffmpeg >nul 2>&1 || (echo ERROR: ffmpeg no encontrado & pause & exit /b 1)

if not exist "%OUTPUT_DIR%" mkdir "%OUTPUT_DIR%"
if not exist "%MAGICK_TMPDIR%" mkdir "%MAGICK_TMPDIR%"

for %%f in (gif-*.gif) do (
    echo Procesando: %%f
    set "NOMBRE=%%~nf"
    set "TEMP=%MAGICK_TMPDIR%\temp_!NOMBRE!.gif"
    set "SALIDA=%OUTPUT_DIR%\!NOMBRE!.webm"

    magick "%%f" -coalesce -resize %MAX_WIDTH%x^> -colors %COLORS% "!TEMP!" 2>nul
    if exist "!TEMP!" (
        ffmpeg -y -i "!TEMP!" -c:v libvpx-vp9 -pix_fmt yuv420p -crf %WEBM_CRF% -b:v 0 -an "!SALIDA!" 2>nul
        if exist "!SALIDA!" (
            echo   [OK] !NOMBRE!.webm
        ) else (
            echo   [ERROR] ffmpeg fallo
        )
        del "!TEMP!"
    ) else (
        echo   [ERROR] ImageMagick fallo (posible falta de espacio)
    )
    echo.
)

echo ==============================================
echo   Proceso completado. Archivos en "%OUTPUT_DIR%"
echo ==============================================
pause
