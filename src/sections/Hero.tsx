import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '../components/Button'
import { AnimatedShinyText } from '../components/magicui/animated-shiny-text'
import { BorderBeam } from '../components/magicui/border-beam'
import { TextAnimate } from '../components/magicui/text-animate'
import { Marquee } from '../components/Marquee'
import { site } from '../data/site'
import { easeOut, fadeUp, stagger } from '../lib/motion'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="home" className="relative overflow-hidden pt-24 md:pt-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-16 lg:pb-20">
        <motion.div
          variants={stagger}
          initial={reduceMotion ? false : 'hidden'}
          animate="show"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: easeOut }}
            className="mb-6 text-[11px] font-medium tracking-[0.28em] uppercase"
          >
            <AnimatedShinyText className="text-[11px] tracking-[0.28em] uppercase">
              {site.role}
            </AnimatedShinyText>
          </motion.p>
          <h1 className="font-display text-[2.75rem] font-medium tracking-[-0.04em] text-foreground sm:text-6xl lg:text-[4.4rem] lg:leading-[0.98]">
            <TextAnimate as="span" by="word" startOnView={false} className="block">
              {`${site.displayName.split(' ')[0]}.`}
            </TextAnimate>
            <TextAnimate
              as="span"
              by="line"
              delay={0.18}
              startOnView={false}
              className="mt-3 block text-white/90"
            >
              {'Building product\ninterfaces in React.'}
            </TextAnimate>
          </h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: easeOut }}
            className="mt-7 max-w-md text-[0.95rem] leading-7 text-muted"
          >
            {site.summary}
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: easeOut }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button
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
            <Button href={site.resumePath} variant="secondary" download={site.resumeFileName}>
              Resume
            </Button>
          </motion.div>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: easeOut }}
            className="mt-8 text-sm text-muted"
          >
            Currently at <span className="text-foreground">VastFactor</span>
          </motion.p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, ease: easeOut, delay: 0.12 }}
          className="relative mx-auto w-full max-w-[380px] lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute top-6 left-6 h-full w-full rounded-md border border-white/12"
          />
          <div className="relative overflow-hidden rounded-md bg-card">
            <img
              src={site.profileImage}
              alt={site.displayName}
              width={576}
              height={1024}
              decoding="async"
              className="profile-photo aspect-[4/5] h-auto w-full object-cover object-[center_8%] grayscale-[18%] transition duration-500 hover:grayscale-0"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070b14]/25 via-transparent to-transparent" />
            <BorderBeam size={120} duration={9} borderWidth={1.5} />
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
