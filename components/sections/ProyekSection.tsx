'use client'
import { useState } from 'react'
import { proyeks } from '@/lib/data'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ProyekCard } from '@/components/ui/ProyekCard'

export function ProyekSection() {
  const [activeCategory, setActiveCategory] = useState<string>('Semua')

  const categories = ['Semua', 'Enterprise Web App', 'Realtime System', 'Financial SaaS', 'Document Management']

  const filteredProyeks = activeCategory === 'Semua'
    ? proyeks
    : proyeks.filter(p => p.kategori === activeCategory)

  return (
    <section id="proyek" className="py-20 md:py-28 border-t border-slate-200/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <SectionLabel
          badge="Karya & Proyek"
          title="Portofolio Rekayasa Web & Aplikasi"
          subtitle="Koleksi proyek nyata yang saya bangun untuk menjawab tantangan operasional dan kebutuhan bisnis."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200/80 self-start md:self-auto mb-6 md:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProyeks.map((proyek) => (
          <ProyekCard key={proyek.id} proyek={proyek} />
        ))}
      </div>
    </section>
  )
}
