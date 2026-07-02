"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Cross } from "lucide-react";
import { clinicConfig } from "@/config/clinic";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { name: "Home",         href: "#home" },
  { name: "About",        href: "#about" },
  { name: "Services",     href: "#services" },
  { name: "Doctors",      href: "#doctors" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact",      href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 bg-[#060B15] border-b border-white/[0.06] ${
        scrolled
          ? "shadow-[0_8px_40px_rgba(0,0,0,0.7)] py-3"
          : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 z-50 relative group">
          <div className="relative">
            <div className="absolute inset-0 rounded-lg bg-[#5B8DEF] blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="relative bg-gradient-to-br from-[#3460C4] to-[#5B8DEF] p-2 rounded-lg text-white shadow-[0_0_16px_rgba(91,141,239,0.5)]">
              <Cross className="w-4 h-4" />
            </div>
          </div>
          <span className="font-sans font-semibold text-[1.05rem] text-white tracking-tight">
            {clinicConfig.name}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i + 0.3 }}
              className="relative text-sm font-medium text-[#8B9FBF] hover:text-white transition-colors duration-200 group"
            >
              {link.name}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-[#5B8DEF] to-[#00D4AA] group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={`tel:${clinicConfig.contact.phone}`}
            className="flex items-center gap-2 text-sm font-medium text-[#8B9FBF] hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-[#5B8DEF]" />
            {clinicConfig.contact.phone}
          </a>
          <Button withArrow asChild>
            <a href="#contact">Book Appointment</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden z-50 relative p-2 text-[#8B9FBF] hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#050B18] z-40 lg:hidden flex flex-col items-center justify-center gap-8 overflow-hidden"
          >
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="orb w-96 h-96 bg-[#5B8DEF] opacity-[0.08] top-1/4 -left-32" style={{ "--dur": "16s" } as any} />
            <div className="orb w-64 h-64 bg-[#00D4AA] opacity-[0.06] bottom-1/4 -right-16" style={{ "--dur": "12s", "--delay": "-6s" } as any} />

            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 + 0.1 }}
                className="relative font-serif text-3xl text-white hover:text-[#5B8DEF] transition-colors z-10 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#5B8DEF] to-[#00D4AA] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="z-10 mt-4"
            >
              <Button size="lg" withArrow asChild onClick={() => setOpen(false)}>
                <a href="#contact">Book Appointment</a>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
