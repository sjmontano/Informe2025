@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo.
echo ===============================================
echo   LISTADO DE ARCHIVOS · Proyecto Lunaria
echo   Carpeta: %CD%
echo ===============================================
echo.

set "TOTAL=0"
set "CUENTA=0"

REM Contar archivos primero
for %%f in (*.png *.jpg *.jpeg *.gif *.bmp *.tiff *.tif) do (
    set /a CUENTA+=1
)

echo   Total de archivos encontrados: !CUENTA!
echo.
echo ===============================================
echo   NOMBRE EXACTO                         PESO
echo ===============================================

for %%f in (*.png *.jpg *.jpeg *.gif *.bmp *.tiff *.tif) do (
    set "NOMBRE=%%~nxf"
    set "PESO=%%~zf"
    set /a "PESO_MB=!PESO! / 1048576"
    set /a "PESO_KB=!PESO! / 1024"
    
    if !PESO! gtr 1048576 (
        echo   !NOMBRE!     !PESO_MB! MB
    ) else if !PESO! gtr 1024 (
        echo   !NOMBRE!     !PESO_KB! KB
    ) else (
        echo   !NOMBRE!     !PESO! bytes
    )
    
    set /a TOTAL+=!PESO!
)

set /a "TOTAL_MB=!TOTAL! / 1048576"

echo.
echo ===============================================
echo   PESO TOTAL: !TOTAL_MB! MB
echo ===============================================
echo.
pause
