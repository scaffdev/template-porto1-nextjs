const fs = require('fs');
const path = require('path');

// Ensure directories
fs.mkdirSync(path.join(__dirname, '../public/proyek'), { recursive: true });

// 1. Generate achmad-cv.pdf
const pdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 174 >>
stream
BT
/F1 24 Tf
50 780 Td
(Curriculum Vitae - Achmad Bagus R.) Tj
/F1 12 Tf
0 -40 Td
(Fresh Graduate Sistem Informasi - Universitas Bina Sarana Informatika) Tj
0 -25 Td
(Email: achmadbagus.dev@gmail.com | Portfolio: Web Portfolio) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000224 00000 n 
0000000449 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
518
%%EOF`;

fs.writeFileSync(path.join(__dirname, '../public/achmad-cv.pdf'), pdf);

// 2. Generate 16:9 minimalist project SVGs
function createProjectSvg(title, subtitle, tag1, tag2, tag3, accentColor = '#111111') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <rect width="1600" height="900" fill="#F4F4F2"/>
  <rect x="0" y="0" width="1600" height="900" fill="none" stroke="#E5E5E3" stroke-width="2"/>
  
  <!-- Window chrome -->
  <rect x="120" y="100" width="1360" height="700" rx="6" fill="#FFFFFF" stroke="#E5E5E3" stroke-width="2"/>
  <line x1="120" y1="170" x2="1480" y2="170" stroke="#E5E5E3" stroke-width="2"/>
  <circle cx="160" cy="135" r="7" fill="#E5E5E3"/>
  <circle cx="185" cy="135" r="7" fill="#E5E5E3"/>
  <circle cx="210" cy="135" r="7" fill="#E5E5E3"/>
  
  <rect x="250" y="120" width="300" height="30" rx="3" fill="#F8F8F6"/>
  <text x="270" y="141" font-family="'DM Sans', -apple-system, sans-serif" font-size="13" fill="#888888">app.internal/system/v1</text>
  
  <!-- Content inside window -->
  <rect x="170" y="220" width="1260" height="1" fill="#E5E5E3"/>
  <text x="170" y="270" font-family="'DM Serif Display', Georgia, serif" font-size="34" fill="#111111">${title}</text>
  <text x="170" y="305" font-family="'DM Sans', -apple-system, sans-serif" font-size="16" fill="#888888">${subtitle}</text>
  
  <!-- Tags -->
  <g transform="translate(170, 335)">
    <rect x="0" y="0" width="100" height="28" rx="3" fill="#F2F2F0" stroke="#E5E5E3"/>
    <text x="15" y="19" font-family="'DM Sans', sans-serif" font-size="13" fill="#555555">${tag1}</text>
    
    <rect x="110" y="0" width="110" height="28" rx="3" fill="#F2F2F0" stroke="#E5E5E3"/>
    <text x="125" y="19" font-family="'DM Sans', sans-serif" font-size="13" fill="#555555">${tag2}</text>

    <rect x="230" y="0" width="100" height="28" rx="3" fill="#F2F2F0" stroke="#E5E5E3"/>
    <text x="245" y="19" font-family="'DM Sans', sans-serif" font-size="13" fill="#555555">${tag3}</text>
  </g>
  
  <!-- UI Mockup grid cards -->
  <g transform="translate(170, 395)">
    <!-- Card 1 -->
    <rect x="0" y="0" width="390" height="320" rx="4" fill="#FAFAF8" stroke="#E5E5E3"/>
    <rect x="30" y="30" width="140" height="14" rx="2" fill="#E5E5E3"/>
    <text x="30" y="90" font-family="'DM Serif Display', serif" font-size="36" fill="${accentColor}">1,280</text>
    <rect x="30" y="120" width="220" height="10" rx="2" fill="#EAEAE8"/>
    <line x1="30" y1="160" x2="360" y2="160" stroke="#E5E5E3"/>
    <rect x="30" y="185" width="280" height="12" rx="2" fill="#EAEAE8"/>
    <rect x="30" y="215" width="200" height="12" rx="2" fill="#EAEAE8"/>
    <rect x="30" y="245" width="240" height="12" rx="2" fill="#EAEAE8"/>

    <!-- Card 2 -->
    <rect x="420" y="0" width="420" height="320" rx="4" fill="#FAFAF8" stroke="#E5E5E3"/>
    <rect x="450" y="30" width="160" height="14" rx="2" fill="#E5E5E3"/>
    <line x1="450" y1="75" x2="810" y2="75" stroke="#E5E5E3"/>
    <!-- Simulated table rows -->
    <rect x="450" y="95" width="260" height="12" rx="2" fill="#111111" opacity="0.75"/>
    <rect x="740" y="95" width="70" height="12" rx="2" fill="#E63329"/>
    <rect x="450" y="135" width="220" height="12" rx="2" fill="#888888" opacity="0.5"/>
    <rect x="740" y="135" width="70" height="12" rx="2" fill="#888888" opacity="0.3"/>
    <rect x="450" y="175" width="240" height="12" rx="2" fill="#888888" opacity="0.5"/>
    <rect x="740" y="175" width="70" height="12" rx="2" fill="#888888" opacity="0.3"/>
    <rect x="450" y="215" width="190" height="12" rx="2" fill="#888888" opacity="0.5"/>
    <rect x="740" y="215" width="70" height="12" rx="2" fill="#888888" opacity="0.3"/>
    <rect x="450" y="255" width="250" height="12" rx="2" fill="#888888" opacity="0.5"/>
    <rect x="740" y="255" width="70" height="12" rx="2" fill="#888888" opacity="0.3"/>

    <!-- Card 3 -->
    <rect x="870" y="0" width="390" height="320" rx="4" fill="#FAFAF8" stroke="#E5E5E3"/>
    <rect x="900" y="30" width="120" height="14" rx="2" fill="#E5E5E3"/>
    <!-- Minimal chart bars -->
    <rect x="910" y="220" width="28" height="60" rx="2" fill="#111111"/>
    <rect x="955" y="180" width="28" height="100" rx="2" fill="#111111"/>
    <rect x="1000" y="140" width="28" height="140" rx="2" fill="#E63329"/>
    <rect x="1045" y="190" width="28" height="90" rx="2" fill="#111111"/>
    <rect x="1090" y="160" width="28" height="120" rx="2" fill="#111111"/>
    <rect x="1135" y="110" width="28" height="170" rx="2" fill="#111111"/>
    <rect x="1180" y="130" width="28" height="150" rx="2" fill="#111111"/>
    <line x1="900" y1="285" x2="1230" y2="285" stroke="#E5E5E3" stroke-width="2"/>
  </g>
</svg>`;
}

