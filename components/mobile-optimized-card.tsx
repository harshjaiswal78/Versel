"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface MobileOptimizedCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function MobileOptimizedCard({ children, className = "", delay = 0 }: MobileOptimizedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className="h-full"
      whileHover={{ y: -5 }}
    >
      <Card
        className={`h-full border-secondary hover:border-primary/30 transition-all duration-500 hover:shadow-xl card-crisp overflow-hidden ${className}`}
      >
        {children}
      </Card>
    </motion.div>
  )
}
