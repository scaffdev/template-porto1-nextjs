interface SectionLabelProps {
  badge: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionLabel({
  badge,
  title,
  subtitle,
  align = 'left',
}: SectionLabelProps) {
  const isCenter = align === 'center'

  return (
    <div className={`mb-12 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-xl'}`}>
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-50 text-blue-700 border border-blue-100 mb-3 ${isCenter ? 'mx-auto' : ''}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
        <span>{badge}</span>
      </div>
      <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
