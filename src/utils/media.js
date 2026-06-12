/**
 * media.js — Utilidades para procesar enlaces multimedia
 *
 * formatearEnlaceMedia — Convierte enlaces de Drive/YouTube a formato embed/preview
 * obtenerImagenAudio   — Retorna la imagen de fondo para slides de audio según colectiva
 */

/**
 * @typedef {"youtube" | "drive-preview" | "audio" | "otro"} TipoEnlace
 * @typedef {{ tipo: TipoEnlace, url: string }} EnlaceFormateado
 */

/**
 * Convierte un enlace de Drive/YouTube a formato embed/preview
 * @param {string} link
 * @returns {EnlaceFormateado}
 */
export function formatearEnlaceMedia(link) {
  // Detectar enlaces de YouTube
  const youtubeMatch = link.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/,
  );
  if (youtubeMatch) {
    return {
      tipo: "youtube",
      url: `https://www.youtube.com/embed/${youtubeMatch[1]}`,
    };
  }

  // Detectar si es un archivo .mp3 en Drive → enlace para <audio>
  const audioMatch = link.match(/\/file\/d\/([^/]+)\//);
  if (audioMatch && link.endsWith(".mp3")) {
    return {
      tipo: "audio",
      url: `https://drive.google.com/uc?export=download&id=${audioMatch[1]}`,
    };
  }

  // Detectar enlaces de Drive tipo /view → preview
  if (link.includes("drive.google.com") && link.includes("/view")) {
    return {
      tipo: "drive-preview",
      url: link.replace("/view", "/preview").replace(/\?.*$/, ""),
    };
  }

  // Detectar si es un archivo en Drive pero no es audio
  if (link.endsWith(".mp3")) {
    return { tipo: "audio", url: link };
  }

  // Otro tipo de enlace
  return { tipo: "otro", url: link };
}

/**
 * Retorna la imagen de fondo para un slide de audio según la colectiva
 * @param {string} colectiva
 * @returns {string}
 */
export function obtenerImagenAudio(colectiva) {
  const imagenes = {
    "Changaina Penené": "/assets/audioBackgrounds/changaina.webp",
    "Mnemosine Forjando Ciudadanías": "/assets/audioBackgrounds/mnemosine.webp",
  };
  return imagenes[colectiva] || "/assets/audioBackgrounds/default.webp";
}
