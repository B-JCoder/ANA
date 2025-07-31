"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, Building, Sparkles } from "lucide-react"
import { ServiceCardSkeleton } from "@/components/LoadingStates"

const services = [
  {
    icon: Home,
    title: "Residential Cleaning Services",
    description:
      "Complete home cleaning solutions including deep cleaning, regular maintenance, move-in/move-out cleaning, and post-construction cleanup for Vancouver homeowners.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    icon: Building,
    title: "Commercial Cleaning Services",
    description:
      "Professional office cleaning, retail space maintenance, and commercial property cleaning services for businesses throughout Vancouver and surrounding areas.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
  },
  {
    icon: Sparkles,
    title: "Specialized Property Services",
    description:
      "Expert roof cleaning, gutter maintenance, pressure washing, window cleaning, landscaping, and seasonal snow removal services.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
  },
]

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setIsLoading(false)
      },
      200 + index * 100,
    )

    return () => clearTimeout(timer)
  }, [index])

  if (isLoading) {
    return <ServiceCardSkeleton />
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 shadow-2xl transition-all duration-300 hover:shadow-[0_20px_40px_rgba(57,102,147,0.3)] hover:bg-white/15 group"
    >
      <div className="relative overflow-hidden rounded-lg mb-4 sm:mb-6">
        {!imageLoaded && <div className="w-full h-40 sm:h-48 bg-white/10 animate-pulse rounded-lg" />}
        <img
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          className={`w-full h-40 sm:h-48 object-cover transition-all duration-300 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#396693]/50 to-transparent"></div>
      </div>

      <div className="flex items-center mb-3 sm:mb-4">
        <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-[#396693] mr-2 sm:mr-3" />
        <h3 className="text-lg sm:text-xl font-semibold text-white">{service.title}</h3>
      </div>

      <p className="text-white/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>

      <Button className="w-full bg-[#396693] hover:bg-[#2d5275] text-white rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm sm:text-base">
        View Service Details
      </Button>
    </motion.div>
  )
}

export default function ServicesOverview() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-[#00171F]">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Our Professional Cleaning Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-4xl mx-auto px-2">
            Comprehensive property maintenance solutions tailored to meet your specific needs in Vancouver, BC
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
