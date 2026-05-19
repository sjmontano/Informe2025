# AGENTS.md — Informe de Gestión 2025 · Fondo Lunaria

> **Instrucciones para agentes de IA.** Leer este archivo antes de generar, editar o revisar cualquier contenido del micrositio. Define el tono, el léxico, la audiencia y las reglas de escritura.
>
> **Archivos complementarios obligatorios:**
> - **[DESIGN.md](./docs/DESIGN.md)** — Sistema de diseño visual: tokens de color, tipografía, componentes. Leer junto con este archivo para cualquier tarea de frontend.
> - **[DEVELOP.md](./docs/DEVELOP.md)** — Convenciones de desarrollo: cómo programar componentes, CSS, assets, naming. Leer antes de escribir código.
> - **[README.md](./README.md)** — Info general del proyecto, stack, comandos.

---

## 1. Identidad del proyecto

### ¿Qué es este sitio?

Micrositio interactivo del **Informe de Gestión 2025** de Fondo Lunaria. Traduce el informe impreso a una experiencia digital navegable. No es un PDF volcado a HTML: cada sección respira con la identidad visual creada por Aquelarre y cada cifra está puesta en contexto humano y político.

### ¿Quiénes son?

**Fondo Lunaria** es un fondo feminista colombiano que moviliza recursos económicos para fortalecer procesos colectivos de mujeres y personas trans jóvenes diversas. Trabaja en dos programas:

- **Libertad y Democracia:** defensa de derechos sexuales y reproductivos, lucha contra fundamentalismos, nuevas narrativas para familias diversas.
- **Autonomía, Derechos y Sostenibilidad:** construcción de paz, defensa del territorio, eliminación de violencias.

En 2025: **374 organizaciones apoyadas**, **557 iniciativas**, **29 departamentos**, **$10.165 millones** movilizados.

**Aquelarre Laboratorio de Diseño Feminista** es un laboratorio de investigación-creación desde Popayán, Cauca. Usan la comunicación visual para la incidencia política feminista. Son co-creadoras de este informe: diseñaron la identidad visual, las ilustraciones, los personajes navegables y la metáfora marina que atraviesa todo el documento. Ganadoras del Premio Lucy Wartenberg 2023.

### Relación estratégica

No es una relación cliente-proveedora. Fondo Lunaria aporta el músculo financiero, las alianzas y la conexión con cientos de organizaciones de base. Aquelarre aporta la metodología de investigación-creación y las narrativas visuales que transforman imaginarios. **Es una arquitectura colaborativa** donde la potencia creativa se une a la fuerza de movilización para potenciar el impacto del movimiento feminista en Colombia.

---

## 2. Audiencia del micrositio

El informe habla a múltiples públicos simultáneamente:

| Audiencia | Qué busca | Cómo se le habla |
|-----------|-----------|------------------|
| **Organizaciones de base apoyadas** | Verse reflejadas, sentirse parte | Lenguaje cercano, sin jerarquías, con testimonios reales |
| **Donantes y copartes** | Transparencia, impacto, seriedad | Cifras claras, Cuentas Claras, trazabilidad |
| **Movimiento feminista amplio** | Inspiración, articulación, referentes | Tono político explícito, posicionamiento sin eufemismos |
| **Aliadas institucionales** | Solidez, metodología, resultados | Rigor sin frialdad, proceso documentado |
| **Público general curioso** | Entender qué hace un fondo feminista | Lenguaje accesible, metáfora marina como puerta de entrada |

**Regla de oro:** Nunca escribir para "la institución". Escribir para las que están en el territorio, las que se juegan la vida, las que sostienen la democracia con sus cuerpos y sus juntanzas. Las donantes y copartes entenderán que la transparencia no está reñida con el calor.

---

## 3. Principios de escritura

### A. Tono general: senti-pensante feminista

No separamos emoción y análisis. Cada decisión de escritura es una decisión política.

