"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Trophy } from "lucide-react";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";
import { clinicConfig } from "@/config/clinic";
import { SectionTag } from "@/components/ui/SectionTag";

const reasons = [
  "Evidence-Based Treatment Protocols",
  "State-of-the-Art Medical Equipment",
  "Same-Day Appointments Available",
  "Multilingual & Compassionate Staff",
  "Major Insurance Plans Accepted",
];

export function WhyChooseUs() {
  return (
    <section className="bg-[#0A0F1E] text-white overflow-hidden relative">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="grid lg:grid-cols-2 relative z-10">

        {/* ── Left: Content ── */}
        <div className="p-6 py-14 md:p-16 lg:py-28 lg:pl-24 flex flex-col justify-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-xl lg:ml-auto"
          >
            <motion.div variants={fadeUpVariant}>
              <SectionTag>Our Advantage</SectionTag>
            </motion.div>

            <motion.h2
              variants={fadeUpVariant}
              className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold mb-10"
            >
              <span className="gradient-text">
                Why Patients Choose {clinicConfig.name}
              </span>
            </motion.h2>

            <motion.ul variants={staggerContainer} className="space-y-5 mb-12">
              {reasons.map((reason, i) => (
                <motion.li
                  key={i}
                  variants={fadeUpVariant}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-[rgba(0,212,170,0.12)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(0,212,170,0.22)] transition-colors duration-300"
                       style={{ boxShadow: "0 0 10px rgba(0,212,170,0.15)" }}>
                    <CheckCircle2 className="w-4 h-4 text-[#00D4AA]" />
                  </div>
                  <span className="text-[1.02rem] text-[#C8D8F0] group-hover:text-white transition-colors duration-200">
                    {reason}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* ── Right: Image ── */}
        <div className="relative min-h-[420px] lg:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop"
            alt="Clinic Interior"
            fill
            className="object-cover"
          />

          {/* Dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E] via-[#0A0F1E]/70 to-transparent lg:via-transparent lg:to-transparent" />

          {/* Edge glow */}
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#5B8DEF] via-[#00D4AA] to-[#5B8DEF] opacity-60" />

          {/* Floating award card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-6 left-4 md:bottom-14 md:left-14 glass-bright rounded-2xl p-4 md:p-6 max-w-[220px] md:max-w-[260px]"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C49A20] to-[#E9B84A] flex items-center justify-center shadow-[0_0_14px_rgba(233,184,74,0.5)] flex-shrink-0">
                <Trophy className="w-6 h-6 text-[#050B18]" />
              </div>
              <div>
                <h4 className="font-bold text-white">Top Rated Clinic</h4>
                <p className="text-xs text-[#8B9FBF]">Awarded Best in Houston 2023</p>
              </div>
            </div>
            <div className="flex -space-x-2 mt-3">
              {["#5B8DEF","#00D4AA","#E9B84A","#EF5B8D"].map((c, i) => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-[#0B1628] flex items-center justify-center text-[9px] font-bold text-white"
                     style={{ background: c }}>
                  {["A","B","C","D"][i]}
                </div>
              ))}
              <div className="w-7 h-7 rounded-full border-2 border-[#0B1628] glass flex items-center justify-center text-[8px] font-bold text-[#8B9FBF]">
                +99
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
