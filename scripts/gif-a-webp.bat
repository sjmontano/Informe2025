@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

:: ================================================================
::  GIF a WebP animado — Máxima compresión con transparencia
::  Salida: public/resources/gifs/ (sobrescribe los existentes)
::  Temp en D: (para no saturar C:)
:: ================================================================

set "MAX_WIDTH=800"
set "QUALITY=50"
set "TEMP_DIR=D:\temp_lunaria_gif"

where magick   >nul 2>&1 || (echo ERROR: ImageMagick no encontrado & pause & exit /b 1)
where gif2webp >nul 2>&1 || (echo ERROR: gif2webp no encontrado & pause & exit /b 1)

if not exist "%TEMP_DIR%" mkdir "%TEMP_DIR%"

set /a total=0
set /a ok=0
set /a errores=0

for %%f in (gif-*.gif) do set /a total+=1
if %total% equ 0 (
    echo No se encontraron archivos gif-*.gif
    pause
    exit /b 0
)

echo ================================================================
echo   GIF a WebP animado con maxima compresion
echo   Ancho maximo: %MAX_WIDTH% px
echo   Calidad: %QUALITY%
echo   Archivos: %total%
echo   Temp: %TEMP_DIR%
echo ================================================================
echo.

for %%f in (gif-*.gif) do (
    set "NOMBRE=%%~nf"
    set "TEMP=%TEMP_DIR%\temp_!NOMBRE!.gif"
    set "SALIDA=!NOMBRE!.webp"

    for %%A in ("%%f") do set "ORIG=%%~zA"
    set /a ORIG_MB=!ORIG! / 1048576

    echo   !NOMBRE!.gif (!ORIG_MB! MB^)

    :: Coalesce + resize con ImageMagick
    magick "%%f" -coalesce -resize %MAX_WIDTH%x^> -layers optimize "!TEMP!" 2>nul

    if exist "!TEMP!" (
        :: Convertir a WebP animado con maxima compresion
        gif2webp -q %QUALITY% -lossy -min_size -m 6 -mt "!TEMP!" -o "!SALIDA!"
    ) else (
        :: Si ImageMagick falla (posible falta de RAM), usar ffmpeg directo
        echo     ImageMagick fallo (probable RAM). Probando ffmpeg...
        ffmpeg -loglevel error -i "%%f" ^
          -vf "scale=%MAX_WIDTH%:-1:flags=lanczos" ^
          -c:v libwebp -lossless 0 -quality %QUALITY% -loop 0 ^
          -compression_level 6 ^
          "!SALIDA!" 2>nul
    )

    if exist "!SALIDA!" (
        for %%B in ("!SALIDA!") do set "FINAL=%%~zB"
        set /a FINAL_KB=!FINAL! / 1024
        set /a FINAL_MB=!FINAL! / 1048576
        echo     [OK] !NOMBRE!.webp — !FINAL_KB! KB
        set /a ok+=1
    ) else (
        echo     [ERROR] Fallo la conversion
        set /a errores+=1
    )

    del "!TEMP!" 2>nul
    echo.
)

rmdir /q "%TEMP_DIR%" 2>nul

echo ==============================================================
echo   Completado: %ok% OK, %errores% errores de %total%
echo ==============================================================
pause
