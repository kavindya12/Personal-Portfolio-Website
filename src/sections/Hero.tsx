import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '../components/Button'
import { BorderBeam } from '../components/magicui/border-beam'
import { Marquee } from '../components/Marquee'
import { site } from '../data/site'
import { easeOut, fadeUp, stagger } from '../lib/motion'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="home" className="relative overflow-x-clip pt-24 md:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-size-[72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_18%,transparent_72%)] sm:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-24 right-[8%] hidden h-72 w-72 rounded-full bg-accent/20 blur-3xl sm:block"
      />

      <div className="relative mx-auto grid w-full min-w-0 max-w-6xl items-center gap-10 px-4 pb-12 sm:px-6 md:gap-12 md:pb-16 lg:grid-cols-[minmax(0,1.05fr)_400px] lg:gap-20 lg:pb-20">
        <motion.div
          className="min-w-0"
          variants={stagger}
          initial={reduceMotion ? false : 'hidden'}
          animate="show"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: easeOut }}
            className="mb-6 inline-flex max-w-full min-w-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md sm:mb-7 sm:gap-3"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="min-w-0 text-[10px] font-medium tracking-[0.12em] text-slate-300 uppercase sm:text-[11px] sm:tracking-[0.18em]">
              <span className="sm:hidden">Frontend Developer</span>
              <span className="hidden sm:inline">{site.role}</span>
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease: easeOut }}
            className="font-display w-full min-w-0 text-[1.85rem] leading-[1.12] font-medium tracking-[-0.04em] text-foreground sm:text-5xl sm:leading-[1.02] lg:text-[4.35rem] lg:leading-[0.96]"
          >
            <span className="block">Building ideas into</span>
            <span className="gradient-text mt-1 block">digital experiences.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: easeOut }}
            className="mt-5 w-full min-w-0 max-w-xl text-[0.95rem] leading-7 text-slate-300 sm:mt-7 sm:text-[0.98rem] sm:leading-8"
          >
            {site.summary}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: easeOut }}
            className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Button
              className="w-full sm:w-auto"
              href="#projects"
              onClick={(event) => {
                event.preventDefault()
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Selected work
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button
              className="w-full sm:w-auto"
              href={site.resumePath}
              variant="secondary"
              download={site.resumeFileName}
            >
              Resume
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: easeOut }}
            className="mt-6 flex flex-col gap-1 text-sm text-muted sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2"
          >
            <p>
              Currently at <span className="text-foreground">VastFactor</span>
            </p>
            <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />
            <p>Based in {site.location}</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: easeOut, delay: 0.08 }}
          className="relative mx-auto w-full min-w-0 max-w-full sm:max-w-[360px] lg:max-w-none"
        >
          <div className="absolute -inset-3 hidden rounded-[1.6rem] bg-accent/15 blur-2xl sm:block lg:-inset-4" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:rounded-[1.35rem]">
            <img
              src={site.profileImage}
              alt={site.displayName}
              width={576}
              height={1024}
              decoding="async"
              className="profile-photo aspect-[4/5] h-auto w-full max-w-full object-cover object-[center_8%]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070b14]/40 via-transparent to-white/5" />
            <div className="absolute inset-x-2 bottom-2 flex min-w-0 items-center justify-between gap-2 rounded-full border border-white/10 bg-[#070b14]/70 px-2.5 py-1.5 text-[9px] tracking-[0.1em] text-slate-200 uppercase backdrop-blur-md sm:inset-x-4 sm:bottom-4 sm:px-4 sm:text-[11px] sm:tracking-[0.16em]">
              <span className="min-w-0 truncate">Sri Lanka</span>
              <span className="shrink-0">2026</span>
            </div>
            <BorderBeam size={140} duration={9} borderWidth={1.5} />
          </div>
        </motion.div>
      </div>

      <Marquee
        items={[
          ...site.heroStack,
          'Tailwind CSS',
          'Vite',
          'Node.js',
          'Framer Motion',
        ]}
      />
    </section>
  )
}
