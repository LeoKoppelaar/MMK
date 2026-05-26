import { type Jurisdiction } from '@/lib/constants'

const colorMap: Record<Jurisdiction, string> = {
  SK: 'bg-blue-50 text-blue-700 border-blue-200',
  CZ: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  NL: 'bg-orange-50 text-orange-700 border-orange-200',
  DE: 'bg-gray-100 text-gray-700 border-gray-300',
}

interface BadgeProps {
  code: Jurisdiction
  className?: string
}

export default function Badge({ code, className = '' }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border',
        colorMap[code],
        className,
      ].join(' ')}
    >
      {code}
    </span>
  )
}
