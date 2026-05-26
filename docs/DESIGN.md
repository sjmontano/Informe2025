---
name: "Marea Feminista"
description: "Sistema de diseño del Informe de Gestión 2025 de Fondo Lunaria, creado por Aquelarre Laboratorio de Diseño Feminista. Collage marítimo y narrativo con texturas de papel rasgado, ilustraciones orgánicas y paleta vibrante."
colors:
  primary: "#28275b"
  primary-description: "Azul noche. Textos, títulos, cuerpo de lectura."
  secondary: "#0B6B6D"
  secondary-description: "Océano profundo / Teal. Fondos de sección, bloques narrativos."
  tertiary: "#ED7A22"
  tertiary-description: "Naranja cálido madera. Letreros, flechas de navegación, acentos estructurales."
  neutral: "#F4C454"
  neutral-description: "Arena / Amarillo cálido. Fondo general del sitio."
  accent-coral: "#ef7e7b"
  accent-coral-description: "Coral / Salmón. Botones principales, CTAs, destacados."
  accent-pink: "#eba5c8"
  accent-pink-description: "Rosa claro. Botones secundarios tipo píldora, fondos de tarjetas."
  circle-bg: "#1f1a3e"
  circle-bg-description: "Morado oscuro. Fondo de círculos contenedores de números/pasos."
  circle-text: "#fde070"
  circle-text-description: "Amarillo brillante. Texto numérico sobre fondo oscuro."
  map-base: "#28275b"
  map-base-description: "Azul noche. Estado inactivo / base del mapa de Colombia."
  map-selected: "#39b490"
  map-selected-description: "Verde turquesa. Estado activo / hover del mapa interactivo."
  white: "#ffffff"
  white-description: "Blanco puro. Texto sobre fondos oscuros, contraste."
typography:
  h1:
    fontFamily: "Discordia, serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.1
  h2:
    fontFamily: "Discordia, serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.2
  h3:
    fontFamily: "Discordia, serif"
    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.25
  body-lg:
    fontFamily: "Lato, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
  body-md:
    fontFamily: "Lato, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Lato, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label-caps:
    fontFamily: "Lato, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.05em"
    textTransform: "uppercase"
  cifra-destacada:
    fontFamily: "Discordia, serif"
    fontSize: "clamp(3rem, 6vw, 5rem)"
    fontWeight: 700
    lineHeight: 1
  letrero-madera:
    fontFamily: "Discordia, serif"
    fontSize: "clamp(1rem, 2vw, 1.5rem)"
    fontWeight: 700
rounded:
  sm: 4px
  md: 8px
  lg: 16px
  pill: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  "2xl": 48px
  "3xl": 64px
  "4xl": 96px
components:
  button-primary:
    backgroundColor: "{colors.accent-coral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    typography: "{typography.label-caps}"
  button-secondary:
    backgroundColor: "{colors.accent-pink}"
    textColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    typography: "{typography.label-caps}"
  button-primary-hover:
    backgroundColor: "{colors.tertiary}"
  button-secondary-hover:
    backgroundColor: "{colors.accent-coral}"
  circle-step:
    backgroundColor: "{colors.circle-bg}"
    textColor: "{colors.circle-text}"
    rounded: "{rounded.pill}"
    size: 48px
  wood-sign:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    typography: "{typography.letrero-madera}"
  map-department-inactive:
    backgroundColor: "{colors.map-base}"
  map-department-active:
    backgroundColor: "{colors.map-selected}"
  nav-arrow:
    textColor: "{colors.tertiary}"
  section-alternate:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.white}"
---

## Overview

**Collage marítimo y narrativo.** El sistema visual del Informe de Gestión 2025 nace de la metáfora del mar como espacio de encuentro, resistencia y transformación. No es una interfaz corporativa: es un lienzo donde conviven texturas de papel rasgado, ilustraciones orgánicas con personajes navegables y una paleta vibrante que evoca las costas colombianas.

**Diseñado por Aquelarre Laboratorio de Diseño Feminista** (Popayán, Cauca). Ganadoras del Premio Lucy Wartenberg 2023. Cada decisión visual es una decisión política: los colores no decoran, significan; las texturas no adornan, sitúan; las ilustraciones no embellecen, encarnan a las comunidades.

