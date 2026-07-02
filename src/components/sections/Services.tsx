"use client";

import { motion } from "framer-motion";
import { Stethoscope, Heart, Activity, Shield, FlaskConical, User, Check, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    num: "01",
    title: "General Consultation",
    description: "Comprehensive evaluations and personalised treatment plans for patients of every age and condition.",
    bullets: ["Full physical examination", "Chronic disease management", "Same-day appointments available"],
    accent: "#1D4ED8",
    gradA: "#2563EB",
    gradB: "#1D4ED8",
    shadow: "rgba(29,78,216,0.22)",
  },
  {
    icon: Heart,
    num: "02",
    title: "Cardiac Care",
    description: "Advanced heart health monitoring, ECGs, echocardiography, and cardiovascular disease management.",
    bullets: ["EKG & Holter monitoring", "Hypertension management", "Risk factor reduction"],
    accent: "#BE185D",
    gradA: "#DB2777",
    gradB: "#9D174D",
    shadow: "rgba(190,24,93,0.22)",
  },
  {
    icon: Activity,
    num: "03",
    title: "Diabetes Management",
    description: "Specialised programs combining medication, nutrition coaching, and continuous glucose monitoring.",
    bullets: ["A1C tracking & control", "Dietary guidance plans", "Complication prevention"],
    accent: "#047857",
    gradA: "#059669",
    gradB: "#065F46",
    shadow: "rgba(4,120,87,0.22)",
  },
  {
    icon: Shield,
    num: "04",
    title: "Preventive Health",
    description: "Proactive screenings, immunisations, and lifestyle guidance to detect and prevent illness early.",
    bullets: ["Annual wellness exams", "Vaccination programs", "Cancer screenings & referrals"],
    accent: "#B45309",
    gradA: "#D97706",
    gradB: "#92400E",
    shadow: "rgba(180,83,9,0.22)",
  },
  {
    icon: FlaskConical,
    num: "05",
    title: "Lab & Diagnostics",
    description: "On-site blood work, urinalysis, imaging referrals, and rapid diagnostic testing for fast results.",
    bullets: ["In-house blood panels", "Rapid strep & flu tests", "Imaging & specialist referrals"],
    accent: "#6D28D9",
    gradA: "#7C3AED",
    gradB: "#5B21B6",
    shadow: "rgba(109,40,217,0.22)",
  },
  {
    icon: User,
    num: "06",
    title: "Women's Health",
    description: "Dedicated care covering hormonal health, reproductive medicine, and women's long-term wellness.",
    bullets: ["Hormonal health evaluations", "Reproductive health care", "Menopause management"],
    accent: "#C2410C",
    gradA: "#EA580C",
    gradB: "#9A3412",
    shadow: "rgba(194,65,12,0.22)",
  },
];

/* ── Heading word-reveal animation (fade+slide, reliable on mobile) ── */
function LineReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden" style={{ background: "#D8E3F2" }}>

      {/* Dot pattern — matches Doctors section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #94A7C4 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          opacity: 0.35,
        }}
      />

      {/* Depth blobs */}
      <div
        className="absolute -top-60 -left-60 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(29,78,216,0.08) 0%, transparent 68%)" }}
      />
      <div
        className="absolute -bottom-60 -right-60 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(4,120,87,0.07) 0%, transparent 68%)" }}
      />

      {/* Top bar */}
      <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-[#1D4ED8] via-[#047857] to-[#B45309]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* ── Heading ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          {/* Section tag */}
          <motion.span
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.68rem] font-black uppercase tracking-[0.16em] mb-6"
            style={{
              background: "rgba(29,78,216,0.09)",
              border: "1px solid rgba(29,78,216,0.22)",
              color: "#1D4ED8",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            What We Treat
          </motion.span>

          {/* Heading — line reveal */}
          <h2 className="text-4xl md:text-[3.2rem] font-black leading-[1.08] mb-5 tracking-tight">
            <LineReveal delay={0.05}>
              <span style={{ color: "#0F172A" }}>Comprehensive</span>
            </LineReveal>
            <LineReveal delay={0.18}>
              {/* gradient rendered on inline-block to prevent the box artifact */}
              <span
                style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg, #1D4ED8 0%, #047857 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Medical Services
              </span>
            </LineReveal>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-base leading-relaxed"
            style={{ color: "#1E293B" }}
          >
            Expert care across every specialty — from routine check-ups to complex chronic disease management, delivered with compassion and precision.
          </motion.p>
        </div>

        {/* ── Cards ── */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl bg-white overflow-hidden cursor-pointer flex flex-col"
                style={{
                  border: "1.5px solid #BDD0EE",
                  boxShadow: "0 2px 14px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.05)",
                  transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = `0 20px 52px ${svc.shadow}, 0 4px 12px rgba(0,0,0,0.06)`;
                  el.style.borderColor = svc.accent + "66";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 2px 14px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.05)";
                  el.style.borderColor = "#BDD0EE";
                }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[5px]"
                  style={{ background: `linear-gradient(180deg, ${svc.gradA}, ${svc.gradB})` }}
                />

                <div className="p-3 sm:pl-7 sm:pr-6 sm:pt-6 sm:pb-6 flex flex-col flex-1">

                  {/* Icon + card number */}
                  <div className="flex items-center justify-between mb-3 sm:mb-5">
                    <div
                      className="w-10 h-10 sm:w-[54px] sm:h-[54px] rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${svc.gradA}1F, ${svc.gradB}14)`,
                        border: `1.5px solid ${svc.accent}28`,
                      }}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: svc.accent }} />
                    </div>
                    <span
                      className="hidden sm:block font-black text-5xl select-none leading-none"
                      style={{ color: svc.accent, opacity: 0.10 }}
                    >
                      {svc.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[0.82rem] sm:text-[1.05rem] font-bold mb-1 sm:mb-2 leading-tight" style={{ color: "#0F172A" }}>
                    {svc.title}
                  </h3>

                  {/* Description — hidden on mobile */}
                  <p className="hidden sm:block text-[0.83rem] leading-relaxed mb-4" style={{ color: "#475569" }}>
                    {svc.description}
                  </p>

                  {/* Divider */}
                  <div className="border-t mb-2 sm:mb-4 mt-2 sm:mt-0" style={{ borderColor: "#DDE8F8" }} />

                  {/* Bullets */}
                  <ul className="space-y-1 sm:space-y-1.5 mb-2 sm:mb-5 flex-1">
                    {svc.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-1.5 sm:gap-2.5">
                        <span
                          className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: svc.accent + "18" }}
                        >
                          <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5" style={{ color: svc.accent }} />
                        </span>
                        <span className="text-[0.68rem] sm:text-[0.8rem] font-medium leading-tight" style={{ color: "#1E293B" }}>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <div
                    className="inline-flex items-center gap-1 text-[0.68rem] sm:text-xs font-bold self-start"
                    style={{ color: svc.accent }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-white font-bold text-sm tracking-wide hover:-translate-y-0.5 transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #1D4ED8, #047857)",
              boxShadow: "0 8px 28px rgba(29,78,216,0.28)",
            }}
          >
            Book an Appointment
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
