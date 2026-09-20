import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { SocialLinks } from '../components/SocialLinks'
import { site } from '../data/site'
import { hasUrl } from '../lib/cn'

export function Contact() {
  const hasContactLinks =
    hasUrl(site.email) || hasUrl(site.linkedin) || hasUrl(site.github)

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.16),transparent_58%)]" />
      <Reveal>
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-5 text-[11px] font-medium tracking-[0.28em] text-accent uppercase">
            Contact
          </p>
          <h2 className="font-display text-[1.85rem] leading-tight font-medium tracking-tight text-foreground sm:text-4xl md:text-7xl md:leading-[0.95]">
            {site.contactHeading}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-300">
            {site.contactBody}
          </p>
          <div className="mt-10">
            {hasContactLinks ? (
              <SocialLinks variant="buttons" />
            ) : (
              <Button href={site.resumePath} download={site.resumeFileName}>
                Download resume
              </Button>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
