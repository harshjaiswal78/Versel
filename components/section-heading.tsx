"use client"

import type { ReactNode } from "react"
import AnimatedText from "./animated-text"

interface SectionHeadingProps {
  title: string
  description?: string
  icon?: ReactNode
  className?: string
}

export default function SectionHeading({ title, description, icon, className = "" }: SectionHeadingProps) {
  return (
    <div className={`text-center space-y-2 ${className}`}>
      <div className="flex items-center justify-center gap-2 mb-2">
        {icon && (
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/10 text-blue-600">
            {icon}
          </div>
        )}
        <AnimatedText text={title} as="h2" className="text-3xl font-medium text-blue-950" />
      </div>
      {description && (
        <AnimatedText text={description} as="p" className="text-gray-600 max-w-md mx-auto" delay={0.2} />
      )}
    </div>
  )
}
