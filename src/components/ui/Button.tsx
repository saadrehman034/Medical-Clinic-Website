"use client";

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "outline" | "ghost" | "accent"
  size?: "default" | "sm" | "lg" | "icon"
  withArrow?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, withArrow = false, children, ...props }, ref) => {

    const base = "inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8DEF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B18] disabled:pointer-events-none disabled:opacity-40 relative overflow-hidden"

    const variants = {
      default:
        "bg-gradient-to-r from-[#3460C4] to-[#5B8DEF] text-white shadow-[0_4px_20px_rgba(91,141,239,0.45)] hover:shadow-[0_4px_32px_rgba(91,141,239,0.70)] hover:-translate-y-0.5 shimmer-btn",
      outline:
        "border border-[rgba(91,141,239,0.40)] text-[#B8CEFF] bg-[rgba(91,141,239,0.06)] hover:bg-[rgba(91,141,239,0.14)] hover:border-[rgba(91,141,239,0.70)] backdrop-blur-sm",
      ghost:
        "text-[#8B9FBF] hover:text-white hover:bg-[rgba(91,141,239,0.10)]",
      accent:
        "bg-gradient-to-r from-[#00A888] to-[#00D4AA] text-[#050B18] font-bold shadow-[0_4px_20px_rgba(0,212,170,0.40)] hover:shadow-[0_4px_32px_rgba(0,212,170,0.65)] hover:-translate-y-0.5 shimmer-btn",
    }

    const sizes = {
      default: "h-12 px-6 py-2 text-sm",
      sm:      "h-9  px-4 py-1.5 text-xs",
      lg:      "h-14 px-8 py-3 text-base",
      icon:    "h-10 w-10",
    }

    const classes = cn(base, variants[variant], sizes[size], className)

    if (asChild) {
      return (
        <Slot className={classes} ref={ref} {...props}>
          {children}
        </Slot>
      )
    }

    return (
      <motion.button
        className={classes}
        ref={ref}
        whileHover={withArrow ? "hover" : undefined}
        {...(props as any)}
      >
        {children}
        {withArrow && (
          <motion.span
            className="ml-2 inline-flex"
            variants={{ hover: { x: 5 } }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        )}
      </motion.button>
    )
  }
)
Button.displayName = "Button"

export { Button }
