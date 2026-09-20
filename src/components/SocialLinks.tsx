import { Mail } from 'lucide-react'
import type { ReactNode } from 'react'
import { site } from '../data/site'
import { hasUrl } from '../lib/cn'
import { GitHubIcon, LinkedInIcon } from './BrandIcons'

type SocialLink = {
  label: string
  href: string
  icon: ReactNode
  external: boolean
}

const iconClass = 'h-4 w-4'

function getSocialLinks(): SocialLink[] {
  const links: Array<SocialLink | null> = [
    hasUrl(site.email)
      ? {
          label: 'Email Me',
          href: `mailto:${site.email}`,
          icon: <Mail className={iconClass} />,
          external: false,
        }
      : null,
    hasUrl(site.linkedin)
      ? {
          label: 'LinkedIn',
          href: site.linkedin,
          icon: <LinkedInIcon className={iconClass} />,
          external: true,
        }
      : null,
    hasUrl(site.github)
      ? {
          label: 'GitHub',
          href: site.github,
          icon: <GitHubIcon className={iconClass} />,
          external: true,
        }
      : null,
  ]

  return links.filter((link): link is SocialLink => link !== null)
}

export function SocialLinks({
  variant = 'icons',
}: {
  variant?: 'icons' | 'buttons'
}) {
  const links = getSocialLinks()

  if (links.length === 0) {
    return null
  }

  if (variant === 'buttons') {
    return (
      <div className="flex flex-wrap justify-center gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer noopener' : undefined}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-accent/50"
          >
            {link.icon}
            {link.label}
          </a>
        ))}
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noreferrer noopener' : undefined}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-foreground"
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}
