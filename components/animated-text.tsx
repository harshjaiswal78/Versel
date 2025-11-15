"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  delay?: number
}

export default function AnimatedText({
  text,
  className = "",
  once = true,
  as: Component = "p",
  delay = 0,
}: AnimatedTextProps) {
  const textRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.disconnect()
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current)
      }
    }
  }, [once])

  return (
    <div ref={textRef} className={`overflow-hidden ${className}`}>
      <Component className="inline-block w-full">
        <motion.span
          className="inline-block"
          initial={{ width: "0%" }}
          animate={isVisible ? { width: "100%" } : { width: "0%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {text}
        </motion.span>
      </Component>
    </div>
  )
}