### Metáfora conceptual

El sitio se recorre como se navega un archipiélago:

- **La orilla** (fondo arena `--bg-sand`) es el punto de llegada, el abrazo inicial.
- **El océano** (`--bg-ocean`) son las secciones de profundidad: programas, investigación, cuentas claras.
- **Los faros** (cifras destacadas en Discordia) guían la lectura con datos que iluminan.
- **Los letreros de madera** (`--wood-accent`) señalan rutas de navegación entre secciones.
- **Las flechas** (`--wood-accent`) son la brújula que apunta al Sur.
- **El mapa** (`--map-base` → `--map-selected`) arraiga todo en el territorio colombiano.

### Principios visuales

1. **Textura sobre pulcritud.** Bordes de papel rasgado, superposiciones, ilustraciones que dialogan con el texto — nunca una cuadrícula rígida.
2. **Lo orgánico sobre lo geométrico.** Curvas, personajes ilustrados, composiciones asimétricas que respiran.
3. **Contraste con intención.** Azul noche sobre arena cálida, coral vibrante sobre océano profundo. Cada par de contraste cuenta una historia.
4. **Mobile-first radical.** La mayoría de las lectoras acceden desde celular. El diseño colapsa con gracia sin perder la expresividad.

## Colors

La paleta se organiza en cuatro familias funcionales, todas con nombres que evocan el universo marítimo del informe:

### Fondos y entorno

| Token | Hex | Uso |
|-------|-----|-----|
| `neutral` | `#F4C454` | Arena cálida. Fondo general del sitio. Envuelve como la orilla. |
| `secondary` | `#0B6B6D` | Océano profundo. Fondos de secciones narrativas densas (programas, investigación). Texto blanco encima. |

### Textos y estructura

| Token | Hex | Uso |
|-------|-----|-----|
| `primary` | `#28275B` | Azul noche. Color principal de texto sobre fondos claros. Títulos, párrafos, cuerpo de lectura. |
| `tertiary` | `#ED7A22` | Naranja madera. Letreros de navegación, flechas direccionales, subrayados decorativos. |

### Botones y CTAs

| Token | Hex | Uso |
|-------|-----|-----|
| `accent-coral` | `#EF7E7B` | Coral. Botones principales, llamadas a la acción, enlaces destacados. Cálido y urgente sin ser agresivo. |
| `accent-pink` | `#EBA5C8` | Rosa claro. Botones secundarios tipo píldora, fondos de tarjetas informativas, badges. |

### Componentes especializados

| Token | Hex | Uso |
|-------|-----|-----|
| `circle-bg` | `#1F1A3E` | Morado profundo. Fondo de círculos que contienen pasos numerados. |
| `circle-text` | `#FDE070` | Amarillo brillante. Números dentro de círculos de paso. Alto contraste. |
| `map-base` | `#28275B` | Azul noche. Departamentos inactivos en el mapa de Colombia. |
| `map-selected` | `#39B490` | Verde turquesa. Departamento activo/seleccionado/hover en el mapa. |

### Reglas de uso del color

- **Nunca usar negro puro (`#000`).** El azul noche (`primary`) cumple esa función con calidez.
- **Nunca texto gris sobre fondo de color.** Si el fondo es arena, el texto es azul noche. Si el fondo es océano, el texto es blanco.
- **Los botones siempre son pill-shaped** (`rounded: pill`). No se usan bordes rectos en elementos interactivos.
- **El mapa de Colombia** usa la misma paleta: azul noche para departamentos no seleccionados, verde turquesa para el departamento activo. No introducir colores externos al sistema.

### Accesibilidad y contraste

- `primary (#28275B)` sobre `neutral (#F4C454)` → contraste suficiente para texto.
- `white (#ffffff)` sobre `secondary (#0B6B6D)` → alto contraste para lectura sobre océano.
- `circle-text (#FDE070)` sobre `circle-bg (#1F1A3E)` → contraste alto para números.
- `white (#ffffff)` sobre `accent-coral (#EF7E7B)` → **verificar contraste antes de usar.** Si no cumple AA, usar `primary (#28275B)` como color de texto sobre coral.
- `primary (#28275B)` sobre `accent-pink (#EBA5C8)` → contraste suficiente para botones secundarios.

