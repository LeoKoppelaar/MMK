'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Target, Eye, Heart, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import Card from '@/components/ui/Card'
import { SITE_CONFIG, VALUES, TEAM } from '@/lib/constants'

const VALUE_ICONS = [Target, Eye, Heart]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
}
const itemVariant = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Firm"
        title="About MMK Services"
        subtitle="A specialist EU financial advisory firm built on precision, discretion, and cross-border expertise."
      />

      {/* Company overview */}
      <section className="bg-page-bg py-20 lg:py-28" aria-labelledby="overview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-4">
                Who We Are
              </p>
              <h2
                id="overview-heading"
                className="font-playfair text-4xl font-bold text-primary leading-tight mb-6"
              >
                Built for the complexity of EU operations
              </h2>
              <div className="space-y-4 text-charcoal/65 leading-relaxed">
                <p>
                  MMK Services was founded to fill a specific gap: growing European businesses need
                  accounting and advisory teams that understand the regulatory environments of
                  multiple jurisdictions across Europe.
                </p>
                <p>
                  We operate across Slovakia, Czech Republic, the Netherlands, and Germany,
                  combining deep local expertise with the coordination of a single, integrated
                  team. Our clients range from privately held companies expanding across Central
                  Europe to international groups with EU holding structures.
                </p>
                <p>
                  We speak the language of each jurisdiction — literally and regulatorily — and we
                  handle the compliance burden so you can focus on running your business.
                </p>
              </div>
            </AnimatedSection>

            {/* Fact card */}
            <AnimatedSection delay={0.14}>
              <div className="bg-surface border border-gray-200 rounded-xl p-8 lg:p-10 shadow-card">
                <h3 className="font-playfair text-xl font-semibold text-primary mb-6">
                  At a Glance
                </h3>
                <dl className="space-y-5">
                  {[
                    { label: 'Registered Name', value: SITE_CONFIG.name },
                    { label: 'Founded', value: SITE_CONFIG.founded },
                    { label: 'Operating Countries', value: 'SK, CZ, NL, DE' },
                    { label: 'Standards', value: 'Slovak GAAP · Czech GAAP · NL GAAP · HGB · IFRS' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between gap-4 border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-charcoal/40">
                        {label}
                      </dt>
                      <dd className="text-sm font-medium text-charcoal text-right">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-primary py-16 relative overflow-hidden" aria-label="Mission statement">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mission-grid" width="56" height="56" patternUnits="userSpaceOnUse">
                <path d="M 56 0 L 0 0 0 56" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mission-grid)" />
          </svg>
        </div>
        <AnimatedSection className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-5">
            Our Mission
          </p>
          <blockquote className="font-playfair text-2xl lg:text-3xl font-medium text-white leading-relaxed">
            &ldquo;To remove the friction of EU multi-jurisdiction compliance, so that every client
            can operate across borders with the same confidence as they do at home.&rdquo;
          </blockquote>
        </AnimatedSection>
      </section>

      {/* Values */}
      <section className="bg-page-bg py-20 lg:py-28" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-14 text-center">
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">
              Our Principles
            </p>
            <h2
              id="values-heading"
              className="font-playfair text-4xl font-bold text-primary"
            >
              What guides our work
            </h2>
          </AnimatedSection>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {VALUES.map((value, i) => {
              const Icon = VALUE_ICONS[i] ?? CheckCircle
              return (
                <motion.div key={value.title} variants={itemVariant}>
                  <Card className="p-8 h-full flex flex-col">
                    <div className="w-11 h-11 rounded-lg bg-primary/8 flex items-center justify-center mb-5">
                      <Icon size={22} className="text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed flex-1">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-surface border-t border-gray-100 py-20 lg:py-28" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-14">
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">
              The Team
            </p>
            <h2 id="team-heading" className="font-playfair text-4xl font-bold text-primary">
              Our Team
            </h2>
          </AnimatedSection>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {TEAM.map((member) => (
              <motion.div key={member.name} variants={itemVariant}>
                <Card className="p-8 text-center flex flex-col items-center">
                  {/* Avatar placeholder */}
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="font-playfair text-2xl font-bold text-primary" aria-hidden="true">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-2xl mb-2" role="img" aria-label={member.countryName}>
                    {member.country}
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-primary">
                    {member.name}
                  </h3>
                  <p className="text-accent text-xs font-semibold mt-1 mb-3">{member.title}</p>
                  <p className="text-charcoal/55 text-sm leading-relaxed">{member.bio}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-page-bg border-t border-gray-100 py-20">
        <AnimatedSection className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold text-primary mb-4">
            Work with us
          </h2>
          <p className="text-charcoal/55 leading-relaxed mb-8">
            Whether you are setting up a new EU entity or need ongoing advisory support, we are
            ready to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white text-sm font-medium rounded hover:bg-accent/90 transition-colors"
          >
            Get in Touch <ArrowRight size={15} />
          </Link>
        </AnimatedSection>
      </section>
    </>
  )
}
