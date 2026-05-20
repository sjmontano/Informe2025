import { readFileSync, writeFileSync } from 'fs';
let c = readFileSync('src/components/Carta.astro', 'utf8');

// Already has first p with data-anim-item from partial edit
// Add to remaining <p> tags (not inside <p> tags already with it)
c = c.replace(/<p>(?!\s*<)/g, '<p data-anim-item>');

// Add anim classes to estadisticas container
c = c.replace(
  '<div class="carta__estadisticas">',
  '<div class="carta__estadisticas anim-entrada anim-entrada--blur" data-anim-stagger="250">'
);

// Add data-anim-item to estadisticas children that don't have it yet
c = c.replace('<p class="carta__intro">', '<p class="carta__intro" data-anim-item>');
c = c.replace('<p class="carta__titulo">', '<p class="carta__titulo" data-anim-item>');
c = c.replace('<div class="carta__cifras">', '<div class="carta__cifras" data-anim-item>');

writeFileSync('src/components/Carta.astro', c);
console.log('Carta animated');
