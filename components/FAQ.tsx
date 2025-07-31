"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer comprehensive cleaning services including residential cleaning, commercial cleaning, roof cleaning, gutter cleaning, power washing, window cleaning, landscaping services, and snow removal. All services are available 7 days a week.",
  },
  {
    question: "Are you insured and bonded?",
    answer:
      "Yes, A.N.A Property Maintenance Services Ltd. is fully insured and bonded. We carry comprehensive liability insurance to protect both our clients and our team members during all cleaning operations.",
  },
  {
    question: "Do you use eco-friendly cleaning products?",
    answer:
      "We prioritize the health and safety of your family and pets by using only non-toxic, biodegradable cleaning products that are safe for the environment while still delivering exceptional cleaning results.",
  },
  {
    question: "How do you price your services?",
    answer:
      "Our pricing is competitive and transparent. We offer free quotes based on the size of your property, the type of service needed, and frequency of cleaning. Contact us at +1 (604) 773-3501 for a personalized quote.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve Vancouver, BC and surrounding areas. Our team is available 7 days a week to provide professional cleaning services to both residential and commercial properties throughout the region.",
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer:
      "Your satisfaction is our guarantee! If you're not completely happy with our service, we'll return and re-clean the area at no additional cost. We stand behind our work 100%.",
  },
  {
    question: "How often should I schedule cleaning services?",
    answer:
      "The frequency depends on your specific needs. We offer flexible scheduling including one-time cleanings, weekly, bi-weekly, monthly, or seasonal services. Our team can help you determine the best schedule for your property.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "No, you don't need to be present during the cleaning. Many of our clients provide us with access to their property and go about their daily routine. We're fully insured and trusted by hundreds of satisfied customers.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-[#00171F]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Find answers to common questions about our cleaning services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-2 hover:bg-white/10 transition-all duration-300"
                >
                  <AccordionTrigger className="text-white hover:text-[#396693] transition-colors duration-300 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 leading-relaxed pt-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-white/70 mb-6">Contact us directly for personalized assistance</p>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-[#396693]">+1 (604) 773-3501</p>
              <p className="text-white/60">Available 7 days a week</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
