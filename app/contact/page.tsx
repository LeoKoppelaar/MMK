'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Send } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import { SITE_CONFIG, CONTACT_SUBJECTS } from '@/lib/constants'

interface FormData {
  name: string
  email: string
  company: string
  subject: string
  message: string
}

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  company: '',
  subject: CONTACT_SUBJECTS[0],
  message: '',
}

function InputField({
  id,
  label,
  type = 'text',
  required = false,
  value,
  onChange,
  placeholder,
  autoComplete,
}: {
  id: string
  label: string
  type?: string
  required?: boolean
  value: string
  onChange: (v: string) => void
  placeholder?: string
  autoComplete?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-wider text-charcoal/50 mb-2">
        {label}
        {required && <span className="text-accent ml-1" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all duration-200"
      />
    </div>
  )
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const set = (field: keyof FormData) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 1400))
    // No backend — treat as always success in this demo
    setStatus('success')
    setForm(INITIAL_FORM)
  }

  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact MMK Services"
        subtitle="Reach out to discuss your needs — we respond to all enquiries within one business day."
      />

      <section className="bg-page-bg py-20 lg:py-28" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="contact-heading" className="sr-only">Contact form and details</h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left — contact details (2 cols) */}
            <AnimatedSection className="lg:col-span-2 space-y-8">
              <div>
                <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-4">
                  Direct Contact
                </p>
                <h3 className="font-playfair text-2xl font-bold text-primary mb-6">
                  We&apos;re here to help
                </h3>
                <ul className="space-y-5" aria-label="Contact information">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/40 mb-0.5">
                        Email
                      </p>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-sm text-charcoal hover:text-accent transition-colors"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/40 mb-0.5">
                        Phone
                      </p>
                      <a
                        href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                        className="text-sm text-charcoal hover:text-accent transition-colors"
                      >
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/40 mb-0.5">
                        Address
                      </p>
                      <p className="text-sm text-charcoal/75 leading-relaxed">
                        Mankovce 162
                        <br />
                        951 91 Mankovce
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Response time note */}
              <div className="bg-surface border border-gray-200 rounded-lg p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/40 mb-2">
                  Response Time
                </p>
                <p className="text-sm text-charcoal/65 leading-relaxed">
                  We aim to respond to all enquiries within{' '}
                  <span className="text-accent font-semibold">1 business day</span>. For urgent
                  matters, please call us directly.
                </p>
              </div>
            </AnimatedSection>

            {/* Right — form (3 cols) */}
            <AnimatedSection delay={0.12} className="lg:col-span-3">
              <div className="bg-surface border border-gray-200 rounded-xl shadow-card p-8 lg:p-10">
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center text-center py-10 gap-4"
                      role="status"
                      aria-live="polite"
                    >
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                        <CheckCircle2 size={32} className="text-accent" />
                      </div>
                      <h3 className="font-playfair text-2xl font-bold text-primary">
                        Message received
                      </h3>
                      <p className="text-charcoal/60 max-w-xs leading-relaxed text-sm">
                        Thank you for reaching out. A member of our team will be in touch within
                        one business day.
                      </p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="mt-4 text-sm text-accent font-medium hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      noValidate
                      aria-label="Contact form"
                    >
                      <h3 className="font-playfair text-xl font-semibold text-primary mb-6">
                        Send us a message
                      </h3>

                      <div className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <InputField
                            id="name"
                            label="Full Name"
                            required
                            value={form.name}
                            onChange={set('name')}
                            placeholder="Jan Novák"
                            autoComplete="name"
                          />
                          <InputField
                            id="email"
                            label="Email Address"
                            type="email"
                            required
                            value={form.email}
                            onChange={set('email')}
                            placeholder="jan@company.com"
                            autoComplete="email"
                          />
                        </div>

                        <InputField
                          id="company"
                          label="Company"
                          value={form.company}
                          onChange={set('company')}
                          placeholder="Acme s.r.o."
                          autoComplete="organization"
                        />

                        {/* Subject dropdown */}
                        <div>
                          <label
                            htmlFor="subject"
                            className="block text-xs font-semibold uppercase tracking-wider text-charcoal/50 mb-2"
                          >
                            Subject <span className="text-accent" aria-hidden="true">*</span>
                          </label>
                          <select
                            id="subject"
                            required
                            value={form.subject}
                            onChange={(e) => set('subject')(e.target.value)}
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all duration-200 cursor-pointer"
                          >
                            {CONTACT_SUBJECTS.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Message */}
                        <div>
                          <label
                            htmlFor="message"
                            className="block text-xs font-semibold uppercase tracking-wider text-charcoal/50 mb-2"
                          >
                            Message <span className="text-accent" aria-hidden="true">*</span>
                          </label>
                          <textarea
                            id="message"
                            required
                            rows={5}
                            value={form.message}
                            onChange={(e) => set('message')(e.target.value)}
                            placeholder="Describe your needs — jurisdiction(s), company type, current situation..."
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all duration-200 resize-y min-h-[120px]"
                          />
                        </div>

                        {status === 'error' && (
                          <div
                            className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded px-4 py-3"
                            role="alert"
                          >
                            <AlertCircle size={16} />
                            Something went wrong. Please try again or email us directly.
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={status === 'submitting'}
                          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-white text-sm font-medium rounded hover:bg-accent/90 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                        >
                          {status === 'submitting' ? (
                            <>
                              <svg
                                className="animate-spin h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8v8z"
                                />
                              </svg>
                              Sending…
                            </>
                          ) : (
                            <>
                              <Send size={16} />
                              Send Message
                            </>
                          )}
                        </button>

                        <p className="text-xs text-charcoal/35 text-center">
                          Your data is handled in accordance with GDPR. We will never share your
                          information with third parties.
                        </p>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
