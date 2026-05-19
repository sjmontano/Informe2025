@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

:: =============================================================================
::  OPTIMIZADOR AVANZADO (LOTE COMPLETO) - SIN ERRORES DE PIPE
::  Procesa todos los gif-*.gif de la carpeta actual
:: =============================================================================

:: ---------- CONFIGURACION ----------
set "MAX_WIDTH=1600"
set "COLORS=192"
set "WEBP_QUALITY=50"
set "FRAME_SKIP=0"
set "FILTER_STRENGTH=20"
set "REMOVE_ALPHA=no"
set "COMPRESSION_MODE=lossy"
set "MINIMIZE_SIZE=yes"
set "KMIN=0"
set "KMAX=0"
set "COMPRESSION_METHOD=6"
set "USE_MT=yes"
set "OUTPUT_DIR=optimizados final"
set "LOGFILE=log_optimizacion_lote.txt"
set "MAGICK_TMPDIR=D:\temp_magick_lunaria"

:: ---------- INICIALIZACION ----------
where magick >nul 2>&1 || (echo ERROR: magick no encontrado & pause & exit /b 1)
where gif2webp >nul 2>&1 || (echo ERROR: gif2webp no encontrado & pause & exit /b 1)

if not exist "%OUTPUT_DIR%" mkdir "%OUTPUT_DIR%"
if not exist "%MAGICK_TMPDIR%" mkdir "%MAGICK_TMPDIR%"
set "MAGICK_TEMPORARY_PATH=%MAGICK_TMPDIR%"

echo Iniciando lote avanzado - %date% %time% > "%LOGFILE%"
echo Config: Ancho=%MAX_WIDTH%, Colores=%COLORS%, Calidad=%WEBP_QUALITY% >> "%LOGFILE%"
echo FrameSkip=%FRAME_SKIP%, Filtro=%FILTER_STRENGTH%, Alfa=%REMOVE_ALPHA% >> "%LOGFILE%"
echo Modo=%COMPRESSION_MODE%, MinSize=%MINIMIZE_SIZE%, KMIN=%KMIN%, KMAX=%KMAX%, Metodo=%COMPRESSION_METHOD%, MT=%USE_MT% >> "%LOGFILE%"

echo.
echo ==============================================
echo   OPTIMIZADOR AVANZADO - TODOS LOS GIFs
echo   Ancho maximo: %MAX_WIDTH% px
echo   Colores: %COLORS%
echo   Calidad WebP: %WEBP_QUALITY%
echo   Reduccion frames: %FRAME_SKIP% (0=sin reduccion)
echo   Filtro: %FILTER_STRENGTH%
echo   Quitar alfa: %REMOVE_ALPHA%
echo   Modo compresion: %COMPRESSION_MODE%
echo   Minimizar tamano: %MINIMIZE_SIZE%
echo   Keyframes: kmin=%KMIN% kmax=%KMAX%
echo   Metodo: %COMPRESSION_METHOD% / Multithread: %USE_MT%
echo ==============================================
echo.

set /a total=0
set /a ok=0
set /a errores=0

:: Contar archivos
for %%f in (gif-*.gif) do set /a total+=1
if %total% equ 0 (
    echo No se encontraron archivos gif-*.gif
    pause
    exit /b 0
)
echo Archivos encontrados: %total%
echo.

:: Procesar cada GIF con la funcion
for %%f in (gif-*.gif) do (
    call :procesar_archivo "%%f"
    echo.
)

echo ==============================================
echo   RESUMEN FINAL
echo   Total: %total% - OK: %ok% - Errores: %errores%
echo   Salida: %OUTPUT_DIR%
echo   Log: %LOGFILE%
echo ==============================================
pause
exit /b 0

:: =============================================
::  FUNCION PRINCIPAL
:: =============================================
:procesar_archivo
set "ENTRADA=%~1"
set "NOMBRE=%~n1"
set "TEMP=%MAGICK_TMPDIR%\temp_%NOMBRE%.gif"
set "SALIDA=%OUTPUT_DIR%\%NOMBRE%.webp"

if not exist "%ENTRADA%" (
    echo   [OMITIDO] No existe %ENTRADA%
    echo %time% ERROR: falta %ENTRADA% >> "%LOGFILE%"
    set /a errores+=1
    goto :eof
)

echo   Procesando: %NOMBRE%.gif
echo %time% Procesando %ENTRADA% >> "%LOGFILE%"

del "%TEMP%" 2>nul

:: 1. Redimensionar y reducir colores
magick "%ENTRADA%" -coalesce -resize %MAX_WIDTH%x^> -colors %COLORS% -layers optimize "%TEMP%" 2>> "%LOGFILE%"
if %ERRORLEVEL% neq 0 (
    echo     [ERROR] ImageMagick fallo
    echo %time% ERROR: magick fallo en %ENTRADA% >> "%LOGFILE%"
    set /a errores+=1
    goto :eof
)

