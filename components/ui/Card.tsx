import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export default function Card({ hover = true, className = '', children, ...props }: CardProps) {
  return (
    <div
      className={[
        'bg-surface border border-gray-200 rounded-lg shadow-card',
        hover &&
          'transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 hover:border-accent/30',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}
