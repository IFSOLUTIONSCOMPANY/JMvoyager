interface SectionHeaderProps {
  tag?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export function SectionHeader({ tag, title, subtitle, center = true, light = false }: SectionHeaderProps) {
  return (
    <div className={`${center ? 'text-center' : ''} mb-12`}>
      {tag && (
        <p className="section-tag mb-3">{tag}</p>
      )}
      <h2 className={`section-title ${light ? 'text-white' : ''}`}>{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${center ? 'mx-auto' : ''} ${light ? 'text-gray-300' : ''}`}>
          {subtitle}
        </p>
      )}
      <span className="gold-divider" />
    </div>
  )
}
