import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

type BlurFadeProps = {
  children: ReactNode
  className?: string
  duration?: number
  delay?: number
  offset?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  inView?: boolean
  blur?: string
}

export function BlurFade({
  children,
  className,
  duration = 0.55,
  delay = 0,
  offset = 18,
  direction = 'up',
  inView = true,
  blur = '8px',
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y'
  const from = direction === 'right' || direction === 'down' ? -offset : offset

  const variants: Variants = {
    hidden: {
      [axis]: from,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      [axis]: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
  }

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      whileInView={inView ? 'visible' : undefined}
      animate={inView ? undefined : 'visible'}
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
