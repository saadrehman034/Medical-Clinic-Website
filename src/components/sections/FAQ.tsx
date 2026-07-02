"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { fadeUpVariant } from "@/lib/animations";

const faqs = [
  {
    question: "Do you accept walk-in patients?",
    answer: "While we recommend booking an appointment to minimise wait times, we do accept walk-in patients for urgent but non-life-threatening medical concerns during our regular clinic hours.",
  },
  {
    question: "What insurance plans do you accept?",
    answer: "We accept most major health insurance plans. Please contact our front desk with your insurance details before your visit so we can verify your coverage.",
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment by calling us directly, using the booking form on this website, or visiting our clinic in person. Same-day appointments are often available.",
  },
  {
    question: "What are your clinic hours?",
    answer: "We are open Monday through Friday from 9:00 AM to 8:00 PM, and Saturday from 10:00 AM to 5:00 PM. We are closed on Sundays.",
  },
  {
    question: "Do you offer online consultations?",
    answer: "Yes, we offer telehealth consultations for follow-ups and minor medical issues. You can select this option when booking your appointment with us.",
  },
  {
    question: "Where are you located?",
    answer: "We are conveniently located at 1250 Medical Center Drive, Suite 400, Houston, TX 77030 — near the Texas Medical Center. Ample parking is available for our patients.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-28 bg-black relative overflow-hidden">
      <div className="glow-line absolute top-0 inset-x-0" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
          >
            <SectionTag>Common Questions</SectionTag>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>
          </motion.div>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUpVariant}
            >
              <div
                className="glass rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  boxShadow: openIndex === i
                    ? "0 0 0 1px rgba(91,141,239,0.35), 0 0 30px rgba(91,141,239,0.10)"
                    : "0 0 0 1px rgba(91,141,239,0.10)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-7 py-6 text-left transition-colors duration-200 hover:bg-[rgba(91,141,239,0.05)]"
                >
                  <span className={`font-semibold text-[1rem] md:text-[1.05rem] transition-colors duration-200 pr-6 ${
                    openIndex === i ? "text-white" : "text-[#C8D8F0]"
                  }`}>
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === i
                      ? "bg-gradient-to-br from-[#3460C4] to-[#5B8DEF] shadow-[0_0_12px_rgba(91,141,239,0.5)]"
                      : "bg-[rgba(91,141,239,0.10)]"
                  }`}>
                    {openIndex === i
                      ? <Minus className="w-4 h-4 text-white" />
                      : <Plus  className="w-4 h-4 text-[#5B8DEF]" />
                    }
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-7 pt-1 text-[#8B9FBF] leading-relaxed border-t border-[rgba(91,141,239,0.10)]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
