"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedTestimonials } from "@/components/blocks/animated-testimonials";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Patient · General Medicine",
    company: "Houston, TX",
    content:
      "Dr. Al-Rashid is unlike any doctor I've visited before. He actually listens, takes his time, and explains everything clearly. After years of feeling unheard by other physicians, I finally have a doctor who genuinely cares about my long-term health.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    name: "Robert Chen",
    role: "Patient · Diabetes Management",
    company: "Houston, TX",
    content:
      "I've been a patient at Rahma Medical for three years. The level of care and the modern facility are unmatched in the Houston area. My diabetes is now well-controlled, and same-day appointments have saved me multiple times.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
  },
  {
    id: 3,
    name: "Emily Thompson",
    role: "Patient · Preventive Care",
    company: "Houston, TX",
    content:
      "The clinic is beautifully designed and the whole team is professional and welcoming. I came in for a full health screening and the entire process was smooth from registration to results. Dr. Al-Rashid's thoroughness gave me real peace of mind.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/1 (2).jpg"
          alt="Patient testimonials background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#050B18]/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B18]/40 via-transparent to-[#050B18]/40" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-10 z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatedTestimonials
            title="What Our Patients Say"
            subtitle="Trusted by thousands of patients across Houston. Hear directly from those whose lives we've had the privilege of improving."
            badgeText="Verified Patient Reviews"
            testimonials={testimonials}
            autoRotateInterval={6000}
            trustedCompanies={["Blue Cross Blue Shield", "Aetna", "UnitedHealth", "Medicare", "Cigna", "Humana"]}
            trustedCompaniesTitle="Insurance & Partners Accepted"
          />
        </motion.div>
      </div>
    </section>
  );
}