## Typography

### Dupla tipográfica

| Rol | Fuente | Categoría | Personalidad |
|-----|--------|-----------|-------------|
| Títulos, cifras, letreros | **Discordia** | Serif | Editorial, narrativa, con peso histórico. Evoca los titulares de prensa alternativa y los carteles de movilización. |
| Cuerpo, menús, botones, etiquetas | **Lato** | Sans-serif | Funcional, cálida, excelente legibilidad en pantalla. No es una sans fría: sus curvas sutiles acompañan la calidez del proyecto. |

### Carga de fuentes

Ambas fuentes deben cargarse desde Google Fonts en el `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Discordia:wght@700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
```

> **Nota:** Discordia puede no estar en Google Fonts. Si no está disponible allí, cargarla como archivo local (`@font-face` con `.woff2`) en `public/fonts/`. Lato sí está en Google Fonts.

### Jerarquía tipográfica

```
Discordia Bold → Títulos, cifras destacadas, letreros de madera
Discordia Bold → Subtítulos de sección
Lato Bold     → Labels, botones, navegación
Lato Regular  → Cuerpo de texto, párrafos, descripciones
Lato Regular (sm) → Notas al pie, créditos, metadata
```

### Escala modular

Se usa `clamp()` para fluidez responsive sin media queries rígidas. El sitio es mobile-first: las cifras pequeñas son el mínimo, las grandes el despliegue en desktop.

| Token | `clamp()` | Uso |
|-------|-----------|-----|
| `cifra-destacada` | `clamp(3rem, 6vw, 5rem)` | "374", "557", "$10.165" — las cifras que cuentan la historia |
| `h1` | `clamp(2.5rem, 5vw, 4rem)` | Título principal de sección |
| `h2` | `clamp(1.75rem, 3.5vw, 2.75rem)` | Subtítulo de sección |
| `h3` | `clamp(1.25rem, 2.5vw, 1.75rem)` | Título de subsección |
| `letrero-madera` | `clamp(1rem, 2vw, 1.5rem)` | Texto en letreros de navegación |
| `body-lg` | `1.125rem` | Párrafos destacados |
| `body-md` | `1rem` | Párrafos estándar |
| `body-sm` | `0.875rem` | Notas, créditos |
| `label-caps` | `0.75rem` | Botones, etiquetas (uppercase + letter-spacing) |

### Reglas tipográficas

- **Los títulos nunca van en mayúsculas sostenidas.** Usar `text-transform: none`. La fuerza la da Discordia Bold, no las mayúsculas.
- **Las cifras destacadas respiran.** Márgenes generosos alrededor, sin amontonar. Cada cifra es un faro, no un dato en una tabla.
- **Lato Bold solo en labels y botones.** No usar Lato Bold en cuerpo de texto corrido.
- **No usar más de 3 niveles de jerarquía por sección** (h1 → h2 → body). La claridad navegacional es prioridad.

## Layout

### Filosofía espacial

El diseño no sigue una cuadrícula rígida. Se basa en:

- **Composición de collage:** elementos que se superponen, texturas de papel rasgado que delimitan secciones, ilustraciones que desbordan sus contenedores.
- **Ritmo asimétrico:** cada sección tiene su propia respiración. No se fuerza simetría donde no la hay.
- **Secciones tipo "oleaje":** bloques de contenido que alternan fondo arena (`neutral`) y océano (`secondary`) para guiar el scroll como quien recorre la costa.

### Espaciado

| Token | Valor | Uso |
|-------|-------|-----|
| `xs` | 4px | Micro-espaciado entre ícono y texto |
| `sm` | 8px | Padding interno de tarjetas pequeñas |
| `md` | 16px | Padding estándar de componentes |
| `lg` | 24px | Separación entre elementos de una sección |
| `xl` | 32px | Márgenes de sección en mobile |
| `2xl` | 48px | Márgenes de sección en desktop |
| `3xl` | 64px | Separación entre secciones mayores |
| `4xl` | 96px | Hero / aperturas de sección |

### Bordes redondeados

