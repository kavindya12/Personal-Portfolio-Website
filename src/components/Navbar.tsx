import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { site } from '../data/site'
import { easeOut } from '../lib/motion'
import { Button } from './Button'

const navItems = [
  { label: 'Work', hash: 'projects' },
  { label: 'About', hash: 'about' },
  { label: 'Experience', hash: 'experience' },
  { label: 'Contact', hash: 'contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [pastHero, setPastHero] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const active = location.pathname === '/' && pastHero ? activeSection : ''

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      setPastHero(window.scrollY > 360)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (location.pathname !== '/') return

    const ids = navItems.map((item) => item.hash)
    const observers = ids.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
      )
      observer.observe(el)
      return observer
    })

    return () => observers.forEach((observer) => observer?.disconnect())
  }, [location.pathname])

  function goToSection(hash: string) {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate(`/#${hash}`)
      return
    }

    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    window.history.replaceState(null, '', `/#${hash}`)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${
        scrolled || open
          ? 'border-b border-white/10 bg-[#070b14]/75 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-[4.5rem]">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-display text-sm font-semibold tracking-[0.26em] text-foreground transition hover:text-accent"
        >
          {site.shortName}
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <button
              key={item.hash}
              type="button"
              onClick={() => goToSection(item.hash)}
              className={`relative text-sm transition ${
                active === item.hash ? 'text-foreground' : 'text-muted hover:text-foreground'
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                  active === item.hash ? 'w-full' : 'w-0'
                }`}
              />
            </button>
          ))}
          <Button onClick={() => goToSection('contact')}>Let's Talk</Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-foreground md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: easeOut }}
            className="overflow-hidden border-t border-white/10 bg-[#070b14]/95 md:hidden"
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              {navItems.map((item) => (
                <button
                  key={item.hash}
                  type="button"
                  onClick={() => goToSection(item.hash)}
                  className="text-left text-lg text-muted"
                >
                  {item.label}
                </button>
              ))}
              <Button onClick={() => goToSection('contact')}>Let's Talk</Button>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
