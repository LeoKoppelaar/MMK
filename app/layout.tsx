import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dmsans',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: {
    default: 'MMK Services | Accounting & Audit Advisory',
    template: '%s | MMK Services',
  },
  description:
    'MMK Services (IČO 44279949) — EU-compliant accounting, audit, and tax advisory services across Slovakia, Czech Republic, Netherlands, and Germany.',
  keywords: [
    'accounting',
    'audit',
    'tax advisory',
    'Slovakia',
    'Czech Republic',
    'Netherlands',
    'Germany',
    'IFRS',
    'EU compliance',
    'MMK Services',
  ],
  openGraph: {
    title: 'MMK Services | Accounting & Audit Advisory',
    description:
      'EU-compliant financial services across Slovakia, Czech Republic, Netherlands & Germany.',
    type: 'website',
    locale: 'en_EU',
    siteName: 'MMK Services',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-page-bg text-charcoal antialiased">
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
