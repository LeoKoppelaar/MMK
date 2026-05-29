export const SITE_CONFIG = {
  name: 'MMK Services',
  ico: '44279949',
  tagline: 'Precision Accounting & Audit Advisory',
  description:
    'EU-compliant financial services across Slovakia, Netherlands & Germany.',
  email: 'poradenstvo@mmkservices.eu',
  phone: '+421 905 258 575',
  address: 'Mankovce 162, 951 91 Mankovce',
  countries: ['Slovakia', 'Netherlands', 'Germany'],
  countryCodes: ['SK', 'NL', 'DE'] as const,
  founded: '2010',
}

export const NAV_LINKS = [
  { key: 'home', href: '/' },
  { key: 'services', href: '/services' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
]

export type Jurisdiction = 'SK' | 'NL' | 'DE'

export interface Service {
  id: string
  icon: string
  jurisdictions: Jurisdiction[]
}

export const SERVICES: Service[] = [
  { id: 'accounting',            icon: 'BookOpen',  jurisdictions: ['SK', 'NL', 'DE'] },
  { id: 'consolidated-reporting',icon: 'BarChart3', jurisdictions: ['SK', 'NL', 'DE'] },
  { id: 'audit',                 icon: 'Shield',    jurisdictions: ['SK', 'NL', 'DE'] },
  { id: 'tax',                   icon: 'FileText',  jurisdictions: ['SK', 'NL', 'DE'] },
  { id: 'payroll',               icon: 'Users',     jurisdictions: ['SK'] },
  { id: 'due-diligence',         icon: 'Search',    jurisdictions: ['SK', 'NL', 'DE'] },
]

export const VALUE_KEYS = ['precision', 'confidentiality', 'responsiveness'] as const