| ✅ SÍ | ❌ NO |
|-------|------|
| Primera persona plural: "apoyamos", "diseñamos", "acompañamos" | Pasiva burocrática: "se apoyó", "se realizó" |
| Cifras con contexto humano | Listados de números sin narrativa |
| Metáfora marina con medida (marea, faro, orilla, brújula) | Abuso de lo poético que diluye la información |
| Nombrar organizaciones, territorios y personas con respeto | "Beneficiarias", "población objetivo", "target" |
| Visibilizar la red: Aquelarre, donantes, copartes | Ocultar quién hizo posible cada resultado |
| Posicionamiento feminista explícito | Falsa neutralidad |
| "Todes" o "las mujeres y personas trans" cuando sea propio de la voz colectiva | Imposiciones genéricas o fórmulas agotadoras |
| Oraciones activas: sujeto + verbo + complemento | Perífrasis vacías: "se procedió a", "se llevó a cabo" |

### B. Humanizar las cifras

Toda cifra debe ir acompañada de una frase que le devuelva el pulso:

> ❌ "$5.590 millones en apoyo directo a 374 organizaciones."
>
> ✅ "Atrás de los $5.590 millones destinados a apoyo directo hay 374 faros encendidos en 29 departamentos del país."

### C. Citas y testimonios

Estructura de tres pasos:
1. **Contexto breve:** quién habla, de qué organización, en qué territorio.
2. **Cita textual** con atribución.
3. **Reflexión del equipo Fondo Lunaria:** qué revela ese testimonio.

### D. Tecnicismos

Traducir siempre. Si un término técnico es inevitable (fiscal sponsor, ISO), se define entre paréntesis la primera vez y se vuelve al léxico del proyecto.

| Término técnico | Traducción |
|----------------|------------|
| Fiscal sponsor | Puente financiero que permite canalizar recursos |
| Saldos de proyectos | Recursos que ya estaban en el horizonte desde 2024 |
| Desarrollo institucional | Fortalecimiento del propio barco para sostener la travesía |
| Fondo en Movimiento | Apoyos ágiles para acciones urgentes de movilización |

---

## 4. Los dos registros (voces)

### Voz del mar (prosopopeya feminista)

Voz poético-política que personifica la marea, la orilla o el faro. Se usa **solo en aperturas, cierres e interludios**. Máximo 4-5 líneas por aparición. Nunca para explicar metodología o análisis.

**Ejemplo:**
> "Soy la marea que crece sin pedir permiso. Llego a 29 departamentos y acaricio 374 organizaciones con la misma fuerza con la que derribo muros de desigualdad. No me detengo ante los vientos adversos; avanzo con la brújula apuntando al Sur."

**Cuándo usarla:**
- Apertura del sitio / landing
- Epígrafes de sección
- Interludios entre capítulos
- Cierre emotivo

### Voz del proceso (primera persona plural)

Voz principal del sitio. Narra el trabajo de Fondo Lunaria con las organizaciones, Aquelarre y las alianzas.

**Cuándo usarla:**
- Todo el cuerpo del contenido
- Explicación de programas y estrategias
- Sección Cuentas Claras
- Testimonios y reflexiones
- Descripción de la colaboración con Aquelarre

> ⚠️ **No mezclar las dos voces en un mismo párrafo o sección.** Abrir con el mar, desarrollar con la juntanza.

---

## 5. Léxico núcleo

### Mar y navegación
marea, ola, corriente, orilla, faro, brújula, horizonte, travesía, sur, marejada, remanso, navegar, zarpar, anclar, abrazar (la orilla)

### Apoyo y fortalecimiento
apañar, sostener, acompañar, impulsar, nutrir, fortalecer, tejer redes, movilizar recursos, enlazar

### Activismos y comunidades
colectivas, organizaciones de base, procesos comunitarios, mujeres diversas, personas trans, defensoras, cuerpos diversos, juntanza, semilleros de cuidado

### Diseño e investigación
laboratorio de diseño feminista, investigación-creación, ilustración, identidad visual, micrositio, podcast, diplomado, validación, narrativas visuales

