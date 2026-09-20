import { useEffect, useRef, useState } from 'react'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { site } from '../data/site'

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const numericMatch = /^(\d+)(.*)$/.exec(value)
  const target = numericMatch ? Number(numericMatch[1]) : null
  const suffix = numericMatch?.[2] ?? ''
  const [count, setCount] = useState(0)
  const started = useRef(false)
  const nodeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (target === null) return
    const el = nodeRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / 900, 1)
          setCount(Math.round(target * progress))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={nodeRef} className="px-1 py-4 md:px-6 md:py-6">
      <p className="font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl">
        {target === null ? value : `${String(count).padStart(2, '0')}${suffix}`}
      </p>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="border-t border-white/10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <Reveal>
            <SectionTitle
              index="01"
              eyebrow="About"
              title="A little about me"
            />
            <div className="space-y-5 text-base leading-8 text-slate-300">
              {site.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="mt-16 grid grid-cols-2 border-y border-white/10 md:grid-cols-4">
            {site.aboutStats.map((stat) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
