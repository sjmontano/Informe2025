import { readFileSync, writeFileSync } from 'fs';
let c = readFileSync('src/components/Escena.astro', 'utf8');
c = c.replaceAll('autoplay loop muted playsinline', 'autoplay loop muted playsinline preload="none"');
writeFileSync('src/components/Escena.astro', c);
console.log('Done');
