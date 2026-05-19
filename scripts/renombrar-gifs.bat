@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo.
echo ===============================================
echo   RENOMBRANDO GIFs · Proyecto Lunaria
echo ===============================================
echo.

if exist "Artesana paujil_1.gif" ren "Artesana paujil_1.gif" gif-artesana-paujil-1.gif
if exist "artesanas ensambladas.gif" ren "artesanas ensambladas.gif" gif-artesanas-ensambladas.gif
if exist "Cangrejo guitarrista_2.gif" ren "Cangrejo guitarrista_2.gif" gif-cangrejo-guitarrista-2.gif
if exist "canoa 2- ensambladopsd.gif" ren "canoa 2- ensambladopsd.gif" gif-canoa-2-ensamblado.gif
if exist "canoas ensamblado 2.gif" ren "canoas ensamblado 2.gif" gif-canoas-ensamblado-2.gif
if exist "Delfin ensamblado.gif" ren "Delfin ensamblado.gif" gif-delfin-ensamblado.gif
if exist "Flamenco ensamblado.gif" ren "Flamenco ensamblado.gif" gif-flamenco-ensamblado.gif
if exist "Foca ensamblado.gif" ren "Foca ensamblado.gif" gif-foca-ensamblado.gif
if exist "Iguana vendedora.gif" ren "Iguana vendedora.gif" gif-iguana-vendedora.gif
if exist "Lagartija.gif" ren "Lagartija.gif" gif-lagartija.gif
if exist "langosta bongoes.gif" ren "langosta bongoes.gif" gif-langosta-bongoes.gif
if exist "leona marina ensamblado.gif" ren "leona marina ensamblado.gif" gif-leona-marina-ensamblado.gif
if exist "Medusa ensamblada.gif" ren "Medusa ensamblada.gif" gif-medusa-ensamblada.gif
if exist "orca ensamblada.gif" ren "orca ensamblada.gif" gif-orca-ensamblada.gif
if exist "pescador ensamblado.gif" ren "pescador ensamblado.gif" gif-pescador-ensamblado.gif
if exist "pescadores ensamblado 3_1.gif" ren "pescadores ensamblado 3_1.gif" gif-pescadores-ensamblado-3-1.gif
if exist "Pez nadador ensamblado_1.gif" ren "Pez nadador ensamblado_1.gif" gif-pez-nadador-ensamblado-1.gif
if exist "Tortuga ensamblada_1.gif" ren "Tortuga ensamblada_1.gif" gif-tortuga-ensamblada-1.gif
if exist "vendedor de jugos ensamblado_1.gif" ren "vendedor de jugos ensamblado_1.gif" gif-vendedor-jugos-ensamblado-1.gif
if exist "vendedor de jugos ensamblado_2.gif" ren "vendedor de jugos ensamblado_2.gif" gif-vendedor-jugos-ensamblado-2.gif

echo.
echo ===============================================
echo   RENOMBRADO COMPLETO
echo ===============================================
echo.
echo Nombres nuevos (deberian ser 20 archivos):
echo.
dir /b gif-*.gif
echo.
pause
