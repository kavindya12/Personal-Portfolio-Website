import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { site } from '../data/site'
import { SocialLinks } from './SocialLinks'

const footerNav = [
  { label: 'Work', hash: 'projects' },
  { label: 'About', hash: 'about' },
  { label: 'Experience', hash: 'experience' },
  { label: 'Contact', hash: 'contact' },
]

export function Footer() {
  const location = useLocation()
  const navigate = useNavigate()
  const year = new Date().getFullYear()

  function goToSection(hash: string) {
    if (location.pathname !== '/') {
      navigate(`/#${hash}`)
      return
    }

    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    window.history.replaceState(null, '', `/#${hash}`)
  }

  function backToTop() {
    if (location.pathname !== '/') {
      navigate('/')
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
    window.history.replaceState(null, '', '/')
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/2 h-52 w-full max-w-lg -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto w-full min-w-0 max-w-6xl px-4 pt-16 sm:px-6 md:pt-20">
        <div className="grid min-w-0 gap-12 md:grid-cols-[minmax(0,1.4fr)_1fr_1fr] md:gap-16">
          <div className="min-w-0">
            <p className="font-display text-sm font-semibold tracking-[0.26em] text-foreground">
              {site.shortName}
            </p>
            <p className="mt-5 max-w-sm text-2xl leading-snug font-medium tracking-tight text-foreground md:text-[1.75rem]">
              {site.headline}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-300">
              {site.footerTagline}
            </p>
          </div>

          <div>
            <p className="mb-5 text-[11px] font-medium tracking-[0.28em] text-accent uppercase">
              Index
            </p>
            <nav className="flex flex-col">
              {footerNav.map((item) => (
                <button
                  key={item.hash}
                  type="button"
                  onClick={() => goToSection(item.hash)}
                  className="group flex items-center justify-between border-b border-white/10 py-3 text-left font-display text-lg text-foreground transition duration-300 hover:text-accent"
                >
                  {item.label}
                  <ArrowUpRight className="h-4 w-4 text-muted opacity-0 transition duration-300 group-hover:opacity-100 group-hover:text-accent" />
                </button>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-5 text-[11px] font-medium tracking-[0.28em] text-accent uppercase">
              Status
            </p>
            <p className="font-display text-lg text-foreground">Currently at VastFactor</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">Based in {site.location}</p>
            <a
              href={site.resumePath}
              download={site.resumeFileName}
              className="group mt-6 inline-flex items-center gap-2 text-sm text-foreground transition duration-300 hover:text-accent"
            >
              Resume
              <ArrowUpRight className="h-3.5 w-3.5 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="mt-14 max-w-full truncate select-none overflow-hidden font-display text-[16vw] leading-[0.78] font-medium tracking-[-0.07em] text-white/5 md:mt-16 md:text-[9.5rem]"
        >
          {site.shortName}
        </p>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © {year} {site.displayName}
          </p>
          <button
            type="button"
            onClick={backToTop}
            className="inline-flex items-center gap-2 self-start text-sm text-muted transition duration-300 hover:text-foreground sm:self-auto"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