| Token | Valor | Uso |
|-------|-------|-----|
| `sm` | 4px | Tarjetas, imágenes con marco sutil |
| `md` | 8px | Contenedores de contenido |
| `lg` | 16px | Tarjetas grandes, secciones colapsables |
| `pill` | 9999px | Botones, chips, badges, círculos de paso |

### Breakpoints

Diseño mobile-first. Los breakpoints son referenciales, no camisas de fuerza:

- **Mobile:** 0–640px (diseño base, una columna)
- **Tablet:** 641–1024px (dos columnas donde tenga sentido)
- **Desktop:** 1025px+ (despliegue completo, ilustraciones grandes)

## Elevation & Depth

El informe no usa sombras `box-shadow` sintéticas. La profundidad se crea mediante:

1. **Superposición de capas:** ilustraciones que se montan sobre bloques de texto, texturas de papel rasgado que enmarcan secciones.
2. **Alternancia de fondos:** el cambio de arena a océano crea la ilusión de avance, de adentrarse en el mar.
3. **Ilustraciones con personajes:** los personajes navegables de Aquelarre (creados como SVG o PNG con transparencia) flotan sobre los fondos, creando profundidad sin sombras.

**No usar:** `box-shadow`, `drop-shadow`, degradados de profundidad simulada.

## Shapes

### Texturas orgánicas

Las secciones no se delimitan con líneas rectas. Se usan:

- **Bordes de papel rasgado** como separadores entre secciones (SVG o PNG con transparencia en los bordes).
- **Formas orgánicas** para contenedores de testimonios, tarjetas de programas, fondos de cifras.
- **Ilustraciones que desbordan** sus contenedores lógicos, creando la sensación de un collage físico.

### Componentes con forma

| Componente | Forma |
|-----------|-------|
| Botones | Píldora (`pill`) |
| Círculos de paso | Círculo perfecto (`pill`, 48px x 48px) |
| Letreros de madera | Rectángulo con bordes ligeramente irregulares (simular madera) |
| Tarjetas de testimonio | Rectángulo con bordes de papel rasgado en uno de sus lados |
| Mapa de Colombia | Silueta geográfica real, no simplificada |

## Components

### ⚠️ Principio de replicación exacta

Cuando dos páginas comparten la misma familia visual (ej. páginas de podcast, páginas de detalle con PDF, páginas con bloques de estadísticas), **se replica la estructura exacta del componente de referencia**. Solo cambia el contenido (texto, URLs, props de BotonVolver). No se rediseña cada página desde cero. Esto garantiza consistencia visual y ahorra tiempo de desarrollo.

### Layouts recurrentes

#### Layout Podcast (ContraCorriente, LosTrapos)

```
┌──────────────────────────────────────────┐
│ [BotonVolver]                            │
│                                          │
│ Título (Discordia Bold, 5.4%)            │
│ [Badge pill oceano/arena] "Podcast"      │
│                                          │
│ Texto intro (Lato, 2.4%, 24vw ancho)     │
│                                          │
│ Más texto...                    [Spotify]│
│                                 [YouTube]│
│ ← 17vw → ← 30vw →         -8vw → columna│
└──────────────────────────────────────────┘
```

**Estructura CSS:**
- Contenedor: `position: absolute; inset: 0; z-index: 2`
- Columna izquierda: `position: absolute; top: 16%; left: 17vw; width: 30vw`
- Badge: `display: inline-block; background: var(--oceano); color: var(--arena); border-radius: var(--espacio-4xl); font-style: italic`
- Plataformas: `position: absolute; right: -8vw; bottom: 0; flex-direction: column`
- Íconos: doble círculo anidado (externo `--azul-noche`, interno `--azul-noche` con SVG `--salmon`)

#### Layout Detalle (Diplomado, Laboratorio)

```
┌──────────────────────────────────────────┐
│ [BotonVolver]                            │
│                                          │
│ Título (Discordia Bold)                  │
│ [Badge pill oceano/arena]                │
│                                          │
│ ┌─────────┐  Texto descriptivo           │
│ │ PDF /    │  (Lato, varias líneas)      │
│ │ Visor    │                              │
│ └─────────┘                              │
│ [Descargar]                              │
└──────────────────────────────────────────┘
```

