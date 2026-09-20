import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { GitHubIcon } from '../components/BrandIcons'
import { Button } from '../components/Button'
import { getProject } from '../data/projects'
import { hasUrl } from '../lib/cn'
import { easeOut } from '../lib/motion'

export function ProjectDetail() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined
  const reduceMotion = useReducedMotion()

  if (!project) {
    return <Navigate to="/#projects" replace />
  }

  const sections = [
    { title: 'Overview', body: project.overview },
    { title: 'Problem', body: project.problem },
    { title: 'Solution', body: project.solution },
    { title: 'Technical architecture', body: project.architecture },
    { title: 'My contribution', body: project.contribution },
    { title: 'Challenges', body: project.challenges },
    { title: 'What I learned', body: project.learned },
  ]

  return (
    <main className="px-6 pt-28 pb-24">
      <article className="mx-auto max-w-4xl">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Work
        </Link>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            {project.tagline}
          </p>
          <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            {project.description}
          </p>
        </motion.div>

        <div className="mt-6 flex flex-wrap gap-3">
          {hasUrl(project.liveUrl) ? (
            <Button href={project.liveUrl} external>
              Live Demo
            </Button>
          ) : null}
          {hasUrl(project.githubUrl) ? (
            <Button href={project.githubUrl} variant="secondary" external>
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </Button>
          ) : null}
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
          className="mt-10"
        >
          {project.gallery && project.gallery.length > 1 ? (
            <div className="grid gap-4">
              {project.gallery.map((src, index) => (
                <div
                  key={src}
                  className="surface overflow-hidden rounded-[1.6rem] bg-white"
                >
                  <img
                    src={src}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="surface overflow-hidden rounded-[2rem]">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="h-auto w-full object-cover"
              />
            </div>
          )}
        </motion.div>

        <div className="mt-14 space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                {section.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-muted">{section.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Key features
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="surface rounded-xl px-4 py-3 text-sm text-muted"
              >
                <span className="mr-2 text-accent">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Technology
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      </article>
    </main>
  )
}
