import { MapPin, Phone, Mail, Cross } from "lucide-react";
import { FaFacebook, FaInstagram, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { clinicConfig } from "@/config/clinic";

export function Footer() {
  return (
    <footer className="bg-[#030810] border-t border-[rgba(91,141,239,0.12)] pt-20 pb-10 relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      {/* Top glow line */}
      <div className="glow-line absolute top-0 inset-x-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5 mb-6 group w-fit">
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-[#5B8DEF] blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
                <div className="relative bg-gradient-to-br from-[#3460C4] to-[#5B8DEF] p-2 rounded-lg text-white shadow-[0_0_14px_rgba(91,141,239,0.4)]">
                  <Cross className="w-4 h-4" />
                </div>
              </div>
              <span className="font-sans font-bold text-lg text-white">{clinicConfig.name}</span>
            </a>

            <p className="text-[#8B9FBF] text-sm leading-relaxed mb-8">
              Providing expert medical care with a compassionate approach. Dedicated to your long-term health and well-being.
            </p>

            <div className="flex items-center gap-3">
              {[
                { Icon: FaFacebook,  color: "#1877F2" },
                { Icon: FaInstagram, color: "#E1306C" },
                { Icon: FaXTwitter,  color: "#FFFFFF" },
                { Icon: FaWhatsapp,  color: "#25D366" },
              ].map(({ Icon, color }, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-[#8B9FBF] hover:text-white transition-all duration-200"
                  style={{
                    boxShadow: "0 0 0 1px rgba(91,141,239,0.15)",
                    transition: "box-shadow 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px ${color}55, 0 0 16px ${color}30`;
                    (e.currentTarget as HTMLElement).style.color = color;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 1px rgba(91,141,239,0.15)";
                    (e.currentTarget as HTMLElement).style.color = "#8B9FBF";
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white mb-6 font-serif">Quick Links</h4>
            <ul className="space-y-3">
              {["Home:#home","About Us:#about","Our Doctors:#doctors","Patient Reviews:#testimonials","Contact:#contact"].map((item) => {
                const [label, href] = item.split(":");
                return (
                  <li key={href}>
                    <a href={href} className="text-[#8B9FBF] hover:text-[#5B8DEF] transition-colors text-sm">
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-6 font-serif">Our Services</h4>
            <ul className="space-y-3">
              {["General Consultation","Cardiac Care","Diabetes Management","Preventive Health","Women's Health"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-[#8B9FBF] hover:text-[#5B8DEF] transition-colors text-sm">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6 font-serif">Contact Info</h4>
            <ul className="space-y-4">
              {[
                { Icon: MapPin, value: clinicConfig.contact.address },
                { Icon: Phone,  value: clinicConfig.contact.phone },
                { Icon: Mail,   value: clinicConfig.contact.email },
              ].map(({ Icon, value }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-[#5B8DEF] flex-shrink-0 mt-0.5" />
                  <span className="text-[#8B9FBF] text-sm">{value}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="glow-line mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#8B9FBF] text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {clinicConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-[#8B9FBF]">
            <a href="#" className="hover:text-[#5B8DEF] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#5B8DEF] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
