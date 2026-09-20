import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { cn } from '../../lib/cn'

type Circle = {
  x: number
  y: number
  translateX: number
  translateY: number
  size: number
  alpha: number
  targetAlpha: number
  dx: number
  dy: number
  magnetism: number
}

type ParticlesProps = {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  size?: number
  color?: string
}

function hexToRgb(hex: string) {
  const normalized = hex.replace('#', '')
  const full =
    normalized.length === 3
      ? normalized
          .split('')
          .map((char) => char + char)
          .join('')
      : normalized
  const value = Number.parseInt(full, 16)
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255]
}

export function Particles({
  className,
  quantity = 55,
  staticity = 50,
  ease = 50,
  size = 0.6,
  color = '#93c5fd',
}: ParticlesProps) {
  const reduceMotion = useReducedMotion()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const circles = useRef<Circle[]>([])
  const mouse = useRef({ x: 0, y: 0 })
  const canvasSize = useRef({ w: 0, h: 0 })
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1
  const raf = useRef<number | null>(null)

  useEffect(() => {
    if (reduceMotion) return
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    context.current = canvas.getContext('2d')
    const rgb = hexToRgb(color)

    function circleParams(): Circle {
      return {
        x: Math.floor(Math.random() * canvasSize.current.w),
        y: Math.floor(Math.random() * canvasSize.current.h),
        translateX: 0,
        translateY: 0,
        size: Math.floor(Math.random() * 2) + size,
        alpha: 0,
        targetAlpha: Number((Math.random() * 0.5 + 0.08).toFixed(2)),
        dx: (Math.random() - 0.5) * 0.16,
        dy: (Math.random() - 0.5) * 0.16,
        magnetism: 0.1 + Math.random() * 4,
      }
    }

    function resizeCanvas() {
      if (!container || !canvas || !context.current) return
      canvasSize.current.w = container.offsetWidth
      canvasSize.current.h = container.offsetHeight
      canvas.width = canvasSize.current.w * dpr
      canvas.height = canvasSize.current.h * dpr
      canvas.style.width = `${canvasSize.current.w}px`
      canvas.style.height = `${canvasSize.current.h}px`
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0)
      circles.current = []
      for (let i = 0; i < quantity; i += 1) {
        circles.current.push(circleParams())
      }
    }

    function drawCircle(circle: Circle) {
      if (!context.current) return
      const { x, y, translateX, translateY, size: radius, alpha } = circle
      context.current.translate(translateX, translateY)
      context.current.beginPath()
      context.current.arc(x, y, radius, 0, Math.PI * 2)
      context.current.fillStyle = `rgba(${rgb.join(', ')}, ${alpha})`
      context.current.fill()
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function onMouseMove(event: MouseEvent) {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      const x = event.clientX - rect.left - canvasSize.current.w / 2
      const y = event.clientY - rect.top - canvasSize.current.h / 2
      mouse.current.x = x
      mouse.current.y = y
    }

    function animate() {
      if (!context.current) return
      context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h)
      circles.current.forEach((circle, index) => {
        circle.alpha += 0.02
        if (circle.alpha > circle.targetAlpha) circle.alpha = circle.targetAlpha
        circle.x += circle.dx
        circle.y += circle.dy
        circle.translateX +=
          (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) / ease
        circle.translateY +=
          (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) / ease
        drawCircle(circle)

        if (
          circle.x < -circle.size ||
          circle.x > canvasSize.current.w + circle.size ||
          circle.y < -circle.size ||
          circle.y > canvasSize.current.h + circle.size
        ) {
          circles.current[index] = circleParams()
        }
      })
      raf.current = window.requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      if (raf.current) window.cancelAnimationFrame(raf.current)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [color, dpr, ease, quantity, reduceMotion, size, staticity])

  if (reduceMotion) return null

  return (
    <div ref={containerRef} className={cn('pointer-events-none absolute inset-0', className)} aria-hidden>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}
