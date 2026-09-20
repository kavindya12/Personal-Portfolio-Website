import type { MouseEvent, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'

type ButtonProps = {
  children: ReactNode
  href?: string
  to?: string
  onClick?: (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  download?: boolean | string
  external?: boolean
  type?: 'button' | 'submit'
}

const variants = {
  primary:
    'bg-accent text-white hover:bg-accent-hover',
  secondary:
    'border border-white/15 bg-transparent text-foreground hover:border-white/30 hover:bg-white/5',
  ghost: 'text-muted hover:text-foreground',
}

export function Button({
  children,
  href,
  to,
  onClick,
  variant = 'primary',
  className,
  download,
  external,
  type = 'button',
}: ButtonProps) {
  const classes = cn(
    'group/button relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-medium transition duration-200',
    variants[variant],
    className,
  )

  const content = (
    <>
      {variant === 'primary' ? (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover/button:translate-x-full" />
      ) : null}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  )

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={classes}
        download={download}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer noopener' : undefined}
      >
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
