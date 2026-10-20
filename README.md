# Portofolio Rizky Pratama

Website portofolio personal satu halaman (single page) untuk **Rizky Pratama** — Fresh Graduate Teknik Informatika, Universitas Teknologi Nusantara. Berperan sebagai kartu nama digital: profil singkat, daftar proyek, pengalaman, dan kontak.

Dibangun dengan **Next.js (App Router) + React + Tailwind CSS + TypeScript**.

## Fitur

- **Single page dengan anchor navigation:** `#hero`, `#tentang`, `#proyek`, `#pengalaman`, `#kontak`
- **Navbar sticky + responsif:** pill navigation di desktop, tombol hamburger di mobile, border & blur muncul saat scroll, tombol unduh CV serta ikon GitHub/LinkedIn
- **Hero:** badge ketersediaan, headline, tagline, 4 kartu statistik (IPK, proyek, tech stack, status), ikon sosial, dan CTA ke proyek/tentang/CV
- **Tentang:** foto profil, bio lengkap, kartu pendidikan (UTN, gelar, tahun lulus, IPK), daftar skill per kategori (Frontend / Backend & Database / Tools & Workflow), serta link CV
- **Proyek:** filter kategori (Semua, Enterprise Web App, Realtime System, Financial SaaS, Document Management), grid 2 kolom (desktop) / 1 kolom (mobile), 4 proyek dengan foto 16:9, deskripsi, highlight, tech stack, link demo & GitHub
- **Pengalaman:** 3 riwayat (magang industri, organisasi kampus, asisten praktikum) beserta tanggung jawab dan tech
- **Kontak:** form pesan yang membuka klien email (`mailto:`) dengan draf terisi, salin email, serta tautan LinkedIn, GitHub, WhatsApp, dan Instagram
- **Footer** dengan inisial/nama, ikon sosial, dan tombol kembali ke atas
- **Metadata SEO & Open Graph** (`og-image.png`) dengan `metadataBase` `https://rizky-pratama.vercel.app`

## Tech Stack

| Kategori | Teknologi |
|---|---|
| Framework | Next.js 16.3.7 (App Router) |
| UI | React 19.2.8, Tailwind CSS v4 (`@tailwindcss/postcss`) |
| Ikon | lucide-react |
| Font | Plus Jakarta Sans (heading) + Inter (body) via `next/font/google` |
| Bahasa | TypeScript |
| Lint | ESLint + `eslint-config-next` |

## Persyaratan

- Node.js 18+ (disarankan 20+)
- npm (atau yarn / pnpm / bun)

## Cara Menjalankan

```bash
# install dependensi
npm install

# mode pengembangan (http://localhost:3000)
npm run dev

# build produksi
npm run build

# jalankan hasil build
npm start

# lint
npm run lint
```

## Struktur Proyek

```
.
├── app/
│   ├── layout.tsx        # Root layout: font, metadata SEO/OG, bahasa "id"
│   ├── page.tsx          # Single page: Navbar + 5 section + Footer
│   ├── globals.css       # Tailwind v4 import, theme font, scrollbar, utilitas bg-grid
│   └── favicon.ico
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── TentangSection.tsx
│   │   ├── ProyekSection.tsx
│   │   ├── PengalamanSection.tsx
│   │   └── KontakSection.tsx
│   └── ui/
│       ├── Tag.tsx
│       ├── SectionLabel.tsx
│       ├── AccentLink.tsx
│       ├── ProyekCard.tsx
│       └── Icons.tsx
├── lib/
│   └── data.ts           # Seluruh konten: profil, proyeks, pengalamans
├── public/
│   ├── gantuy.jpg        # Foto profil yang dipakai website
│   ├── rizky-cv.pdf      # CV yang diunduh dari tombol CV
│   ├── og-image.png / og-image.svg
│   └── proyek/           # proyek-1..4 (.png + .svg)
├── scripts/
│   └── generate-assets.js # Generator aset gambar/SVG placeholder
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── eslint.config.mjs
└── scaff.template.json
```

> Aset bawaan yang tidak lagi dipakai website (`public/foto-profil.jpg`,
> `public/foto-profil.png`, `public/achmad-cv.pdf`, serta SVG default Next.js)
> masih tersimpan di `public/` dan boleh dihapus.

## Kustomisasi Konten

Seluruh teks website terpusat di `lib/data.ts`:

- `profil` — identitas lengkap: `nama`, `panggilan`, `inisial`, `role`, `subRole`, `universitas`, `universitasSingkat`, `jurusan`, `gelar`, `tahunLulus`, `ipk`, `tagline`, `bio`, `bioLengkap`, `email`, `whatsapp`, `cv`, `lokasi`, `foto`, `linkedin`, `github`, `instagram`, `skills`, `stats`
- `proyeks` — 4 proyek: `id`, `nama`, `kategori`, `deskripsi`, `highlight`, `stack`, `foto`, `linkDemo` (opsional), `linkGithub` (opsional)
- `pengalamans` — 3 pengalaman: `tahun`, `jabatan`, `tipe`, `tempat`, `lokasi`, `deskripsi`, `tanggungJawab`, `tech`

Saat ini `profil.foto` mengarah ke `/gantuy.jpg` dan `profil.cv` ke `/rizky-cv.pdf`.

Aset yang perlu diganti sebelum publikasi:

| File | Keterangan |
|---|---|
| `public/gantuy.jpg` | Foto profil (disarankan ≥ 680×680px, objek di bagian atas) |
| `public/rizky-cv.pdf` | File CV yang diunduh dari tombol CV |
| `public/proyek/proyek-*.png` | Screenshot tiap proyek (16:9) |
| `public/og-image.png` | Gambar Open Graph 1200×630 |

Kontak & metadata lain (URL base, judul, deskripsi) ada di `app/layout.tsx`.

Kategori pada filter proyek (`components/sections/ProyekSection.tsx`) masih
di-hardcode; sesuaikan array `categories` bila mengubah `kategori` di `lib/data.ts`.

## Script Aset

`scripts/generate-assets.js` dipakai untuk membuat ulang aset placeholder
(`rizky-cv.pdf`, SVG screenshot proyek, dan OG image) bila dibutuhkan. Lihat isi
file untuk detailnya.

## Deploy

Project ini siap di-deploy ke Vercel (atau platform Next.js lain):

```bash
npm run build
```

Pastikan `metadataBase` di `app/layout.tsx` (`https://rizky-pratama.vercel.app`)
diganti dengan domain produksi yang sebenarnya.

## Dokumen & File Lain

- `scaff.template.json` — metadata template/scaffold, tidak dipakai saat runtime.
- `gantuy.jfif` — salinan gambar di root, tidak dipakai oleh website (website memakai `public/gantuy.jpg`).
