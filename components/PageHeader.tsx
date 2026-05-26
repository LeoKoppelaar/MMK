interface PageHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
}

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-primary pt-28 pb-16 lg:pt-36 lg:pb-20 relative overflow-hidden">
      {/* Geometric grid */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="page-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#page-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-white leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-white/65 max-w-2xl font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
