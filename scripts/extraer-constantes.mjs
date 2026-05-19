import { readFileSync, writeFileSync } from 'fs';
let c = readFileSync('src/components/Escena.astro', 'utf8');

const reps = [
  ['"/resources/escenario/escenario-arbusto.webp"', 'ARBUSTO'],
  ['"/resources/escenario/escenario-estrella-mar.webp"', 'ESTRELLA'],
  ['"/resources/escenario/escenario-cactus.webp"', 'CACTUS'],
  ['"/resources/escenario/escenario-piedras.webp"', 'PIEDRAS'],
  ['"/resources/escenario/escenario-conchas.webp"', 'CONCHAS'],
  ['"/resources/escenario/escenario-palmeras.webp"', 'PALMERAS'],
  ['"/resources/contenedor/contenedor-marco-fotos-1.webp"', 'MARCO'],
  ['"/resources/contenedor/contenedor-letrero-1.webp"', 'LETRERO'],
  ['"/resources/contenedor/contenedor-letrero-guion-bajo.webp"', 'LETRERO_GUION'],
  ['"/resources/gifs/gif-pescador-ensamblado.webm"', 'PESCADOR'],
  ['"/resources/gifs/gif-artesana-paujil-1.webm"', 'ARTESANA'],
];

let count = 0;
for (const [path, constant] of reps) {
  if (c.includes(path)) {
    c = c.replaceAll(path, constant);
    count++;
    console.log('Replaced: ' + path.split('/').pop() + ' → ' + constant);
  }
}

writeFileSync('src/components/Escena.astro', c);
console.log('\n' + count + ' constants applied');
