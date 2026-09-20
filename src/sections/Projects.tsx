import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { projects } from '../data/projects'

export function Projects() {
  const featured = projects.find((project) => project.featured)
  const rest = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="border-t border-white/10 px-4 py-20 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle
            index="03"
            eyebrow="Selected work"
            title="Featured projects"
            description="A few products that show how I approach React interfaces, real-world product flows and frontend architecture."
          />
        </Reveal>

        <div className="space-y-6">
          {featured ? (
            <Reveal>
              <ProjectCard project={featured} featured />
            </Reveal>
          ) : null}
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