### Amenazas (sin eufemismos)
fundamentalismos, extractivismo, racismo, capacitismo, violencias basadas en género, desigualdad, desfinanciamiento, tempestades políticas

### Verbos preferidos
abrazar, tejer, acompañar, nutrir, iluminar, crecer, navegar, apoyar, defender, reclamar, celebrar, sembrar, apañar

### Términos prohibidos
- "beneficiarias" → organizaciones, colectivas, procesos comunitarios
- "usuarias" → personas navegantes, quienes recorren el informe
- "target" → audiencia, comunidades
- "entregables" → resultados, piezas, creaciones
- "KPI / métricas" → cifras, hallazgos, evidencias
- "optimizar" → mejorar, ajustar, transformar

---

## 6. Conectores

Además de los conectores estándar (sin embargo, por ello, en consecuencia), usar con moderación estos **conectores marinos** (1-2 veces en todo el sitio):

- *A contracorriente…* — para dificultades superadas
- *En la misma marea…* — para alianzas y trabajo colectivo
- *Como faro que guía…* — para propósitos
- *Desde la orilla…* — para situar el punto de vista

---

## 7. Estructura de contenido del micrositio

| Sección | Voz | Qué contiene |
|---------|-----|-------------|
| **Portada / Hero** | Voz del mar | Frase de apertura, ilustración principal, navegación |
| **Carta de la dirección** | Voz del proceso | Agradecimientos, posicionamiento, contexto del año |
| **Apoyamos (cifras clave)** | Voz del proceso + mar | Datos humanizados con visualizaciones |
| **Programas** | Voz del proceso | Libertad y Democracia + Autonomía, Derechos y Sostenibilidad |
| **Fondo en Movimiento** | Voz del proceso | Apoyos ágiles, testimonios |
| **Investigación** | Voz del proceso | Podcast, diplomado, publicaciones |
| **Diseño e ilustración** | Voz del proceso + mar | Aquelarre como co-creador, decisiones visuales |
| **Testimonios** | Voz del proceso | Citas textuales + contexto + reflexión |
| **Cuentas Claras** | Voz del proceso | Transparencia financiera sin eufemismos |
| **Agradecimientos / Cierre** | Voz del mar + proceso | Horizonte colectivo, continuidad |

---

## 8. Cómo nombrar a las organizaciones y personas

- **Siempre:** "organizaciones, colectivas y procesos comunitarios"
- **Nunca:** "las beneficiarias" — son protagonistas, no receptoras pasivas
- **Género:** usar "e" cuando sea propio de la voz colectiva citada. No forzar si no corresponde.
- **Territorios:** nombrar departamentos y municipios. Evitar "regiones" genérico.
- **Aquelarre:** siempre acompañado de "Laboratorio de Diseño Feminista" en la primera mención de cada sección; luego "Aquelarre" a secas.
- **Alter egos del equipo de Aquelarre** (Verbena Amarga, Tituba, Mandrágora, etc.): solo si se mencionan créditos específicos.

---

## 9. Instrucciones para desarrollo web

### Stack

- **Framework:** Astro v6 con TypeScript
- **Estilos:** CSS Custom Properties definidos en `DESIGN.md` (sección YAML). Las variables CSS deben reflejar exactamente los tokens allí definidos.
- **Fuentes:** Discordia (títulos) + Lato (cuerpo). Carga desde Google Fonts o `@font-face` local.
- **Ilustraciones:** SVG/PNG con transparencia en `public/illustrations/`.
- **Texturas:** PNG/SVG de papel rasgado en `public/textures/`.

### Principios de implementación

