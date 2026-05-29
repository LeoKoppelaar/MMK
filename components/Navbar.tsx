'use client'

import { useState, useEffect } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Menu, X } from 'lucide-react'
import { Link, usePathname, useRouter } from '@/i18n/navigation'

const NAV_KEYS = ['home', 'services', 'about', 'contact'] as const
const NAV_HREFS: Record<string, string> = {
  home: '/',
  services: '/services',
  about: '/about',
  contact: '/contact',
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const t = useTranslations('nav')

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const switchLocale = (next: 'en' | 'sk') => {
    router.replace(pathname, { locale: next })
  }

  return (
    <header
      role="banner"
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/96 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: '72px' }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="MMK Services — home">
            <div className={['w-8 h-8 rounded flex items-center justify-center text-xs font-bold transition-colors', isScrolled ? 'bg-primary text-white' : 'bg-white/20 text-white'].join(' ')}>
              M
            </div>
            <span className={['font-playfair text-xl font-bold tracking-tight transition-colors', isScrolled ? 'text-primary' : 'text-white'].join(' ')}>
              MMK Services
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-7">
            {NAV_KEYS.map((key) => (
              <Link
                key={key}
                href={NAV_HREFS[key]}
                className={[
                  'text-sm font-medium transition-colors relative py-1',
                  isActive(NAV_HREFS[key])
                    ? 'text-accent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent after:rounded-full'
                    : isScrolled
                    ? 'text-charcoal hover:text-primary'
                    : 'text-white/85 hover:text-white',
                ].join(' ')}
              >
                {t(key)}
              </Link>
            ))}

            {/* Language switcher */}
            <div className={['flex items-center gap-1.5 px-2 py-1 rounded border transition-colors', isScrolled ? 'border-gray-200' : 'border-white/20'].join(' ')}>
              {(['en', 'sk'] as const).map((l, i) => (
                <span key={l} className="flex items-center gap-1.5">
                  {i > 0 && <span className={isScrolled ? 'text-gray-300' : 'text-white/20'}>|</span>}
                  <button
                    onClick={() => switchLocale(l)}
                    aria-label={`Switch to ${l === 'en' ? 'English' : 'Slovak'}`}
                    className={[
                      'text-xs font-semibold uppercase tracking-wider transition-colors',
                      locale === l
                        ? 'text-accent'
                        : isScrolled
                        ? 'text-charcoal/40 hover:text-charcoal'
                        : 'text-white/40 hover:text-white',
                    ].join(' ')}
                  >
                    {l}
                  </button>
                </span>
              ))}
            </div>

            <Link
              href="/contact"
              className="ml-1 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded transition-all duration-200 hover:bg-accent/90 hover:shadow-md"
            >
              {t('cta')}
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((v) => !v)}
            className={['lg:hidden p-2 rounded transition-colors', isScrolled ? 'text-primary hover:bg-gray-100' : 'text-white hover:bg-white/10'].join(' ')}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav aria-label="Mobile navigation" className="px-4 pt-3 pb-5 space-y-1">
            {NAV_KEYS.map((key) => (
              <Link
                key={key}
                href={NAV_HREFS[key]}
                className={['block py-2.5 px-3 rounded text-sm font-medium transition-colors', isActive(NAV_HREFS[key]) ? 'bg-accent/10 text-accent' : 'text-charcoal hover:bg-gray-50 hover:text-primary'].join(' ')}
              >
                {t(key)}
              </Link>
            ))}

            {/* Mobile language switcher */}
            <div className="flex items-center gap-3 px-3 py-2">
              <span className="text-xs text-charcoal/40 uppercase tracking-wider">Language:</span>
              {(['en', 'sk'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => switchLocale(l)}
                  className={['text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded transition-colors', locale === l ? 'bg-accent text-white' : 'text-charcoal/50 hover:text-primary'].join(' ')}
                >
                  {l}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-gray-100">
              <Link href="/contact" className="block w-full text-center py-3 bg-accent text-white text-sm font-medium rounded hover:bg-accent/90 transition-colors">
                {t('cta')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
