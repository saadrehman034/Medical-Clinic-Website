"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Doctors } from "@/components/sections/Doctors";
import { Testimonials } from "@/components/sections/Testimonials";
import { AppointmentForm } from "@/components/sections/AppointmentForm";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { MedicalMarquee } from "@/components/sections/MedicalMarquee";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <MedicalMarquee />
      <Stats />
      <About />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <Doctors />
      <Testimonials />
      <AppointmentForm />
      <FAQ />
      <Footer />
    </main>
  );
}
