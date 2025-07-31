"use client"

import { Skeleton } from "@/components/ui/skeleton"

export function HeroSkeleton() {
  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#00171F]"
      aria-label="Loading hero section"
      role="banner"
    >
      <div className="relative z-10 text-center text-white px-3 sm:px-4 md:px-6 max-w-6xl mx-auto">
        {/* Announce loading state to screen readers */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Loading hero section with company information and call-to-action buttons
        </div>

        {/* Title Skeleton */}
        <div className="mb-4 sm:mb-6">
          <Skeleton
            className="h-12 sm:h-16 md:h-20 lg:h-24 w-full max-w-4xl mx-auto mb-4"
            aria-label="Loading main heading"
          />
          <Skeleton className="h-8 sm:h-12 md:h-16 lg:h-20 w-3/4 mx-auto" aria-label="Loading subheading" />
        </div>

        {/* Description Skeleton */}
        <div className="mb-6 sm:mb-8">
          <Skeleton className="h-4 sm:h-5 md:h-6 w-full max-w-4xl mx-auto mb-2" aria-label="Loading description text" />
          <Skeleton className="h-4 sm:h-5 md:h-6 w-3/4 mx-auto" aria-label="Loading description continuation" />
        </div>

        {/* Buttons Skeleton */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 mb-6 sm:mb-8">
          <Skeleton
            className="h-12 sm:h-14 w-full sm:w-64 rounded-full"
            aria-label="Loading primary call-to-action button"
          />
          <Skeleton className="h-12 sm:h-14 w-full sm:w-48 rounded-full" aria-label="Loading phone number button" />
        </div>

        {/* Badges Skeleton */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-8">
          <Skeleton className="h-10 w-48 rounded-full" aria-label="Loading service availability badge" />
          <Skeleton className="h-10 w-40 rounded-full" aria-label="Loading rating badge" />
        </div>
      </div>
    </section>
  )
}

export function ServiceCardSkeleton() {
  return (
    <div
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 shadow-2xl"
      role="article"
      aria-label="Loading service information"
    >
      <div className="sr-only" aria-live="polite">
        Loading service details including image, title, description, and action button
      </div>

      {/* Image Skeleton */}
      <Skeleton className="w-full h-40 sm:h-48 rounded-lg mb-4 sm:mb-6" aria-label="Loading service image" />

      {/* Icon and Title Skeleton */}
      <div className="flex items-center mb-3 sm:mb-4">
        <Skeleton className="h-6 w-6 sm:h-8 sm:w-8 rounded-full mr-2 sm:mr-3" aria-label="Loading service icon" />
        <Skeleton className="h-6 sm:h-7 w-3/4" aria-label="Loading service title" />
      </div>

      {/* Description Skeleton */}
      <div className="mb-4 sm:mb-6 space-y-2" aria-label="Loading service description">
        <Skeleton className="h-4 w-full" aria-label="Loading description line 1" />
        <Skeleton className="h-4 w-5/6" aria-label="Loading description line 2" />
        <Skeleton className="h-4 w-4/6" aria-label="Loading description line 3" />
      </div>

      {/* Button Skeleton */}
      <Skeleton className="h-10 sm:h-12 w-full rounded-full" aria-label="Loading action button" />
    </div>
  )
}

export function AboutSkeleton() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#00171F]" aria-label="Loading about us section" role="main">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Loading about us section with company information, features, statistics, and call-to-action
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl">
            {/* Header Skeleton */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <Skeleton
                className="h-8 sm:h-12 md:h-16 w-3/4 mx-auto mb-4 sm:mb-6"
                aria-label="Loading about us heading"
              />
              <Skeleton
                className="h-6 sm:h-8 md:h-10 w-2/3 mx-auto mb-4 sm:mb-6 md:mb-8"
                aria-label="Loading about us subheading"
              />
              <div className="space-y-2 max-w-4xl mx-auto" aria-label="Loading about us description">
                <Skeleton className="h-4 sm:h-5 md:h-6 w-full" />
                <Skeleton className="h-4 sm:h-5 md:h-6 w-5/6 mx-auto" />
                <Skeleton className="h-4 sm:h-5 md:h-6 w-4/6 mx-auto" />
              </div>
            </div>

            {/* Features Grid Skeleton */}
            <div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12"
              aria-label="Loading company features"
            >
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center"
                  role="article"
                  aria-label={`Loading feature ${i}`}
                >
                  <Skeleton
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full mx-auto mb-3 sm:mb-4"
                    aria-label="Loading feature icon"
                  />
                  <Skeleton className="h-5 sm:h-6 w-3/4 mx-auto mb-2 sm:mb-3" aria-label="Loading feature title" />
                  <div className="space-y-1" aria-label="Loading feature description">
                    <Skeleton className="h-3 sm:h-4 w-full" />
                    <Skeleton className="h-3 sm:h-4 w-5/6 mx-auto" />
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Grid Skeleton */}
            <div
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8"
              aria-label="Loading company statistics"
            >
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="text-center p-3 sm:p-4 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl"
                  role="article"
                  aria-label={`Loading statistic ${i}`}
                >
                  <Skeleton
                    className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 rounded-full mx-auto mb-2 sm:mb-3"
                    aria-label="Loading statistic icon"
                  />
                  <Skeleton className="h-6 sm:h-8 md:h-10 w-16 mx-auto mb-1" aria-label="Loading statistic number" />
                  <Skeleton className="h-3 sm:h-4 w-20 mx-auto" aria-label="Loading statistic label" />
                </div>
              ))}
            </div>

            {/* CTA Button Skeleton */}
            <div className="text-center">
              <Skeleton
                className="h-12 sm:h-14 md:h-16 w-64 sm:w-80 mx-auto rounded-full"
                aria-label="Loading call-to-action button"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhyChooseUsSkeleton() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#00171F]" aria-label="Loading why choose us section" role="main">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Loading why choose us section with benefits and contact information
        </div>

        {/* Header Skeleton */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <Skeleton className="h-8 sm:h-12 md:h-16 w-3/4 mx-auto mb-3 sm:mb-4" aria-label="Loading section heading" />
          <div className="space-y-2 max-w-5xl mx-auto" aria-label="Loading section description">
            <Skeleton className="h-4 sm:h-5 md:h-6 w-full" />
            <Skeleton className="h-4 sm:h-5 md:h-6 w-4/5 mx-auto" />
          </div>
        </div>

        {/* Benefits Grid Skeleton */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          aria-label="Loading company benefits"
        >
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl"
              role="article"
              aria-label={`Loading benefit ${i}`}
            >
              <Skeleton
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full mx-auto mb-4 sm:mb-6"
                aria-label="Loading benefit icon"
              />
              <Skeleton className="h-5 sm:h-6 w-3/4 mx-auto mb-3 sm:mb-4" aria-label="Loading benefit title" />
              <div className="space-y-2" aria-label="Loading benefit description">
                <Skeleton className="h-3 sm:h-4 w-full" />
                <Skeleton className="h-3 sm:h-4 w-5/6 mx-auto" />
                <Skeleton className="h-3 sm:h-4 w-4/6 mx-auto" />
              </div>
            </div>
          ))}
        </div>

        {/* Contact Card Skeleton */}
        <div className="text-center mt-12 sm:mt-16">
          <div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md mx-auto"
            role="complementary"
            aria-label="Loading contact information"
          >
            <div className="sr-only" aria-live="polite">
              Loading contact information with phone number and availability
            </div>
            <Skeleton className="h-6 sm:h-8 w-3/4 mx-auto mb-3 sm:mb-4" aria-label="Loading contact heading" />
            <Skeleton className="h-4 sm:h-5 w-5/6 mx-auto mb-3 sm:mb-4" aria-label="Loading contact description" />
            <Skeleton className="h-8 sm:h-10 w-48 mx-auto mb-2" aria-label="Loading phone number" />
            <Skeleton className="h-3 sm:h-4 w-3/4 mx-auto" aria-label="Loading availability information" />
          </div>
        </div>
      </div>
    </section>
  )
}