- **Accesibilidad:** Contraste AA mínimo (4.5:1 texto normal, 3:1 texto grande). Verificar con `DESIGN.md lint`. Texto alternativo descriptivo en todas las ilustraciones. Navegación por teclado completa.
- **Performance:** Sitio estático, carga rápida, imágenes optimizadas (WebP + fallback). `font-display: swap`. Sin dependencias pesadas de animación.
- **Responsive sin media queries:** El diseño escala proporcionalmente con el ancho de pantalla mediante `--alto` (basado en `vw`) y `clamp()` para pisos y techos de tamaño. No se usan `@media` queries para cambiar posiciones, tamaños ni layouts — todo se achica o agranda uniformemente. Si en un celular se ve igual que en PC pero más pequeño, está bien.
- **Sin tracking invasivo:** No Google Analytics. Si se requiere medir, usar Plausible o similar ético.

### Variables CSS en español

Todos los tokens de diseño usan nombres en español para facilitar el trabajo del equipo:

| Categoría | Variable | Valor |
|-----------|----------|-------|
| Fondos | `--arena` | `#F4C454` |
| | `--oceano` | `#0B6B6D` |
| Textos | `--azul-noche` | `#28275B` |
| | `--naranja-madera` | `#ED7A22` |
| Botones | `--rosa` | `#EBA5C8` |
| | `--coral` | `#EF7E7B` |
| Tipografía | `--font-discordia` | `"Discordia", serif` |
| | `--font-lato` | `"Lato", sans-serif` |
| Espaciado | `--espacio-xs` … `--espacio-4xl` | `4px` … `96px` |
| Escena | `--alto` | `calc(100vw * 0.5625 * N)` |

> **Regla:** Nunca usar colores, fuentes ni espaciado hardcodeados. Siempre usar las variables CSS. Nada de `#28275b`, `font-family: 'Discordia'`, `padding: 24px`, etc.

### Arquitectura de escenas

El sitio se organiza en **17 escenas** (secciones del informe). Cada escena tiene un fondo ilustrado y elementos decorativos.

**Capas visuales (z-index):**

| Capa | z-index | Componente | Qué contiene |
|------|:------:|-----------|--------------|
| Fondos | -1 | `Fondos.astro` | Imágenes de fondo ilustradas |
| Escena | 0 (default) | `Escena.astro` | Elementos decorativos (nubes, cactus, letreros) |
| Contenido | 2 | Componentes por sección | Títulos, textos, cifras |
| Overlay | 3+ | `Escena.astro` con `z: N` | Elementos decorativos que deben quedar encima del contenido |

**Escena.astro** — archivo central de elementos decorativos. Cada sección es un array de objetos `Item`. Agregar un elemento = una línea:

```ts
const PORTADA: Item[] = [
  { src: '/resources/escenario/escenario-estrella-mar.webp',
    css: `top:${top(0, 0.55)}; right:50vw; width:6vw`,
    alt: 'Estrella de mar',
    z: 3 },  // ← z: 3 para que quede encima del contenido
];
```

**top(seccion, fraccion):** posiciona verticalmente. `seccion` = índice de la sección (0-16). `fraccion` = posición dentro de la sección (0 = inicio, 0.5 = mitad, 1 = final).

**Páginas** — cada página define qué escenas incluye con `desde`/`hasta`:

```astro
<!-- pages/index.astro — 3 escenas conectadas por scroll -->
<Fondos desde={0} hasta={2} />
<Escena desde={0} hasta={2} />

<!-- ESCENA 0 · PORTADA -->
<Inicio />

<!-- ESCENA 1 · CARTA -->
<Carta />
```

Para subpáginas (escenas no conectadas), crear otro archivo `.astro` con su propio rango.

### Checklist de CSS antes de commit

