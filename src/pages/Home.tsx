import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { About } from '../sections/About'
import { Certifications } from '../sections/Certifications'
import { Contact } from '../sections/Contact'
import { Education } from '../sections/Education'
import { Experience } from '../sections/Experience'
import { Hero } from '../sections/Hero'
import { Projects } from '../sections/Projects'
import { Skills } from '../sections/Skills'
import { WhatIDo } from '../sections/WhatIDo'

export function Home() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const id = location.hash.replace('#', '')
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 80)

    return () => window.clearTimeout(timer)
  }, [location.hash])

  return (
    <main>
      <Hero />
      <About />
      <WhatIDo />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
    </main>
  )
}
