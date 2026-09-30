# Portofolio Achmad Bagus R.

Website portofolio personal satu halaman (single page) untuk **Achmad Bagus R.** — Fresh Graduate Sistem Informasi, Universitas Bina Sarana Informatika. Berperan sebagai kartu nama digital: profil singkat, daftar proyek, pengalaman, dan kontak.

Dibangun dengan **Next.js (App Router) + React + Tailwind CSS + TypeScript**.

## Fitur

- **Single page dengan anchor navigation:** `#hero`, `#tentang`, `#proyek`, `#pengalaman`, `#kontak`
- **Navbar sticky + responsif:** border bawah muncul saat scroll, menu hamburger di mobile
- **Hero:** foto profil, nama, role, tagline, statistik singkat, tombol ke proyek & kontak
- **Tentang:** bio singkat + bio lengkap, daftar skill per kategori (Frontend / Backend & Database / Tools), link CV
- **Proyek:** grid 2 kolom (desktop) / 1 kolom (mobile), 4 proyek dengan foto 16:9, deskripsi, highlight, tech stack, link demo & GitHub
- **Pengalaman:** list riwayat magang, organisasi, dan asisten praktikum beserta tanggung jawab & tech
- **Kontak:** email (`mailto:`), WhatsApp, LinkedIn, GitHub, Instagram — tanpa form
- **Footer satu baris** + metadata SEO & Open Graph (`og-image.png`)

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
│   └── globals.css       # Tailwind v4 import, theme font, scrollbar, utilitas bg-grid
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
│   ├── foto-profil.jpg / foto-profil.png
│   ├── bagustampan.png
│   ├── achmad-cv.pdf
│   ├── og-image.png / og-image.svg
│   └── proyek/           # proyek-1..4 (.png + .svg)
├── scripts/
│   └── generate-assets.js # Generator aset gambar/SVG placeholder
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── eslint.config.mjs
```

## Kustomisasi Konten

Seluruh teks website terpusat di `lib/data.ts`:

- `profil` — nama, role, universitas, IPK, tagline, bio, email, WhatsApp, link sosial, `skills`, `stats`, path CV (`/achmad-cv.pdf`)
- `proyeks` — 4 proyek: `id`, `nama`, `kategori`, `deskripsi`, `highlight`, `stack`, `foto`, `linkDemo`, `linkGithub`
- `pengalamans` — 3 pengalaman: tahun, jabatan, tipe, tempat, lokasi, deskripsi, `tanggungJawab`, `tech`

Aset yang perlu diganti sebelum publikasi:

| File | Keterangan |
|---|---|
| `public/foto-profil.jpg` | Foto profil (disarankan ≥ 680×680px) |
| `public/achmad-cv.pdf` | File CV yang diunduh dari tombol CV |
| `public/proyek/proyek-*.png` | Screenshot tiap proyek (16:9) |
| `public/og-image.png` | Gambar Open Graph 1200×630 |

Kontak & metadata lain (URL base, judul, deskripsi) ada di `app/layout.tsx`.

## Script Aset

`scripts/generate-assets.js` dipakai untuk membuat ulang aset placeholder (foto profil, OG image, screenshot proyek) bila dibutuhkan. Lihat isi file untuk detailnya.

## Deploy

Project ini siap di-deploy ke Vercel (atau platform Next.js lain):

```bash
npm run build
```

Pastikan `metadataBase` di `app/layout.tsx` (`https://achmad-bagus.vercel.app`) diganti dengan domain produksi yang sebenarnya.

## Dokumen Terkait

- `prd.md` — PRD awal (konsep desain light-warm, palet, tipografi). Catatan: implementasi saat ini memakai tema modern slate/blue dengan font Plus Jakarta Sans + Inter, tidak sama persis dengan token warna/font di PRD.
- `handover-template/` — template serah terima generik, tidak dipakai oleh website.
- `bagustampan.png` — file gambar di root, tidak dipakai oleh website.
