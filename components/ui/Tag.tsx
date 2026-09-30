export function Tag({
  children,
  color = 'slate',
}: {
  children: React.ReactNode
  color?: 'slate' | 'blue' | 'emerald' | 'amber'
}) {
  const colorStyles = {
    slate: 'bg-slate-100 text-slate-700 border-slate-200/80',
    blue: 'bg-blue-50 text-blue-700 border-blue-200/60',
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
    amber: 'bg-amber-50 text-amber-700 border-amber-200/60',
  }

  return (
    <span
      className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-md border ${colorStyles[color]} transition-colors`}
    >
      {children}
    </span>
  )
}
