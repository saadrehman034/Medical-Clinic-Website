"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, CheckCircle, Award, ChevronDown } from "lucide-react";
import { clinicConfig } from "@/config/clinic";
import { Button } from "@/components/ui/Button";
import { SectionTag } from "@/components/ui/SectionTag";
import { staggerContainer, fadeUpVariant } from "@/lib/animations";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex items-center bg-[#050B18]"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 grid-bg" />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_105%,rgba(91,141,239,0.09),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_20%,rgba(91,141,239,0.07),transparent)]" />

      {/* Ambient orbs — muted */}
      <div
        className="orb w-[700px] h-[700px] bg-[#2A4A8A] opacity-[0.09] -top-48 -right-48"
        style={{ "--dur": "16s" } as any}
      />
      <div
        className="orb w-[500px] h-[500px] bg-[#006E58] opacity-[0.05] -bottom-32 -left-32"
        style={{ "--dur": "12s", "--delay": "-6s" } as any}
      />

      {/* ── Content ── */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-6 items-center">

          {/* Left column */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUpVariant}>
              <SectionTag>Trusted Healthcare Since 2010</SectionTag>
            </motion.div>

            <motion.h1
              variants={fadeUpVariant}
              className="mt-5 text-4xl md:text-5xl lg:text-[3.6rem] xl:text-[4.2rem] font-bold leading-[1.08] mb-6 tracking-tight"
            >
              <span className="gradient-text">Dedicated to Your</span>
              <br />
              <span className="shimmer-text">Health &amp; Long-Term</span>
              <br />
              <span className="gradient-text">Well-Being</span>
            </motion.h1>

            <motion.p
              variants={fadeUpVariant}
              className="text-[1.05rem] md:text-lg text-[#8B9FBF] mb-10 max-w-[560px] leading-relaxed"
            >
              {clinicConfig.name} is led by{" "}
              <span className="text-[#B8CEFF] font-medium">{clinicConfig.doctor.name}</span>,
              providing expert internal medicine with compassionate, personalised patient care.
            </motion.p>

            <motion.div
              variants={fadeUpVariant}
              className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto"
            >
              <Button size="lg" withArrow asChild>
                <a href="#contact">Book Appointment</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#services">Our Services</a>
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={fadeUpVariant} className="flex items-center gap-5">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="w-11 h-11 rounded-full border-2 border-[#050B18] overflow-hidden relative ring-1 ring-[rgba(91,141,239,0.4)]"
                  >
                    <Image src={src} alt="Patient" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-[#E9B84A] text-[#E9B84A]" />
                  ))}
                </div>
                <p className="text-sm font-medium text-white">
                  <span className="text-[#5B8DEF] font-bold">2,400+</span> Happy Patients
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column — Doctor image */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center">

            {/* Soft halo behind image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 rounded-full bg-[#2A4A8A] blur-[100px] opacity-[0.10]" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-[400px] doctor-image"
            >
              {/* Gradient border — refined */}
              <div className="absolute -inset-[2px] rounded-[2.4rem] bg-gradient-to-br from-[#3B5FA0] via-[#2A8A72] to-[#3B5FA0] opacity-40 blur-[1px]" />

              {/* Image */}
              <div className="relative aspect-[4/5] rounded-[2.2rem] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=750&fit=crop"
                  alt={clinicConfig.doctor.name}
                  fill
                  priority
                  className="object-cover"
                />
                {/* Bottom fade to dark */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B18]/50 via-transparent to-transparent" />
              </div>

              {/* Float card — Rating */}
              <motion.div
                initial={{ opacity: 0, x: -24, y: 12 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-6 -left-6 md:-left-10 glass-bright rounded-2xl p-4 items-center gap-3 hidden sm:flex"
              >
                <div className="bg-[#1E3A6E] p-2.5 rounded-xl">
                  <Star className="w-5 h-5 text-[#94B4E8] fill-[#94B4E8]" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">4.9 / 5.0</p>
                  <p className="text-[11px] text-[#8B9FBF]">Patient Rating</p>
                </div>
              </motion.div>

              {/* Float card — Experience */}
              <motion.div
                initial={{ opacity: 0, x: 24, y: -12 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-10 -right-6 md:-right-10 glass-bright rounded-2xl p-4 items-center gap-3 hidden sm:flex"
              >
                <div className="bg-[#0D3D2F] p-2.5 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-[#5AADA0]" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">15+ Years</p>
                  <p className="text-[11px] text-[#8B9FBF]">Experience</p>
                </div>
              </motion.div>

              {/* Float card — Award */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.65, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-10 right-6 glass-bright rounded-2xl p-3.5 items-center gap-3 hidden sm:flex"
              >
                <div className="bg-[#3D2C05] p-2.5 rounded-xl">
                  <Award className="w-4 h-4 text-[#C9A54A]" />
                </div>
                <div>
                  <p className="font-bold text-white text-xs">Top Rated</p>
                  <p className="text-[10px] text-[#8B9FBF]">2023 Award</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 inset-x-0 glow-line" />

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <span className="text-[9px] font-bold tracking-[0.22em] uppercase text-[#4A5F82]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-8 h-12 rounded-full border border-[rgba(91,141,239,0.20)] flex items-start justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-[#4A6FA0]"
          />
        </motion.div>
      </motion.a>
    </section>
  );
}
