# DEVELOP.md — Convenciones de Desarrollo

> **Para el equipo humano y agentes de IA.** Cómo está programado el micrositio del Informe de Gestión 2025 · Fondo Lunaria. Leer antes de crear o modificar cualquier componente, página o estilo.

---

## 1. Qué es este proyecto

Sitio web **estático** construido con **Astro v6**. Todo el contenido se genera en tiempo de compilación (`npm run build`) y se sirve como HTML, CSS y JS simple. No hay backend, no hay base de datos, no hay CMS.

El diseño visual es de **Aquelarre Laboratorio de Diseño Feminista**. Las reglas de diseño están en [`DESIGN.md`](./DESIGN.md). Las reglas de escritura están en [`AGENTS.md`](../AGENTS.md). Este archivo cubre cómo se **programa**.

---

## 2. Stack técnico

| Capa | Tecnología |
|------|-----------|
| Framework | Astro v6 |
| Lenguaje | TypeScript (.astro, .ts) |
| Estilos | CSS vanilla con Custom Properties (NO Tailwind) |
| Fuentes | Discordia + Lato (Google Fonts o `@font-face` local) |
| Ilustraciones | SVG/PNG con transparencia en `public/illustrations/` |
| Texturas | PNG/SVG de papel rasgado en `public/textures/` |
| Build | `astro build` → `dist/` (estático) |
| Deploy | `gh-pages` u otro hosting estático |

---

## 3. Estructura del proyecto

```text
/
├── public/
│   ├── illustrations/    # Ilustraciones de Aquelarre (SVG/PNG)
│   ├── textures/         # Texturas de papel rasgado (PNG/SVG)
│   ├── fonts/            # Discordia (.woff2) si no se carga de Google Fonts
│   ├── favicon.svg
│   └── favicon.ico
├── src/
│   ├── assets/           # Assets importados en componentes (svg, img)
│   ├── components/       # Componentes .astro reutilizables (una pieza visual por archivo)
│   ├── layouts/          # Plantillas de página (Layout.astro)
│   ├── pages/            # Rutas del sitio (index.astro, about.astro, etc.)
│   ├── styles/           # Estilos globales (animaciones.css)
│   └── utils/            # Utilidades JS (escena.js — generación de CSS)
├── .agents/
│   └── skills/           # Skills para agentes de IA (accessibility, google-design-md, impeccable, seo, typescript)
├── docs/
│   ├── DESIGN.md           # Sistema de diseño visual (tokens, colores, tipografías, componentes)
│   └── DEVELOP.md          # Convenciones de desarrollo (este archivo)
├── AGENTS.md               # Guía de tono, léxico y audiencia para IA
├── astro.config.mjs      # Configuración de Astro
├── package.json          # Dependencias y scripts
└── tsconfig.json         # Configuración de TypeScript
```

### Dónde va cada cosa

| Si necesito... | Va en... | Ejemplo |
|---------------|---------|---------|
| Una sección visual nueva (hero, testimonios, cifras) | `src/components/MiSeccion.astro` | `src/components/HeroCifras.astro` |
| Una página nueva del sitio | `src/pages/mi-pagina.astro` | `src/pages/cuentas-claras.astro` |
| Una ilustración de Aquelarre | `public/illustrations/` | `public/illustrations/faro.svg` |
| Una textura de papel rasgado | `public/textures/` | `public/textures/papel-rasgado.png` |
| Estilos que comparten varios componentes | `src/styles/mi-utilidad.css` | `src/styles/animaciones.css` |
| Lógica extractable (helpers) | `src/utils/mi-utilidad.js` | `src/utils/escena.js` |
| Un ícono o logo importado desde código | `src/assets/` | `src/assets/logo.svg` |

---

## 4. Anatomía de un componente .astro

Todo componente sigue esta estructura de tres bloques:

