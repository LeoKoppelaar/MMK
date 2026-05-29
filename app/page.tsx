'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    const preferred =
      typeof navigator !== 'undefined' && navigator.language.startsWith('sk') ? 'sk' : 'en'
    router.replace(`/${preferred}`)
  }, [router])

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <span className="text-white/20 text-xs tracking-widest uppercase">Loading…</span>
    </div>
  )
}
