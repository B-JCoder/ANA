"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Image
              src="/images/ana-logo.png"
              alt="A.N.A Property Maintenance Services"
              width={180}
              height={90}
              className="mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">A.N.A Property Maintenance Services Ltd.</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Vancouver's trusted cleaning professionals providing reliable, affordable, and eco-friendly property
              maintenance solutions for residential and commercial clients throughout British Columbia.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-[#396693] rounded-full flex items-center justify-center hover:bg-[#2d5275] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-[#396693] rounded-full flex items-center justify-center hover:bg-[#2d5275] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-[#396693] rounded-full flex items-center justify-center hover:bg-[#2d5275] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Residential Cleaning",
                "Commercial Cleaning",
                "Roof Cleaning",
                "Window Cleaning",
                "Pressure Washing",
                "Snow Removal",
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#396693] mr-3" />
                <span className="text-gray-300">(604) 773-3501</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#396693] mr-3" />
                <span className="text-gray-300">info@anaproperty.ca</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[#396693] mr-3 mt-1" />
                <span className="text-gray-300">
                  Serving Vancouver, BC
                  <br />
                  and Surrounding Areas
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} A.N.A Property Maintenance Services Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
