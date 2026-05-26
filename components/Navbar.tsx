'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href)

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
        <div className="flex items-center justify-between h-18 lg:h-20" style={{ height: '72px' }}>
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="MMK Services — home"
          >
            {/* Logo mark */}
            <div
              className={[
                'w-8 h-8 rounded flex items-center justify-center text-xs font-bold transition-colors',
                isScrolled ? 'bg-primary text-white' : 'bg-white/20 text-white',
              ].join(' ')}
            >
              M
            </div>
            <span
              className={[
                'font-playfair text-xl font-bold tracking-tight transition-colors',
                isScrolled ? 'text-primary' : 'text-white',
              ].join(' ')}
            >
              MMK Services
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  'text-sm font-medium transition-colors relative py-1',
                  isActive(link.href)
                    ? 'text-accent'
                    : isScrolled
                    ? 'text-charcoal hover:text-primary'
                    : 'text-white/85 hover:text-white',
                  isActive(link.href) &&
                    'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent after:rounded-full',
                ].join(' ')}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded transition-all duration-200 hover:bg-accent/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((v) => !v)}
            className={[
              'lg:hidden p-2 rounded transition-colors',
              isScrolled ? 'text-primary hover:bg-gray-100' : 'text-white hover:bg-white/10',
            ].join(' ')}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav aria-label="Mobile navigation" className="px-4 pt-3 pb-5 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  'block py-2.5 px-3 rounded text-sm font-medium transition-colors',
                  isActive(link.href)
                    ? 'bg-accent/10 text-accent'
                    : 'text-charcoal hover:bg-gray-50 hover:text-primary',
                ].join(' ')}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <Link
                href="/contact"
                className="block w-full text-center py-3 bg-accent text-white text-sm font-medium rounded hover:bg-accent/90 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