```astro
---
// ─── BLOQUE 1: Frontmatter (TypeScript/JavaScript) ───
// Importaciones, props, lógica. NUNCA genera HTML visible.
import OtraCosa from './OtraCosa.astro';
const { titulo } = Astro.props;
---

<!-- ─── BLOQUE 2: HTML ─── -->
<!-- La estructura visible del componente. Usa clases con prefijo del componente. -->
<section class="mi-componente">
  <h2 class="mi-componente__titulo">{titulo}</h2>
  <slot />
</section>

<style>
  /* ─── BLOQUE 3: CSS SCOPED ─── */
  /* Los estilos son locales a este componente por defecto en Astro. */
  /* Usar las variables CSS definidas en DESIGN.md (Layout.astro :root). */

  .mi-componente {
    background-color: var(--arena);
    padding: var(--espacio-xl);
  }

  .mi-componente__titulo {
    font-family: var(--font-discordia);
    font-size: calc(var(--alto) * 0.25 / 100);
    color: var(--azul-noche);
  }
</style>
```

### Reglas del frontmatter

- El código en `---` **nunca** produce HTML visible. Solo lógica, imports, props.
- Las props se reciben con `Astro.props` si el componente acepta parámetros.
- Las importaciones de otros componentes van aquí.

### Reglas del HTML

- Usar HTML semántico: `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`.
- No usar `<div>` cuando existe un elemento semántico apropiado.
- Cada componente debe poder vivir solo: si lo copiás a otra página, funciona sin depender del contexto externo.

### Reglas del CSS

- Los estilos en `<style>` son **scoped por defecto** (Astro los aísla automáticamente).
- Usar **Custom Properties** para colores, fuentes y espaciado. Los tokens están definidos en `Layout.astro :root` y documentados en `DESIGN.md`.
- Nombrar clases con la metodología **BEM simplificada**: `bloque__elemento--modificador`.
  - Bueno: `.hero__titulo`, `.testimonio__cita`, `.cifra--destacada`
  - Malo: `.titulo-hero`, `.box1`, `.section-title`
- El prefijo de las clases debe ser el nombre del componente para evitar colisiones:
  - `HeroCifras.astro` → clases `.hero-cifras`, `.hero-cifras__numero`
  - `Testimonios.astro` → clases `.testimonios`, `.testimonios__tarjeta`

### Reglas de posicionamiento

**Posicionamiento vertical con `--alto`, horizontal con `vw` o `--alto` según el tipo de página:**

```css
/* Páginas multi-sección: --alto = 56.25vw (basado en ancho).
   Horizontal y vertical usan --alto. */
.en-multi {
  position: absolute;
  top: calc(var(--alto) * 5 / 100);
  left: calc(var(--alto) * 8 / 100);
}

/* Páginas single-sección: --alto = 100dvh (basado en altura).
   Vertical con --alto, horizontal con vw. */
.en-single {
  position: absolute;
  top: calc(var(--alto) * 24 / 100);   /* ✅ basado en altura */
  right: 12vw;                          /* ✅ basado en ancho */
}
```

> **Regla**: `calc(var(--alto) * N / 100)` para posiciones verticales siempre. Para posiciones horizontales, usar `--alto` en multi-sección y `vw` en single-sección. Nunca usar `margin` para posicionar.

/* ❌ INCORRECTO — margen no da control vertical preciso */
.mi-componente {
  margin-left: 30vw;
  margin-top: calc(var(--alto) * 3 / 100);
}
```

Esto aplica **siempre**. No usar `margin` para posicionar. No usar `display: flex` + `align-items` como sustituto de `position: absolute`. Cada elemento controla su `top` y `left` explícitamente con `calc()`.

> **Razón:** `--alto` es vw-based y escala con el ancho de pantalla. Las posiciones calculadas con `calc(var(--alto) * N / 100)` escalan uniformemente. Los `margin` no dan control vertical directo y dependen del flujo del layout.

---

## 5. El Layout base (`Layout.astro`)

`Layout.astro` es la plantilla que envuelve todas las páginas. Define:

1. El `<!doctype html>` y `<head>` (meta tags, fuentes, título)
2. Las Custom Properties globales (`:root` con los tokens de DESIGN.md)
3. El `<slot />` donde se inyecta el contenido de cada página

### Prop `scroll`

```astro
<!-- Página multi-sección (scroll vertical): default -->
<Layout>
  ...
</Layout>

<!-- Página de 1 sección (sin scroll, llena la pantalla): -->
<Layout scroll={false}>
  ...
