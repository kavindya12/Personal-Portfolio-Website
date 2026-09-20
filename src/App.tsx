import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { MouseGlow } from './components/magicui/mouse-glow'
import { Particles } from './components/magicui/particles'
import { Navbar } from './components/Navbar'
import { easeOut } from './lib/motion'
import { Home } from './pages/Home'
import { ProjectDetail } from './pages/ProjectDetail'

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [location.pathname, location.hash])

  return null
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="min-w-0 max-w-full"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: easeOut }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <MouseGlow />
      <div className="pointer-events-none fixed inset-0 z-0">
        <Particles quantity={48} color="#93c5fd" ease={70} staticity={60} />
      </div>
      <Navbar />
      <div className="relative z-10 min-w-0 max-w-full overflow-x-clip">
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}
