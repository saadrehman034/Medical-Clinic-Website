"use client";

import { ShieldCheck, Award, CalendarDays, CheckCircle2, Star, Trophy, Cross } from "lucide-react";

const items = [
  { icon: ShieldCheck,  label: "FDA Approved" },
  { icon: Award,        label: "Board Certified" },
  { icon: CalendarDays, label: "Same-Day Appointments" },
  { icon: CheckCircle2, label: "10,000+ Patients Served" },
  { icon: Star,         label: "98% Satisfaction Rate" },
  { icon: Trophy,       label: "ABIM Certified" },
  { icon: Cross,        label: "HIPAA Compliant" },
  { icon: Award,        label: "15+ Years Experience" },
  { icon: Star,         label: "AHA Endorsed" },
  { icon: CheckCircle2, label: "In-Network Insurance" },
];

const doubled = [...items, ...items];

export function MedicalMarquee() {
  return (
    <div style={{ position: "relative", overflow: "hidden", background: "#00D4AA", paddingTop: 14, paddingBottom: 14 }}>
      {/* Left fade */}
      <div style={{
        position: "absolute", inset: "0 auto 0 0", width: 80, zIndex: 10,
        background: "linear-gradient(to right, #00D4AA, transparent)",
        pointerEvents: "none",
      }} />
      {/* Right fade */}
      <div style={{
        position: "absolute", inset: "0 0 0 auto", width: 80, zIndex: 10,
        background: "linear-gradient(to left, #00D4AA, transparent)",
        pointerEvents: "none",
      }} />

      {/* Track */}
      <div style={{
        display: "flex",
        flexWrap: "nowrap",
        width: "max-content",
        animation: "marquee 14s linear infinite",
        willChange: "transform",
      }}>
        {doubled.map(({ icon: Icon, label }, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", flexShrink: 0, whiteSpace: "nowrap" }}>
            <Icon style={{ width: 14, height: 14, color: "#050B18", flexShrink: 0 }} />
            <span style={{
              marginLeft: 8,
              color: "#050B18",
              fontSize: "0.7rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              fontFamily: "var(--font-inter)",
            }}>
              {label}
            </span>
            <span style={{ margin: "0 22px", color: "rgba(5,11,24,0.3)", fontWeight: 900, fontSize: "0.85rem" }}>
              ◆
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
