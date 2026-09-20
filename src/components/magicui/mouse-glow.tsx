import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return
    const node = ref.current
    if (!node) return

    const onMove = (event: MouseEvent) => {
      node.style.setProperty('--glow-x', `${event.clientX}px`)
      node.style.setProperty('--glow-y', `${event.clientY}px`)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [reduceMotion])

  if (reduceMotion) return null

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      style={{
        background:
          'radial-gradient(420px circle at var(--glow-x, 50%) var(--glow-y, 18%), rgba(59,130,246,0.14), transparent 58%)',
      }}
    />
  )
}
