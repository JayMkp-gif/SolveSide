import type React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface GradientButtonProps {
  href: string
  children: React.ReactNode
  className?: string
  size?: "default" | "lg" | "sm"
  variant?: "primary" | "secondary" | "outline"
  icon?: boolean
}

export default function GradientButton({
  href,
  children,
  className,
  size = "default",
  variant = "primary",
  icon = false,
}: GradientButtonProps) {
  const sizeClasses = {
    default: "py-2 px-4 text-sm",
    lg: "py-3 px-6 text-base",
    sm: "py-1 px-3 text-xs",
  }

  const variantClasses = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90",
    secondary: "bg-gradient-to-r from-gray-100 to-gray-200 text-primary hover:from-gray-200 hover:to-gray-300",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/10",
  }

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
    >
      <span>{children}</span>
      {icon && <ArrowRight className="ml-2 h-4 w-4" />}
    </Link>
  )
}
