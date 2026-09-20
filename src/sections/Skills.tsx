import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle index="05" eyebrow="Stack" title="Tools I work with" />
        </Reveal>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.05}>
              <div>
                <h3 className="mb-5 text-[11px] font-medium tracking-[0.24em] text-accent uppercase">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-white/10 pb-3 text-lg text-slate-200 transition hover:text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
