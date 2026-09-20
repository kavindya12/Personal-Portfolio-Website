import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { education } from '../data/education'

export function Education() {
  return (
    <section id="education" className="bg-[#0a1220] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle index="06" eyebrow="Education" title="Academic background" />
        </Reveal>
        <div>
          {education.map((item, index) => (
            <Reveal key={`${item.school}-${item.credential}`} delay={index * 0.06}>
              <article className="grid gap-3 border-t border-white/10 py-8 last:border-b md:grid-cols-[200px_1fr] md:gap-12">
                <p className="font-display text-sm tracking-[0.12em] text-slate-400 uppercase">
                  {item.period}
                </p>
                <div>
                  <h3 className="font-display text-xl font-medium text-foreground md:text-2xl">
                    {item.credential}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{item.school}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                    {item.summary}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
