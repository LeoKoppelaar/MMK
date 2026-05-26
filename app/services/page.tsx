'use client'

import { motion } from 'framer-motion'
import { BookOpen, BarChart3, Shield, FileText, Users, Search, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import Badge from '@/components/ui/Badge'
import { SERVICES, type Jurisdiction } from '@/lib/constants'

const ICON_MAP: Record<string, React.ElementType> = {
  BookOpen,
  BarChart3,
  Shield,
  FileText,
  Users,
  Search,
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Offer"
        title="Our Services"
        subtitle="Specialised accounting, audit, and tax advisory for EU multi-jurisdiction businesses — built around your operational reality."
      />

      {/* Services grid */}
      <section className="bg-page-bg py-20 lg:py-28" aria-labelledby="services-list-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-14">
            <h2 id="services-list-heading" className="sr-only">
              Services list
            </h2>
            <p className="text-charcoal/55 max-w-2xl leading-relaxed">
              Each service is delivered by specialists with deep in-country expertise, ensuring you
              meet local requirements without the overhead of managing multiple local firms.
            </p>
          </AnimatedSection>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon] ?? BookOpen
              return (
                <motion.article
                  key={service.id}
                  variants={cardVariant}
                  className="bg-surface border border-gray-200 rounded-lg shadow-card hover:shadow-card-hover hover:-translate-y-0.5 hover:border-accent/30 transition-all duration-300 group"
                  aria-labelledby={`service-${service.id}-title`}
                >
                  <div className="p-8">
                    {/* Icon + jurisdictions row */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors shrink-0">
                        <Icon size={22} className="text-accent" aria-hidden="true" />
                      </div>
                      <div className="flex flex-wrap gap-1.5 justify-end">
                        {service.jurisdictions.map((j) => (
                          <Badge key={j} code={j as Jurisdiction} />
                        ))}
                      </div>
                    </div>

                    <h3
                      id={`service-${service.id}-title`}
                      className="font-playfair text-xl font-semibold text-primary mb-3"
                    >
                      {service.title}
                    </h3>

                    <p className="text-charcoal/60 text-sm leading-relaxed mb-5">
                      {service.fullDescription}
                    </p>

                    {/* Jurisdiction label strip */}
                    <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {service.jurisdictions.map((j) => (
                          <span key={j} className="text-xs text-charcoal/40">
                            {j === 'SK'
                              ? '🇸🇰'
                              : j === 'CZ'
                              ? '🇨🇿'
                              : j === 'NL'
                              ? '🇳🇱'
                              : '🇩🇪'}{' '}
                          </span>
                        ))}
                        <span className="text-xs text-charcoal/40">
                          {service.jurisdictions.join(' · ')}
                        </span>
                      </div>
                      <Link
                        href="/contact"
                        className="text-xs font-medium text-accent hover:text-accent/80 inline-flex items-center gap-1 transition-colors"
                        aria-label={`Enquire about ${service.title}`}
                      >
                        Enquire <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-surface border-t border-gray-100 py-20" aria-label="Call to action">
        <AnimatedSection className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold text-primary mb-4">
            Not sure which service fits your needs?
          </h2>
          <p className="text-charcoal/55 leading-relaxed mb-8">
            Send us a short note about your business structure and jurisdictions — we will come
            back with a tailored recommendation within one business day.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded hover:bg-accent/90 hover:shadow-md transition-all duration-200 text-sm"
          >
            Get a Free Assessment
            <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </section>
    </>
  )
}
