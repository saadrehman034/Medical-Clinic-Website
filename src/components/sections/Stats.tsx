"use client";

import { motion } from "framer-motion";
import { clinicConfig } from "@/config/clinic";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { fadeUpVariant } from "@/lib/animations";

export function Stats() {
  const stats = [
    { value: clinicConfig.stats.patients,    suffix: "+", label: "Patients Treated" },
    { value: clinicConfig.stats.satisfaction, suffix: "%", label: "Patient Satisfaction" },
    { value: clinicConfig.stats.procedures,  suffix: "+", label: "Expert Procedures" },
    { value: clinicConfig.stats.years,       suffix: "+", label: "Years Experience" },
  ];

  return (
    <section className="bg-[#0B1628] py-14 relative overflow-hidden">
      <div className="glow-line absolute top-0 inset-x-0" />
      <div className="glow-line absolute bottom-0 inset-x-0" />
      <div className="absolute inset-0 grid-bg opacity-25" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariant}
              className={`flex flex-col items-center text-center px-6 py-8 ${
                i < stats.length - 1 ? "border-r border-[rgba(91,141,239,0.10)]" : ""
              }`}
            >
              <div className="text-4xl md:text-5xl font-extrabold mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} className="accent-gradient-text" />
              </div>
              <p className="text-sm md:text-base font-medium text-[#8B9FBF]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
