import { readFileSync, writeFileSync } from 'fs';
let c = readFileSync('src/components/Escena.astro', 'utf8');

// Fix: remove wrapping { } around ternary expressions in .map() callbacks
// Pattern: ({esVideo... => ... />})  should be (esVideo... => ... />)
c = c.replace(/\{esVideo\(e\.src\)/g, 'esVideo(e.src)');

// Remove the closing brace before the closing paren of .map()
// Pattern: />})  should be />)  
c = c.replace(/\/>\}\s*\n(\s*)\)/g, '/>\n$1)');

// Also fix the PORTADA case
c = c.replace(/\/>\s*\n\s*\}\s*\n(\s*)\)/g, '/>\n$1)');

writeFileSync('src/components/Escena.astro', c);
console.log('Fixed');