</Layout>
```

Cuando `scroll={false}`, Layout agrega al body `overflow: hidden; height: 100%` y cambia `--alto` a `100dvh` para que la sección ocupe toda la pantalla.

### `--alto` — altura de una sección

`--alto` se define automáticamente en Layout.astro según el tipo de página:

| Tipo | `--alto` | Cuándo |
|------|---------|--------|
| Multi-sección | `calc(100vw * 0.5625)` | Páginas con scroll (default) |
| Single-sección | `100dvh` | Páginas con `scroll={false}` |

- **`100dvh` se adapta a cualquier pantalla**: Mac, tablet vertical, celular, ultra-wide.
- **`100vw * 0.5625`** mantiene el ratio 16:9 para scroll cómodo en páginas largas.
- El equipo **nunca toca `--alto`**. Es interno de Layout.astro.

### `Escena.astro` como contenedor

`Escena.astro` ahora incluye el fondo (`Fondos`), los elementos decorativos y un `<slot />` para el contenido. Su `.escena-wrapper` ya provee `position: relative; height: var(--alto)`.

Las páginas **no necesitan wrappers adicionales** ni importar `Fondos` por separado.

**Reglas del Layout:**
- Todo lo que es común a todas las páginas va aquí (fuentes, meta viewport, favicon).
- Los estilos en `<style is:global>` aplican a todo el sitio.
- No poner aquí estilos específicos de un componente o sección.
- Las fuentes se cargan una sola vez en el Layout, no en cada componente.

---

## 6. Cómo crear una página nueva

### Página de 1 sección (sin scroll)

```astro
---
import Layout from '../layouts/Layout.astro';
import Escena from '../components/Escena.astro';
import MiComponente from '../components/MiComponente.astro';
---

<Layout scroll={false}>
  <Escena escena={12}>
    <MiComponente />
  </Escena>
</Layout>
```

> `scroll={false}` hace que `--alto = 100dvh` y la página llene la pantalla completa. `Escena` ya incluye el fondo + decorativos + `<slot />` para el contenido.

### Página multi-sección (con scroll)

```astro
---
import Layout from '../layouts/Layout.astro';
import Escena from '../components/Escena.astro';
import Inicio from '../components/Inicio.astro';
import Carta from '../components/Carta.astro';
---

<Layout>
  <Escena escena={0}>
    <Inicio />
  </Escena>
  <Escena escena={1}>
    <Carta />
  </Escena>
</Layout>
```

> Cada `<Escena>` es autocontenida: fondo, decorativos y contenido. Se apilan verticalmente y la página hace scroll. `--alto = 100vw * 0.5625` (ratio 16:9).

### Página con ruta personalizada

Usar carpetas para rutas anidadas:
- `src/pages/informe/2025.astro` → URL: `/informe/2025`
- `src/pages/programas/libertad.astro` → URL: `/programas/libertad`

---

## 7. Cómo crear un componente nuevo (paso a paso)

1. **Crear el archivo** en `src/components/` con nombre descriptivo en PascalCase:
   ```
   src/components/CifrasClave.astro
   src/components/TarjetaTestimonio.astro
   src/components/MapaColombia.astro
   ```

2. **Escribir la estructura base**:
```astro
---
// Props (si el componente recibe datos)
export interface Props {
  numero?: string;
  etiqueta?: string;
}
const { numero, etiqueta } = Astro.props;
---

<div class="cifras-clave">
  <span class="cifras-clave__numero">{numero}</span>
  <span class="cifras-clave__etiqueta">{etiqueta}</span>
</div>

<style>
  .cifras-clave { /* ... */ }
  .cifras-clave__numero {
    font-family: var(--font-heading);
    font-size: clamp(3rem, 6vw, 5rem);
    color: var(--text-main);
  }
</style>
```

3. **Importarlo y usarlo** en una página:
```astro
---
import Layout from '../layouts/Layout.astro';
import CifrasClave from '../components/CifrasClave.astro';
---

<Layout>
  <CifrasClave numero="374" etiqueta="organizaciones apoyadas" />
