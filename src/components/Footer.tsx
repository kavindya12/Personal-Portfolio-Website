import { site } from '../data/site'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-8 md:flex-row md:items-center">
        <div>
          <p className="font-display text-sm text-foreground">
            © {new Date().getFullYear()} {site.displayName}
          </p>
          <p className="mt-1 text-sm text-muted">{site.footerTagline}</p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  )
}
