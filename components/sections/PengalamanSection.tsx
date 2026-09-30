import { Briefcase, Calendar, Check, ChevronRight, MapPin } from 'lucide-react'
import { pengalamans } from '@/lib/data'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Tag } from '@/components/ui/Tag'

export function PengalamanSection() {
  return (
    <section id="pengalaman" className="py-20 md:py-28 border-t border-slate-200/80">
      <SectionLabel
        badge="Pengalaman & Kontribusi"
        title="Jejak Pengalaman Profesional & Organisasi"
        subtitle="Riwayat magang, kepemimpinan divisi teknologi mahasiswa, dan asistensi laboratorium komputer."
      />

      <div className="space-y-6 max-w-4xl">
        {pengalamans.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-200 transition-all duration-300"
          >
            {/* Header: Period & Type */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>{item.tahun}</span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
                {item.tipe}
              </span>
            </div>

            {/* Title & Organization */}
            <div className="mb-4">
              <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                {item.jabatan}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 mt-1">
                <span className="font-semibold text-slate-800">{item.tempat}</span>
                <span className="text-slate-300">·</span>
                <span className="flex items-center gap-1 text-slate-500 text-xs">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {item.lokasi}
                </span>
              </div>
            </div>

            {/* Short overview */}
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {item.deskripsi}
            </p>

            {/* Bullet points responsibilities */}
            <div className="space-y-2 mb-6 bg-slate-50/70 p-4 rounded-2xl border border-slate-100">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Tanggung Jawab & Kontribusi Kunci:
              </p>
              {item.tanggungJawab.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
              <span className="text-xs text-slate-400 font-medium">Tools & Skill:</span>
              {item.tech.map((t) => (
                <Tag key={t} color="slate">
                  {t}
                </Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