</Layout>
```

### Checklist al crear un componente

- [ ] ¿El nombre del archivo es claro y en PascalCase?
- [ ] ¿El frontmatter tiene solo lógica (no HTML)?
- [ ] ¿El HTML usa elementos semánticos (no solo `<div>`)?
- [ ] ¿Las clases CSS tienen el prefijo del componente?
- [ ] ¿Los colores y fuentes vienen de variables CSS, no de valores hardcodeados?
- [ ] ¿El componente funciona si se copia a otra página?
- [ ] ¿Las ilustraciones tienen `alt` descriptivo (con intención política)?

---

## 8. Convenciones de CSS

### Usar siempre variables CSS para tokens de diseño

```css
/* ✅ CORRECTO */
color: var(--text-main);
background: var(--bg-ocean);
font-family: var(--font-heading);

/* ❌ INCORRECTO — valores hardcodeados */
color: #28275b;
background: #0b6b6d;
font-family: 'Discordia', serif;
```

### Referencia rápida de variables disponibles

```css
/* Fondos */
--arena         /* #F4C454 — Arena, fondo general */
--oceano        /* #0B6B6D — Océano profundo, secciones narrativas */

/* Textos */
--azul-noche    /* #28275B — Azul noche, texto principal */
--naranja-madera /* #ED7A22 — Naranja madera, letreros y flechas */

/* Botones */
--coral         /* #EF7E7B — Botones principales */
--rosa          /* #EBA5C8 — Botones secundarios */

/* Componentes específicos */
--circulo-fondo  /* #1F1A3E — Fondo de círculos numerados */
--circulo-texto  /* #FDE070 — Texto en círculos numerados */
--mapa-base      /* #28275B — Mapa inactivo */
--mapa-seleccionado /* #39B490 — Mapa activo/hover */

/* Tipografía */
--font-discordia /* Discordia, serif */
--font-lato      /* Lato, sans-serif */

/* Espaciado */
--espacio-xs … --espacio-4xl  /* 4px … 96px */

/* Escena */
--alto           /* Multi-sección: calc(100vw * 0.5625).
                    Single-sección: 100dvh (llena la pantalla). */
```

### Reglas de responsive

- **Sin `clamp()` en fuentes**: usar `calc(var(--alto) * N / 100)` para que todo escale proporcionalmente al ancho de pantalla.
- **Sin `@media` queries**: las posiciones y tamaños escalan con `--alto` (basado en `vw`). Si en celular se ve igual que en PC pero más pequeño, está bien.
- **Todo se achica o agranda uniformemente**. No se reposicionan elementos ni se cambian layouts.

### Reglas para Escena.astro

- Recibe `escena={N}` (índice 0-16) y `stagger` (ms de retraso entre animaciones).
- Los 17 arrays de elementos decorativos están en el frontmatter del mismo archivo.
- Agregar un elemento = una línea en el array de su escena:

```ts
// Dentro del array de la escena correspondiente (ESCENAS[N])
{
  src: "/resources/escenario/...",
  top: 0.55,               // fracción 0-1 (55% abajo de la sección)
  left: "30vw",            // opcional
  right: "50vw",           // opcional (left o right)
  width: "6vw",            // opcional
  extra: "rotate: 15deg",  // opcional (transform, rotate, etc.)
  z: 3,                    // opcional (z-index)
  anim: true,              // opcional (animación de entrada)
  alt: "Descripción...",
}
```

- La función `css()` convierte estos campos a CSS inline automáticamente.
- Para overlay (encima del contenido): usar `z: 3` o superior.
- Sin `z`: queda en capa 0 (detrás del contenido).

### Reglas de stacking context

- No poner `z-index` en contenedores (`.fondos`, `.escena`). Dejar que cada hijo controle su capa con `z-index: N`.
- Capas: Fondos `z: -1`, Escena default `z: 0`, Contenido `z: 2`, Overlay `z: 3+`.
- Elementos con `pointer-events: none` en el contenedor no interceptan clics.

### Prohibiciones absolutas en CSS

- ❌ `color: #000` o `color: black` → usar `var(--text-main)`
- ❌ `font-family: Arial, Inter, Roboto, system-ui` → usar `var(--font-body)` o `var(--font-heading)`
- ❌ `box-shadow: ...` → la profundidad se logra con capas, texturas e ilustraciones
- ❌ `background: linear-gradient(...)` purple-to-blue → no usar degradados genéricos
- ❌ `border-radius: 10px` en botones → usar `border-radius: 9999px` (pill-shaped)
- ❌ Gris sobre fondos de color (`color: #888` sobre `--bg-sand`)

---

