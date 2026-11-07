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

import vm from 'node:vm';
const context={document:{getElementById:()=>null}};
vm.runInNewContext(js+'; globalThis.testProjects = PORTFOLIO_PROJECTS;',context);
const catalog=context.testProjects;
assert.equal(catalog.length,23,'Catalog must retain 23 distinct case records');
assert.equal(new Set(catalog.map(p=>p.id)).size,catalog.length,'Project identifiers must be unique');
assert.equal(catalog.filter(p=>p.shot).length>=14,true,'Public projects should have site preview sources');
assert.ok(js.includes("new Set(['soc', 'diteh', 'video'])"),'Main case studies must be excluded from the secondary archive');
assert.ok(js.includes('mshots/v1/'),'Public-page preview source missing');
assert.ok(html.includes('05/oct/2026') || html.includes('5 de octubre de 2026'),'SOC evidence should state its historical date');
assert.ok(html.includes('windows-agent-dashboard.png'),'Public evidence screenshot reference missing');
assert.ok(html.includes('assets/imgs/diteh.png'),'Existing image asset missing');
assert.ok(fs.existsSync('assets/imgs/diteh.png'),'Referenced DITEH image must exist');
assert.ok(!html.includes('Honeypot público aislado, todavía pendiente de desplegar')===false,'Honeypot status should be explicit');

console.log('Portfolio smoke checks passed: '+count+' projects; CSS/JS references; navigation; privacy disclosures.');
