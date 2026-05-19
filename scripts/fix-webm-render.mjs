import { readFileSync, writeFileSync } from 'fs';

const c = readFileSync('src/components/Escena.astro', 'utf8');

// Replacement: replace multiline <img> blocks with conditional <video>/<img>
// The pattern always starts with spaces + "<img" on one line, then class/src/alt/style/loading lines, then "/>"

let result = c;

// Simple regex with dotAll flag for multiline matching
const imgBlock = /(<img\s+class="escena__img"\s+src=\{e\.src\}\s+alt=\{e\.alt\}\s+style=\{e\.css\s\+\s\(e\.z\s\?\s`;\sz-index:\s\$\{e\.z\}`\s:\s""\)\}\s+loading="lazy"\s+\/>)/gs;

// Only replace if it actually matches
result = result.replace(/<img\s+class="escena__img"\s+src=\{e\.src\}\s+alt=\{e\.alt\}\s+style=\{e\.css\s\+\s\(e\.z\s\?\s`;\sz-index:\s\$\{e\.z\}`\s:\s""\)\}\s+loading="lazy"\s+\/>/g,
  `{esVideo(e.src) ? <video class="escena__img" src={e.src} style={e.css + (e.z ? \`; z-index: \${e.z}\` : '')} autoplay loop muted playsinline aria-label={e.alt} /> : <img class="escena__img" src={e.src} alt={e.alt} style={e.css + (e.z ? \`; z-index: \${e.z}\` : '')} loading="lazy" />}`);

writeFileSync('src/components/Escena.astro', result);
console.log('Done');
