"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Clock, Shield, Star, Users, Award, Home, Sparkles } from "lucide-react"

const features = [
  {
    icon: Home,
    title: "Complete Property Care",
    description: "Full-service cleaning solutions for residential and commercial properties throughout Vancouver, BC",
  },
  {
    icon: Star,
    title: "Competitive Pricing",
    description: "High-quality professional cleaning services at affordable rates that fit your budget",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Available 7 days a week with morning, afternoon, and weekend appointments to suit your needs",
  },
]

const stats = [
  { icon: Users, number: "500+", label: "Satisfied Customers" },
  { icon: Award, number: "5+", label: "Years of Excellence" },
  { icon: Shield, number: "100%", label: "Satisfaction Guarantee" },
  { icon: Sparkles, number: "24/7", label: "Customer Support" },
]

export default function AboutUs() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-[#00171F] relative overflow-hidden">
      {/* Background Video Container */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&h=1080&fit=crop"
          >
            <source
              src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
              type="video/mp4"
            />
            <source
              src="https://v1.pinimg.com/videos/mc/720p/73/10/df/7310dff5960128bf1a5d7b697a69eaa0.mp4"
              type="video/mp4"
            />
          </video>
          {/* Enhanced overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#396693]/70 via-[#396693]/50 to-[#00171F]/90"></div>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl mb-6 sm:mb-8"
          >
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg"
              >
                About A.N.A Property Maintenance
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#396693] mb-4 sm:mb-6 md:mb-8 drop-shadow-md"
              >
                Your Trusted Cleaning Professionals in Vancouver, BC
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed max-w-4xl mx-auto drop-shadow-sm px-2"
              >
                A.N.A Property Maintenance Services Ltd. was founded with a simple mission: to provide Vancouver
                homeowners and businesses with exceptional, reliable, and affordable cleaning services. Over the years,
                we've built lasting relationships with hundreds of satisfied customers who trust us to keep their
                properties spotless and well-maintained.
              </motion.p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-[#396693] mx-auto mb-3 sm:mb-4" />
                  <h4 className="font-semibold text-white mb-2 sm:mb-3 text-base sm:text-lg">{feature.title}</h4>
                  <p className="text-white/85 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-3 sm:p-4 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-[#396693] mx-auto mb-2 sm:mb-3" />
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#396693] mb-1">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-white/85">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button
                size="lg"
                className="bg-[#396693] hover:bg-[#2d5275] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm sm:text-base md:text-lg font-semibold"
              >
                Learn More About Our Services
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