**Estructura CSS:**
- Contenedor: `position: absolute; inset: 0; z-index: 2`
- Contenido: `display: flex; gap; top/left con calc()` — visor a la izquierda, texto a la derecha
- Badge: `display: inline-block; background: var(--oceano); color: var(--arena); border-radius: var(--espacio-4xl); font-style: italic; width: fit-content`

#### Layout Bloques (Programas)

```
┌──────────────────────────────────────────┐
│ [BotonVolver]    Título                  │
│                                          │
│  ┌─ Mapa ─────┐  [estrella] Título       │
│  │ Colombia   │  Texto descriptivo       │
│  │ interactivo│  [88 propuestas]         │
│  └────────────┘                          │
│                 [estrella] Título        │
│                 Texto descriptivo        │
│                 [94 propuestas]          │
└──────────────────────────────────────────┘
```

**Estructura CSS:**
- Cada bloque: `position: absolute` con `display: flex`
- Títulos y cifras: `position: absolute` con altura fija en `.programas__info` para que estén alineados entre bloques
- Ícono: estrella de 12 puntas con `clip-path: polygon(...)` o círculo con `border-radius: 50%`

#### Layout Navegación (Investigacion, Estrategias)

```
┌──────────────────────────────────────────┐
│ [BotonVolver]                            │
│                                          │
│ Título (Discordia Bold)                  │
│ Subtítulo (Lato italic)                  │
│                                          │
│ [Botón 1]    [Botón 2]                  │
│ [Botón 3]    [Botón 4]                  │
└──────────────────────────────────────────┘
```

**Estructura CSS:**
- Botones pill-shaped: `background: var(--salmon); color: var(--azul-noche); border-radius: var(--espacio-4xl)`
- Posicionados con `position: absolute` + `calc(var(--alto) * N / 100)` + `left: N%`
- Título centrado con `left: 50%; transform: translateX(-50%)`

### button-primary

Botón principal de llamado a la acción. Fondo coral, texto azul noche, forma píldora.

