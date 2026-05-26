'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  BookOpen,
  BarChart3,
  Shield,
  CheckCircle,
  ArrowRight,
  ChevronRight,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import Card from '@/components/ui/Card'
import { SERVICES, STATS, WHY_MMK_FEATURES } from '@/lib/constants'

// Map string → Lucide icon
const SERVICE_ICONS: Record<string, React.ElementType> = {
  BookOpen,
  BarChart3,
  Shield,
}

/* ─── Hero ──────────────────────────────────────────────────── */
function Hero() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } },
  }

  return (
    <section className="relative min-h-screen bg-primary flex items-center overflow-hidden">
      {/* Geometric grid background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" stroke="white" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        {/* Diagonal teal accent lines */}
        <svg
          viewBox="0 0 1440 900"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <line x1="1440" y1="60" x2="760" y2="900" stroke="rgba(0,128,128,0.18)" strokeWidth="1.5" />
          <line x1="1320" y1="0" x2="640" y2="900" stroke="rgba(0,128,128,0.10)" strokeWidth="1" />
          <line x1="1200" y1="0" x2="900" y2="900" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        </svg>

        {/* Radial vignette */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0d1f3c] opacity-60" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 lg:pt-0 lg:pb-0">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold tracking-widest uppercase mb-6 border border-accent/30 rounded-full px-4 py-1.5 bg-accent/5">
              EU Financial Advisory
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight"
          >
            Precision
            <br />
            <span className="text-accent">Accounting</span>
            <br />
            &amp; Audit Advisory
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="mt-7 text-lg lg:text-xl text-white/65 leading-relaxed max-w-xl font-light"
          >
            EU-compliant financial services across Slovakia, Czech Republic, Netherlands &amp;
            Germany — delivered with precision, discretion, and deep local expertise.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white text-sm font-medium rounded hover:bg-white/10 hover:border-white/60 transition-all duration-200"
            >
              Our Services
              <ChevronRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white text-sm font-medium rounded hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 transition-all duration-200"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  )
}

/* ─── Trust Bar ──────────────────────────────────────────────── */
function TrustBar() {
  return (
    <section className="bg-surface border-b border-gray-100" aria-label="Company credentials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto scrollbar-hide py-6 lg:py-0 lg:grid lg:grid-cols-3 gap-0">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center justify-center px-10 lg:px-6 lg:py-8 text-center border-r border-gray-100 last:border-r-0"
            >
              <span className="font-playfair text-2xl lg:text-3xl font-bold text-accent tabular-nums">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-medium text-charcoal/50 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Services Overview ──────────────────────────────────────── */
function ServicesOverview() {
  const overviewServices = SERVICES.slice(0, 3)

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  }
  const card = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } },
  }

  return (
    <section className="bg-page-bg py-24 lg:py-32" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-14 max-w-xl">
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">
              What We Do
            </p>
            <h2
              id="services-heading"
              className="font-playfair text-4xl lg:text-5xl font-bold text-primary leading-tight"
            >
              Core Service Areas
            </h2>
            <p className="mt-4 text-charcoal/60 leading-relaxed">
              End-to-end financial services designed for EU multi-jurisdiction operations.
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {overviewServices.map((service) => {
            const Icon = SERVICE_ICONS[service.icon] ?? BookOpen
            return (
              <motion.div key={service.id} variants={card}>
                <Card className="group p-8 h-full flex flex-col border-t-2 border-t-transparent hover:border-t-accent transition-all duration-300">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                    <Icon size={22} className="text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="mt-5 inline-flex items-center gap-1.5 text-accent text-sm font-medium hover:gap-2.5 transition-all duration-200"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <AnimatedSection className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/60 hover:text-primary transition-colors border-b border-charcoal/20 hover:border-primary pb-0.5"
          >
            View all 6 services
            <ArrowRight size={14} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}

/* ─── Why MMK ────────────────────────────────────────────────── */
function WhyMMK() {
  return (
    <section className="bg-surface py-24 lg:py-32 border-y border-gray-100" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — copy */}
          <AnimatedSection>
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-4">
              Why MMK Services
            </p>
            <h2
              id="why-heading"
              className="font-playfair text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6"
            >
              Multi-jurisdiction expertise, single point of contact
            </h2>
            <p className="text-charcoal/65 leading-relaxed text-base">
              Managing financial obligations across multiple EU countries is complex. Regulations
              differ, languages differ, deadlines differ. MMK Services was built to handle exactly
              this complexity — giving you a single, dedicated advisory team that understands
              Slovak, Czech, Dutch, and German requirements at the same depth a local firm would,
              but with the coordination and consistency only a multi-jurisdiction specialist can
              provide.
            </p>
          </AnimatedSection>

          {/* Right — feature bullets */}
          <AnimatedSection delay={0.12}>
            <ul className="space-y-5" aria-label="Key capabilities">
              {WHY_MMK_FEATURES.map((feature, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle size={14} className="text-accent" aria-hidden="true" />
                  </div>
                  <span className="text-charcoal/75 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap gap-4 items-center">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors"
              >
                About the firm <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA Banner ─────────────────────────────────────────────── */
function CTABanner() {
  return (
    <section className="bg-primary relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <AnimatedSection className="relative py-20 lg:py-28 text-center max-w-3xl mx-auto px-4 sm:px-6">
        <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-5">
          Ready to Get Started?
        </p>
        <h2
          id="cta-heading"
          className="font-playfair text-4xl lg:text-5xl font-bold text-white leading-tight"
        >
          Simplify your EU financial compliance
        </h2>
        <p className="mt-5 text-white/55 text-lg leading-relaxed font-light">
          Let us handle the complexity across borders. One team, four countries, full compliance.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25 transition-all duration-200 text-sm"
          >
            Schedule a Consultation
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/25 text-white font-medium rounded hover:border-white/50 hover:bg-white/5 transition-all duration-200 text-sm"
          >
            View Services
          </Link>
        </div>
      </AnimatedSection>
    </section>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <WhyMMK />
      <CTABanner />
    </>
  )
}