## 9. Cómo importar imágenes y assets

### Desde `src/assets/` (importación en frontmatter)

```astro
---
import miImagen from '../assets/mi-imagen.svg';
---

<img src={miImagen.src} alt="Descripción con intención política" />
```

### Desde `public/` (ruta directa)

```astro
<!-- Ilustraciones de Aquelarre -->
<img src="/illustrations/faro.svg" alt="Un faro iluminando el océano, guiando la travesía feminista" />

<!-- Texturas -->
<div class="seccion" style="background-image: url('/textures/papel-rasgado.png')"></div>
```

### Reglas para assets

- `src/assets/` → para íconos, logos, imágenes que se importan en código y se optimizan en build.
- `public/` → para ilustraciones, texturas, fuentes y archivos que se referencian por ruta directa.
- **Toda imagen debe tener `alt` descriptivo.** No "imagen de mujer" sino "Mujer navegante sosteniendo un faro, ilustración de Aquelarre".
- **Formato preferido:** SVG para ilustraciones vectoriales, WebP para fotos (con fallback PNG).

---

## 10. JavaScript en el proyecto

**Principio:** JS mínimo, vanilla, progresivo. El sitio debe funcionar sin JavaScript.

### Cuándo usar JS

- Interactividad del mapa de Colombia (SVG interactivo)
- Scroll suave entre secciones
- Menú de navegación mobile (hamburguesa)
- Animaciones con Intersection Observer (fade-in al hacer scroll)
- Contador animado de cifras (opcional, con fallback estático)

### Cuándo NO usar JS

- Para mostrar/ocultar contenido que puede ser HTML+CSS (usar `<details>` o CSS `:target`)
- Para animaciones que pueden ser CSS (`@keyframes`, `transition`)
- Para cargar contenido que puede ser estático en build

### Cómo escribir JS en Astro

```astro
---
// Frontmatter: lógica de build
---

<div id="mapa-colombia">
  <!-- SVG del mapa -->
</div>

<script>
  // JS vanilla, se ejecuta en el cliente
  const mapa = document.getElementById('mapa-colombia');
  mapa.addEventListener('click', (e) => {
    const departamento = e.target.closest('[data-departamento]');
    if (departamento) {
      console.log('Departamento seleccionado:', departamento.dataset.departamento);
    }
  });
</script>
```

---

## 11. Nomenclatura de archivos

| Tipo | Convención | Ejemplo |
|------|-----------|---------|
| Componentes Astro | PascalCase | `HeroCifras.astro`, `TarjetaTestimonio.astro`, `BotonVolver.astro` |
| Páginas | kebab-case | `cuentas-claras.astro`, `fondo-en-movimiento.astro` |
| Layouts | PascalCase | `Layout.astro` |
| Utilidades JS | camelCase | `escena.js` |
| CSS global | kebab-case | `animaciones.css` |

---

## 12. Flujo de trabajo con Git

Ramas:
- `main` → producción, sitio publicado
- `dev` → desarrollo activo
- `feature/nombre` → features nuevas (ej: `feature/seccion-testimonios`)

Antes de commit:
1. `npm run build` (que no rompa)
2. `npm run agents:check` (lint de diseño + auditoría de código)

Commits en español, descriptivos:
```
feat: agrega sección de testimonios con tarjetas de papel rasgado
fix: corrige contraste en botones coral sobre fondo océano
style: ajusta espaciado de cifras destacadas en mobile
```

---

## 13. Ejemplo completo: crear la sección "Apoyamos"

### 1. Crear el componente

