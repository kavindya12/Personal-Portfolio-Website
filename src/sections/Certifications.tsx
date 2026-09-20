import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { certifications } from '../data/certifications'
import { site } from '../data/site'
import { hasUrl } from '../lib/cn'

export function Certifications() {
  return (
    <section id="certifications" className="border-t border-white/10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle
            index="07"
            eyebrow="Certifications"
            title="Selected credentials"
          />
        </Reveal>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {certifications.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="flex flex-col gap-2 py-5 md:flex-row md:items-baseline md:justify-between">
                <h3 className="text-base font-medium text-foreground md:text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400">
                  {item.issuer} · {item.year}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        {hasUrl(site.certificationsUrl) ? (
          <a
            href={site.certificationsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent"
          >
            View all certifications
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : null}
      </div>
    </section>
  )
}
