/* Generator for the Ule & Steiner showcase site.
   Content sourced from the azure-lobster-326481.hostingersite.com crawl. */

const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..');

const NAV = [
  { href: 'index.html', label: 'Home', key: 'home' },
  { href: 'why-us.html', label: 'Why Us', key: 'why' },
  { href: 'practice-areas.html', label: 'Practice Areas', key: 'practice' },
  { href: 'regional-experience.html', label: 'Regional Experience', key: 'regional' },
  { href: 'clients-industries.html', label: 'Clients & Industries', key: 'clients' },
  { href: 'team.html', label: 'Team', key: 'team' },
];

function head(title, desc, depth) {
  const p = '../'.repeat(depth);
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${p}css/style.css?v=1">
</head>
<body>

<div class="origin">A second design concept on <a href="${p}../index.html">fkhhb.github.io</a> — compare with the <a href="${p}../mideastlaw/">MIDEAST | Law concept</a></div>

<header class="hdr">
  <div class="wrap">
    <a class="logo" href="${p}index.html">
      <span class="mark">ULE <i>&amp;</i> STEINER</span>
      <span class="sub">Legal · Tax · BPO — EMEA</span>
    </a>
    <button class="burger" aria-label="Toggle navigation">Menu</button>
    <nav class="nav">
${NAV.map(n => `      <a href="${p}${n.href}" data-k="${n.key}">${n.label}</a>`).join('\n')}
      <a class="cta" href="${p}contact.html">Contact</a>
    </nav>
  </div>
</header>
`;
}

function foot(depth) {
  const p = '../'.repeat(depth);
  return `
<footer class="ftr">
  <div class="wrap">
    <div class="cols">
      <div>
        <div class="fmark">ULE <i>&amp;</i> STEINER</div>
        <p class="blurb">Your trusted gateway to the EMEA region. A single point of contact for legal, tax and BPO services across Europe, the Middle East and Africa.</p>
      </div>
      <div>
        <h4>Firm</h4>
        <a href="${p}why-us.html">Why Us</a>
        <a href="${p}practice-areas.html">Practice Areas</a>
        <a href="${p}team.html">Team</a>
        <a href="${p}clients-industries.html">Clients &amp; Industries</a>
      </div>
      <div>
        <h4>Reach</h4>
        <a href="${p}regional-experience.html">Regional Experience</a>
        <a href="${p}contact.html">Offices &amp; Contact</a>
      </div>
      <div>
        <h4>Source</h4>
        <a href="https://azure-lobster-326481.hostingersite.com/" target="_blank" rel="noopener">Original draft site</a>
        <a href="${p}../mideastlaw/">Concept A — MIDEAST | Law</a>
        <a href="${p}../index.html">Back to fkhhb.github.io</a>
      </div>
    </div>
    <div class="base">
      <span>&copy; Ule &amp; Steiner. Content rebuilt for showcase purposes from the firm's draft site.</span>
      <span>Concept B · hosted on <a href="${p}../index.html">fkhhb.github.io</a></span>
    </div>
  </div>
</footer>

<script src="${p}js/site.js"></script>
</body>
</html>
`;
}

function page(opts) {
  const depth = opts.depth || 0;
  let html = head(opts.title, opts.desc, depth) + opts.body + foot(depth);
  // mark active nav item
  html = html.replace(`data-k="${opts.active}">`, `data-k="${opts.active}" class="on">`);
  return html;
}

function write(file, html) {
  const full = path.join(OUT, file);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, html);
  console.log('wrote', file, html.length + 'b');
}

/* ============================ DATA ============================ */

const PRACTICE = [
  ['Arbitration & Transnational Litigation', 'Often the worst-case scenario, but sometimes unavoidable. In general, international arbitration is preferable, because arbitration awards can be enforced as opposed to foreign judgments, with some exceptions where jurisdictions are not members of the New York Convention of 1958 or other such instruments. However, cases can also be won before local courts and judgments enforced in most MENA court systems.'],
  ['Commercial Agencies & Distributorships', 'Sometimes the best alternative or a necessary complement to setting up an own entity since local agents and distributors have an edge on their home turf. But an equally contentious topic due to the great variety of regulations and customary practices throughout the region. Post-contractual privileges for agents and distributors may be difficult to get rid of even when a contract has been duly terminated.'],
  ['Company Set-Ups, both Onshore and Offshore (Free Zones)', 'Representative Offices are only a temporary solution in some countries. Most jurisdictions offer attractive incentives for setting up new companies. The inconvenient 51% local participation rule for foreign investors has not totally been abolished in the region.'],
  ['Contract Law, Drafting and Reviewing Contracts', 'Probably the advice less observed amongst businessmen and -women: A proper contract can avoid lots of problems in your endeavours. Money invested here is well invested.'],
  ['Customs', 'An obstacle to free trade which, unfortunately, is on the rise again. Highly technical regulations, subject to frequent changes. Some jurisdictions, however, provide a variety of tax and customs incentives, especially to attract manufacturing and export companies.'],
  ['Employment', 'A field which requires not only a specialized knowledge of the often employee-friendly regulations, but also empathy towards the company&rsquo;s workforce and diplomacy when dealing with unions and local authorities. Self-employment and temporary employment agencies are seldom a viable choice or simply non-existent.'],
  ['Energy &amp; Utilities (O&amp;M), Renewable Energy, E&amp;P contracts', 'Same as Engineering, Construction and Turnkey Projects. In times of climate change and energy transition these areas harbor great risks and opportunities alike. The Covid-19 pandemic may, moreover, turn transitions into revolutions. European players are welcome partners to share their technological know-how and regulatory best-practices. They also bear a multilateral responsibility to provide the required political momentum.'],
  ['Engineering, Construction and Turnkey Projects', 'Let&rsquo;s face it: There is no water-proof contract to cover all eventualities and &ndash; especially &ndash; smart tactics of large contracting authorities. Things get more complicated if the government or the armed forces tender foreign works and services as part of large-scale infrastructure projects. All the more, legal and technical expertise combined with an in-depth knowledge of local customs should be tapped to avoid unpleasant surprises.'],
  ['Foreign Direct Investments', 'Virtually all countries like this. But not all render the repatriation of capital and dividends equally smooth as the influx of hard currency. In the heat of seizing opportunities, it is, therefore, recommended to take a moment and make sure regulatory requirements are met. This is also a classic field where looking out for governmental incentives may be worthwhile.'],
  ['International Trade', 'Mainly an issue of adequately distributing the risks involved. The INCOTERMS 2020 provide an excellent set of standards, the United Nations Convention on Contracts for the International Sale of Goods (CISG) must be excluded if the Parties do not want to apply it. Consensus on payment terms is difficult to reach, but essential. And the establishment of the applicable law and jurisdiction is too often forgotten.'],
  ['Joint Ventures, Cross Border Transactions', 'Joint Ventures in the Middle East do have certain nuanced differences to those in other parts of the world. Local foreign ownership restrictions often play a big part in dictating the terms of JV agreements in this region. Those agreements often contain long and complicated exit provisions that deal with the situation where one party wants to exit and sell its interest to a third party.'],
  ['License Agreements', 'While most EMEA countries now have sufficient laws in place governing the protection and enforcement of IP rights, in practice enforcement of such laws can still be complex and it is best to plan agency and distribution relationships in the region carefully to minimise the potential for disputes arising in the future. This includes applying for all necessary trade mark and other relevant registrable IP rights in advance of entering into a market through such arrangements.'],
  ['Mediation', 'In the EMEA region there is a rich tradition of parties to amicably settle differences by seeking a compromise and finding a mechanism to settle matters with minimal adversarial feeling. Similarly, there is no &ldquo;loss of face&rdquo; if in the early stages of a dispute, parties come together to settle issues to maintain good relations and keep a project on schedule.'],
  ['Mergers &amp; Acquisitions', 'Often in M&amp;A it&rsquo;s the things you pay least attention to that trip you up. Understanding the motives, interests and culture of Arab or African counterparts is key to a successful M&amp;A in the region.'],
  ['Procurement', 'Procurement laws set out methods of procurement such as public tenders, bids, competition, limited tenders or direct agreements. Some requirements may seem unusual to international bidders. Tenders are normally open for foreign investors; successful tenderers may need to establish a local &ldquo;branch&rdquo; for the purpose of carrying out the contract.'],
  ['Public International Law', 'Despite the current skepticism towards multilateral solutions, luckily, the acquis of international treaties that has been arduously negotiated throughout the past decades cannot be torn down with the swipe of a nationalist, isolationist or autocratic hand. Multilateralism enables international peace, trade, prosperity and environmental sustainability. Directly or indirectly, it frames and affects almost all aspects of international entrepreneurship.'],
  ['Regulatory and Corporate Compliance, Internal Investigations, White Collar Crime', 'A lack of legal certainty in some countries of the region is often mistaken as a free ticket not to comply. In fact, the opposite is recommended: Compliance rules should be observed with special scrutiny in order to avoid getting exposed to administrative whim.'],
  ['Tax Law (Double Taxation Treaties)', 'A world apart. Again, incentives to attract foreign investment may offer value added, withholding and corporate tax exemptions or reductions that could be decisive. Often densely regulated and adapted annually, it is a predictable but also highly dynamic field. As in your home jurisdiction, it is advisable to be compliant in the EMEA region as well to avoid unnecessary attention by the authorities and hefty fines.'],
  ['Technology Transfer (Trademarks, Know-How, Technical Assistance)', 'The region seeks to own more technology and know-how from the industrialized countries to become more independent. Transfer of technology and know-how can be managed by smart contracts, but contracts alone cannot prevent from infringements of rights where local legislation is weak.'],
];

const INDUSTRIES = [
  'Agricultural Technology', 'Life Sciences',
  'Construction', 'Logistics & Transportation',
  'Energy & Environment', 'Machinery & Plant Engineering',
  'Food & Beverage', 'Manufacturing & Industry',
  'Healthcare & Medical', 'Real Estate',
  'Information Technology', 'Retail & Consumer Goods',
  'Infrastructure', 'Defence & Security',
];

const ADVISE = [
  'International and multinational corporations',
  'Medium-sized companies (&ldquo;Mittelstand&rdquo;)',
  'Leading family-owned businesses',
  'Private investors and private equity firms',
  'Business, management and financial service providers',
  'Law firms, consultants, tax advisers and auditors',
  'Professional organisations',
  'Diplomatic missions and NGOs',
];

const TEAM = [
  { n: 'Dr. Christian Ule', t: 'Attorney-at-Law, Partner', loc: 'Cairo · Frankfurt · Dubai', r: 'core', lead: true,
    b: 'Founding partner, managing the offices in the <b>Mashreq</b> states. Advises national and multinational companies on international contract law, construction and engineering (FIDIC), concessions, FDI, corporate, M&amp;A and technology transfer. Listed in <b>The Legal 500</b> for commercial, corporate and M&amp;A in Egypt. Admitted in Germany since 1995 and as an Advocate before the DIFC Courts, Dubai, since 2012.' },
  { n: 'Dr. Christian Steiner', t: 'Attorney-at-Law, Partner', loc: 'Algeria · Beirut · Casablanca · Tunisia · Seville', r: 'core', lead: true,
    b: 'Founding partner of Ule &amp; Steiner SLP, specialising in advising companies active in the <b>Maghreb</b> states of Morocco, Algeria and Tunisia. Over 20 years of experience across business law, public law, judiciary, arbitration, project management and rule-of-law promotion. Admitted as Rechtsanwalt (2004) and Abogado (2009).' },
  { n: 'Philipp Bremer', t: 'Attorney-at-Law, Senior Associate', loc: 'Düsseldorf · Middle East &amp; Gulf', r: 'core',
    b: 'Led the <b>Rule of Law Programme Middle East &amp; North Africa</b> of the Konrad-Adenauer-Stiftung in Beirut, 2021&ndash;2025, covering Morocco through the Gulf to Iraq. Began his career in dispute resolution at Freshfields Bruckhaus Deringer in Düsseldorf.' },
  { n: 'Sophie Greiner', t: 'Attorney-at-Law, Associate', loc: 'Munich · Lyon', r: 'core',
    b: 'Advises German and other European clients, as well as African clients, across a broad range of commercial law issues. Native German and French speaker with education and experience across France, Italy, Ireland, Spain, Morocco, Togo, Senegal and Côte d&rsquo;Ivoire.' },
  { n: 'Clara Amico', t: 'Associate', loc: 'Catania · Seville', r: 'core',
    b: 'Focuses on cross-border matters, supporting clients in <b>Italian, Spanish and English</b>. Practice covers commercial and maritime law and international trade, informed by four years&rsquo; professional experience in the logistics sector.' },

  { n: 'Karim Adel Kamel Ghobrial, LL.M.', t: 'Attorney at Law (Egypt)', loc: 'Cairo, Egypt', r: 'me',
    b: 'Arbitration, corporate and commercial law, company and branch establishment, franchise agreements, hotel management &amp; lease, M&amp;A and petroleum concession agreements.' },
  { n: 'Hatem Darweesh', t: 'Attorney at Law (Egypt)', loc: 'Cairo, Egypt', r: 'me',
    b: 'Twenty years of dispute-resolution experience as sole arbitrator, party-appointed arbitrator and counsel in local and international commercial arbitrations.' },
  { n: 'Dr. Asaad Saad', t: 'Attorney at Law (Egypt)', loc: 'Cairo, Egypt', r: 'me',
    b: 'Lawyer and civil engineer specialised in <b>FIDIC</b> and other construction contracts, with experience acting for Owners, Consultants and Contractors.' },
  { n: 'Hoda Abdel Saleh', t: 'Attorney at Law (Egypt)', loc: 'Cairo, Egypt', r: 'me',
    b: 'Corporate law, bankruptcy, commercial law, collection of bad debts, gas station concession &amp; lease agreements, IP law, litigation and real estate.' },
  { n: 'George Amine', t: 'Chartered Accountant &amp; Auditor (Egypt)', loc: 'Cairo, Egypt', r: 'me',
    b: 'Tax, Business Process Outsourcing (BPO) and audit. Registered with the Egyptian Registry of Accountants and Auditors; Fellow of the Egyptian Tax Society.' },
  { n: 'Islam Elmasry', t: 'Attorney at Law (Egypt) · Legal Counsel (Libya)', loc: 'Cairo · Alexandria · Tripoli', r: 'me',
    b: 'Oil &amp; gas, banking &amp; finance, insurance law, M&amp;A, investment law and capital markets matters in Libya.' },
  { n: 'Mariam Amr', t: 'Attorney at Law (Egypt)', loc: 'Cairo, Egypt', r: 'me', b: 'Corporate and commercial practice within the Cairo team.' },
  { n: 'Zeyad Mohiy', t: 'Attorney at Law (Egypt)', loc: 'Cairo, Egypt', r: 'me', b: 'Corporate and commercial practice within the Cairo team.' },
  { n: 'Cyrille Naffah', t: 'Attorney at Law (Lebanon / Saudi Arabia)', loc: 'Beirut · Riyadh · Jeddah', r: 'me',
    b: 'Seasoned commercial and corporate lawyer with over 25 years of experience advising Fortune-listed and regional clients across the Levant and the Gulf.' },
  { n: 'Imad Kassir', t: 'Legal Consultant', loc: 'Dubai, U.A.E.', r: 'me',
    b: 'Lebanese-qualified lawyer and registered legal consultant in Dubai with over 12 years&rsquo; experience across the <b>UAE and GCC</b>, focused on litigation.' },
  { n: 'Samer Abou Said', t: 'Legal Consultant', loc: 'Dubai, U.A.E.', r: 'me',
    b: 'International and in-house experience gained at an international tribunal in The Hague and the International Committee of the Red Cross.' },
  { n: 'Sarab K. Hassan', t: 'Attorney at Law (Iraq)', loc: 'Baghdad, Iraq', r: 'me',
    b: 'Business and commercial law of Iraq, employment, tax advice and registration, electricity and water projects, and import licensing.' },

  { n: 'Mohamed Oulkhouir', t: 'Avocat', loc: 'Casablanca · Tangier · Tunis · Algiers · Paris', r: 'af',
    b: 'Specialised in <b>employment litigation</b> and HR issues relating to restructurings; advises a significant number of national and international clients.' },
  { n: 'Réda Baghdadi', t: 'Chartered Public Accountant (Morocco)', loc: 'Casablanca, Morocco', r: 'af',
    b: 'Partner within one of the top chartered accountant offices in Morocco, with over 14 years handling complex international tax, accounting and social matters.' },
  { n: 'Adnane Bouchaib', t: 'Avocat', loc: 'Algiers, Algeria', r: 'af',
    b: 'Corporate and commercial law, company and branch establishment, franchise agreements, M&amp;A, oil &amp; gas, construction, fiscal, mining and maritime law.' },
  { n: 'Hazem Abid', t: 'Attorney at Law (Tunisia)', loc: 'Tunis, Tunisia', r: 'af',
    b: 'Practising law in Tunisia since 2002; founded the law firm <b>Justitia Avocatie &amp; Conseil</b> in 2014.' },
  { n: 'Léon Patrice Sarr', t: 'Attorney, Senegal Bar', loc: 'Dakar, Senegal', r: 'af',
    b: 'Member of the Senegal Bar since 2007 and President of the <b>Forum on Artificial Intelligence and African Law</b>. Innovation, corporate &amp; M&amp;A, finance and dispute resolution.' },
  { n: 'Grita Paulina Lobsack', t: 'Associate', loc: 'Europe / Africa', r: 'af',
    b: 'Supports the firm&rsquo;s cross-border practice across the Europe&ndash;Africa corridor.' },
];

const OFFICES = [
  { c: 'Spain', k: 'Registered Office', city: 'Seville', addr: 'ULE &amp; STEINER<br>C/ José María Osborne, 1, 1st floor<br>41004 Sevilla | SPAIN<br>+34 955 314 614', reg: true },
  { c: 'Germany', k: 'Contact Address', city: 'Frankfurt am Main', addr: 'Eschersheimer Landstrasse 42<br>60322 Frankfurt am Main | GERMANY<br>+49 69 989 704 49', reg: true },
  { c: 'France', k: 'Associated Office', city: 'Lyon', addr: 'Lyon | FRANCE' },
  { c: 'Italy', k: 'Associated Office', city: 'Catania', addr: 'Catania | ITALY' },
  { c: 'Morocco', k: 'Associated Office', city: 'Casablanca', addr: '17, rue El Bouhtouri<br>Quartier Gauthier<br>20060 Casablanca | MOROCCO', a: 'In assoc. with Mohamed Oulkhouir' },
  { c: 'Algeria', k: 'Associated Office', city: 'Algiers', addr: '94 B rue Didouche Mourad, 6th floor<br>16004 Alger Centre | ALGERIA', a: 'In assoc. with Adnane Bouchaib' },
  { c: 'Tunisia', k: 'Associated Office', city: 'Tunis', addr: 'Rue Lac Victoria, Lac de Cygnes Bldg., Office A5<br>1053 Les Berges du Lac<br>Tunis | TUNISIA', a: 'In assoc. with Hazem Abid' },
  { c: 'Egypt', k: 'Associated Office', city: 'Cairo', addr: '41 Abdel Khalek Sarwat St.<br>Cairo | EGYPT', a: 'In assoc. with Karim Adel' },
  { c: 'Jordan', k: 'Associated Office', city: 'Amman', addr: 'Jabal Amman, 3rd Circle, Prince Mohammad Street<br>Anani Building No. 266, 6th Floor<br>Amman 111118 | JORDAN', a: 'In assoc. with Mubadda Dallal' },
  { c: 'Lebanon', k: 'Associated Office', city: 'Beirut', addr: 'Achrafieh, Adlieh District, Mikhael Michaca Street<br>Al Chami Bldg. 3rd Floor<br>Beirut | LEBANON', a: 'In assoc. with Cyrille Naffah' },
  { c: 'Iraq', k: 'Associated Office', city: 'Baghdad', addr: 'Dis. 609, St. 1, H. 70<br>Al-Mansour, Baghdad | IRAQ', a: 'In assoc. with Hadeel A. Hasan' },
  { c: 'Saudi Arabia', k: 'Associated Office', city: 'Riyadh', addr: 'Al Moussa Towers, Office 426<br>Olaya District<br>Riyadh | SAUDI ARABIA', a: 'In assoc. with Cyrille Naffah / Mohammad Al Turki' },
  { c: 'U.A.E.', k: 'Associated Office', city: 'Dubai', addr: 'Office 3401, Zone A<br>Aspect Tower, The Executive Towers<br>Business Bay, Dubai | U.A.E.', a: 'In assoc. with Moaza Al Khadar' },
  { c: 'Qatar', k: 'Associated Office', city: 'Doha', addr: 'Al-Fardan Office Tower, 20th Floor<br>Al Funduq St.<br>Doha | QATAR', a: 'In coop. with Sultan Al-Abdulla' },
  { c: 'Bahrain', k: 'Associated Office', city: 'Manama', addr: 'Office 112, 8th Floor<br>Jeera Tower I, Bldg. 683<br>Road 2811, Seef<br>Manama | BAHRAIN', a: 'In coop. with Wafa Al Ansari' },
  { c: 'Ghana', k: 'Associated Office', city: 'Accra', addr: 'No. 2B, 48 6th Avenue<br>N. Ridge<br>Accra | GHANA', a: 'In coop. with Barry &amp; Asmah' },
  { c: 'Senegal', k: 'Associated Office', city: 'Dakar', addr: 'Cité Keur Gorgui<br>lot n°40, 6ème étage<br>Dakar | SENEGAL', a: 'In coop. with Léon Patrice Sarr' },
  { c: 'Central African Republic', k: 'Operating Presence', city: 'Bangui', addr: 'Bangui | CENTRAL AFRICAN REPUBLIC' },
  { c: 'Uganda', k: 'Operating Presence', city: 'Kampala', addr: 'Kampala | UGANDA' },
  { c: 'South Africa', k: 'Operating Presence', city: 'Pretoria', addr: 'Pretoria | SOUTH AFRICA' },
];

/* ============================ PAGES ============================ */

function initials(name) {
  const clean = name.replace(/^(Dr\.|Prof\.)\s+/, '').replace(/,.*$/, '');
  const parts = clean.split(/\s+/).filter(Boolean);
  return ((parts[0] || '')[0] + (parts[parts.length - 1] || '')[0]).toUpperCase();
}

function buildHome(countries) {
  const topCountries = countries.slice(0, 8);
  const body = `
<section class="hero">
  <div class="wrap">
    <div class="grid">
      <div>
        <span class="eyebrow">Legal · Tax · BPO across Europe, the Middle East &amp; Africa</span>
        <h1>Your trusted gateway to the <em>EMEA region</em>.</h1>
      </div>
      <div class="lede">
        <p>Ule &amp; Steiner is more than a law firm. We are your single point of contact for legal, tax and accounting services across Europe, the Middle East and Africa &mdash; a true one-stop-shop for cross-border business.</p>
        <div class="btnrow">
          <a class="btn btn-solid" href="why-us.html">Why Us</a>
          <a class="btn btn-line" href="regional-experience.html">Regional Experience</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="figures">
  <div class="wrap">
    <div class="fig"><b>3</b><span>Decades on the ground</span></div>
    <div class="fig"><b>15+</b><span>Jurisdictions covered</span></div>
    <div class="fig"><b>20</b><span>Offices &amp; presences</span></div>
    <div class="fig"><b>6</b><span>Working languages</span></div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sechead">
      <span class="eyebrow">The Ule &amp; Steiner approach</span>
      <h2>One lead counsel. One strategy. Full coordination.</h2>
    </div>
    <div class="pillars">
      <div class="pillar">
        <span class="num">01</span>
        <h3>One Lead Counsel</h3>
        <p>Our professionals act as your Lead Counsel &mdash; structuring your investment, selecting and coordinating local counsel, managing negotiations and overseeing implementation from start to finish. You deal with one trusted adviser; we handle the complexity.</p>
      </div>
      <div class="pillar">
        <span class="num">02</span>
        <h3>On the Ground. In Your Language.</h3>
        <p>With our own offices and carefully selected local partner professionals across the region, we combine expertise with genuine understanding of the inter-legal, inter-cultural and linguistic challenges at both ends &mdash; at home and in your target country.</p>
      </div>
      <div class="pillar">
        <span class="num">03</span>
        <h3>Built on Experience</h3>
        <p>Founded and led by veteran international lawyers, we serve mid-market enterprises and multinational corporations from North America, Europe, Asia and the MENA region. Three decades. 15+ jurisdictions. One trusted adviser.</p>
      </div>
    </div>
  </div>
</section>

<section class="sec dark">
  <div class="wrap">
    <div class="pull">
      <blockquote>&ldquo;We don&rsquo;t just advise &mdash; we deliver.&rdquo;</blockquote>
      <cite>Ule &amp; Steiner</cite>
    </div>
  </div>
</section>

<section class="sec tint">
  <div class="wrap">
    <div class="sechead">
      <span class="eyebrow">Regional experience</span>
      <h2>Three decades on the ground.</h2>
      <p>Integrated teams of professionals across Europe, the Middle East and Africa &mdash; with a track record of representative matters in every jurisdiction we cover.</p>
    </div>
    <div class="countries">
${topCountries.map(c => `      <a class="country" href="regional-experience/${c.slug}.html"><span class="cname">${c.title}</span><span class="cmeta">${c.count} matters</span></a>`).join('\n')}
    </div>
    <div class="btnrow"><a class="btn btn-line" href="regional-experience.html">All ${countries.length} jurisdictions</a></div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sechead">
      <span class="eyebrow">Who we advise</span>
      <h2>Built for cross-border business.</h2>
    </div>
    <ul class="advise">
${ADVISE.map(a => `      <li>${a}</li>`).join('\n')}
    </ul>
  </div>
</section>
`;
  return page({ title: 'Ule & Steiner — Legal, Tax & BPO across Europe, the Middle East and Africa', desc: 'Ule & Steiner is your single point of contact for legal, tax and accounting services across Europe, the Middle East and Africa — a one-stop-shop for cross-border business.', body, active: 'home' });
}

function buildWhy() {
  const body = `
<section class="phead">
  <div class="wrap">
    <div class="crumb"><a href="index.html">Home</a> / Why Us</div>
    <span class="eyebrow">Why Ule &amp; Steiner</span>
    <h1>Your trusted gateway to the Middle East and Africa &mdash; for over three decades.</h1>
    <p>Ule &amp; Steiner is more than a law firm. We are your single point of contact for legal, tax and business process outsourcing (BPO) services across the Middle East and Africa &mdash; a true one-stop-shop for cross-border business.</p>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="pillars">
      <div class="pillar">
        <span class="num">01</span>
        <h3>One Lead Counsel. One Strategy. Full Coordination.</h3>
        <p>Our professionals act as your Lead Counsel &mdash; structuring your investment, selecting and coordinating local counsel, managing negotiations and overseeing implementation from start to finish. You deal with one trusted adviser; we handle the complexity.</p>
      </div>
      <div class="pillar">
        <span class="num">02</span>
        <h3>On the Ground. In Your Language.</h3>
        <p>With our own offices and carefully selected associated local partner professionals across Europe, the Middle East and Africa, we combine expertise and genuine understanding of inter-legal, inter-cultural and linguistic challenges on both ends of the equation: at home and in your target country. Our core team advises you in German, English, French, Spanish and Italian while our local associated partners handle the languages on the ground. We ensure nothing gets lost in translation.</p>
      </div>
      <div class="pillar">
        <span class="num">03</span>
        <h3>Built on Experience. Driven by Trust.</h3>
        <p>Founded and led by veteran international lawyers, we serve mid-market enterprises and multinational corporations from North America, Europe, Asia and the MENA region. Three decades. 15+ jurisdictions. One trusted adviser &mdash; backed by a team of local professionals. The best of both worlds.</p>
      </div>
    </div>
  </div>
</section>

<section class="sec dark">
  <div class="wrap">
    <div class="pull">
      <blockquote>&ldquo;We don&rsquo;t just advise &mdash; we deliver.&rdquo;</blockquote>
      <cite>Ule &amp; Steiner</cite>
    </div>
  </div>
</section>

<section class="sec tint">
  <div class="wrap">
    <div class="sechead">
      <span class="eyebrow">Our networks</span>
      <h2>Backed by established international alliances.</h2>
    </div>
    <div class="cards">
      <div class="card"><h3>CBBL</h3><p>Cross Border Business Lawyers &mdash; the worldwide network of German-speaking law firms, with the firm represented in the Maghreb and in the Arbitration Practice Group.</p></div>
      <div class="card"><h3>GPSA</h3><p>German Professional Services Alliance, an alliance of independent, internationally operating audit and consulting firms, via Rödl &amp; Partner for the Maghreb.</p></div>
      <div class="card"><h3>Legalmondo</h3><p>An international legal services platform specialising in cross-border contracts, investment, IP protection and litigation &mdash; covering the Maghreb.</p></div>
    </div>
  </div>
</section>
`;
  return page({ title: 'Why Us — Ule & Steiner', desc: 'One Lead Counsel. One Strategy. Full Coordination. Why Ule & Steiner is your trusted gateway to the Middle East and Africa.', body, active: 'why' });
}

function buildPractice() {
  const body = `
<section class="phead">
  <div class="wrap">
    <div class="crumb"><a href="index.html">Home</a> / Practice Areas</div>
    <span class="eyebrow">Practice areas</span>
    <h1>What we do &mdash; and what to watch out for.</h1>
    <p>Nineteen practice areas across the EMEA region, each with the practical commentary our clients ask for before they commit.</p>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="acc">
${PRACTICE.map((p, i) => `      <div class="acc-item${i === 0 ? ' open' : ''}">
        <button class="acc-btn">${p[0]}</button>
        <div class="acc-panel">${p[1]}</div>
      </div>`).join('\n')}
    </div>
  </div>
</section>
`;
  return page({ title: 'Practice Areas — Ule & Steiner', desc: 'Arbitration, company set-ups, agencies and distributorships, energy, tax, M&A and more — practice areas across the EMEA region.', body, active: 'practice' });
}

function buildClients() {
  const body = `
<section class="phead">
  <div class="wrap">
    <div class="crumb"><a href="index.html">Home</a> / Clients &amp; Industries</div>
    <span class="eyebrow">Clients &amp; industries</span>
    <h1>Decades of hands-on experience. Across sectors. Across borders.</h1>
    <p>At Ule &amp; Steiner, our core team members and associated partners all bring decades of international working experience in Europe, the Middle East and Africa. This allows us to provide tested, comprehensive and reliable legal and tax services tailored to the specific regulatory and commercial realities of your target jurisdiction.</p>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sechead">
      <span class="eyebrow">Industry expertise</span>
      <h2>Legal, tax and BPO services across a broad range of industries.</h2>
    </div>
    <div class="inds">
${INDUSTRIES.map(i => `      <div>${i.replace(/&/g, '&amp;')}</div>`).join('\n')}
    </div>
  </div>
</section>

<section class="sec tint">
  <div class="wrap">
    <div class="sechead">
      <span class="eyebrow">Who we advise</span>
      <h2>We advise and represent</h2>
    </div>
    <ul class="advise">
${ADVISE.map(a => `      <li>${a}</li>`).join('\n')}
    </ul>
  </div>
</section>
`;
  return page({ title: 'Clients & Industries — Ule & Steiner', desc: 'Industry expertise across agricultural technology, construction, energy, life sciences, infrastructure, defence and more.', body, active: 'clients' });
}

function buildTeam() {
  const body = `
<section class="phead">
  <div class="wrap">
    <div class="crumb"><a href="index.html">Home</a> / Team</div>
    <span class="eyebrow">The team</span>
    <h1>Integrated expertise. Tailor-made teams. In your language.</h1>
    <p>We ensure that our clients receive top-quality integrated service across borders &mdash; in the language or languages they prefer. Our professionals speak German, English, Arabic, French, Italian and Spanish. By combining the qualifications of our core team with our network of associated partner professionals, we can serve you in many of today&rsquo;s most attractive investment destinations.</p>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="filters">
      <button class="on" data-filter="all">All</button>
      <button data-filter="core">Core Team</button>
      <button data-filter="me">Middle East &amp; Gulf</button>
      <button data-filter="af">Africa &amp; Maghreb</button>
    </div>
    <div class="people">
${TEAM.map(p => `      <div class="pcard${p.lead ? ' lead' : ''}" data-region="${p.r}">
        <div class="init">${initials(p.n)}</div>
        <h3>${p.n}</h3>
        <span class="title">${p.t}</span>
        <div class="loc">${p.loc}</div>
        <p class="bio">${p.b}</p>
      </div>`).join('\n')}
    </div>
  </div>
</section>

<section class="sec tint">
  <div class="wrap">
    <div class="sechead">
      <span class="eyebrow">Leadership</span>
      <h2>Managing Partners</h2>
      <p>Dr. Christian Ule and Dr. Christian Steiner manage the firm&rsquo;s international legal practice. Both partners bring profound international legal and intercultural experience to facilitate your business objectives in close cooperation with our carefully selected local teams, licensed to practice in the relevant jurisdictions and to act before national authorities and courts.</p>
    </div>
  </div>
</section>
`;
  return page({ title: 'Team — Ule & Steiner', desc: 'Meet the lawyers, tax advisers and chartered accountants of Ule & Steiner across Europe, the Middle East and Africa.', body, active: 'team' });
}

function buildContact() {
  const group = (kind) => OFFICES.filter(o => o.k === kind);
  const render = (list) => list.map(o => `      <div class="office${o.reg ? ' reg' : ''}">
        <span class="kind">${o.c}</span>
        <h3>${o.city}</h3>
        <address>${o.addr}</address>
        ${o.a ? `<div class="assoc">${o.a}</div>` : ''}
      </div>`).join('\n');

  const body = `
<section class="phead">
  <div class="wrap">
    <div class="crumb"><a href="index.html">Home</a> / Contact</div>
    <span class="eyebrow">Offices &amp; contact</span>
    <h1>Twenty locations across Europe, the Middle East and Africa.</h1>
    <p>Our own offices, associated partner offices and operating presences &mdash; one coordinated network, one point of contact.</p>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sechead">
      <span class="eyebrow">Our offices</span>
      <h2>Registered &amp; contact addresses</h2>
    </div>
    <div class="offices">
${render(OFFICES.filter(o => o.reg))}
    </div>
  </div>
</section>

<section class="sec tint">
  <div class="wrap">
    <div class="sechead">
      <span class="eyebrow">Associated offices</span>
      <h2>On the ground with trusted local partners</h2>
    </div>
    <div class="offices">
${render(group('Associated Office'))}
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sechead">
      <span class="eyebrow">Operating presence</span>
      <h2>Sub-Saharan Africa</h2>
    </div>
    <div class="offices">
${render(group('Operating Presence'))}
    </div>
  </div>
</section>
`;
  return page({ title: 'Contact — Ule & Steiner', desc: 'Offices and associated partner locations of Ule & Steiner across Europe, the Middle East and Africa.', body, active: 'contact' });
}

function buildRegionalIndex(countries) {
  const body = `
<section class="phead">
  <div class="wrap">
    <div class="crumb"><a href="index.html">Home</a> / Regional Experience</div>
    <span class="eyebrow">Regional experience</span>
    <h1>Three decades on the ground.</h1>
    <p>Ule &amp; Steiner was founded and is managed by veteran international lawyers dedicated to delivering legal services, tax advice and BPO solutions across Europe, the Middle East and Africa. Over nearly three decades, we have built up and trained cross-border teams to make complex projects across borders, jurisdictions, languages and cultures work. For you.</p>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sechead">
      <span class="eyebrow">${countries.length} jurisdictions</span>
      <h2>Representative matters, jurisdiction by jurisdiction.</h2>
    </div>
    <div class="countries">
${countries.map(c => `      <a class="country" href="regional-experience/${c.slug}.html"><span class="cname">${c.title}</span><span class="cmeta">${c.count} matters</span></a>`).join('\n')}
    </div>
  </div>
</section>

<section class="sec tint">
  <div class="wrap">
    <div class="sechead">
      <span class="eyebrow">Who we advise</span>
      <h2>We advise and represent</h2>
    </div>
    <ul class="advise">
${ADVISE.map(a => `      <li>${a}</li>`).join('\n')}
    </ul>
  </div>
</section>
`;
  return page({ title: 'Regional Experience — Ule & Steiner', desc: 'Representative legal matters handled by Ule & Steiner across 15 jurisdictions in the Middle East and North Africa.', body, active: 'regional' });
}

function buildCountry(c, all) {
  const others = all.filter(o => o.slug !== c.slug);
  const body = `
<section class="phead">
  <div class="wrap">
    <div class="crumb"><a href="../index.html">Home</a> / <a href="../regional-experience.html">Regional Experience</a> / ${c.title}</div>
    <span class="eyebrow">Regional experience</span>
    <h1>${c.title}</h1>
    <p>${c.count} representative matters handled by our lawyers and associated partners in ${c.title}.</p>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <ol class="matters">
${c.bullets.map(b => b.head
    ? `      <li class="head">${b.text}</li>`
    : `      <li>${b.text}</li>`).join('\n')}
    </ol>
  </div>
</section>

<section class="sec tint">
  <div class="wrap">
    <div class="sechead">
      <span class="eyebrow">Other countries</span>
      <h2>Explore the rest of the region</h2>
    </div>
    <div class="countries">
${others.map(o => `      <a class="country" href="${o.slug}.html"><span class="cname">${o.title}</span><span class="cmeta">${o.count} matters</span></a>`).join('\n')}
    </div>
  </div>
</section>
`;
  return page({ title: `${c.title} — Regional Experience — Ule & Steiner`, desc: `Representative legal matters handled by Ule & Steiner in ${c.title}.`, body, active: 'regional', depth: 1 });
}

/* ============================ RUN ============================ */

function esc(s) {
  return String(s)
    .replace(/&(?!(amp|lt|gt|quot|rsquo|ldquo|rdquo|mdash|ndash|nbsp|deg|eacute|hellip);)/g, '&amp;')
    .replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

const raw = JSON.parse(fs.readFileSync(path.join(__dirname, 'countries.json'), 'utf8'));

const ORDER = ['egypt', 'saudi-arabia', 'u-a-e', 'morocco', 'lebanon', 'iraq', 'qatar', 'algeria',
  'libya', 'jordan', 'bahrain', 'oman', 'tunisia', 'syria', 'yemen'];

// The only structural headings in the source are the U.A.E. page's emirate
// dividers ("Abu Dhabi, Emirate of"). Everything else is a matter, including
// short ones like "Privatisation" or "Securities".
function isHeading(s) {
  return /,\s*Emirate of\s*$/i.test(s.trim());
}

function prepare(slug, d) {
  const items = [];
  d.bullets.forEach(raw => {
    if (!raw || !raw.trim()) return;
    if (/^other countries$/i.test(raw.trim())) return;
    // A bullet carrying an embedded sub-list (Lebanon's draft-laws item) keeps
    // its lead line and renders the remainder as a nested list.
    const lines = raw.split('\n').map(s => s.trim()).filter(Boolean);
    const lead = lines[0];
    const sub = lines.slice(1);
    items.push({
      text: esc(lead) + (sub.length
        ? `<ul class="sub">${sub.map(s => `<li>${esc(s.replace(/,$/, ''))}</li>`).join('')}</ul>`
        : ''),
      head: isHeading(lead),
    });
  });
  const title = d.name === 'U.A.E.' ? 'U.A.E.'
    : d.name.replace(/\b[\w.']+/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase());
  return { slug, title, bullets: items, count: items.filter(i => !i.head).length };
}

const countries = ORDER.filter(s => raw[s]).map(slug => prepare(slug, raw[slug]));

// any country present in data but missing from ORDER
Object.keys(raw).forEach(slug => {
  if (!countries.find(c => c.slug === slug)) countries.push(prepare(slug, raw[slug]));
});

write('index.html', buildHome(countries));
write('why-us.html', buildWhy());
write('practice-areas.html', buildPractice());
write('clients-industries.html', buildClients());
write('team.html', buildTeam());
write('contact.html', buildContact());
write('regional-experience.html', buildRegionalIndex(countries));
countries.forEach(c => write(`regional-experience/${c.slug}.html`, buildCountry(c, countries)));

console.log(`\nDone: ${7 + countries.length} pages, ${countries.length} jurisdictions, ${countries.reduce((a, c) => a + c.count, 0)} matters.`);