**`src/components/Apoyamos.astro`:**
```astro
---
export interface Props {
  cifras: Array<{ numero: string; etiqueta: string }>;
}
const { cifras } = Astro.props;
---

<section id="apoyamos" class="apoyamos">
  <div class="apoyamos__apertura" aria-hidden="true">
    <p class="apoyamos__voz-mar">
      Soy la orilla que abraza {cifras.length} dimensiones del apoyo feminista.
    </p>
  </div>

  <div class="apoyamos__cifras">
    {cifras.map((cifra) => (
      <article class="apoyamos__cifra">
        <span class="apoyamos__numero">{cifra.numero}</span>
        <span class="apoyamos__etiqueta">{cifra.etiqueta}</span>
      </article>
    ))}
  </div>
</section>

<style>
  .apoyamos {
    background-color: var(--arena);
    padding: var(--espacio-3xl) var(--espacio-xl);
    text-align: center;
  }

  .apoyamos__voz-mar {
    font-family: var(--font-discordia);
    font-size: calc(var(--alto) * 0.15 / 100);
    color: var(--azul-noche);
    max-width: 600px;
    margin: 0 auto var(--espacio-2xl);
  }

  .apoyamos__cifras {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--espacio-2xl);
  }

  .apoyamos__cifra {
    text-align: center;
  }

  .apoyamos__numero {
    display: block;
    font-family: var(--font-discordia);
    font-size: calc(var(--alto) * 0.35 / 100);
    font-weight: 700;
    color: var(--azul-noche);
    line-height: 1;
  }

  .apoyamos__etiqueta {
    display: block;
    font-family: var(--font-lato);
    font-size: calc(var(--alto) * 0.10 / 100);
    color: var(--azul-noche);
    margin-top: var(--espacio-sm);
    opacity: 0.85;
  }
</style>
```

### 2. Usarlo en la página principal

**`src/pages/index.astro`:**
```astro
---
import Layout from '../layouts/Layout.astro';
import Apoyamos from '../components/Apoyamos.astro';
---

<Layout>
  <Apoyamos
    cifras={[
      { numero: '374', etiqueta: 'organizaciones apoyadas' },
      { numero: '557', etiqueta: 'iniciativas' },
      { numero: '29', etiqueta: 'departamentos' },
      { numero: '$10.165M', etiqueta: 'movilizados' },
    ]}
  />
</Layout>
```

---

## 14. Casos de uso comunes

### Texto con scroll y desvanecimiento en bordes

Para áreas de texto con altura fija y scroll interno, donde se necesita indicar visualmente que hay más contenido sin usar `box-shadow`:

```css
.mi-componente__scroll {
  height: calc(var(--alto) * N / 100);
  overflow-y: auto;

  /* Fade suave en bordes superior e inferior — reemplaza box-shadow */
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black calc(var(--alto) * 4 / 100),
    black calc(100% - var(--alto) * 8 / 100),
    transparent 100%
  );
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black calc(var(--alto) * 4 / 100),
    black calc(100% - var(--alto) * 8 / 100),
    transparent 100%
  );
}
```

> **Regla:** nunca usar `box-shadow` para simular desvanecimiento. Usar `mask-image`.

### Texto multi-párrafo sin `<br />` manuales

```css
.mi-componente__texto p {
  white-space: pre-line;
  font-family: var(--font-lato);
  font-size: calc(var(--alto) * 0.12 / 100);
  line-height: 1.4;
  margin: 0;
}
```

Los saltos de párrafo se logran con líneas en blanco en el HTML, no con `<br /><br />`. El navegador hace el wrapping automático según el ancho del contenedor.

Para separar párrafos con espaciado fijo:

```css
.mi-componente__texto {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
```

### Página sin scroll (full viewport)

Para subpáginas que llenan exactamente la pantalla sin scroll:

```astro
<Layout scroll={false}>
  <Escena escena={10} stagger={200}>
    <MiComponente />
  </Escena>
</Layout>
```

> **`scroll={false}`** en Layout maneja todo automáticamente: `overflow: hidden`, `--alto: 100dvh`.
> La sección llena la pantalla en cualquier dispositivo: Mac, tablet vertical, celular.

### Navegación por botones pill-shaped

```astro
---
const ENLACES = [
  { href: '/ruta', texto: 'Texto', top: 1.0, left: 74 },
];
---

<nav class="nav" aria-label="Navegación">
  {ENLACES.map(e => (
    <a class="nav__btn" href={e.href} style={`top: calc(var(--alto) * ${e.top} / 100); left: ${e.left}%`}>
      {e.texto}
    </a>
  ))}
</nav>

<style>
  .nav__btn {
    position: absolute;
    text-decoration: none;
    background-color: var(--rosa);
    color: var(--azul-noche);
    padding: 0.6vw 1.2vw;
    border-radius: var(--espacio-4xl);
    font-family: var(--font-lato);
    font-size: calc(var(--alto) * 0.13 / 100);
    font-weight: 700;
    transition: transform 0.2s ease;
    white-space: nowrap;
  }
  .nav__btn:hover { transform: scale(1.05); }
</style>
```

