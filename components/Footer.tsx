import Link from 'next/link'
import { Mail, Phone, Globe } from 'lucide-react'
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 pb-12 border-b border-white/10">
          {/* Column 1 — Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-accent flex items-center justify-center text-xs font-bold text-white">
                M
              </div>
              <span className="font-playfair text-xl font-bold text-white tracking-tight">
                MMK Services
              </span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              EU-compliant accounting, audit, and tax advisory services for businesses operating
              across Central and Western Europe.
            </p>
            <div className="flex items-center gap-2 text-white/40 text-xs">
              <Globe size={13} />
              <span>IČO {SITE_CONFIG.ico} — Registered in Slovakia</span>
            </div>
          </div>

          {/* Column 2 — Quick links */}
          <div>
            <h3 className="text-white/90 text-xs font-semibold uppercase tracking-widest mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-accent hover:text-accent/80 text-sm font-medium transition-colors duration-200"
                >
                  Get in Touch →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h3 className="text-white/90 text-xs font-semibold uppercase tracking-widest mb-5">
              Contact
            </h3>
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

            {/* Jurisdiction flags */}
            <div className="mt-5 flex gap-2 flex-wrap">
              {(['🇸🇰 SK', '🇨🇿 CZ', '🇳🇱 NL', '🇩🇪 DE'] as const).map((item) => (
                <span
                  key={item}
                  className="text-xs text-white/40 border border-white/10 rounded px-2 py-0.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            &copy; {year} {SITE_CONFIG.name}, IČO {SITE_CONFIG.ico}. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Accounting &amp; Audit Advisory across the EU
          </p>
        </div>
      </div>
    </footer>
  )
}
