import { cn } from "@/lib/utils"

interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTag({ children, className }: SectionTagProps) {
  return (
    <span className={cn("section-tag-pill", className)}>
      <span className="w-1.5 h-1.5 rounded-full bg-[#00D4AA] inline-block shadow-[0_0_6px_rgba(0,212,170,0.8)]" />
      {children}
    </span>
  )
}
