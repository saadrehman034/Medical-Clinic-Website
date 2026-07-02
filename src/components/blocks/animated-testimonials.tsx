"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Quote, Star } from "lucide-react"
import { motion, useAnimation, useInView, type Variants } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

export interface AnimatedTestimonialsProps {
  title?: string
  subtitle?: string
  badgeText?: string
  testimonials?: Testimonial[]
  autoRotateInterval?: number
  trustedCompanies?: string[]
  trustedCompaniesTitle?: string
  className?: string
}

export function AnimatedTestimonials({
  title = "What Our Patients Say",
  subtitle = "Trusted by thousands of patients across Houston. Hear directly from those whose lives we've had the privilege of improving.",
  badgeText = "Verified Patient Reviews",
  testimonials = [],
  autoRotateInterval = 6000,
  trustedCompanies = [],
  trustedCompaniesTitle = "Insurance & Partners Accepted",
  className,
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  }

  useEffect(() => {
    if (isInView) controls.start("visible")
  }, [isInView, controls])

  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return
    const interval = setInterval(() => {
      setActiveIndex((c) => (c + 1) % testimonials.length)
    }, autoRotateInterval)
    return () => clearInterval(interval)
  }, [autoRotateInterval, testimonials.length])

  if (testimonials.length === 0) return null

  return (
    <div ref={sectionRef} className={className}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="grid grid-cols-1 gap-12 w-full md:grid-cols-2 lg:gap-20"
      >
        {/* ── Left: heading + dots ── */}
        <motion.div variants={itemVariants} className="flex flex-col justify-center">
          <div className="space-y-6">
            {badgeText && (
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{
                  background: "rgba(91,141,239,0.10)",
                  border: "1px solid rgba(91,141,239,0.22)",
                  color: "#7AAEFF",
                }}
              >
                <Star className="h-3 w-3 fill-[#7AAEFF]" />
                <span>{badgeText}</span>
              </div>
            )}

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span className="gradient-text">{title}</span>
            </h2>

            <p className="max-w-[480px] text-[#8B9FBF] md:text-lg leading-relaxed">
              {subtitle}
            </p>

            {/* Navigation dots */}
            <div className="flex items-center gap-3 pt-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View testimonial ${index + 1}`}
                  className="h-2.5 rounded-full transition-all duration-300"
                  style={{
                    width: activeIndex === index ? 40 : 10,
                    background: activeIndex === index
                      ? "linear-gradient(90deg,#4A7AD4,#3A9A82)"
                      : "rgba(91,141,239,0.20)",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Right: animated cards ── */}
        <motion.div variants={itemVariants} className="relative min-h-[360px] md:min-h-[420px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="absolute inset-0"
              initial={{ opacity: 0, x: 60 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                x: activeIndex === index ? 0 : 60,
                scale: activeIndex === index ? 1 : 0.95,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ zIndex: activeIndex === index ? 10 : 0 }}
            >
              <div
                className="h-full flex flex-col rounded-2xl p-7 md:p-8"
                style={{
                  background: "rgba(8,18,38,0.72)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(91,141,239,0.14)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(91,141,239,0.08)",
                }}
              >
                {/* Stars */}
                <div className="mb-5 flex gap-1.5">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#C9A54A] text-[#C9A54A]" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-6 flex-1">
                  <Quote className="absolute -top-1 -left-1 h-7 w-7 rotate-180" style={{ color: "rgba(91,141,239,0.18)" }} />
                  <p className="relative z-10 text-[1.05rem] font-light leading-[1.7] text-[#C8D8F0] pl-5 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>

                <Separator className="my-4" />

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12" style={{ boxShadow: "0 0 0 2px rgba(91,141,239,0.25)" }}>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-[#6B7F9E] mt-0.5">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Decorative corners */}
          <div
            className="absolute -bottom-4 -left-4 h-20 w-20 rounded-xl pointer-events-none"
            style={{ background: "rgba(91,141,239,0.05)" }}
          />
          <div
            className="absolute -top-4 -right-4 h-20 w-20 rounded-xl pointer-events-none"
            style={{ background: "rgba(0,184,150,0.04)" }}
          />
        </motion.div>
      </motion.div>

      {/* ── Trusted companies logo cloud ── */}
      {trustedCompanies.length > 0 && (
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="mt-16 text-center"
          style={{ borderTop: "1px solid rgba(91,141,239,0.10)", paddingTop: "2rem" }}
        >
          <h3 className="text-[10px] font-bold uppercase tracking-[0.20em] text-[#4A5F82] mb-6">
            {trustedCompaniesTitle}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {trustedCompanies.map((company) => (
              <span
                key={company}
                className="text-xs font-semibold px-4 py-2 rounded-full"
                style={{
                  background: "rgba(91,141,239,0.07)",
                  border: "1px solid rgba(91,141,239,0.13)",
                  color: "#6B7F9E",
                }}
              >
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
