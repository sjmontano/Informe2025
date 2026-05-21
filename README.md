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
- HTML + CSS + JavaScript/TypeScript
- Sin CMS externo (sitio estático generado en build)

---

## Desarrollo local

```sh
# Instalar dependencias
npm install

# Servidor de desarrollo (localhost:4321)
npm run dev

# Build de producción
npm run build

# Previsualizar build
npm run preview
```

Requisitos: Node.js >= 22.12.0

---

## Estructura del proyecto

```text
/
├── public/            # Assets estáticos (favicon, fuentes, fondos, GIFs)
├── src/
│   ├── components/    # Componentes Astro reutilizables
│   ├── layouts/       # Plantilla base (Layout.astro)
│   ├── pages/         # Rutas del sitio
│   ├── styles/        # Estilos globales (animaciones.css)
│   └── utils/         # Utilidades JS (escena.js)
├── docs/
│   ├── DESIGN.md      # Sistema de diseño visual
│   ├── DEVELOP.md     # Convenciones de desarrollo
│   └── motion-design.md
├── AGENTS.md          # Guía de tono y audiencia
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
