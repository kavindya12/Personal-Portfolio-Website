import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { services } from '../data/site'

export function WhatIDo() {
  return (
    <section className="bg-[#0a1220] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle
            index="02"
            eyebrow="Practice"
            title="What I work on"
          />
        </Reveal>
        <div>
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <article className="group grid gap-3 border-t border-white/10 py-8 last:border-b md:grid-cols-[88px_220px_1fr] md:items-start md:gap-8">
                <span className="font-display text-3xl font-medium text-white/20 transition group-hover:text-accent">
                  0{index + 1}
                </span>
                <h3 className="font-display text-2xl font-medium text-foreground">
                  {service.title}
                </h3>
                <p className="max-w-xl text-base leading-7 text-slate-300">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
