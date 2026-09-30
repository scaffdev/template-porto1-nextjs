import { ExternalLink, Sparkles } from 'lucide-react'
import { GithubIcon } from '@/components/ui/Icons'
import { Proyek } from '@/lib/data'
import { Tag } from './Tag'

export function ProyekCard({ proyek }: { proyek: Proyek }) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-400/60 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Project Thumbnail Image with Category Badge */}
        <div className="relative aspect-video overflow-hidden bg-slate-100 border-b border-slate-100">
          <img
            src={proyek.foto}
            alt={proyek.nama}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-xs text-slate-800 shadow-sm border border-slate-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              {proyek.kategori}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-heading font-bold text-lg md:text-xl text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
            {proyek.nama}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {proyek.deskripsi}
          </p>

          {/* Highlight Key Impact */}
          {proyek.highlight && (
            <div className="flex items-start gap-2 p-3 rounded-xl bg-blue-50/60 border border-blue-100/80 mb-5">
              <Sparkles className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-blue-900 leading-snug">
                {proyek.highlight}
              </p>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {proyek.stack.map((tech) => (
              <Tag key={tech} color="slate">
                {tech}
              </Tag>
            ))}
          </div>
        </div>
      </div>

      {/* Action Links */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
        {proyek.linkDemo ? (
          <a
            href={proyek.linkDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-2xs"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="text-xs text-slate-400 italic">Internal System</span>
        )}

        {proyek.linkGithub && (
          <a
            href={proyek.linkGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Repository</span>
          </a>
        )}
      </div>
    </div>
  )
}
