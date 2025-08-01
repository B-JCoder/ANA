"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Star, Shield } from "lucide-react"
import { HeroSkeleton } from "@/components/LoadingStates"

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <HeroSkeleton />
  }

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {!videoLoaded && <div className="absolute inset-0 bg-[#00171F] animate-pulse" />}
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute top-1/2 left-1/2 min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-700 ease-in-out ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source
            src="https://v1.pinimg.com/videos/mc/720p/73/10/df/7310dff5960128bf1a5d7b697a69eaa0.mp4"
            type="video/mp4"
          />
        </video>
        {/* Text Readability Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent backdrop-blur-sm" />
      </div>

      {/* Hero Content */}
     <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8 max-w-6xl mx-auto pt-32 sm:pt-40 md:pt-58">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight drop-shadow-2xl"
        >
          Professional Property
          <span className="block text-[#abcbeb]">Cleaning Services</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
        >
          Trusted experts serving Vancouver, BC with reliable, eco-friendly cleaning solutions for homes and businesses.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-10 w-full sm:w-auto"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-[#396693] hover:bg-[#2d5275] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Get Your Free Quote Today
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#396693] px-6 sm:px-8 py-3 sm:py-4 text-base font-semibold rounded-full transition-all duration-300 bg-transparent backdrop-blur-sm"
          >
            <Phone className="mr-2 w-5 h-5" />
            (604) 773-3501
          </Button>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center px-2"
        >
          <p className="text-base sm:text-lg md:text-xl font-semibold mb-3 text-[#98c0e9] drop-shadow-md">
            Available 7 Days a Week
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 text-sm sm:text-base">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-green-400 mr-2" />
              <span className="font-medium">Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="font-medium">5-Star Rated Service</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-5 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
