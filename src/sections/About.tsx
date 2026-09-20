import { NumberTicker } from '../components/magicui/number-ticker'
import { Reveal } from '../components/Reveal'
import { experience } from '../data/experience'
import { site } from '../data/site'

const currentRole = experience[0]
const [lead, ...rest] = site.about

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const numericMatch = /^(\d+)(.*)$/.exec(value)
  const target = numericMatch ? Number(numericMatch[1]) : null
  const suffix = numericMatch?.[2] ?? ''

  return (
    <div className="flex flex-col gap-1 py-5 md:flex-row md:items-end md:justify-between md:gap-4">
      <p className="text-sm leading-6 text-slate-400">{label}</p>
      <p className="font-display text-3xl font-medium tracking-tight text-foreground md:text-right md:text-4xl">
        {target === null ? (
          value
        ) : (
          <NumberTicker value={target} padStart={2} suffix={suffix} />
        )}
      </p>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-white/10 px-4 py-20 sm:px-6 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-64 w-64 translate-x-1/4 -translate-y-1/4 rounded-full bg-accent/10 blur-3xl md:h-[28rem] md:w-[28rem]"
      />

      <div className="relative mx-auto grid w-full min-w-0 max-w-6xl gap-16 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-24">
        <Reveal className="min-w-0">
          <div className="relative min-w-0">
            <span className="pointer-events-none absolute -top-8 left-0 font-display text-[4.25rem] leading-none font-medium text-white/5 select-none md:-top-12 md:text-[8rem]">
              01
            </span>
            <p className="relative text-[11px] font-medium tracking-[0.28em] text-accent uppercase">
              About
            </p>
            <h2 className="font-display relative mt-4 max-w-xl text-[1.75rem] leading-[1.15] font-medium tracking-tight text-foreground md:text-5xl">
              Focused on
              <br />
              the frontend.
            </h2>
            <p className="font-display relative mt-8 max-w-xl min-w-0 text-lg leading-snug font-medium tracking-tight text-foreground md:mt-10 md:text-[1.85rem] md:leading-[1.25]">
              {lead}
            </p>
            <div className="mt-8 max-w-xl min-w-0 space-y-5 text-base leading-8 text-slate-300">
              {rest.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2">
              {site.heroStack.map((item) => (
                <li
                  key={item}
                  className="text-xs tracking-[0.18em] text-muted uppercase md:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0">
          <aside className="w-full max-w-full min-w-0 lg:border-l lg:border-white/10 lg:pl-10">
            <p className="text-[11px] font-medium tracking-[0.28em] text-accent uppercase">
              Now
            </p>
            <p className="font-display mt-4 text-2xl font-medium tracking-tight text-foreground">
              {currentRole.company}
            </p>
            <p className="mt-1 text-sm text-slate-300">{currentRole.role}</p>
            <p className="mt-2 text-xs tracking-[0.16em] text-muted uppercase">
              {currentRole.period}
            </p>

            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {site.aboutStats.map((stat) => (
                <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
