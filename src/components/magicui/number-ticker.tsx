import { useInView, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { cn } from '../../lib/cn'

type NumberTickerProps = {
  value: number
  className?: string
  delay?: number
  padStart?: number
  suffix?: string
}

function formatValue(latest: number, padStart: number, suffix: string) {
  const rounded = Math.round(latest)
  const digits = padStart > 0 ? String(rounded).padStart(padStart, '0') : String(rounded)
  return `${digits}${suffix}`
}

export function NumberTicker({
  value,
  className,
  delay = 0,
  padStart = 0,
  suffix = '',
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduceMotion = useReducedMotion()
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 })
  const isInView = useInView(ref, { once: true, margin: '0px' })

  useEffect(() => {
    if (reduceMotion) {
      motionValue.set(value)
      return
    }
    if (!isInView) return
    const timer = window.setTimeout(() => motionValue.set(value), delay * 1000)
    return () => window.clearTimeout(timer)
  }, [delay, isInView, motionValue, reduceMotion, value])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest, padStart, suffix)
      }
    })
    return unsubscribe
  }, [padStart, springValue, suffix])

  return (
    <span ref={ref} className={cn('inline-block tabular-nums tracking-tight', className)}>
      {formatValue(reduceMotion ? value : 0, padStart, suffix)}
    </span>
  )
}
