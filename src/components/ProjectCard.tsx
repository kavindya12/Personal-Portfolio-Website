import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { hasUrl } from '../lib/cn'
import { GitHubIcon } from './BrandIcons'
import { BorderBeam } from './magicui/border-beam'

type ProjectCardProps = {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  if (featured) {
    return (
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="group relative overflow-hidden rounded-md border border-white/10"
      >
        <Link
          to={`/projects/${project.slug}`}
          className={`relative block overflow-hidden ${
            project.imageTheme === 'light' ? 'bg-slate-100' : 'bg-[#0b1220]'
          }`}
        >
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-[280px] w-full object-cover object-top transition duration-700 group-hover:scale-[1.03] md:h-[420px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <p className="text-[11px] tracking-[0.22em] text-blue-300 uppercase">
              Featured
            </p>
            <h3 className="font-display mt-2 text-3xl font-medium md:text-5xl">
              {project.title}
            </h3>
            <p className="mt-2 max-w-xl text-sm text-slate-300 md:text-base">
              {project.tagline}
            </p>
          </div>
        </Link>
        <div className="flex flex-col gap-4 bg-[#0b1220] p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <p className="max-w-2xl text-sm leading-7 text-slate-300">
            {project.description}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground"
            >
              Case study
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            {hasUrl(project.liveUrl) ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm text-slate-400 hover:text-foreground"
              >
                Live
              </a>
            ) : null}
          </div>
        </div>
        <BorderBeam size={140} duration={10} borderWidth={1.25} />
      </motion.article>
    )
  }

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-md border border-white/10"
    >
      <Link
        to={`/projects/${project.slug}`}
        className={`relative block overflow-hidden ${
          project.imageTheme === 'light' ? 'bg-slate-100' : 'bg-[#0b1220]'
        }`}
      >
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-56 w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="p-6">
        <p className="text-[11px] tracking-[0.2em] text-accent uppercase">
          {project.tagline}
        </p>
        <h3 className="font-display mt-2 text-2xl font-medium">
          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((item) => (
            <span key={item} className="text-xs tracking-wide text-slate-400">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-4">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium"
          >
            Case study
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          {hasUrl(project.liveUrl) ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm text-slate-400 hover:text-foreground"
            >
              Live
            </a>
          ) : null}
          {hasUrl(project.githubUrl) ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-foreground"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          ) : null}
        </div>
      </div>
      <BorderBeam size={90} duration={11} delay={1.2} borderWidth={1} />
    </motion.article>
  )
}
