"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { Clock, BadgeCheck } from "lucide-react";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";

const doctors = [
  {
    name: "Dr. Ahmed Al-Rashid",
    specialty: "Internal Medicine",
    experience: "15+ Years",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop",
    featured: true,
    accentColor: "#1D4ED8",
    tag: "Lead Specialist",
  },
  {
    name: "Dr. Sarah Williams",
    specialty: "Cardiologist",
    experience: "12 Years",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=500&fit=crop",
    featured: false,
    accentColor: "#BE185D",
    tag: null,
  },
  {
    name: "Dr. James Park",
    specialty: "Endocrinologist",
    experience: "10 Years",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop",
    featured: false,
    accentColor: "#047857",
    tag: null,
  },
  {
    name: "Dr. Maria Rodriguez",
    specialty: "Gynecologist",
    experience: "14 Years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop",
    featured: false,
    accentColor: "#7C3AED",
    tag: null,
  },
];

export function Doctors() {
  return (
    <section id="doctors" className="py-24 relative overflow-hidden" style={{ background: "#D8E3F2" }}>

      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #94A7C4 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          opacity: 0.35,
        }}
      />

      {/* Subtle depth blobs */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(29,78,216,0.08) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.68rem] font-black uppercase tracking-[0.16em] mb-5"
              style={{
                background: "rgba(29,78,216,0.12)",
                border: "1px solid rgba(29,78,216,0.25)",
                color: "#1D4ED8",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              Our Specialists
            </span>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
              style={{ color: "#0F172A" }}
            >
              Meet Our Expert Doctors
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "#334155" }}>
              Board-certified specialists committed to delivering personalised, evidence-based care.
            </p>
          </motion.div>
        </div>

        {/* Cards grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {doctors.map((doc, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariant}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
              className="group rounded-2xl overflow-hidden bg-white flex flex-col"
              style={{
                border: "1.5px solid #C2D2E8",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05)",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = `0 20px 50px rgba(0,0,0,0.14), 0 4px 12px rgba(0,0,0,0.08)`;
                el.style.borderColor = doc.accentColor + "55";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05)";
                el.style.borderColor = "#C2D2E8";
              }}
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                />

                {/* Accent top bar */}
                <div
                  className="absolute top-0 inset-x-0 h-1"
                  style={{ background: doc.accentColor }}
                />

                {/* Featured badge */}
                {doc.tag && (
                  <div
                    className="absolute top-4 left-3 px-3 py-1 rounded-full text-[0.62rem] font-black uppercase tracking-wider text-white"
                    style={{ background: doc.accentColor, boxShadow: `0 2px 12px ${doc.accentColor}55` }}
                  >
                    {doc.tag}
                  </div>
                )}

                {/* LinkedIn on hover */}
                <a
                  href="#"
                  className="absolute bottom-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.20)", color: "#1D4ED8" }}
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
              </div>

              {/* Info panel */}
              <div className="p-5 flex flex-col gap-2">
                {/* Name */}
                <h3 className="text-[1rem] font-extrabold leading-snug" style={{ color: "#0F172A" }}>
                  {doc.name}
                </h3>

                {/* Specialty */}
                <div className="flex items-center gap-1.5">
                  <BadgeCheck className="w-3.5 h-3.5 flex-shrink-0" style={{ color: doc.accentColor }} />
                  <span className="text-sm font-bold" style={{ color: doc.accentColor }}>
                    {doc.specialty}
                  </span>
                </div>

                {/* Experience */}
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#475569" }} />
                  <span className="text-xs font-semibold" style={{ color: "#475569" }}>
                    {doc.experience} Experience
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
