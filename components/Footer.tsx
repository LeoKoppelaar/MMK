'use client'

import { useTranslations } from 'next-intl'
import { Mail, Phone, Globe } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { SITE_CONFIG } from '@/lib/constants'

const NAV_KEYS = ['home', 'services', 'about', 'contact'] as const
const NAV_HREFS: Record<string, string> = {
  home: '/',
  services: '/services',
  about: '/about',
  contact: '/contact',
}

export default function Footer() {
  const t = useTranslations('footer')
  const tn = useTranslations('nav')
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 pb-12 border-b border-white/10">

          {/* Column 1 — Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-accent flex items-center justify-center text-xs font-bold text-white">M</div>
              <span className="font-playfair text-xl font-bold text-white tracking-tight">MMK Services</span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">{t('tagline')}</p>
            <div className="flex items-center gap-2 text-white/40 text-xs">
              <Globe size={13} />
              <span>IČO {SITE_CONFIG.ico} — Registered in Slovakia</span>
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h3 className="text-white/90 text-xs font-semibold uppercase tracking-widest mb-5">{t('navigation')}</h3>
            <ul className="space-y-3">
              {NAV_KEYS.map((key) => (
                <li key={key}>
                  <Link href={NAV_HREFS[key]} className="text-white/55 hover:text-white text-sm transition-colors duration-200">
                    {tn(key)}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-accent hover:text-accent/80 text-sm font-medium transition-colors duration-200">
                  {tn('cta')} →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h3 className="text-white/90 text-xs font-semibold uppercase tracking-widest mb-5">{t('contact')}</h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-accent mt-0.5 shrink-0" />
                <span className="text-white/55 text-sm">{SITE_CONFIG.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-accent mt-0.5 shrink-0" />
                <span className="text-white/55 text-sm">{SITE_CONFIG.phone}</span>
              </li>
            </ul>
            <div className="mt-5 flex gap-2 flex-wrap">
              {(['🇸🇰 SK', '🇳🇱 NL', '🇩🇪 DE'] as const).map((item) => (
                <span key={item} className="text-xs text-white/40 border border-white/10 rounded px-2 py-0.5">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            &copy; {year} {SITE_CONFIG.name}, IČO {SITE_CONFIG.ico}. {t('rights')}
          </p>
          <p className="text-white/20 text-xs">{t('advisory')}</p>
        </div>
      </div>
    </footer>
  )
}