const projects = [
  {
    name: 'proyek-1',
    title: 'Sistem Informasi Inventaris & Logistik Aset',
    subtitle: 'Manajemen audit perlengkapan, pelacakan barcode, dan laporan terpusat',
    t1: 'Next.js', t2: 'TypeScript', t3: 'PostgreSQL',
    color: '#E63329'
  },
  {
    name: 'proyek-2',
    title: 'Platform Antrean Pelayanan Publik Terpadu',
    subtitle: 'Alur reservasi tiket real-time dengan notifikasi antrean instansi',
    t1: 'React', t2: 'Node.js', t3: 'MySQL',
    color: '#111111'
  },
  {
    name: 'proyek-3',
    title: 'Dashboard Analitik & Arus Kas UMKM',
    subtitle: 'Pencatatan keuangan harian, analisis margin, dan laporan laba-rugi',
    t1: 'Next.js', t2: 'Supabase', t3: 'Tailwind',
    color: '#E63329'
  },
  {
    name: 'proyek-4',
    title: 'Portal Pengarsipan & Verifikasi Dokumen',
    subtitle: 'Autentikasi keabsahan dokumen dinas berbasis QR & cryptographic hash',
    t1: 'Laravel', t2: 'Blade', t3: 'MySQL',
    color: '#111111'
  }
];

projects.forEach(p => {
  const svg = createProjectSvg(p.title, p.subtitle, p.t1, p.t2, p.t3, p.color);
  fs.writeFileSync(path.join(__dirname, `../public/proyek/${p.name}.svg`), svg);
  fs.writeFileSync(path.join(__dirname, `../public/proyek/${p.name}.png`), svg); // also as .png fallback
});

// 3. Generate og-image.png (SVG format with clean banner)
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <rect width="1200" height="630" fill="#FAFAF8"/>
  <rect x="40" y="40" width="1120" height="550" fill="none" stroke="#E5E5E3" stroke-width="2"/>
  
  <text x="100" y="160" font-family="'DM Sans', sans-serif" font-size="20" fill="#888888" letter-spacing="3">01 / PORTOFOLIO</text>
  <line x1="100" y1="190" x2="160" y2="190" stroke="#E63329" stroke-width="3"/>
  
  <text x="100" y="290" font-family="'DM Serif Display', Georgia, serif" font-size="76" fill="#111111">Achmad Bagus R.</text>
  <text x="100" y="360" font-family="'DM Sans', sans-serif" font-size="28" fill="#888888">Fresh Graduate · Sistem Informasi</text>
  <text x="100" y="405" font-family="'DM Sans', sans-serif" font-size="22" fill="#555555">Universitas Bina Sarana Informatika</text>
  
  <line x1="100" y1="460" x2="1100" y2="460" stroke="#E5E5E3" stroke-width="1"/>
  <text x="100" y="515" font-family="'DM Sans', sans-serif" font-size="18" fill="#888888">achmadbagus.dev@gmail.com</text>
  <text x="1000" y="515" font-family="'DM Sans', sans-serif" font-size="18" fill="#E63329" text-anchor="end">Lihat Portofolio →</text>
</svg>`;

fs.writeFileSync(path.join(__dirname, '../public/og-image.png'), ogSvg);
fs.writeFileSync(path.join(__dirname, '../public/og-image.svg'), ogSvg);

console.log('All placeholder assets generated successfully.');
