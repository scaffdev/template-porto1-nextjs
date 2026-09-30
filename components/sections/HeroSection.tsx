import { ArrowDown, Code2, Download, FileText, GraduationCap, Layers, Mail, Sparkles, User } from 'lucide-react'
import { GithubIcon, InstagramIcon, LinkedinIcon } from '@/components/ui/Icons'
import { profil } from '@/lib/data'

export function HeroSection() {
  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background ambient decorative blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold mb-6 shadow-2xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
          </span>
          <span>Tersedia untuk Peluang Kerja & Kolaborasi</span>
          <span className="text-emerald-400">·</span>
          <span className="font-normal text-emerald-700">Fresh Graduate Sistem Informasi</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-[1.15] mb-6">
          Halo, saya <span className="text-blue-600">{profil.nama}</span>.
          <br />
          <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent">
            Membangun Solusi Digital & Web Modern yang Fungsional.
          </span>
        </h1>

        {/* Subtitle / Intro */}
        <p className="text-slate-600 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto mb-8">
          {profil.tagline} Lulusan Sistem Informasi dari {profil.universitas} dengan keahlian pengembangan aplikasi web full-stack, perancangan basis data, dan antarmuka pengguna responsif.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          <a
            href="#proyek"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Lihat Proyek Unggulan</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#tentang"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs hover:shadow-sm transition-all duration-200"
          >
            <User className="w-4 h-4 text-blue-600" />
            <span>Tentang Saya</span>
          </a>

          <a
            href={profil.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs hover:shadow-sm transition-all duration-200"
          >
            <Download className="w-4 h-4 text-slate-500" />
            <span>Unduh CV</span>
          </a>
        </div>

        {/* Social Media Icons Row */}
        <div className="flex items-center justify-center gap-3 pt-2 pb-12 border-b border-slate-200/80 max-w-md mx-auto">
          <span className="text-xs font-medium text-slate-400 mr-1">Terhubung:</span>
          <a
            href={profil.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:shadow-xs transition-all"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={profil.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:shadow-xs transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={profil.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-pink-600 hover:border-pink-200 hover:shadow-xs transition-all"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profil.email}`}
            className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-red-500 hover:border-red-200 hover:shadow-xs transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Feature / Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 text-left">
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-blue-200 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
              <GraduationCap className="w-4 h-4" />
            </div>
            <p className="font-heading font-extrabold text-xl text-slate-900">3.85 / 4.00</p>
            <p className="text-xs text-slate-500 font-medium">IPK Kelulusan (UBSI)</p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-blue-200 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-2">
              <Code2 className="w-4 h-4" />
            </div>
            <p className="font-heading font-extrabold text-xl text-slate-900">8+ Proyek</p>
            <p className="text-xs text-slate-500 font-medium">Aplikasi Web Selesai</p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-blue-200 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
              <Layers className="w-4 h-4" />
            </div>
            <p className="font-heading font-extrabold text-xl text-slate-900">10+ Tech</p>
            <p className="text-xs text-slate-500 font-medium">Modern Web Stack</p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-blue-200 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-2">
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="font-heading font-extrabold text-xl text-slate-900">Siap Kerja</p>
            <p className="text-xs text-slate-500 font-medium">Full-Time / Remote</p>
          </div>
        </div>
      </div>
    </section>
  )
}
