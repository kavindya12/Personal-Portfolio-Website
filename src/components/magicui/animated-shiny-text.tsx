import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type AnimatedShinyTextProps = {
  children: ReactNode
  className?: string
}

export function AnimatedShinyText({ children, className }: AnimatedShinyTextProps) {
  return (
    <span
      className={cn(
        'inline-block bg-[linear-gradient(110deg,#94a3b8_20%,#ffffff_50%,#94a3b8_80%)] bg-size-[200%_100%] bg-clip-text text-transparent animate-shiny-text',
        className,
      )}
    >
      {children}
    </span>
  )
}
