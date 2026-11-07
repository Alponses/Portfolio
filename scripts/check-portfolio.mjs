import fs from 'node:fs';
import assert from 'node:assert/strict';
const html=fs.readFileSync('index.html','utf8');
const css=fs.readFileSync('assets/css/portfolio-enhancements.css','utf8');
const js=fs.readFileSync('assets/js/portfolio-projects.js','utf8');
assert.match(html,/<html lang="es">/);
for (const id of ['inicio','sobre-mi','proyectos','archivo','seguridad','especialidades','experiencia','contacto']) {
  assert.ok(html.includes('id="'+id+'"'),'Missing section '+id);
}
for(const f of ['assets/js/portfolio-projects.js','assets/css/portfolio-enhancements.css']){
  assert.ok(fs.existsSync(f),'Missing asset '+f);
  assert.ok(html.includes(f),'Unreferenced asset '+f);
}
for(const name of ['SOC Blue Team Lab','DITEH','Video Factory','Carrera Moto','Campo Emilia','Ultranoticias','SEAL Internacional','Business Music Studio']){
  assert.ok(js.includes(name),'Missing project '+name);
}
const count=(js.match(/"id":/g)||[]).length;
assert.ok(count>=20,'Expected 20+ documented project entries, got '+count);
assert.ok(html.includes('gabriel-portrait.webp') && html.includes('gabriel-workspace.webp'));
assert.ok(html.includes('FOTOGRAFÍA DE REFERENCIA'),'Missing photo disclosure');
assert.ok(!html.includes("url:'https://github.com/Alponses/diteh'"),'Private code link should not appear');
assert.ok(!html.includes("url:'https://github.com/Alponses/video-factory-control'"),'Private code link should not appear');
assert.ok(css.includes('.archive-grid'));
console.log('Portfolio smoke checks passed: '+count+' projects; CSS/JS references; navigation; privacy disclosures.');
