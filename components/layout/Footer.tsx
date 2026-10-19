import { ArrowUp, Mail } from 'lucide-react'
import { GithubIcon, InstagramIcon, LinkedinIcon } from '@/components/ui/Icons'
import { profil } from '@/lib/data'

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                {profil.inisial}
              </span>
              <span className="font-heading font-bold text-slate-900 text-lg">
                {profil.nama}
              </span>
            </div>
            <p className="text-sm text-slate-500 max-w-md">
              {profil.role} · {profil.universitas}. Berkomitmen mengembangkan produk digital fungsional dan estetis.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={profil.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all hover:scale-105"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profil.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all hover:scale-105"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={profil.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-pink-600 hover:bg-pink-50 transition-all hover:scale-105"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profil.email}`}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-red-500 hover:bg-red-50 transition-all hover:scale-105"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {profil.nama} All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Dibuat dengan Next.js & Tailwind CSS</span>
            <a
              href="#hero"
              className="flex items-center gap-1 text-slate-500 hover:text-blue-600 font-medium transition-colors"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
