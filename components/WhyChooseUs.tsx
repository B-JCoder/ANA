"use client"

import { motion } from "framer-motion"
import { Leaf, Shield, Clock, ThumbsUp } from "lucide-react"

const benefits = [
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description:
      "We exclusively use environmentally safe, non-toxic cleaning products that are safe for your family, pets, and the Vancouver environment.",
  },
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    description:
      "Complete protection and peace of mind with our comprehensive liability insurance and professional licensing in British Columbia.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling Options",
    description:
      "Convenient appointment times including mornings, evenings, and weekends to accommodate your busy Vancouver lifestyle.",
  },
  {
    icon: ThumbsUp,
    title: "100% Satisfaction Guarantee",
    description:
      "Not completely satisfied with our service? We'll return and re-clean the area at no additional charge until you're happy.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#00171F]">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Why Choose A.N.A Property Maintenance?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-5xl mx-auto px-2">
            We're Vancouver's dedicated cleaning professionals committed to delivering exceptional results with
            eco-friendly products and meticulous attention to every detail of your property.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="text-center group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl hover:shadow-[0_20px_40px_rgba(57,102,147,0.2)] transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#396693] text-white rounded-full mb-4 sm:mb-6 group-hover:bg-[#2d5275] transition-colors duration-300 shadow-lg"
              >
                <benefit.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
              </motion.div>

              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">{benefit.title}</h3>

              <p className="text-white/80 leading-relaxed text-sm sm:text-base">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to Get Started?</h3>
            <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
              Call us today for your free consultation and quote
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-[#396693] mb-2">(604) 773-3501</p>
            <p className="text-white/70 text-sm sm:text-base">Available 7 days a week throughout Vancouver, BC</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
