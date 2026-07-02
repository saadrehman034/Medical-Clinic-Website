"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { UserCheck, CalendarDays, ClipboardCheck } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { fadeUpVariant } from "@/lib/animations";

const steps = [
  {
    icon: UserCheck,
    title: "Choose Specialist",
    description: "Select the right doctor for your medical needs from our expert team.",
  },
  {
    icon: CalendarDays,
    title: "Pick Date & Time",
    description: "Find a convenient slot that fits your schedule — same-day often available.",
  },
  {
    icon: ClipboardCheck,
    title: "Confirm & Visit",
    description: "Receive instant confirmation and visit the clinic for personalised care.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-28 relative overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=1920&h=900&fit=crop"
          alt="Medical facility"
          fill
          className="object-cover"
        />
        {/* Dark shade overlay — very heavy so content is readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B18]/80 via-[#050B18]/65 to-[#050B18]/80" />
        {/* Blue accent vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(91,141,239,0.10),transparent)]" />
      </div>

      <div className="glow-line absolute top-0 inset-x-0 z-10" />
      <div className="absolute inset-0 grid-bg opacity-20 z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
          >
            <SectionTag>Simple Process</SectionTag>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="gradient-text">Book Your Appointment in 3 Steps</span>
            </h2>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-14 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px"
               style={{ background: "linear-gradient(90deg, rgba(91,141,239,0.5), rgba(0,212,170,0.5))" }} />

          <motion.div
            className="grid md:grid-cols-3 gap-8 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18 } } }}
          >
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUpVariant}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step circle */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 rounded-full border border-[rgba(91,141,239,0.4)] scale-110 animate-ping opacity-20" />
                    <div className="w-28 h-28 rounded-full glass flex items-center justify-center relative"
                         style={{ boxShadow: "0 0 0 1px rgba(91,141,239,0.20), 0 0 40px rgba(91,141,239,0.12)" }}>
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-[#3460C4] to-[#5B8DEF] text-white flex items-center justify-center font-bold text-sm shadow-[0_0_12px_rgba(91,141,239,0.6)]">
                        {i + 1}
                      </div>
                      <Icon className="w-11 h-11 text-[#5B8DEF] group-hover:text-[#00D4AA] transition-colors duration-300" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-[#8B9FBF] leading-relaxed max-w-[240px]">{step.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
