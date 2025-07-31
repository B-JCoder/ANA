"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/Hero"
import ServicesOverview from "@/components/ServicesOverview"
import AboutUs from "@/components/AboutUs"
import WhyChooseUs from "@/components/WhyChooseUs"
import ServicesGrid from "@/components/ServicesGrid"
import BookingForm from "@/components/BookingForm"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import FAQ from "@/components/FAQ"
import WhatsAppButton from "@/components/WhatsAppButton"
import SmoothScroll from "@/components/SmoothScroll"
import LazySection from "@/components/LazySection"
import LoadingAnnouncer from "@/components/LoadingAnnouncer"
import {
  HeroSkeleton,
  ServiceCardSkeleton,
  AboutSkeleton,
  WhyChooseUsSkeleton,
  TestimonialSkeleton,
  FAQSkeleton,
  NavbarSkeleton,
  FooterSkeleton,
} from "@/components/LoadingStates"

export default function Home() {
  const [isInitialLoading, setIsInitialLoading] = useState(true)

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsInitialLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isInitialLoading) {
    return (
      <main className="scroll-smooth" role="main" aria-label="A.N.A Property Maintenance Services website">
        <LoadingAnnouncer
          isLoading={true}
          loadingMessage="Loading A.N.A Property Maintenance Services website. Please wait while we prepare your content."
          loadedMessage="Website loaded successfully"
          delay={500}
        />
        <NavbarSkeleton />
        <HeroSkeleton />
      </main>
    )
  }

  return (
    <main className="scroll-smooth" role="main" aria-label="A.N.A Property Maintenance Services website">
      <LoadingAnnouncer
        isLoading={false}
        loadingMessage="Loading website content"
        loadedMessage="Welcome to A.N.A Property Maintenance Services. Website loaded successfully."
        delay={0}
      />
      <SmoothScroll />
      <Navbar />
      <Hero />

      <LazySection
        skeleton={
          <section className="py-12 sm:py-16 md:py-20 bg-[#00171F]" role="main" aria-label="Loading services overview">
            <div className="container mx-auto px-3 sm:px-4 md:px-6">
              <div className="text-center mb-10 sm:mb-12 md:mb-16">
                <div
                  className="h-8 sm:h-12 md:h-16 bg-white/10 animate-pulse rounded-md w-3/4 mx-auto mb-3 sm:mb-4"
                  aria-label="Loading services heading"
                ></div>
                <div
                  className="h-4 sm:h-5 md:h-6 bg-white/10 animate-pulse rounded-md w-2/3 mx-auto"
                  aria-label="Loading services description"
                ></div>
              </div>
              <div
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
                aria-label="Loading service cards"
              >
                {[1, 2, 3].map((i) => (
                  <ServiceCardSkeleton key={i} />
                ))}
              </div>
            </div>
          </section>
        }
        delay={300}
        sectionName="services overview"
        loadingMessage="Loading our professional cleaning services overview"
        loadedMessage="Services overview loaded. Explore our residential, commercial, and specialized cleaning services."
      >
        <ServicesOverview />
      </LazySection>

      <LazySection
        skeleton={<AboutSkeleton />}
        delay={400}
        sectionName="about us"
        loadingMessage="Loading information about A.N.A Property Maintenance Services"
        loadedMessage="About us section loaded. Learn about our company, experience, and commitment to quality."
      >
        <AboutUs />
      </LazySection>

      <LazySection
        skeleton={<WhyChooseUsSkeleton />}
        delay={300}
        sectionName="why choose us"
        loadingMessage="Loading reasons to choose our cleaning services"
        loadedMessage="Why choose us section loaded. Discover our eco-friendly approach, insurance coverage, and satisfaction guarantee."
      >
        <WhyChooseUs />
      </LazySection>

      <LazySection
        skeleton={
          <section className="py-20 bg-[#00171F]" role="main" aria-label="Loading detailed services">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div
                  className="h-12 md:h-16 bg-white/10 animate-pulse rounded-md w-3/4 mx-auto mb-4"
                  aria-label="Loading services grid heading"
                ></div>
                <div
                  className="h-5 bg-white/10 animate-pulse rounded-md w-2/3 mx-auto"
                  aria-label="Loading services grid description"
                ></div>
              </div>
              <div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                aria-label="Loading detailed service information"
              >
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <ServiceCardSkeleton key={i} />
                ))}
              </div>
            </div>
          </section>
        }
        delay={400}
        sectionName="detailed services"
        loadingMessage="Loading detailed information about all our cleaning services"
        loadedMessage="Detailed services section loaded. Browse our complete range of cleaning and maintenance services."
      >
        <ServicesGrid />
      </LazySection>

      <LazySection
        skeleton={
          <section
            className="py-20 bg-gradient-to-b from-[#396693] to-[#2d5275]"
            role="main"
            aria-label="Loading contact form"
          >
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <div
                  className="h-12 md:h-16 bg-white/10 animate-pulse rounded-md w-1/2 mx-auto mb-4"
                  aria-label="Loading contact form heading"
                ></div>
                <div
                  className="h-5 bg-white/10 animate-pulse rounded-md w-2/3 mx-auto"
                  aria-label="Loading contact form description"
                ></div>
              </div>
              <div className="max-w-2xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
                  <div className="space-y-6" aria-label="Loading contact form fields">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="grid md:grid-cols-2 gap-6">
                        <div
                          className="h-12 bg-white/10 animate-pulse rounded-md"
                          aria-label={`Loading form field ${i}a`}
                        ></div>
                        <div
                          className="h-12 bg-white/10 animate-pulse rounded-md"
                          aria-label={`Loading form field ${i}b`}
                        ></div>
                      </div>
                    ))}
                    <div className="h-24 bg-white/10 animate-pulse rounded-md" aria-label="Loading message field"></div>
                    <div
                      className="h-12 bg-white/10 animate-pulse rounded-full"
                      aria-label="Loading submit button"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        }
        delay={300}
        sectionName="contact form"
        loadingMessage="Loading contact form to request your free quote"
        loadedMessage="Contact form loaded. Fill out the form to get your free cleaning service quote."
      >
        <BookingForm />
      </LazySection>

      <LazySection
        skeleton={
          <section className="py-20 bg-[#00171F]" role="main" aria-label="Loading customer testimonials">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div
                  className="h-12 md:h-16 bg-white/10 animate-pulse rounded-md w-1/2 mx-auto mb-4"
                  aria-label="Loading testimonials heading"
                ></div>
                <div
                  className="h-5 bg-white/10 animate-pulse rounded-md w-2/3 mx-auto"
                  aria-label="Loading testimonials description"
                ></div>
              </div>
              <div className="grid md:grid-cols-3 gap-8" aria-label="Loading customer reviews">
                {[1, 2, 3].map((i) => (
                  <TestimonialSkeleton key={i} />
                ))}
              </div>
            </div>
          </section>
        }
        delay={400}
        sectionName="customer testimonials"
        loadingMessage="Loading testimonials from our satisfied customers"
        loadedMessage="Customer testimonials loaded. Read reviews from our happy clients in Vancouver."
      >
        <Testimonials />
      </LazySection>

      <LazySection
        skeleton={<FAQSkeleton />}
        delay={300}
        sectionName="frequently asked questions"
        loadingMessage="Loading frequently asked questions about our services"
        loadedMessage="FAQ section loaded. Find answers to common questions about our cleaning services."
      >
        <FAQ />
      </LazySection>

      <LazySection
        skeleton={<FooterSkeleton />}
        delay={200}
        sectionName="footer"
        loadingMessage="Loading footer with contact information and company details"
        loadedMessage="Footer loaded with complete contact information and company details."
      >
        <Footer />
      </LazySection>

      <WhatsAppButton />
    </main>
  )
}