export function TestimonialSkeleton() {
  return (
    <div
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl"
      role="article"
      aria-label="Loading customer testimonial"
    >
      <div className="sr-only" aria-live="polite">
        Loading customer testimonial with rating, review text, and customer information
      </div>

      {/* Quote Icon Skeleton */}
      <Skeleton className="h-8 w-8 mb-4" aria-label="Loading quote icon" />

      {/* Stars Skeleton */}
      <div className="flex mb-4 space-x-1" aria-label="Loading customer rating">
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="h-5 w-5" aria-label={`Loading star ${i}`} />
        ))}
      </div>

      {/* Text Skeleton */}
      <div className="mb-6 space-y-2" aria-label="Loading testimonial text">
        <Skeleton className="h-4 w-full" aria-label="Loading review line 1" />
        <Skeleton className="h-4 w-5/6" aria-label="Loading review line 2" />
        <Skeleton className="h-4 w-4/6" aria-label="Loading review line 3" />
      </div>

      {/* Profile Skeleton */}
      <div className="flex items-center" aria-label="Loading customer information">
        <Skeleton className="w-12 h-12 rounded-full mr-4" aria-label="Loading customer photo" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" aria-label="Loading customer name" />
          <Skeleton className="h-3 w-20" aria-label="Loading customer role" />
        </div>
      </div>
    </div>
  )
}

