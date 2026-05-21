/**
 * escena.js — Utilidad para generar CSS inline de elementos decorativos
 *
 * Convierte un objeto Item de Escena.astro en una cadena CSS para el atributo style.
 * Soporta: top (requerido), left, right, width, extra (CSS extra), z (z-index).
 */

export function css(e) {
  const partes = [
    `top: calc(${(e.top * 100).toFixed(2)} * var(--alto) / 100)`,
  ];
  if (e.left != null) partes.push(`left: ${e.left}`);
  if (e.right != null) partes.push(`right: ${e.right}`);
  if (e.width != null) partes.push(`width: ${e.width}`);
  if (e.extra != null) partes.push(e.extra);
  if (e.z != null) partes.push(`z-index: ${e.z}`);
  return partes.join("; ");
}
