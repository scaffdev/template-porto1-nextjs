import {
  CheckCircle2,
  Code,
  Download,
  GraduationCap,
  Mail,
  MapPin,
} from 'lucide-react'
import { GithubIcon, InstagramIcon, LinkedinIcon } from '@/components/ui/Icons'
import { profil } from '@/lib/data'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function TentangSection() {
  return (
    <section id="tentang" className="py-20 md:py-28 border-t border-slate-200/80">
      <SectionLabel
        badge="Tentang Saya"
        title="Menghubungkan Analisis Sistem dengan Kode Berkualitas"
        subtitle="Mengenal lebih dekat latar belakang akademis, keahlian teknis, dan filosofi pengembangan saya."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Profile Card with Photo */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            {/* Photo Container - Clean, Full Natural Color (NO Grayscale) */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 mb-6 group">
              <img
                src="/bagustampan.png"
                alt="Achmad Bagus R."
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-200/60 shadow-xs flex items-center justify-between">
                <div>
                  <p className="font-heading font-bold text-sm text-slate-900 leading-tight">
                    {profil.nama}
                  </p>
                  <p className="text-xs text-slate-500">
                    S1 Sistem Informasi · UBSI
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Aktif</span>
                </div>
              </div>
            </div>

            {/* Location & Quick Meta */}
            <div className="flex items-center justify-between py-3 border-b border-slate-100 text-xs text-slate-600 mb-4">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>{profil.lokasi}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-indigo-600" />
                <span>IPK {profil.ipk}</span>
              </span>
            </div>

            {/* Social Media Icons with Tooltip/Title */}
            <div className="space-y-3">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Media Sosial & Kontak
              </p>
              <div className="grid grid-cols-4 gap-2">
                <a
                  href={profil.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 hover:bg-slate-900 hover:text-white border border-slate-200 text-slate-700 transition-all group"
                  title="GitHub"
                >
                  <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] mt-1 font-medium">GitHub</span>
                </a>

                <a
                  href={profil.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 hover:bg-blue-600 hover:text-white border border-slate-200 text-slate-700 transition-all group"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] mt-1 font-medium">LinkedIn</span>
                </a>

                <a
                  href={profil.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 hover:bg-pink-600 hover:text-white border border-slate-200 text-slate-700 transition-all group"
                  title="Instagram"
                >
                  <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] mt-1 font-medium">Instagram</span>
                </a>

                <a
                  href={`mailto:${profil.email}`}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 hover:bg-red-600 hover:text-white border border-slate-200 text-slate-700 transition-all group"
                  title="Email"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] mt-1 font-medium">Email</span>
                </a>
              </div>

              {/* CV Button */}
              <a
                href={profil.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-2xs"
              >
                <Download className="w-4 h-4" />
                <span>Unduh Curriculum Vitae (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Bio, Education, & Technical Skills */}
        <div className="lg:col-span-7 space-y-8">
          {/* Bio text */}
          <div className="bg-white rounded-3xl p-7 md:p-8 border border-slate-200/90 shadow-2xs space-y-4">
            <h3 className="font-heading font-bold text-xl text-slate-900">
              Latar Belakang & Motivasi
            </h3>
            {profil.bioLengkap.map((paragraf, index) => (
              <p
                key={index}
                className="text-slate-600 text-sm sm:text-base leading-relaxed"
              >
                {paragraf}
              </p>
            ))}
          </div>

          {/* Education Card */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-2xs">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-heading font-bold text-lg text-slate-900">
                    {profil.universitas}
                  </h4>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                    Lulus 2026
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-700 mt-1">
                  Sarjana Sistem Informasi (S.Kom)
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Indeks Prestasi Kumulatif (IPK): <strong className="text-slate-800 font-semibold">{profil.ipk}</strong>
                </p>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Fokus perkuliahan pada Analisis & Perancangan Sistem, Basis Data Relasional, Rekayasa Perangkat Lunak, dan Pemrograman Berorientasi Objek.
                </p>
              </div>
            </div>
          </div>

          {/* Categorized Skills */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-2xs space-y-6">
            <h3 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
              <Code className="w-5 h-5 text-blue-600" />
              <span>Keahlian & Penguasaan Teknologi</span>
            </h3>

            <div className="space-y-5">
              {profil.skills.map((skillGroup) => (
                <div key={skillGroup.kategori}>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                    {skillGroup.kategori}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-50 text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-800 transition-all"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
