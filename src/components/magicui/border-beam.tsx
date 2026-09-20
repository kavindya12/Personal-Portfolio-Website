import { motion, useReducedMotion } from 'framer-motion'
import type { CSSProperties } from 'react'
import { cn } from '../../lib/cn'

type BorderBeamProps = {
  className?: string
  size?: number
  duration?: number
  delay?: number
  colorFrom?: string
  colorTo?: string
  reverse?: boolean
  borderWidth?: number
}

export function BorderBeam({
  className,
  size = 80,
  duration = 8,
  delay = 0,
  colorFrom = '#60a5fa',
  colorTo = '#3b82f6',
  reverse = false,
  borderWidth = 1,
}: BorderBeamProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) return null

  return (
    <div
      className="pointer-events-none absolute inset-0 rounded-[inherit] [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
      style={{ border: `${borderWidth}px solid transparent` }}
    >
      <motion.div
        className={cn('absolute aspect-square', className)}
        style={
          {
            width: size,
            background: `linear-gradient(to left, ${colorFrom}, ${colorTo}, transparent)`,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          } as CSSProperties
        }
        initial={{ offsetDistance: '0%' }}
        animate={{ offsetDistance: reverse ? ['100%', '0%'] : ['0%', '100%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration,
          delay,
        }}
      />
    </div>
  )
}
