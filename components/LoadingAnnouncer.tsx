"use client"

import { useState, useEffect } from "react"

interface LoadingAnnouncerProps {
  isLoading: boolean
  loadingMessage: string
  loadedMessage: string
  delay?: number
}

export default function LoadingAnnouncer({
  isLoading,
  loadingMessage,
  loadedMessage,
  delay = 0,
}: LoadingAnnouncerProps) {
  const [announcement, setAnnouncement] = useState("")
  const [shouldAnnounce, setShouldAnnounce] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setAnnouncement(loadingMessage)
        setShouldAnnounce(true)
      } else {
        setAnnouncement(loadedMessage)
        setShouldAnnounce(true)
        // Clear announcement after it's been read
        setTimeout(() => setShouldAnnounce(false), 1000)
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [isLoading, loadingMessage, loadedMessage, delay])

  if (!shouldAnnounce) return null

  return (
    <div className="sr-only" aria-live="polite" aria-atomic="true" role="status">
      {announcement}
    </div>
  )
}
