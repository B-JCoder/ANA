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
    <section
      id="about"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 bg-[#00171F]"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
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
              src=" https://v1.pinimg.com/videos/iht/expMp4/67/43/a8/6743a8f1d89f1d41f1c6b264b88a1393_720w.mp4"
              type="video/mp4"
            />
           
          </video>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[4px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl rounded-3xl p-6 sm:p-10 md:p-14 text-white"
        >
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-md"
            >
              About A.N.A Property Maintenance
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl md:text-2xl font-medium text-[#5aa2d8] mt-4"
            >
              Your Trusted Cleaning Professionals in Vancouver, BC
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto mt-4 text-white/90 text-sm sm:text-base md:text-lg leading-relaxed"
            >
              A.N.A Property Maintenance Services Ltd. was founded with a simple mission: to provide Vancouver
              homeowners and businesses with exceptional, reliable, and affordable cleaning services.
            </motion.p>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 text-center transition-all duration-300"
              >
                <feature.icon className="w-10 h-10 mx-auto text-[#5aa2d8] mb-3" />
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-white/85 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-5 transition-all duration-300"
              >
                <stat.icon className="w-7 h-7 mx-auto text-[#5aa2d8] mb-2" />
                <div className="text-2xl font-bold text-[#5aa2d8]">{stat.number}</div>
                <p className="text-sm text-white/85">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button className="bg-[#396693] hover:bg-[#2e567c] text-white text-base font-medium px-6 py-3 rounded-full shadow-lg transition hover:scale-105">
              Learn More About Our Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}









 