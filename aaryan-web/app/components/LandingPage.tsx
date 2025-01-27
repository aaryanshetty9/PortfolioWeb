"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { GithubIcon, LinkedinIcon } from "lucide-react"

interface LandingPageProps {
  onViewResume: () => void
  onViewProjects: () => void
}

export default function LandingPage({ onViewResume, onViewProjects }: LandingPageProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-white overflow-hidden relative">
      {isMounted && <WaveAnimation />}
      <div className="text-center z-10">
        <motion.h1
          className="text-6xl font-bold mb-4 text-gray-900 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05, color: "#0259f0" }}
          whileTap={{ scale: 0.95 }}
        >
          Aaryan Shetty
        </motion.h1>
        <motion.div
          className="text-xl text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        ></motion.div>
        <div className="flex space-x-4 justify-center items-center">
          <motion.button
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onViewResume}
          >
            Resume
          </motion.button>
          <motion.button
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onViewProjects}
          >
            Projects
          </motion.button>
          <motion.a
            href="https://github.com/aaryanshetty9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <GithubIcon className="w-8 h-8 fill-current" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/aaryanshetty-/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <LinkedinIcon className="w-8 h-8 fill-current" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}

function WaveAnimation() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(120deg, ${index % 2 === 0 ? "#0a4fc7" : "#1D4ED8"} 0%, ${index % 2 === 0 ? "#2563EB" : "#3B82F6"} 100%)`,
            opacity: 0.3,
          }}
          animate={{
            y: ["0%", "100%", "0%"],
            scale: [1, 1.05, 1],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

