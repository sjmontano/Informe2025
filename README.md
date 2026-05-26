# Informe de Gestión 2025 · Fondo Lunaria

> **Orillas que abrazan · Mareas que crecen**

Micrositio interactivo del informe anual de gestión 2025 de [Fondo Lunaria](https://fondolunaria.org/), desarrollado en colaboración con [Aquelarre Laboratorio de Diseño Feminista](https://www.aquelarrelab.org/).

---

## Sobre el proyecto

Fondo Lunaria es un fondo feminista colombiano que moviliza recursos económicos para fortalecer procesos colectivos de mujeres y personas trans jóvenes diversas que defienden, exigen y gozan de sus derechos. En 2025, el fondo apoyó **374 organizaciones** y **557 iniciativas** en **29 departamentos** de Colombia.

Este micrositio traduce el informe de gestión impreso a una experiencia digital navegable, aplicando la identidad visual y las ilustraciones creadas por Aquelarre. No es un simple volcado de PDF: es un espacio donde las cifras respiran, los testimonios tienen rostro y la marea feminista se recorre con la brújula apuntando al Sur.

### Alianza estratégica

| Rol | Organización |
|-----|-------------|
| Contenido, investigación, datos | **Fondo Lunaria** |
| Identidad visual, ilustración, diseño | **Aquelarre Laboratorio de Diseño Feminista** |
| Desarrollo web, micrositio | Este repositorio |

---

## Stack técnico

- **[Astro](https://astro.build/)** v6 — framework web estático
- **TypeScript** en frontmatter de componentes
- **CSS vanilla** con Custom Properties (sin Tailwind, sin preprocesadores)
- **Sin CMS** — sitio estático generado en build (`npm run build` → `dist/`)
- Fuentes: **Discordia** (títulos, WOFF2 local) + **Lato** (cuerpo, Google Fonts)

---

## Desarrollo local

```sh
npm install                # Instalar dependencias
npm run dev                # Servidor de desarrollo (localhost:4321)
npm run build              # Build de producción → dist/
npm run preview            # Previsualizar build
npm run design:lint        # Validar DESIGN.md
npm run impeccable         # Auditoría de calidad frontend
npm run check              # Lint + auditoría combinados
```

Requisitos: Node.js >= 22.12.0

---

## Arquitectura

### Filosofía de diseño

El sitio no usa grid rígido ni media queries. Todo escala proporcionalmente con `--alto`, una variable CSS que define la altura de una sección:

| Tipo de página | `--alto` | Significado |
|:---|---|------|
| **Multi-sección** (index, scroll) | `calc(100vw * 0.5625)` | Ratio 16:9, cómodo para recorrer |
| **Single-sección** (subpáginas) | `100dvh` | Altura dinámica del viewport |

El cambio es automático. El equipo **nunca toca `--alto` manualmente**. Layout.astro lo define según el prop `scroll={false}`.

### Sistema de escenas

El sitio tiene **17 fondos ilustrados** (fondo-seccion-01 a fondo-seccion-17), cada uno con sus elementos decorativos (nubes, cactus, letreros, GIFs animados). Los datos viven en `Escena.astro` como 17 arrays indexados.

Cada página elige una escena con `<Escena escena={N}>`:

```astro
<Layout scroll={false}>
  <Escena escena={10}>
    <MiComponente />       <!-- inyectado vía slot -->
  </Escena>
</Layout>
```

`Escena.astro` renderiza en este orden:
1. **Fondo** (imagen 1920×1080, `object-fit: cover`, centrado)
2. **Decorativos** (elementos posicionados absolutamente)
3. **Wrapper 16:9** (`.escena-contenido`, centrado, ancho `calc(var(--alto) * 16 / 9)`)
4. **Slot** con el componente de contenido

### Wrapper 16:9 — la clave del responsive

El wrapper `.escena-contenido` tiene el mismo ancho que el área visible del fondo. Todo el contenido se posiciona **dentro** de este wrapper con `%` para horizontal y `calc(var(--alto) * N / 100)` para vertical:

```
┌─────────────────────── Viewport ───────────────────────┐
│  ┌─── .escena-contenido (16:9 centrado) ────────────┐  │
│  │  ┌── Fondo (object-fit: cover) ────────────────┐  │  │
│  │  │  left: 19%  →  texto anclado al fondo       │  │  │
│  │  │  top: calc(--alto * 14 / 100)               │  │  │
│  │  └──────────────────────────────────────────────┘  │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

En **16:9**: `%` y `vw` dan lo mismo. En **21:9** o **16:10**: `%` mantiene el texto anclado al fondo mientras `vw` lo dejaría flotando en el viewport.

### Regla de posicionamiento

| Eje | Unidad | Referencia |
|-----|:------:|-----------|
| Vertical (top, bottom, height, font-size) | `calc(var(--alto) * N / 100)` | Altura de sección |
| Horizontal (left, right, width) | `%` | Wrapper 16:9 |

### Componentes compartidos

| Componente | Propósito |
|-----------|----------|
| `BotonVolver.astro` | Botón de navegación hacia atrás reutilizable |
| `FlechaNav.astro` | Flechas izquierda/derecha para carruseles |
| `Mapa.astro` | Mapa interactivo de Colombia con tooltips |
| `Fondos.astro` | Fondo ilustrado de una escena (uso interno de Escena) |

### Layouts recurrentes

El diseño sigue patrones que se **replican exactamente** entre componentes hermanos:

- **Layout Podcast**: ContraCorriente, LosTrapos — título + badge + texto + íconos Spotify/YouTube
- **Layout Detalle**: Diplomado, Laboratorio — visor PDF/embed + texto + badge
- **Layout Bloques**: Programas — mapa + bloques con estrella/título/texto/cifras alineadas
- **Layout Navegación**: Investigacion, Estrategias — título + botones pill-shaped

---

## Páginas y navegación

### Index (scroll multi-sección)

| Escena | Componente | Contenido |
|:---:|---|---|
| 0 | Inicio | Título hero "Orillas que abrazan" |
| 1 | Carta | Texto poético + cifras animadas (374, 557, 29) |
| 2 | Contenido | Navegación con 8 botones pill-shaped |

### Subpáginas

| Ruta | Escena | Componente | Fondo |
|------|:---:|---|---|
| `/testimonios` | 10 | Testimonios (carrusel) | fondo-seccion-11 |
| `/investigacion` | 11 | Investigacion (3 enlaces) | fondo-seccion-12 |
| `/investigacion/contracorriente` | 12 | ContraCorriente (podcast) | fondo-seccion-13 |
| `/investigacion/diplomado` | 13 | Diplomado (texto + volver) | fondo-seccion-14 |
| `/investigacion/laboratorio` | 14 | Laboratorio (visor PDF) | fondo-seccion-15 |
| `/aliados` | 16 | Aliados (logos ticker) | fondo-seccion-17 |
| `/talleres` | 8 | Talleres (carrusel fotos) | fondo-seccion-09 |
| `/sacando-los-trapos` | 15 | LosTrapos (podcast) | fondo-seccion-16 |
| `/programas` | 9 | Programas (mapa + bloques) | fondo-seccion-10 |
| `/cuentas-claras` | 4 | Cuentas (letreros + canoas) | fondo-seccion-05 |
| `/estrategias` | 5 | Estrategias (4 botones) | fondo-seccion-06 |
| `/estrategias/memorias` | 6 | Memorias | fondo-seccion-07 |
| `/estrategias/en-movimiento` | 7 | EnMovimiento | fondo-seccion-08 |
| `/estrategias/alternativxs` | 19 | Alternativxs (modal carrusel) | — |
| `/estrategias/narrarnos` | 17 | Narrarnos | — |

---

## Estructura del proyecto

```text
/
├── public/
│   └── resources/
│       ├── contenedor/    # Letreros, marcos, flechas decorativas
│       ├── escenario/     # Elementos de escena (nubes, cactus, piedras...)
│       ├── fondos/        # 17 fondos ilustrados (desktop + mobile + LQIP)
│       ├── gifs/          # GIFs animados (WebP), personajes de Aquelarre
│       ├── iconos/        # Spotify, YouTube, globe_network (SVG + WebP)
│       ├── ilustraciones/ # Ilustraciones de apoyo y departamentos
│       ├── mapa/          # SVG del mapa de Colombia
│       ├── marcas/        # Logos de donantes y copartes
│       └── ui/            # Íconos de UI (play, regresar)
├── src/
│   ├── components/        # ~25 componentes Astro
│   ├── layouts/           # Layout.astro (plantilla base)
│   ├── pages/             # 17 rutas del sitio
│   ├── styles/            # animaciones.css
│   └── utils/             # escena.js (generación de CSS)
├── docs/
│   ├── DESIGN.md          # Sistema de diseño visual
│   ├── DEVELOP.md         # Convenciones de desarrollo
│   └── motion-design.md   # Animaciones y movimiento
├── AGENTS.md              # Guía de tono, léxico y audiencia
├── astro.config.mjs
└── package.json
```

---

## Enlaces

- [Fondo Lunaria](https://fondolunaria.org/)
- [Informe 2024](https://fondolunaria.org/informe2024/)
- [Informe 2021](https://fondolunaria.org/informe2021/)
- [Aquelarre Lab](https://www.aquelarrelab.org/)
- [Aquelarre en Facebook](https://www.facebook.com/aquelarreilustracion/?locale=es_LA)
