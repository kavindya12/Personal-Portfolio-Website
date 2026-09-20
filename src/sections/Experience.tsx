import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { experience } from '../data/experience'

export function Experience() {
  return (
    <section id="experience" className="bg-[#0a1220] px-4 py-20 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle
            index="04"
            eyebrow="Experience"
            title="Where I've been working"
          />
        </Reveal>

        <div>
          {experience.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.08}>
              <article className="grid gap-4 border-t border-white/10 py-10 last:border-b md:grid-cols-[200px_1fr] md:gap-12">
                <p className="font-display text-sm tracking-[0.12em] text-slate-400 uppercase">
                  {item.period}
                </p>
                <div>
                  <h3 className="font-display text-2xl font-medium text-foreground">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{item.company}</p>
                  <ul className="mt-5 space-y-2">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="text-sm leading-7 text-slate-300">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