export function FAQSkeleton() {
  return (
    <section className="py-20 bg-[#00171F]" aria-label="Loading frequently asked questions section" role="main">
      <div className="container mx-auto px-4">
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Loading frequently asked questions section with questions, answers, and contact information
        </div>

        {/* Header Skeleton */}
        <div className="text-center mb-16">
          <Skeleton className="h-12 md:h-16 w-3/4 mx-auto mb-4" aria-label="Loading FAQ section heading" />
          <div className="space-y-2 max-w-2xl mx-auto" aria-label="Loading FAQ section description">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5 mx-auto" />
          </div>
        </div>

        {/* FAQ Items Skeleton */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
            <div className="space-y-4" aria-label="Loading frequently asked questions list">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4"
                  role="article"
                  aria-label={`Loading question ${i}`}
                >
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-5 w-3/4" aria-label={`Loading question ${i} text`} />
                    <Skeleton className="h-4 w-4" aria-label="Loading expand/collapse button" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Card Skeleton */}
        <div className="text-center mt-12">
          <div
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl max-w-md mx-auto"
            role="complementary"
            aria-label="Loading additional contact information"
          >
            <div className="sr-only" aria-live="polite">
              Loading additional contact information for questions not covered in FAQ
            </div>
            <Skeleton className="h-8 w-3/4 mx-auto mb-4" aria-label="Loading contact heading" />
            <Skeleton className="h-4 w-5/6 mx-auto mb-6" aria-label="Loading contact description" />
            <Skeleton className="h-8 w-48 mx-auto mb-2" aria-label="Loading phone number" />
            <Skeleton className="h-4 w-3/4 mx-auto" aria-label="Loading availability information" />
          </div>
        </div>
      </div>
    </section>
  )
}

export function NavbarSkeleton() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg"
      role="banner"
      aria-label="Loading navigation"
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Loading navigation with company logo, menu items, and contact button
        </div>

        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo Skeleton */}
          <Skeleton className="h-10 sm:h-12 md:h-14 w-24 sm:w-28 md:w-32" aria-label="Loading company logo" />

          {/* Desktop Navigation Skeleton */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8" aria-label="Loading navigation menu">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-4 w-16 lg:w-20" aria-label={`Loading menu item ${i}`} />
            ))}
          </div>

          {/* CTA Button Skeleton */}
          <div className="hidden md:flex">
            <Skeleton className="h-10 w-24 lg:w-28 rounded-full" aria-label="Loading call now button" />
          </div>

          {/* Mobile Menu Button Skeleton */}
          <Skeleton className="md:hidden h-8 w-8 rounded-lg" aria-label="Loading mobile menu button" />
        </div>
      </div>
    </nav>
  )
}

export function FooterSkeleton() {
  return (
    <footer
      className="bg-gradient-to-b from-gray-900 to-black text-white"
      role="contentinfo"
      aria-label="Loading footer"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Loading footer with company information, services list, contact details, and social media links
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info Skeleton */}
          <div className="md:col-span-2" aria-label="Loading company information">
            <Skeleton className="h-16 w-40 mb-6" aria-label="Loading company logo" />
            <Skeleton className="h-6 w-3/4 mb-4" aria-label="Loading company name" />
            <div className="space-y-2 mb-6" aria-label="Loading company description">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
            </div>
            <div className="flex space-x-4" aria-label="Loading social media links">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="w-10 h-10 rounded-full" aria-label={`Loading social media link ${i}`} />
              ))}
            </div>
          </div>

          {/* Services Skeleton */}
          <div aria-label="Loading services list">
            <Skeleton className="h-6 w-24 mb-6" aria-label="Loading services heading" />
            <div className="space-y-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-4 w-32" aria-label={`Loading service ${i}`} />
              ))}
            </div>
          </div>

          {/* Contact Info Skeleton */}
          <div aria-label="Loading contact information">
            <Skeleton className="h-6 w-32 mb-6" aria-label="Loading contact heading" />
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center">
                  <Skeleton className="h-5 w-5 rounded-full mr-3" aria-label={`Loading contact icon ${i}`} />
                  <Skeleton className="h-4 w-28" aria-label={`Loading contact detail ${i}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar Skeleton */}
        <div
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          aria-label="Loading footer bottom section"
        >
          <Skeleton className="h-4 w-64 mb-4 md:mb-0" aria-label="Loading copyright information" />
          <div className="flex space-x-6" aria-label="Loading legal links">
            <Skeleton className="h-4 w-20" aria-label="Loading privacy policy link" />
            <Skeleton className="h-4 w-24" aria-label="Loading terms of service link" />
          </div>
        </div>
      </div>
    </footer>
  )
}
