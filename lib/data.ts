export interface Profil {
  nama: string
  panggilan: string
  role: string
  subRole: string
  universitas: string
  ipk: string
  tagline: string
  bio: string
  bioLengkap: string[]
  email: string
  whatsapp: string
  cv: string
  lokasi: string
  linkedin: string
  github: string
  instagram: string
  skills: {
    kategori: string
    items: string[]
  }[]
  stats: {
    label: string
    value: string
  }[]
}

export interface Proyek {
  id: string
  nama: string
  kategori: string
  deskripsi: string
  highlight: string
  stack: string[]
  foto: string
  linkDemo?: string
  linkGithub?: string
}

export interface Pengalaman {
  tahun: string
  jabatan: string
  tipe: string
  tempat: string
  lokasi: string
  deskripsi: string
  tanggungJawab: string[]
  tech: string[]
}

export const profil: Profil = {
  nama: "Achmad Bagus R.",
  panggilan: "Bagus",
  role: "Fresh Graduate Sistem Informasi",
  subRole: "Junior Full-Stack Web Developer & UI Enthusiast",
  universitas: "Universitas Bina Sarana Informatika",
  ipk: "3.85 / 4.00",
  lokasi: "Jakarta, Indonesia",
  tagline: "Merancang dan membangun aplikasi web yang fungsional, performan, serta memiliki pengalaman pengguna yang memikat.",
  bio: "Lulusan Sistem Informasi dari Universitas Bina Sarana Informatika dengan antusiasme mendalam pada ekosistem web modern. Memiliki kemampuan merancang arsitektur sistem dari frontend yang responsif hingga backend terstruktur.",
  bioLengkap: [
    "Saya adalah Fresh Graduate program studi Sistem Informasi dari Universitas Bina Sarana Informatika (UBSI) dengan passion yang kuat dalam bidang rekayasa perangkat lunak dan pengembangan web.",
    "Selama masa studi, saya aktif memadukan teori analisis sistem dan pemodelan basis data dengan implementasi praktis teknologi web modern seperti Next.js, React, Node.js, Laravel, dan TypeScript.",
    "Saya terbiasa bekerja secara kolaboratif, memecahkan permasalahan teknis secara sistematis, serta senantiasa memperbarui pemahaman seputar clean code dan best practices pengembangan software."
  ],
  email: "achmadbagus.dev@gmail.com",
  whatsapp: "https://wa.me/6281234567890",
  cv: "/achmad-cv.pdf",
  linkedin: "https://linkedin.com/in/achmad-bagus",
  github: "https://github.com/achmadbagus",
  instagram: "https://instagram.com/achmadbagus",
  stats: [
    { label: "IPK Kelulusan", value: "3.85" },
    { label: "Proyek Selesai", value: "8+" },
    { label: "Tech Stack Dikuasai", value: "10+" },
    { label: "Pengalaman Praktik", value: "2 Tahun" }
  ],
  skills: [
    {
      kategori: "Frontend",
      items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3"]
    },
    {
      kategori: "Backend & Database",
      items: ["Node.js", "Express.js", "Laravel", "PostgreSQL", "MySQL", "Supabase", "REST API"]
    },
    {
      kategori: "Tools & Workflow",
      items: ["Git & GitHub", "Figma", "Postman", "VS Code", "Vercel", "Docker (Basic)"]
    }
  ]
}

