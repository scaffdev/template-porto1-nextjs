'use client'
import { useState } from 'react'
import {
  Check,
  Copy,
  ExternalLink,
  Mail,
  Send,
} from 'lucide-react'
import { GithubIcon, InstagramIcon, LinkedinIcon, WhatsAppIcon } from '@/components/ui/Icons'
import { profil } from '@/lib/data'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function KontakSection() {
  const [copied, setCopied] = useState(false)
  const [formSent, setFormSent] = useState(false)
  const [formState, setFormState] = useState({
    nama: '',
    email: '',
    pesan: '',
  })

  const copyEmail = () => {
    navigator.clipboard.writeText(profil.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Open default mail client with prefilled body
    const subject = encodeURIComponent(`Inquiry Portofolio dari ${formState.nama}`)
    const body = encodeURIComponent(`Halo Rizky,\n\n${formState.pesan}\n\nPengirim: ${formState.nama} (${formState.email})`)
    window.location.href = `mailto:${profil.email}?subject=${subject}&body=${body}`
    setFormSent(true)
  }

  return (
    <section id="kontak" className="py-20 md:py-28 border-t border-slate-200/80">
      <SectionLabel
        badge="Hubungi Saya"
        title="Mari Mulai Kolaborasi & Diskusi"
        subtitle="Saya selalu antusias mendiskusikan peluang karir, proyek freelance, atau gagasan inovasi perangkat lunak."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Info & Social Icons Cards */}
        <div className="lg:col-span-6 space-y-6">
          {/* Main Card with Bagus Avatar & Direct Email */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-slate-100 shadow-xs flex-shrink-0">
                <img
                  src={profil.foto}
                  alt={profil.nama}
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  {profil.nama}
                </h3>
                <p className="text-xs text-slate-500">
                  {profil.role} · {profil.lokasi}
                </p>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Respon Cepat via Email & WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Email Box */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 mb-6">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Alamat Email Utama
                </span>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Email</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${profil.email}`}
                className="text-base sm:text-lg font-heading font-bold text-slate-900 hover:text-blue-600 transition-colors block break-all"
              >
                {profil.email}
              </a>
            </div>

            {/* Social Media Links with Real Icons */}
            <div className="space-y-2.5">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Kanal Media Sosial & Komunikasi:
              </p>

              {/* LinkedIn */}
              <a
                href={profil.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-slate-900">
                      LinkedIn Profile
                    </p>
                    <p className="text-xs text-slate-500">
                      linkedin.com/in/rizky-pratama
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={profil.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-slate-900">
                      GitHub Repositories
                    </p>
                    <p className="text-xs text-slate-500">
                      github.com/rizkypratama
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
              </a>

              {/* WhatsApp */}
              <a
                href={profil.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-slate-900">
                      WhatsApp Chat
                    </p>
                    <p className="text-xs text-slate-500">
                      Pesan Cepat & Diskusi Langsung
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
              </a>

              {/* Instagram */}
              <a
                href={profil.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-pink-400 hover:bg-pink-50/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-slate-900">
                      Instagram
                    </p>
                    <p className="text-xs text-slate-500">
                      @rizkypratama
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-pink-600 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Message Form Card */}
        <div className="lg:col-span-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs">
            <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
              Kirim Pesan Langsung
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Silakan isi formulir di bawah ini untuk mengirimkan tawaran pekerjaan, undangan wawancara, atau penawaran proyek.
            </p>

            {formSent && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm mb-6 flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p>
                  Aplikasi email Anda telah dibuka dengan draf pesan. Jika belum terkirim otomatis, Anda juga dapat mengirim email langsung ke <strong>{profil.email}</strong>.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Nama Lengkap / Instansi
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso (PT Inovasi Digital)"
                  value={formState.nama}
                  onChange={(e) => setFormState({ ...formState, nama: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Email Anda
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Pesan / Rencana Kolaborasi
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Ceritakan posisi atau kebutuhan proyek yang ingin didiskusikan..."
                  value={formState.pesan}
                  onChange={(e) => setFormState({ ...formState, pesan: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Pesan Sekarang</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
