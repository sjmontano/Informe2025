# Scripts de desarrollo · Informe de Gestión 2025

Herramientas auxiliares para el equipo. No forman parte del build ni se despliegan.

---

## Requisitos previos (instalar una sola vez)

### 1. libwebp (cwebp, gif2webp)

Convierte imágenes a WebP. Incluye `cwebp` (estático) y `gif2webp` (animado).

1. Descargar desde: https://storage.googleapis.com/downloads.webmproject.org/releases/webp/libwebp-1.6.0-windows-x64.zip
2. Extraer en una ubicación permanente (ej: `C:\Herramientas\libwebp`).
3. Agregar `C:\Herramientas\libwebp\bin` al PATH del sistema.
4. Verificar: abrir una terminal y ejecutar `cwebp --version`.

### 2. FFmpeg

Conversor de audio/video. Necesario para generar WebM desde GIFs.

1. Descargar desde: https://ffmpeg.org/download.html → Windows → builds de gyan.dev o BtbN.
2. Extraer en una ubicación permanente (ej: `C:\Herramientas\ffmpeg`).
3. Agregar `C:\Herramientas\ffmpeg\bin` al PATH del sistema.
4. Verificar: abrir una terminal y ejecutar `ffmpeg -version`.

### 3. sharp (Node.js)

Para el script `generar-variantes-fondos.mjs`. Ya instalado como devDependency del proyecto (`npm install`).

---

## Scripts disponibles

### `listar.bat`

Lista todas las imágenes de la carpeta actual con su peso (bytes, KB o MB) y el peso total.

```cmd
cd public\resources\personajes
..\..\..\scripts\listar.bat
```

### `renombrar-gifs.bat`

Renombra los GIFs originales de Aquelarre al formato estandarizado `gif-*.gif`. Ejecutar **una sola vez** en la carpeta que contiene los GIFs con nombres originales.

```cmd
cd public\organizar\gifs
..\..\..\scripts\renombrar-gifs.bat
```

### `convertir-a-webp.bat`

Convierte todos los `gif-*.gif` de la carpeta actual a WebP animado optimizado. Usa ImageMagick (`magick`) para preprocesar y `gif2webp` para la conversión final.

Parámetros configurables (editar el `.bat`):
- `MAX_WIDTH=1600` — ancho máximo en píxeles
- `COLORS=192` — paleta reducida
- `WEBP_QUALITY=50` — calidad de compresión
- `FRAME_SKIP=0` — 0 = sin reducción de frames

```cmd
cd public\organizar\gifs
..\..\..\scripts\convertir-a-webp.bat
```

Salida en `optimizados final\`.

### `convertir-a-webm.bat`

Convierte todos los `gif-*.gif` de la carpeta actual a WebM (video VP9). Más ligero que GIF/WebP para animaciones largas.

```cmd
cd public\organizar\gifs
..\..\..\scripts\convertir-a-webm.bat
```

### `generar-variantes-fondos.mjs` (Node.js)

Genera versiones optimizadas de los 17 fondos de sección: desktop (1920px q70), mobile (828px q65) y LQIP (60px q35). Usa `sharp`.

```cmd
node scripts/generar-variantes-fondos.mjs
```

Los originales se respaldan automáticamente en `public/resources/fondos/_originales/`.

---

## Convención de nombres

| Tipo | Formato | Ejemplo |
|------|---------|---------|
| GIF original | `gif-*.gif` | `gif-flamenco-ensamblado.gif` |
| GIF optimizado | `gif-*.webp` | `gif-flamenco-ensamblado.webp` |
| GIF como video | `gif-*.webm` | `gif-flamenco-ensamblado.webm` |
| Fondos de sección | `fondo-seccion-NN.webp` | `fondo-seccion-01.webp` |
| Personajes | `personaje-*.webp` | `personaje-pescadores.webp` |
| Escenario | `escenario-*.webp` | `escenario-cactus.webp` |
| Contenedores | `contenedor-*.webp` | `contenedor-letrero-1.webp` |