:: 2. Reduccion de frames (opcional)
if %FRAME_SKIP% gtr 1 (
    set "FRAMEDIR=%MAGICK_TMPDIR%\frames_%NOMBRE%"
    mkdir "!FRAMEDIR!" 2>nul

    magick "%TEMP%" -coalesce "!FRAMEDIR!\frame_%%05d.png" 2>> "%LOGFILE%"

    for /f "tokens=1 delims=" %%a in ('magick identify -format "%%T" "%TEMP%[0]" 2^>nul') do set "DELAY_ORIG=%%a"
    set /a NEW_DELAY=!DELAY_ORIG! * %FRAME_SKIP%

    set /a COUNT=0
    for %%g in ("!FRAMEDIR!\frame_*.png") do set /a COUNT+=1

    set "FRAMES_LIST="
    for /l %%i in (0,%FRAME_SKIP%,!COUNT!-1) do (
        set /a NUM=%%i
        set "PAD=0000!NUM!"
        set "PAD=!PAD:~-5!"
        if exist "!FRAMEDIR!\frame_!PAD!.png" (
            set "FRAMES_LIST=!FRAMES_LIST! "!FRAMEDIR!\frame_!PAD!.png""
        )
    )

    if defined FRAMES_LIST (
        magick !FRAMES_LIST! -set delay !NEW_DELAY! -loop 0 -layers optimize "%TEMP%" 2>> "%LOGFILE%"
        if !ERRORLEVEL! neq 0 (
            echo     [ERROR] Fallo reensamblado de frames
            rmdir /s /q "!FRAMEDIR!" 2>nul
            set /a errores+=1
            goto :eof
        )
    ) else (
        echo     [ERROR] No se encontraron frames
        rmdir /s /q "!FRAMEDIR!" 2>nul
        set /a errores+=1
        goto :eof
    )
    rmdir /s /q "!FRAMEDIR!" 2>nul
)

:: 3. Eliminar alfa si se solicita
if /i "%REMOVE_ALPHA%"=="yes" (
    magick "%TEMP%" -alpha off -layers optimize "%TEMP%" 2>> "%LOGFILE%"
    if !ERRORLEVEL! neq 0 (
        echo     [ERROR] No se pudo quitar el canal alfa
        set /a errores+=1
        goto :eof
    )
)

:: 4. Convertir a WebP con todas las opciones
set "GIF2WEBP_OPTS=-q %WEBP_QUALITY%"
if %FILTER_STRENGTH% gtr 0 set "GIF2WEBP_OPTS=%GIF2WEBP_OPTS% -f %FILTER_STRENGTH%"
if /i "%COMPRESSION_MODE%"=="lossy" (
    set "GIF2WEBP_OPTS=%GIF2WEBP_OPTS% -lossy"
) else if /i "%COMPRESSION_MODE%"=="mixed" (
    set "GIF2WEBP_OPTS=%GIF2WEBP_OPTS% -mixed"
)
if /i "%MINIMIZE_SIZE%"=="yes" set "GIF2WEBP_OPTS=%GIF2WEBP_OPTS% -min_size"
if %KMIN% gtr 0 set "GIF2WEBP_OPTS=%GIF2WEBP_OPTS% -kmin %KMIN%"
if %KMAX% gtr 0 set "GIF2WEBP_OPTS=%GIF2WEBP_OPTS% -kmax %KMAX%"
set "GIF2WEBP_OPTS=%GIF2WEBP_OPTS% -m %COMPRESSION_METHOD%"
if /i "%USE_MT%"=="yes" set "GIF2WEBP_OPTS=%GIF2WEBP_OPTS% -mt"

gif2webp "%TEMP%" %GIF2WEBP_OPTS% -o "%SALIDA%" 2>> "%LOGFILE%"
if !ERRORLEVEL! neq 0 (
    echo     [ERROR] gif2webp fallo
    echo %time% ERROR: gif2webp fallo en %ENTRADA% >> "%LOGFILE%"
    set /a errores+=1
    goto :eof
)

:: Calcular pesos
for %%A in ("%ENTRADA%") do set "ORIG=%%~zA"
for %%B in ("%SALIDA%") do set "FINAL=%%~zB"
set /a ORIG_MB=!ORIG! / 1048576
set /a FINAL_KB=!FINAL! / 1024
set /a FINAL_MB=!FINAL! / 1048576
echo     [OK] %NOMBRE%.webp  - Original: !ORIG_MB! MB  Optimizado: !FINAL_MB! MB (!FINAL_KB! KB)
echo %time% OK: %ENTRADA% !ORIG_MB!MB - !FINAL_MB!MB >> "%LOGFILE%"
set /a ok+=1

del "%TEMP%" 2>nul
goto :eof
