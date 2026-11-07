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
assert.ok(html.includes('images.unsplash.com/photo-1630332457582') && html.includes('images.unsplash.com/photo-1498050108023'),'Photography references must load directly');
assert.ok(!html.includes('src="assets/imgs/gabriel-portrait.webp"') && !html.includes('src="assets/imgs/gabriel-workspace.webp"'),'Avoid broken image requests');
assert.ok(html.includes('FOTOGRAFÍA DE REFERENCIA'));
assert.ok(!html.includes("url:'https://github.com/Alponses/diteh'"));
assert.ok(!html.includes("url:'https://github.com/Alponses/video-factory-control'"));
assert.ok(css.includes('.featured-shot') && css.includes('.archive-entry-photo'));


// Ensure the archive never silently turns image-based case studies into text-only tiles.
for (const project of projects) {
  assert.ok(project.image, 'Missing cover image for '+project.id);
  assert.equal(project.image.startsWith('https://') || project.image.startsWith('assets/imgs/'),true,'Untrusted image path: '+project.id);
}
for (const id of ['campo','ultranoticias','freeleads','freepi','acoustics','sonder','medmarket']) {
  const project = projects.find(p=>p.id===id);
  assert.ok(project.image.endsWith('.svg'),id+' missing fast editorial image');
  assert.equal(project.image_kind,'editorial',id+' cover must not claim to be an actual screenshot');
  assert.ok(fs.existsSync(project.image),project.image+' missing from repository');
}
assert.ok(css.includes('opacity:1;transform:none;'),'Archive should not be invisible until JS animation triggers');
assert.ok(js.includes('loading="lazy"'),'Archive images must be lazy-loaded');
assert.ok(!html.includes('animateCursor();\n\n  $(\'a, button\')'),'The cursor must not animate continuously when idle');

// CSS regression: cover must use its grid column width, not derive its width from a fixed height.
assert.ok(css.includes('.archive-entry-photo{width:100%;max-width:100%;height:auto;'), 'Image container must fit its grid track');
assert.ok(css.includes('.archive-entry-photo img{position:absolute;inset:0;'), 'Cover image must not size its grid parent');
assert.ok(css.includes('grid-template-columns:minmax(0,44%) minmax(0,1fr)'), 'Archive image and copy need bounded columns');
assert.ok(css.includes('@media(max-width:560px){.archive-entry{grid-template-columns:1fr;'), 'Mobile should stack image and copy');
assert.ok(js.includes("querySelector('.archive-photo-unavailable')"),'Image error should display the correct unavailable notice');

// Preview quality and permission guardrails.
const liveIds = ['campo','ultranoticias','freeleads','freepi','acoustics','sonder'];
for (const id of liveIds) {
  const item = projects.find(p => p.id === id);
  assert.ok(item?.live_preview === item?.url,'Public preview must match documented site URL: '+id);
  assert.ok(fs.existsSync(item.image),'Missing local fallback for '+id);
}
for (const id of ['presumiendo','carrera','medmarket']) {
  const item = projects.find(p => p.id === id);
  assert.ok(!item.live_preview,'No external thumbnail requested for unapproved/private case '+id);
}
assert.ok(fs.existsSync('assets/imgs/portfolio/presumiendo-media-concept.svg'),'Missing original media project cover');
assert.ok(html.includes('assets/imgs/portfolio/presumiendo-media-concept.svg'),'New cover must be visible in featured section');
assert.ok(js.includes('hydratePublicPreviews()'),'Public previews must load only near viewport');
assert.ok(js.includes('picture.onerror = () => {}'),'Remote preview failures should retain local cover');
assert.ok(js.includes("rootMargin: '140px 0px'"),'Previews must be proximity-triggered');
assert.ok(!html.includes('Presumiendo_Mexico_Workana/01_PORTADA'),'Unapproved ZIP images must not be published');

const inlineScripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
  .map(match => match[1]).filter(content => content.trim());
for (const script of inlineScripts) new vm.Script(script, { filename: 'index.html:inline-script' });
console.log('Portfolio validation passed: '+projects.length+' cases; 4 featured; 7 removed; all project images and performance safeguards verified.');