### Carrusel con auto-rotación e indicadores

Mostrar N tarjetas a la vez con rotación automática, flechas e indicadores:

```astro
---
const ITEMS = [ /* array de contenido */ ];
---

<section class="carrusel">
  <div class="carrusel__pista">
    {ITEMS.map((item, i) => (
      <article class="carrusel__tarjeta" data-index={i}>
        <!-- contenido -->
      </article>
    ))}
  </div>

  <div class="carrusel__controles">
    <button class="carrusel__flecha--izq" aria-label="Anterior" />
    <div class="carrusel__puntos">
      {ITEMS.map((_, i) => <button class="carrusel__punto" data-index={i} />)}
    </div>
    <button class="carrusel__flecha--der" aria-label="Siguiente" />
  </div>
</section>

<style>
  .carrusel__tarjeta { display: none; }
  .carrusel__tarjeta[data-activa] { display: flex; }
  .carrusel__punto[data-activo] { background: var(--coral); }
</style>

<script>
  const mostrar = idx => {
    tarjetas.forEach(t => t.removeAttribute('data-activa'));
    puntos.forEach(p => p.removeAttribute('data-activo'));
    // Mostrar 2 tarjetas: idx e idx+1
    tarjetas[idx]?.setAttribute('data-activa', '');
    tarjetas[(idx+1) % total]?.setAttribute('data-activa', '');
    puntos[idx]?.setAttribute('data-activo', '');
  };
  setInterval(() => mostrar((actual+1) % total), 5000);
</script>
```

### Ticker infinito de logos con hover pause

```astro
<div class="ticker">
  <div class="ticker__pista">
    {MARCAS.concat(MARCAS).map(m => <img class="ticker__logo" src={m.src} alt={m.alt} />)}
  </div>
</div>

<style>
  @keyframes ticker-scroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .ticker__pista {
    display: flex;
    width: max-content;
    animation: ticker-scroll 40s linear infinite;
  }
  .ticker__pista:hover { animation-play-state: paused; }
  .ticker__logo:hover { transform: scale(1.08); transition: transform 0.3s ease; }
</style>
```

> **Regla:** duplicar el array (`MARCAS.concat(MARCAS)`) para que el loop sea sin costura. El `translateX(-50%)` recorre exactamente una copia del array.

### Animaciones de entrada reusables

Sistema global en `src/styles/animaciones.css`. No requiere JS por componente — el IntersectionObserver está en `Layout.astro`.

**Cómo usar (3 pasos):**

```html
<!-- 1. Elegir tipo: --blur, --fade, --slide -->
<div class="anim-entrada anim-entrada--blur" data-anim-stagger="50">
  <!-- 2. Marcar hijos con data-anim-item -->
  <h2 data-anim-item>Título</h2>
  <p data-anim-item>Párrafo 1</p>
</div>
```

| Clase | Efecto | Cuándo usarla |
|-------|--------|---------------|
| `anim-entrada--blur` | blur(8px) + scale(0.97) → nítido | Tarjetas, bloques con imagen |
| `anim-entrada--fade` | opacity 0 → 1, 0.9s ease-out | Texto, párrafos, títulos, botones |
| `anim-entrada--slide` | translateY(25px) → 0 | Bloques grandes |

| Atributo | Descripción | Valores típicos |
|----------|-------------|:--:|
| `data-anim-stagger="50"` | Retraso en ms entre cada `data-anim-item` | 50 (rápido) — 350 (lento) |
| `data-anim-item` | Hijo animado secuencialmente | — |

**Ejemplos reales del proyecto:**

| Componente | Tipo | Stagger | Por qué |
|------------|------|:---:|---------|
| Testimonios (tarjetas) | `--blur` | 50 | 7 tarjetas, rápido |
| Testimonios (título) | `--fade` | 150 | Título solo, entrada pausada |
| Testimonios (flechas + indicadores) | `--fade` | 100 | 3 elementos (izq, der, puntos) |
| Inicio (título + subtítulo) | `--fade` | 200 | 2 elementos, ritmo pausado |
| Carta (párrafos) | `--fade` | 350 | Texto denso, lectura progresiva |
| Carta (cifras) | `--blur` | 250 | 3 cifras, impacto visual |

