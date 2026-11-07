import fs from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';

const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('assets/css/portfolio-enhancements.css', 'utf8');
const js = fs.readFileSync('assets/js/portfolio-projects.js', 'utf8');

assert.match(html, /<html lang="es">/);
for (const id of ['inicio','sobre-mi','proyectos','archivo','seguridad','especialidades','experiencia','contacto']) {
  assert.ok(html.includes('id="' + id + '"'), 'Missing section ' + id);
}
for (const file of ['assets/js/portfolio-projects.js','assets/css/portfolio-enhancements.css']) {
  assert.ok(fs.existsSync(file), 'Missing asset ' + file);
  assert.ok(html.includes(file), 'Unreferenced asset ' + file);
}

const context = { document: { getElementById: () => null } };
vm.runInNewContext(js + '; globalThis.testProjects = PORTFOLIO_PROJECTS;', context);
const projects = context.testProjects;
assert.equal(projects.length,16,'Expected 16 curated projects');
assert.equal(new Set(projects.map(p => p.id)).size, projects.length,'Duplicated IDs');
const ids = new Set(projects.map(p => p.id));

for (const id of ['diteh','soc','video','presumiendo','mundoventura','bms','aceros','vts','carrera']) {
  assert.ok(ids.has(id),'Missing required case ' + id);
}
for (const id of ['seal','huasca','radioactiva','arkan','tecno','norvian','inventario']) {
  assert.ok(!ids.has(id),'Project marked for removal is still present: ' + id);
}
assert.ok(js.includes("new Set(['soc', 'diteh', 'video', 'presumiendo'])"),'Archive must exclude featured projects');
assert.ok(!js.includes('mshots/v1'),'Unreliable screenshot proxy must not be used');
assert.ok(!js.includes('s.wordpress.com'),'Unreliable screenshot proxy must not be used');

for (const project of projects) {
  if (project.image && !project.image.startsWith('https://')) {
    assert.ok(fs.existsSync(project.image),'Missing image for ' + project.id + ': ' + project.image);
  }
}
for (const id of ['diteh','soc','video','presumiendo']) {
  assert.ok(html.includes('data-project="' + id + '"'),'Featured project missing ' + id);
}
assert.ok(!html.includes('data-project="web"'),'Old generic web case still exists');
assert.equal((html.match(/class="featured-shot"/g) || []).length,4,'Expected four featured images');
assert.ok(html.includes('assets/imgs/portfolio/video-factory-panel.webp'));
assert.ok(html.includes('windows-agent-dashboard.png'));
assert.ok(html.includes('5 de octubre de 2026') || html.includes('05/oct/2026'),'SOC evidence lacks date');
assert.ok(html.includes('gabriel-portrait.webp') && html.includes('gabriel-workspace.webp'));
assert.ok(html.includes('FOTOGRAFÍA DE REFERENCIA'));
assert.ok(!html.includes("url:'https://github.com/Alponses/diteh'"));
assert.ok(!html.includes("url:'https://github.com/Alponses/video-factory-control'"));
assert.ok(css.includes('.featured-shot') && css.includes('.archive-entry-photo'));

const inlineScripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
  .map(match => match[1]).filter(content => content.trim());
for (const script of inlineScripts) new vm.Script(script, { filename: 'index.html:inline-script' });
console.log('Portfolio validation passed: '+projects.length+' cases; 4 featured; 7 removed; images and scripts verified.');
