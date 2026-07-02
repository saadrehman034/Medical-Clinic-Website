"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { clinicConfig } from "@/config/clinic";
import { SectionTag } from "@/components/ui/SectionTag";
import { ArrowRight, Award, MapPin, Globe, BookOpen, Stethoscope, CheckCircle2 } from "lucide-react";
import { fadeUpVariant, staggerContainer, slideInLeft } from "@/lib/animations";

const stats = [
  { value: "15+",  label: "Years Exp." },
  { value: "10K+", label: "Patients" },
  { value: "98%",  label: "Satisfaction" },
  { value: "20+",  label: "Publications" },
];

const highlights = [
  { icon: Stethoscope, label: "Focus Areas",    value: "Hypertension · Diabetes · Cardiology · Preventive Medicine" },
  { icon: MapPin,      label: "Affiliated With", value: "Houston Methodist · Memorial Hermann Medical Center" },
  { icon: BookOpen,    label: "Research",         value: "20+ peer-reviewed publications in internal medicine" },
  { icon: Globe,       label: "Languages",        value: "English · Arabic" },
];

const credentials = [
  { label: "MD, Johns Hopkins University", color: "#5B8DEF", bg: "rgba(91,141,239,0.08)" },
  { label: "ABIM Board Certified",          color: "#00B896", bg: "rgba(0,184,150,0.08)" },
  { label: "FACP — Fellow, ACP",            color: "#D4960A", bg: "rgba(212,150,10,0.08)" },
];

export function About() {
  return (
    <section id="about" className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&h=1080&fit=crop"
          alt="Medical facility"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#050B18]/80" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-15 z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <SectionTag>About The Doctor</SectionTag>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* ── Left: Image ── */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            {/* Portrait */}
            <div className="relative max-w-[400px]">
              {/* Gradient border */}
              <div className="absolute -inset-[3px] rounded-3xl bg-gradient-to-br from-[#5B8DEF] via-[#00D4AA] to-[#5B8DEF] opacity-55 blur-[2px]" />
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] group">
                <Image
                  src="/ahmed.png"
                  alt={clinicConfig.doctor.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B18]/60 via-transparent to-transparent" />

                {/* Overlay name tag at bottom */}
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <p className="text-white font-bold text-lg leading-tight">{clinicConfig.doctor.name}</p>
                  <p className="text-[#00D4AA] text-sm font-medium">Internal Medicine Specialist</p>
                </div>
              </div>

              {/* Award badge — top right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute top-4 right-2 sm:-right-5 glass-bright rounded-2xl px-4 py-3 glow-card"
              >
                <div className="flex items-center gap-2.5">
                  <div className="bg-gradient-to-br from-[#C49A20] to-[#E9B84A] p-2 rounded-lg shadow-[0_0_12px_rgba(233,184,74,0.5)]">
                    <Award className="w-3.5 h-3.5 text-[#050B18]" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-xs leading-none">Top Rated</p>
                    <p className="text-[10px] text-[#8B9FBF] mt-0.5">Best Doctor 2023</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Secondary photo — bottom right overlap (hidden on mobile) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 right-0 md:right-4 w-[46%] aspect-[4/3] rounded-2xl overflow-hidden group hidden sm:block"
              style={{ boxShadow: "0 0 0 2px rgba(0,212,170,0.35), 0 12px 36px rgba(0,0,0,0.55)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&h=450&fit=crop"
                alt="Consultation"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          </motion.div>

          {/* ── Right: Content ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:pl-4"
          >
            {/* Name & title */}
            <motion.div variants={fadeUpVariant}>
              <h2 className="text-3xl md:text-4xl font-bold mb-1">
                <span className="gradient-text">{clinicConfig.doctor.name}</span>
              </h2>
              <p className="text-[#5B8DEF] font-semibold text-base mb-4">{clinicConfig.doctor.specialty}</p>
            </motion.div>

            {/* Inline stat strip */}
            <motion.div
              variants={fadeUpVariant}
              className="grid grid-cols-2 sm:grid-cols-4 gap-0 mb-6 rounded-xl overflow-hidden border border-[rgba(91,141,239,0.15)]"
            >
              {stats.map(({ value, label }, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center py-3.5 text-center ${i < stats.length - 1 ? "border-r border-[rgba(91,141,239,0.12)]" : ""} hover:bg-[rgba(91,141,239,0.06)] transition-colors duration-200`}
                  style={{ background: "rgba(13,30,58,0.50)" }}
                >
                  <span className="text-xl font-extrabold accent-gradient-text">{value}</span>
                  <span className="text-[10px] text-[#8B9FBF] font-medium mt-0.5">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* Short bio */}
            <motion.p variants={fadeUpVariant} className="text-[#8B9FBF] leading-relaxed text-[0.93rem] mb-5">
              {clinicConfig.doctor.bio.split("\n\n")[0]}
            </motion.p>

            {/* Highlights — 1-col on mobile, 2-col on sm+ */}
            <motion.div variants={fadeUpVariant} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {highlights.map(({ icon: Icon, label, value }, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-3.5 flex items-start gap-2.5 hover:bg-[rgba(91,141,239,0.08)] transition-colors duration-200 cursor-default"
                >
                  <div className="w-7 h-7 rounded-lg bg-[rgba(91,141,239,0.12)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-[#5B8DEF]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9.5px] font-black text-[#5B8DEF] uppercase tracking-widest mb-0.5">{label}</p>
                    <p className="text-[#C8D8F0] text-xs leading-snug">{value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Credentials */}
            <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-2 mb-6">
              {credentials.map(({ label, color, bg }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-full px-3.5 py-1.5 border"
                  style={{
                    background: bg,
                    borderColor: color + "30",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = bg.replace("0.08", "0.16")}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = bg}
                >
                  <CheckCircle2 className="w-3 h-3 flex-shrink-0" style={{ color }} />
                  <span className="text-xs font-semibold text-white">{label}</span>
                </div>
              ))}
              <div
                className="flex items-center gap-2 rounded-full px-3.5 py-1.5 border"
                style={{ background: "rgba(167,93,239,0.08)", borderColor: "rgba(167,93,239,0.30)" }}
              >
                <CheckCircle2 className="w-3 h-3 flex-shrink-0" style={{ color: "#A75DEF" }} />
                <span className="text-xs font-semibold text-white">{clinicConfig.doctor.experience} Experience</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUpVariant}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-white font-bold text-sm hover:-translate-y-0.5 transition-all duration-200 group"
                style={{
                  background: "linear-gradient(135deg, #5B8DEF, #00D4AA)",
                  boxShadow: "0 6px 24px rgba(91,141,239,0.35)",
                }}
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
