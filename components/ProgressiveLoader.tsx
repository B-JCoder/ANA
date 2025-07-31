"use client"

import type React from "react"

import { useState, useEffect } from "react"
import LoadingAnnouncer from "./LoadingAnnouncer"

interface ProgressiveLoaderProps {
  children: React.ReactNode
  skeleton: React.ReactNode
  loadingMessage: string
  loadedMessage: string
  delay?: number
  threshold?: number
}

export default function ProgressiveLoader({
  children,
  skeleton,
  loadingMessage,
  loadedMessage,
  delay = 500,
  threshold = 0.1,
}: ProgressiveLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

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

    const element = document.querySelector(`[data-progressive-loader]`)
    if (element) {
      observer.observe(element)
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
    <div data-progressive-loader>
      <LoadingAnnouncer
        isLoading={!isLoaded}
        loadingMessage={loadingMessage}
        loadedMessage={loadedMessage}
        delay={100}
      />
      {isLoaded ? children : skeleton}
    </div>
  )
}
