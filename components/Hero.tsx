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
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <HeroSkeleton />
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {!videoLoaded && <div className="absolute inset-0 bg-[#00171F] animate-pulse" />}
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source
            src="https://v1.pinimg.com/videos/iht/expMp4/67/43/a8/6743a8f1d89f1d41f1c6b264b88a1393_720w.mp4"
            type="video/mp4"
          />
        </video>
        {/* Enhanced Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-blue-900/60 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-3 sm:px-4 md:px-6 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight drop-shadow-2xl"
        >
          Professional Property
          <span className="block text-[#396693] drop-shadow-lg">Cleaning Services</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-100 max-w-4xl mx-auto leading-relaxed drop-shadow-lg px-2"
        >
          Trusted cleaning experts serving Vancouver, BC with reliable, affordable, and eco-friendly solutions for homes
          and businesses
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 mb-6 sm:mb-8"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-[#396693] hover:bg-[#2d5275] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Get Your Free Quote Today
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#396693] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-full transition-all duration-300 bg-transparent backdrop-blur-sm"
          >
            <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            (604) 773-3501
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center px-2"
        >
          <p className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-[#396693] drop-shadow-lg">
            Available 7 Days a Week
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-8 text-xs sm:text-sm md:text-base">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2" />
              <span className="font-medium">Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mr-2" />
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
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