- [ ] ¿Todos los colores usan `var(--azul-noche)`, `var(--rosa)`, etc.?
- [ ] ¿Todas las fuentes usan `var(--font-discordia)` o `var(--font-lato)`?
- [ ] ¿Los espaciados usan `var(--espacio-md)`, etc.?
- [ ] ¿No hay `@media` queries? (solo se permiten si es estrictamente necesario)
- [ ] ¿Las posiciones usan `calc(var(--alto) * N / 100)`?
- [ ] ¿Los tamaños de fuente usan `clamp()` con `calc(var(--alto) * N / 100)`?
- [ ] ¿No hay `box-shadow`, `#000`, fuentes del sistema, ni degradados purple-to-blue?
- [ ] ¿Los textos largos usan `white-space: pre-line` en vez de `<br />` manuales?
- [ ] ¿Los elementos decorativos duplicados se evitan? (usar `z: 3` en Escena.astro)
- [ ] ¿Cada componente declara su escena en el comentario del frontmatter? (`ESCENA 0 · PORTADA`)

### Herramientas de agente disponibles

- **`DESIGN.md lint`** — Validar tokens, referencias rotas, contraste WCAG: `npx @google/design.md lint docs/DESIGN.md`
- **`impeccable`** — Auditoría de calidad frontend: `npx impeccable detect src/`

---

## 10. Ejemplos de aplicación

### Ejemplo: sección "Apoyamos"

**Voz del mar (apertura):**
> "Soy la orilla que abraza 557 iniciativas. En mí convergen las aguas de 29 departamentos, las voces de mujeres indígenas, campesinas, afro y trans que decidieron que otro mundo es posible."

**Voz del proceso (desarrollo):**
> "En 2025, desde Fondo Lunaria acompañamos 374 organizaciones en todo el país. Destinamos $5.590 millones a apoyo directo, priorizando procesos liderados por mujeres rurales, personas trans y colectivas que trabajan en contextos de alta conflictividad. Cada peso movilizado fue una semilla de autonomía."

### Ejemplo: sección "Cuentas Claras"

> "La transparencia no es un requisito administrativo: es un acto de coherencia política. En 2025, Fondo Lunaria gestionó $10.165 millones. El 67% ($6.847 millones) se destinó directamente a apoyos y fortalecimiento de organizaciones. El 33% restante cubrió la operación del fondo: el equipo que hace posible cada convocatoria, cada acompañamiento, cada puente entre recursos y territorios."

### Ejemplo: sección "Aquelarre"

> "Este informe no sería lo que es sin Aquelarre Laboratorio de Diseño Feminista. Ellas no 'decoraron' el contenido: lo interpretaron, lo encarnaron, le dieron cuerpo visual. Cada ilustración, cada paleta de color, cada personaje que navega estas páginas es una decisión de diseño con intención política. La metáfora del mar, la brújula apuntando al Sur, las mareas que crecen: todo eso nació del cruce entre los datos de Fondo Lunaria y la mirada creativa de un equipo de brujxs que entiende que diseñar es transformar imaginarios."

---

## 11. Lista de verificación antes de publicar contenido

- [ ] ¿El párrafo mantiene una sola voz?
- [ ] ¿Las cifras están humanizadas (no solo números)?
- [ ] ¿Se nombra a Aquelarre como co-creador en las secciones que corresponda?
- [ ] ¿No hay jerga técnica sin traducción?
- [ ] ¿Los testimonios tienen contexto (quién, dónde, por qué importa)?
- [ ] ¿El tono es esperanzador sin ocultar los vientos adversos?
- [ ] ¿Se evitan "beneficiarias", "usuarias", "target"?
- [ ] ¿Las ilustraciones tienen texto alternativo descriptivo?
- [ ] ¿La brújula apunta al Sur? (perspectiva feminista local, autonomía, comunidad)

---

## 12. Referencias

- [Fondo Lunaria](https://fondolunaria.org/)
- [Informe 2024](https://fondolunaria.org/informe2024/)
- [Informe 2021](https://fondolunaria.org/informe2021/)
- [Aquelarre Lab](https://www.aquelarrelab.org/)
- [Aquelarre en Facebook](https://www.facebook.com/aquelarreilustracion/?locale=es_LA)

---

*Este archivo es el guardarraíl, no la camisa de fuerza. Ante la duda, volver a la pregunta: ¿esto lo entendería y lo sentiría una defensora en el territorio?*
