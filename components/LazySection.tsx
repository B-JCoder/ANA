"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import LoadingAnnouncer from "./LoadingAnnouncer"

interface LazySectionProps {
  children: React.ReactNode
  skeleton: React.ReactNode
  delay?: number
  threshold?: number
  loadingMessage?: string
  loadedMessage?: string
  sectionName?: string
}

export default function LazySection({
  children,
  skeleton,
  delay = 500,
  threshold = 0.1,
  loadingMessage,
  loadedMessage,
  sectionName = "content",
}: LazySectionProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const defaultLoadingMessage = loadingMessage || `Loading ${sectionName} section`
  const defaultLoadedMessage = loadedMessage || `${sectionName} section loaded successfully`

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsLoaded(true)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [isVisible, delay])

  return (
    <div ref={sectionRef} role="region" aria-label={`${sectionName} section`}>
      <LoadingAnnouncer
        isLoading={!isLoaded && isVisible}
        loadingMessage={defaultLoadingMessage}
        loadedMessage={defaultLoadedMessage}
        delay={100}
      />
      {isLoaded ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          role="main"
          aria-label={`${sectionName} content`}
        >
          {children}
        </motion.div>
      ) : (
        <div role="status" aria-busy={isVisible ? "true" : "false"}>
          {skeleton}
        </div>
      )}
    </div>
  )
}
