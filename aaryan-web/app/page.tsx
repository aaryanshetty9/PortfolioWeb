"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LandingPage from "./components/LandingPage"
import Projects from "./components/Projects"
import Resume from "./components/Resume"

export default function Home() {
  const [showResume, setShowResume] = useState(false)
  const resumeRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const handleViewResume = () => {
    setShowResume(true)
    setTimeout(() => {
      resumeRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const handleViewProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <LandingPage onViewResume={handleViewResume} onViewProjects={handleViewProjects} />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <AnimatePresence>
        {showResume && (
          <motion.div
            ref={resumeRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Resume />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