- `backgroundColor`: `accent-coral` (#EF7E7B)
- `textColor`: `primary` (#28275B)
- `rounded`: `pill`
- `padding`: `12px 24px`
- `typography`: `label-caps` (Lato Bold, uppercase, 0.75rem)
- `hover`: cambia a `tertiary` (#ED7A22)
- `focus`: outline de 2px en `primary`, offset de 2px

### button-secondary

Botón secundario. Fondo rosa claro, texto azul noche, forma píldora.

- `backgroundColor`: `accent-pink` (#EBA5C8)
- `textColor`: `primary` (#28275B)
- `rounded`: `pill`
- `padding`: `12px 24px`
- `typography`: `label-caps`
- `hover`: cambia a `accent-coral` (#EF7E7B)
- `focus`: outline de 2px en `primary`, offset de 2px

### circle-step

Círculo numerado para indicar pasos o secuencias. Fondo morado oscuro, número en amarillo brillante.

- `backgroundColor`: `circle-bg` (#1F1A3E)
- `textColor`: `circle-text` (#FDE070)
- `rounded`: `pill`
- `size`: 48px x 48px (fijo, no escala)
- `typography`: `cifra-destacada` (Discordia Bold, pero a ~1.5rem)
- Centro absoluto del número dentro del círculo (flex/grid center)

### wood-sign

Letrero de navegación tipo madera. Fondo naranja, texto azul noche, tipografía Discordia.

- `backgroundColor`: `tertiary` (#ED7A22)
- `textColor`: `primary` (#28275B)
- `rounded`: `sm`
- `typography`: `letrero-madera` (Discordia Bold)
- `padding`: `8px 16px`
- Debe incluir la textura visual de madera (CSS `background-image` con textura sutil o SVG decorativo)

### map-department

Departamento en el mapa interactivo de Colombia. Dos estados:

**Inactivo:**
- `backgroundColor`: `map-base` (#28275B)
- Sin borde

**Activo / Hover:**
- `backgroundColor`: `map-selected` (#39B490)
- Transición suave: `transition: fill 0.3s ease`
- Cursor: `pointer`

### nav-arrow

Flechas de navegación entre secciones o para scroll horizontal.

- `textColor`: `tertiary` (#ED7A22)
- Tamaño generoso para facilitar tap en mobile (mínimo 44x44px touch target)
- Puede ser un SVG inline o un carácter Unicode estilizado

### cifra-hero

Bloque de cifra destacada. Usado para "374", "557", "$10.165", etc.

- `typography`: `cifra-destacada` (Discordia Bold, clamp(3rem, 6vw, 5rem))
- `textColor`: `primary` (#28275B) sobre fondo `neutral` (#F4C454)
- O `white` (#FFFFFF) sobre fondo `secondary` (#0B6B6D)
- La cifra siempre va acompañada de un texto descriptivo en `body-md` debajo
- Margen inferior generoso (`xl` o `2xl`) para que la cifra respire

### testimonial-card

Tarjeta de testimonio con borde de papel rasgado.

- `backgroundColor`: `white` o `accent-pink` con baja opacidad
- `rounded`: `lg` en tres bordes, borde irregular (SVG) en uno de los lados
- `padding`: `lg` o `xl`
- Estructura interna: ícono de comillas (ilustración) → cita en `body-lg` → atribución en `body-sm`
- La cita NO usa `<blockquote>` nativo del navegador. Es texto estilizado con Discordia para las comillas decorativas y Lato para el cuerpo.

## Do's and Don'ts

### ✅ Do

- Replicar la estructura exacta del componente de referencia cuando dos páginas comparten la misma familia visual
- Usar Discordia Bold para títulos, cifras destacadas y letreros de navegación
- Usar Lato para todo el cuerpo de texto, menús, botones y etiquetas
- Alternar fondos arena (`neutral`) y océano (`secondary`) entre secciones
- Mantener los botones en forma píldora (`pill`)
- Usar bordes de papel rasgado (SVG/PNG) como separadores entre secciones
- Dejar que las ilustraciones desborden sus contenedores
- Asegurar contraste suficiente en todas las combinaciones de texto/fondo
- Los touch targets deben ser mínimo 44x44px
- Todo el texto alternativo de ilustraciones debe ser descriptivo y con intención política

### ❌ Don't

- No rediseñar desde cero un componente que ya tiene un patrón establecido; replicar y cambiar solo el contenido
- No usar negro puro (`#000000`) — usar `primary` (`#28275B`)
- No usar texto gris sobre fondos de color
- No usar `box-shadow` ni `drop-shadow` para crear profundidad
- No usar fuentes del sistema (Arial, Helvetica, system-ui)
- No usar Inter, Roboto ni otras fuentes "seguras" genéricas
- No usar degradados purple-to-blue (AI slop)
- No usar cards dentro de cards
- No usar mayúsculas sostenidas en títulos
- No usar bounce o elastic easing en animaciones
- No usar grid rígido de 12 columnas — composición de collage

## Implementación técnica

### CSS Custom Properties

El sistema se implementa mediante variables CSS en `:root`. Ver sección de tokens YAML arriba para los valores exactos. Las variables deben definirse en un archivo global (`src/styles/design-tokens.css` o similar) e importarse en el layout base.

### Texturas e ilustraciones

- Las texturas de papel rasgado son archivos PNG/SVG en `public/textures/`
- Las ilustraciones de personajes navegables son SVG/PNG en `public/illustrations/`
- Las texturas de madera para letreros pueden ser CSS (gradientes sutiles + `background-blend-mode`) o imágenes sutiles
- El mapa de Colombia es un SVG interactivo en `public/map/`

### Performance

- Imágenes en formato WebP con fallback PNG
- SVGs optimizados (sin metadatos innecesarios)
- Fuentes cargadas con `font-display: swap`
- Lazy loading para imágenes fuera del viewport inicial
- Sin dependencias de animación pesadas (no GSAP, no Framer Motion)

### Accesibilidad

- Contraste mínimo AA (4.5:1 para texto normal, 3:1 para texto grande)
- Navegación por teclado completa
- `prefers-reduced-motion` respetado
- Texto alternativo en todas las ilustraciones (descriptivo, no genérico)
- Skip-to-content link
- ARIA labels en componentes interactivos (mapa, botones, navegación)
