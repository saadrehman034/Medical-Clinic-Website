"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import Image from "next/image";
import { Phone, MapPin, Clock, Loader2, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { appointmentSchema, type AppointmentFormValues } from "@/lib/validations";
import { clinicConfig } from "@/config/clinic";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";

export function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (_data: AppointmentFormValues) => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    toast.success("Appointment request sent successfully!");
    reset();
  };

  const contactItems = [
    { icon: Phone,  label: "Call Us",      value: clinicConfig.contact.phone },
    { icon: MapPin, label: "Location",     value: clinicConfig.contact.address },
    { icon: Clock,  label: "Clinic Hours", value: `${clinicConfig.contact.hours.weekdays} · ${clinicConfig.contact.hours.saturday}` },
  ];

  return (
    <section id="contact" className="py-14 md:py-28 relative overflow-hidden">
      {/* Cinematic background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=900&fit=crop"
          alt="Clinic interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030810]/88 via-[#030810]/75 to-[#030810]/62" />
      </div>

      <div className="absolute inset-0 grid-bg opacity-20 z-0" />


      <div className="container mx-auto px-4 md:px-6 relative z-10 mt-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* ── Left: Contact info ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUpVariant}>
              <span className="section-tag-pill">
                <Sparkles className="w-3 h-3" />
                Same-Day Available
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUpVariant}
              className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              <span className="gradient-text">Book Your</span>
              <br />
              <span className="shimmer-text">Appointment Today</span>
            </motion.h2>

            <motion.p variants={fadeUpVariant} className="text-[#8B9FBF] text-lg mb-12 max-w-md leading-relaxed">
              Call us directly or fill the form — our team will confirm your visit shortly.
            </motion.p>

            <motion.div variants={staggerContainer} className="space-y-8">
              {contactItems.map(({ icon: Icon, label, value }, i) => (
                <motion.div key={i} variants={fadeUpVariant} className="flex items-start gap-5">
                  <div
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center flex-shrink-0"
                    style={{ boxShadow: "0 0 0 1px rgba(91,141,239,0.20), 0 0 20px rgba(91,141,239,0.08)" }}
                  >
                    <Icon className="w-5 h-5 text-[#5B8DEF]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{label}</h4>
                    <p className="text-[#8B9FBF] text-sm">{value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="glass rounded-3xl p-8 md:p-10"
              style={{ boxShadow: "0 0 0 1px rgba(91,141,239,0.15), 0 20px 60px rgba(0,0,0,0.5), 0 0 80px rgba(91,141,239,0.05)" }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <input
                      {...register("fullName")}
                      placeholder="Full Name"
                      className="input-cinematic w-full px-5 py-4 text-sm"
                    />
                    {errors.fullName && (
                      <p className="text-[#FF6B8A] text-xs mt-1.5">{errors.fullName.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      {...register("phoneNumber")}
                      placeholder="Phone Number"
                      className="input-cinematic w-full px-5 py-4 text-sm"
                    />
                    {errors.phoneNumber && (
                      <p className="text-[#FF6B8A] text-xs mt-1.5">{errors.phoneNumber.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <input
                      {...register("email")}
                      placeholder="Email Address"
                      className="input-cinematic w-full px-5 py-4 text-sm"
                    />
                    {errors.email && (
                      <p className="text-[#FF6B8A] text-xs mt-1.5">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <select
                      {...register("department")}
                      className="input-cinematic w-full px-5 py-4 text-sm appearance-none"
                    >
                      <option value="">Select Department</option>
                      <option value="general">General Consultation</option>
                      <option value="cardio">Cardiac Care</option>
                      <option value="diabetes">Diabetes Management</option>
                      <option value="preventive">Preventive Health</option>
                    </select>
                    {errors.department && (
                      <p className="text-[#FF6B8A] text-xs mt-1.5">{errors.department.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="date"
                    {...register("date")}
                    className="input-cinematic w-full px-5 py-4 text-sm [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-50"
                  />
                  {errors.date && (
                    <p className="text-[#FF6B8A] text-xs mt-1.5">{errors.date.message}</p>
                  )}
                </div>

                <div>
                  <textarea
                    {...register("message")}
                    placeholder="Additional Message (Optional)"
                    rows={4}
                    className="input-cinematic w-full px-5 py-4 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-full font-bold text-base text-[#050B18] bg-gradient-to-r from-[#00A888] to-[#00D4AA] shimmer-btn shadow-[0_4px_20px_rgba(0,212,170,0.40)] hover:shadow-[0_4px_32px_rgba(0,212,170,0.65)] hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? <Loader2 className="w-6 h-6 animate-spin" />
                    : "Book Appointment"
                  }
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