**Timing global (configurable en `animaciones.css`):**

| Qué | Dónde | Valor |
|-----|-------|:---:|
| Duración blur | `anim-blur-in` keyframes | `0.8s` |
| Duración fade | `anim-fade-in` keyframes | `0.9s` |
| Duración slide | `anim-slide-up` keyframes | `0.7s` |
| Anticipación observer | `rootMargin` en Layout | `100px` |
| Threshold observer | `threshold` en Layout | `0.1` (10% visible) |

**Animaciones en Escena.astro:**

Los elementos decorativos se animan con el campo `anim: true` y el prop `stagger`:

```ts
// En el array de la escena dentro de Escena.astro:
{
  src: "/resources/contenedor/contenedor-letrero.webp",
  top: -0.15,
  left: "32vw",
  width: "35vw",
  alt: "Marco para testimonios",
  anim: true,  // ← activa animación
}
```

```astro
<!-- En la página, stagger controla la velocidad -->
<Escena escena={10} stagger={200}>
  <SeccionTestimonios />
</Escena>
```

| `stagger` | Efecto |
|:---:|---|
| `{0}` | Sin animación (default) |
| `{200}` | Medio, para letreros/imágenes decorativas |

**Animaciones de interacción:**

```css
/* Hover: agrandar */
.mi-btn:hover { transform: scale(1.15); transition: transform 0.2s ease; }

/* Click: presionar */
.mi-btn:active { transform: scale(0.9); transition: transform 0.15s ease; }
```

> **⚠️ Títulos centrados con animación:** no usar `transform: translateX(-50%)` para centrar — la animación `translateY` del fade lo sobreescribe. Usar `left: 0; right: 0; text-align: center` en su lugar.

**Reglas:**
- Solo `transform` y `opacity` — sin animar layout.
- `prefers-reduced-motion: reduce` desactiva todo.
- Los contenedores anidados con animación son independientes (cada uno tiene su propio observer).
- El `data-anim-item` debe estar en el hijo directo del contenedor `anim-entrada`.
- El observer usa `threshold: 0.1` (10% visible = dispara).
- `will-change` se quita solos al terminar la animación (no se acumula).

---

## 15. Checklist de revisión de código

Antes de dar por terminado un componente o página:

- [ ] ¿El build compila sin errores? (`npm run build`)
- [ ] ¿Los colores usan `var(--azul-noche)`, `var(--rosa)`, `var(--arena)`, etc.?
- [ ] ¿Las fuentes usan `var(--font-discordia)` o `var(--font-lato)`?
- [ ] ¿Los espaciados usan `var(--espacio-md)`, etc.?
- [ ] ¿No hay `@media` queries? (escala con `--alto`)
- [ ] ¿Las posiciones usan `calc(var(--alto) * N / 100)`? (sin `margin` para posicionar, siempre `position: absolute`)
- [ ] ¿Los tamaños de fuente usan `calc(var(--alto) * N / 100)`?
- [ ] ¿El HTML es semántico (`<section>`, `<article>`, no solo `<div>`)?
- [ ] ¿Las clases CSS siguen la convención `componente__elemento`?
- [ ] ¿Las ilustraciones tienen `alt` descriptivo?
- [ ] ¿No hay `box-shadow`, colores hardcodeados, fuentes del sistema, ni degradados?
- [ ] ¿Los textos largos usan `white-space: pre-line` en vez de `<br />` manuales?
- [ ] ¿Cada componente declara su escena en `/** ESCENA X · NOMBRE */`?
- [ ] ¿Los botones son pill-shaped (`border-radius: var(--espacio-4xl)`)?
- [ ] ¿La página usa `<Escena escena={N}>` con slot en vez de `<Fondos>` + `<Escena>` separados?
- [ ] ¿No hay `<style is:global>` manual? (usar `scroll={false}` en Layout)
- [ ] ¿El texto cumple el tono de AGENTS.md (voz única, sin "beneficiarias", cifras humanizadas)?

---

*Ante la duda, volver a los tres archivos: `DEVELOP.md` (cómo programar), `DESIGN.md` (cómo se ve), `AGENTS.md` (cómo se escribe).*
