import { ArrowLeft } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { GitHubIcon } from '../components/BrandIcons'
import { Button } from '../components/Button'
import { BlurFade } from '../components/magicui/blur-fade'
import { BorderBeam } from '../components/magicui/border-beam'
import { getProject } from '../data/projects'
import { hasUrl } from '../lib/cn'

export function ProjectDetail() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined

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
    <main className="min-w-0 overflow-x-clip px-4 pt-28 pb-24 sm:px-6">
      <article className="mx-auto max-w-4xl">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Work
        </Link>

        <BlurFade>
          <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            {project.tagline}
          </p>
          <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            {project.description}
          </p>
        </BlurFade>

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

        <BlurFade delay={0.1} className="relative mt-10 overflow-hidden rounded-[1.6rem]">
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
          <BorderBeam size={160} duration={12} borderWidth={1.25} />
        </BlurFade>

        <div className="mt-14 space-y-12">
          {sections.map((section, index) => (
            <BlurFade key={section.title} delay={index * 0.05}>
              <section>
                <h2 className="font-display text-2xl font-semibold tracking-tight">
                  {section.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-muted">{section.body}</p>
              </section>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.12}>
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
        </BlurFade>

        <BlurFade delay={0.16}>
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
        </BlurFade>
      </article>
    </main>
  )
}
