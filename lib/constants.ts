export const SITE_CONFIG = {
  name: 'MMK Services',
  ico: '44279949',
  tagline: 'Precision Accounting & Audit Advisory',
  description:
    'EU-compliant financial services across Slovakia, Czech Republic, Netherlands & Germany.',
  email: 'mmkservices@me.com',
  phone: '+421 905 258 575',
  address: 'Mankovce 162, 951 91 Mankovce',
  countries: ['Slovakia', 'Czech Republic', 'Netherlands', 'Germany'],
  countryCodes: ['SK', 'CZ', 'NL', 'DE'] as const,
  founded: '2010',
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export type Jurisdiction = 'SK' | 'CZ' | 'NL' | 'DE'

export interface Service {
  id: string
  title: string
  description: string
  fullDescription: string
  icon: string
  jurisdictions: Jurisdiction[]
}

export const SERVICES: Service[] = [
  {
    id: 'accounting',
    title: 'Accounting & Bookkeeping',
    description:
      'Comprehensive bookkeeping compliant with local GAAP standards across all operating jurisdictions.',
    fullDescription:
      'Our accounting and bookkeeping services provide end-to-end financial record management, ensuring full compliance with local GAAP standards in Slovakia, Czech Republic, Netherlands, and Germany. We handle chart of accounts setup, monthly closings, bank reconciliations, and financial statement preparation — giving you a clean, audit-ready ledger at every reporting date.',
    icon: 'BookOpen',
    jurisdictions: ['SK', 'CZ', 'NL', 'DE'],
  },
  {
    id: 'consolidated-reporting',
    title: 'Consolidated Reporting',
    description:
      'Group consolidation and IFRS-compliant financial statements for multi-entity EU structures.',
    fullDescription:
      'We prepare consolidated financial statements under IFRS and local GAAP for complex group structures. Our team manages intercompany eliminations, foreign currency translation, and minority interest calculations, delivering clear, auditor-ready consolidation packages that meet EU regulatory expectations.',
    icon: 'BarChart3',
    jurisdictions: ['SK', 'CZ', 'NL', 'DE'],
  },
  {
    id: 'audit',
    title: 'Audit & Assurance',
    description:
      'Audit workpaper preparation, statutory audit support, and assurance services for EU entities.',
    fullDescription:
      'We support statutory audit processes by preparing comprehensive audit workpapers, detailed documentation packages, and facilitating auditor requests. Our assurance services extend to internal control reviews and agreed-upon procedures, providing confidence in the quality and reliability of your financial reporting.',
    icon: 'Shield',
    jurisdictions: ['SK', 'CZ', 'NL', 'DE'],
  },
  {
    id: 'tax',
    title: 'Tax Filings (VAT/CIT)',
    description:
      'VAT returns, corporate income tax filings, and cross-border tax compliance across SK, CZ, NL, and DE.',
    fullDescription:
      'We manage VAT registration, periodic returns, and corporate income tax filings across all four jurisdictions. Our tax team stays current with local legislative changes, ensuring timely and accurate submissions that minimise compliance risk and avoid penalties. We also advise on cross-border transfer pricing documentation.',
    icon: 'FileText',
    jurisdictions: ['SK', 'CZ', 'NL', 'DE'],
  },
  {
    id: 'payroll',
    title: 'Payroll Administration',
    description:
      'End-to-end payroll processing, social security contributions, and employment tax compliance.',
    fullDescription:
      'Our payroll services cover gross-to-net calculations, statutory deductions, social and health insurance contributions, and payslip generation. We ensure full compliance with local labour law, handle all payroll-related monthly filings, and provide clear payroll reports for management review.',
    icon: 'Users',
    jurisdictions: ['SK', 'CZ'],
  },
  {
    id: 'due-diligence',
    title: 'Due Diligence Support',
    description:
      'Financial due diligence for M&A transactions, investor reporting, and cross-border restructuring.',
    fullDescription:
      'We provide financial due diligence support for acquisitions, investments, and corporate restructuring transactions. Our deliverables include quality of earnings analysis, normalised EBITDA bridges, working capital assessments, and red-flag reports — all tailored to the expectations of investors, lenders, and transaction advisors.',
    icon: 'Search',
    jurisdictions: ['SK', 'CZ', 'NL', 'DE'],
  },
]

export const STATS = [
  { value: '4', label: 'Countries' },
  { value: 'Slovak GAAP', label: 'Compliant' },
  { value: 'IFRS', label: 'Ready' },
]

export const WHY_MMK_FEATURES = [
  'Multi-jurisdiction GAAP expertise across 4 EU countries',
  'IFRS-compliant statements for cross-border group structures',
  'Dedicated account manager with local-language support',
  'Strict GDPR-compliant data handling and confidentiality',
]

export const VALUES = [
  {
    title: 'Precision',
    description:
      'We deliver meticulous, error-free work — because in accounting, every decimal matters and every deadline is a commitment.',
  },
  {
    title: 'Confidentiality',
    description:
      'Client data is handled with the highest standards of professional discretion, full GDPR compliance, and secure infrastructure.',
  },
  {
    title: 'Responsiveness',
    description:
      'Timely, clear communication across time zones and jurisdictions — you always have a single point of contact and a direct answer.',
  },
]

export const TEAM = [
  {
    name: 'M. Kováč',
    title: 'Managing Partner',
    country: '🇸🇰',
    countryName: 'Slovakia',
    bio: 'Over 15 years of experience in statutory accounting and financial advisory across Central Europe.',
  },
  {
    name: 'J. Novák',
    title: 'Senior Auditor',
    country: '🇨🇿',
    countryName: 'Czech Republic',
    bio: 'Specialises in audit workpaper preparation and assurance engagements for listed and private entities.',
  },
  {
    name: 'A. van Berg',
    title: 'Tax Advisory Lead',
    country: '🇳🇱',
    countryName: 'Netherlands',
    bio: 'Expert in EU cross-border VAT structures, transfer pricing documentation, and Dutch corporate tax compliance.',
  },
]

export const CONTACT_SUBJECTS = [
  'Accounting & Bookkeeping',
  'Consolidated Reporting',
  'Audit & Assurance',
  'Tax Filings (VAT/CIT)',
  'Payroll Administration',
  'Due Diligence Support',
  'Other',
]