export const proyeks: Proyek[] = [
  {
    id: "inventaris-aset",
    nama: "Sistem Informasi Inventaris & Aset Internal",
    kategori: "Enterprise Web App",
    deskripsi: "Aplikasi pengelolaan aset logistik institusi dengan pencatatan mutasi otomatis, pelacakan barcode fisik, dan pelaporan audit berkala.",
    highlight: "Mempercepat rekapitulasi audit aset hingga 70% dengan integrasi pemindaian barcode.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
    foto: "/proyek/proyek-1.png",
    linkDemo: "https://inventaris-demo.vercel.app",
    linkGithub: "https://github.com/achmadbagus/sistem-inventaris"
  },
  {
    id: "antrean-publik",
    nama: "Platform Antrean Pelayanan Publik Terpadu",
    kategori: "Realtime System",
    deskripsi: "Sistem reservasi tiket dan pemanggilan antrean loket pelayanan warga berbasis WebSockets secara langsung tanpa reload.",
    highlight: "Dilengkapi dashboard pemantau waktu tunggu rata-rata dan notifikasi kuota loket.",
    stack: ["React", "Node.js", "Socket.io", "Express", "MySQL", "Tailwind CSS"],
    foto: "/proyek/proyek-2.png",
    linkDemo: "https://antrean-layanan.vercel.app",
    linkGithub: "https://github.com/achmadbagus/antrean-online"
  },
  {
    id: "keuangan-umkm",
    nama: "Dashboard Monitoring & Arus Kas UMKM",
    kategori: "Financial SaaS",
    deskripsi: "Platform akuntansi ringan untuk pelaku UMKM: pencatatan kas keluar-masuk, kalkulasi margin otomatis, dan visualisasi grafik laba-rugi.",
    highlight: "Visualisasi analitik interaktif memudahkan analisis tren pengeluaran bulanan.",
    stack: ["Next.js", "Tailwind CSS", "Supabase", "Chart.js", "TypeScript"],
    foto: "/proyek/proyek-3.png",
    linkDemo: "https://umkm-finance.vercel.app",
    linkGithub: "https://github.com/achmadbagus/umkm-financial-dashboard"
  },
  {
    id: "arsip-digital",
    nama: "Portal Arsip Digital & Verifikasi Surat Kedinasan",
    kategori: "Document Management",
    deskripsi: "Sistem manajemen dokumen resmi dengan verifikasi integritas berkas menggunakan cryptographic hashing SHA-256 dan kode QR.",
    highlight: "Menjamin validitas dan mencegah manipulasi dokumen dengan verifikasi tanda tangan digital.",
    stack: ["Laravel 11", "Blade", "Tailwind CSS", "MySQL", "Alpine.js"],
    foto: "/proyek/proyek-4.png",
    linkGithub: "https://github.com/achmadbagus/arsip-digital-surat"
  }
]

export const pengalamans: Pengalaman[] = [
  {
    tahun: "2025 – 2026",
    jabatan: "Junior Web Developer (Intern)",
    tipe: "Magang Industri",
    tempat: "PT Solusi Teknologi Nusantara",
    lokasi: "Jakarta Selatan",
    deskripsi: "Berkontribusi dalam pengembangan dan pemeliharaan antarmuka sistem enterprise internal perusahaan.",
    tanggungJawab: [
      "Mengembangkan komponen antarmuka pengguna berbasis Next.js dan Tailwind CSS sesuai panduan UI/UX tim.",
      "Mengoptimalkan performa query basis data dan mengintegrasikan lebih dari 15 RESTful endpoints.",
      "Melakukan testing dan code review bersama senior engineer untuk menjaga kualitas clean architecture."
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "REST API", "Git"]
  },
  {
    tahun: "2024 – 2025",
    jabatan: "Koordinator Divisi IT & Pengembangan Media",
    tipe: "Organisasi Kampus",
    tempat: "Himpunan Mahasiswa Sistem Informasi UBSI",
    lokasi: "Jakarta",
    deskripsi: "Memimpin perancangan aset teknologi informasi dan pengelolaan portal web organisasi.",
    tanggungJawab: [
      "Memimpin perancangan dan implementasi website resmi organisasi mahasiswa untuk publikasi kegiatan.",
      "Menyelenggarakan workshop intensif pengenalan dasar pemrograman web bagi lebih dari 80 mahasiswa baru.",
      "Mengelola infrastruktur hosting dan domain organisasi agar tetap handal."
    ],
    tech: ["React", "Tailwind CSS", "Figma", "Public Speaking", "Team Leadership"]
  },
  {
    tahun: "2023 – 2024",
    jabatan: "Asisten Praktikum Laboratorium Komputer",
    tipe: "Akademik",
    tempat: "Universitas Bina Sarana Informatika",
    lokasi: "Kampus UBSI",
    deskripsi: "Mendampingi dosen dalam pelaksanaan praktikum basis data dan pemrograman terstruktur bagi mahasiswa.",
    tanggungJawab: [
      "Membantu lebih dari 100 mahasiswa memahami konsep query SQL, normalisasi database, dan relasi tabel.",
      "Mengevaluasi tugas pemrograman mingguan dan memberikan feedback teknis konstruktif.",
      "Memastikan perangkat keras dan instalasi software laboratorium siap digunakan untuk ujian praktikum."
    ],
    tech: ["MySQL", "Database Design", "Algorithm", "Mentoring"]
  }
]
