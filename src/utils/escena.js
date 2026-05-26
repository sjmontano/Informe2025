/**
 * escena.js — Utilidad para generar CSS inline de elementos decorativos
 *
 * Convierte un objeto Item de Escena.astro en una cadena CSS para el atributo style.
 * Soporta: top, bottom (fracción 0-1, el no usado queda auto),
 * left, right, width, extra (CSS extra), z (z-index).
 */

export function css(e) {
  const partes = [];
  // Vertical: top o bottom, el no usado queda auto
  if (e.top != null) {
    partes.push(`top: calc(${(e.top * 100).toFixed(2)} * var(--alto) / 100)`);
    partes.push("bottom: auto");
  } else if (e.bottom != null) {
    partes.push("top: auto");
    partes.push(`bottom: calc(${(e.bottom * 100).toFixed(2)} * var(--alto) / 100)`);
  } else {
    partes.push("top: auto; bottom: auto");
  }
  if (e.left != null) partes.push(`left: ${e.left}`);
  if (e.right != null) partes.push(`right: ${e.right}`);
  if (e.width != null) partes.push(`width: ${e.width}`);
  if (e.extra != null) partes.push(e.extra);
  if (e.z != null) partes.push(`z-index: ${e.z}`);
  return partes.join("; ");
}
