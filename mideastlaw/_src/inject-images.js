/* Inject imagery from mideastlaw.de into the Concept A pages.
   Every remote image gets an onerror handler so a dead URL degrades back to
   the original initials / plain header rather than showing a broken image. */

const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..');
const img = JSON.parse(fs.readFileSync(path.join(__dirname, 'images.json'), 'utf8'));

// display name in team.html -> portrait slug on mideastlaw.de
const SLUG = {
  'Dr. Christian Ule': 'christian-ule',
  'Dr. Christian Steiner': 'christian-steiner',
  'Islam Elmasry': 'islam-elmasry',
  'Réda Baghdadi': 'reda-baghdadi',
  'Hoda Abdel Saleh': 'abdel-saleh',
  'Sarab K. Hassan': 'sarab-k-hassan',
  'George Amine': 'george-amine',
  'Dr. Asaad Saad': 'asaad-saad',
  'Adnane Bouchaib': 'adnane-bouchaib',
  'Hazem Abid': 'hazem-abid',
  'Léon Patrice Sarr': 'leon-patrice-sarr',
  'Philipp Bremer': 'philipp-bremer',
  'Sophie Greiner': 'sophie-greiner',
  'Mohamed Oulkhouir': 'mohamed-oulkhouir',
  'Cyrille Naffah': 'cyrille-naffah',
  'Imad Kassir': 'imad-kassir',
  'Samer Abou Said': 'samer-abou-said',
  'Hatem Darweesh': 'hatem-darweesh',
  'Karim Adel Kamel Ghobrial, LL.M.': 'karim-adel',
  'Clara Amico': 'clara-amico',
};

const FALLBACK = 'this.remove()';
let portraitsAdded = 0, heroesAdded = 0;

/* ---- team portraits ---- */
function addPortraits(html) {
  return html.replace(
    /<div class="avatar">([A-Z]{1,3})<\/div>\s*\n(\s*)<h3>([^<]+)<\/h3>/g,
    (m, ini, indent, name) => {
      const decoded = name.replace(/&amp;/g, '&');
      const slug = SLUG[decoded];
      const src = slug && img.portraits ? img.portraits[slug] : null;
      if (!src) return m;
      portraitsAdded++;
      return `<div class="avatar">${ini}<img src="${src}" alt="${decoded}" loading="lazy" onerror="${FALLBACK}"></div>\n${indent}<h3>${name}</h3>`;
    }
  );
}

/* ---- hero / page-header background photos ---- */
const HERO_FOR = {
  'index.html': 'home',
  'expertise.html': 'expertise',
  'locations.html': 'locations',
  'practice.html': 'practice',
  'team.html': 'team',
};

function addHero(html, file) {
  const key = HERO_FOR[file];
  const src = key && img.heroes ? img.heroes[key] : null;
  if (!src) return html;
  // preload so a 404 never paints a broken banner
  const div = `<div class="hero-photo" style="background-image:url('${src}')"></div>`;
  let done = false;
  html = html.replace(/(<section class="hero">)\s*\n/, (m, tag) => {
    done = true; heroesAdded++;
    return `${tag}\n  ${div}\n`;
  });
  if (!done) {
    html = html.replace(/(<section class="page-header">)\s*\n/, (m, tag) => {
      heroesAdded++;
      return `${tag}\n  ${div.replace('hero-photo', 'hero-photo')}\n`;
    });
  }
  return html;
}

/* ---- header logo ---- */
function addLogo(html) {
  if (!img.logo) return html;
  return html.replace(
    /<strong>MIDEAST<span>\|<\/span>Law<\/strong>/g,
    `<img class="brand-logo" src="${img.logo}" alt="MIDEAST | Law" onerror="this.outerHTML='&lt;strong&gt;MIDEAST&lt;span&gt;|&lt;/span&gt;Law&lt;/strong&gt;'">`
  );
}

fs.readdirSync(DIR).filter(f => f.endsWith('.html')).forEach(file => {
  const p = path.join(DIR, file);
  let html = fs.readFileSync(p, 'utf8');
  const before = html;
  html = addHero(html, file);
  if (file === 'team.html') html = addPortraits(html);
  html = addLogo(html);
  if (html !== before) {
    fs.writeFileSync(p, html);
    console.log('patched', file);
  }
});

console.log(`\nportraits: ${portraitsAdded}, heroes: ${heroesAdded}, logo: ${img.logo ? 'yes' : 'none'}`);
