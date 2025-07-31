"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, Droplets, Zap, Eye, Flower, Snowflake } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Roof Cleaning",
    description:
      "We prioritize your roof's integrity and appearance, offering cleaning to prevent moss and algae buildup, enhancing durability with our special chemical solution.",
    features: ["Moss & algae removal", "Chemical treatment", "Gentle on shingles"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    icon: Droplets,
    title: "Gutter Cleaning",
    description:
      "Professional gutter cleaning that protects your home from water damage, preventing costly repairs and ensuring safe, efficient maintenance.",
    features: ["Complete debris removal", "Downspout inspection", "Prevent water damage"],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
  },
  {
    icon: Zap,
    title: "Power Washing",
    description:
      "Revitalize your home's exterior with our pressure washing services for siding, patios, decks, fences, driveways, and sidewalks.",
    features: ["Exterior surfaces", "Concrete cleaning", "Eco-friendly solutions"],
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
  },
  {
    icon: Eye,
    title: "Window Cleaning",
    description:
      "Crystal-clear views for homes and businesses, enhancing your space and outlook with streak-free professional cleaning.",
    features: ["Interior & exterior", "Streak-free finish", "Commercial & residential"],
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=300&fit=crop",
  },
  {
    icon: Flower,
    title: "Landscaping Services",
    description:
      "Transform your outdoor space with beautiful flower beds, stunning patios, and lush gardens for enhanced beauty and functionality.",
    features: ["Garden design", "Seasonal maintenance", "Hardscaping"],
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
  },
  {
    icon: Snowflake,
    title: "Snow Removal",
    description:
      "Ensure safety and accessibility this winter with our snow removal services for residential and commercial properties.",
    features: ["Driveways & sidewalks", "Commercial lots", "24/7 availability"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-[#00171F]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Premium Services</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Professional Cleaning Solutions</p>
          <p className="text-lg text-white/60 mt-2">
            We provide top-quality cleaning services to keep your property sparkling clean and well-maintained
            year-round.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_20px_40px_rgba(57,102,147,0.3)] hover:bg-white/15 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#396693]/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>

                <p className="text-white/70 mb-4 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-white/70">
                      <div className="w-2 h-2 bg-[#396693] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-[#396693] hover:bg-[#2d5275] text-white rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Get Quote
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
