"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// Add AWS icon import
import { ChevronDown, ChevronUp, ArrowRight, Sparkles, Cloud } from 'lucide-react'

interface PremiumProjectCardProps {
  title: string
  description: string
  businessObjective: string
  problemStatement: string
  tags: string[]
  link?: string
}

export default function PremiumProjectCard({
  title,
  description,
  businessObjective,
  problemStatement,
  tags,
  link,
}: PremiumProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="h-full flex flex-col border-secondary hover:border-primary/30 transition-all duration-500 hover:shadow-lg card-crisp relative overflow-hidden group">
        {/* Gradient border effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 animate-gradient-x" />
        </div>

        {/* Sparkle effect on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute -top-2 -right-2 text-yellow-400"
              initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 360 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles size={24} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* In the render function, add a special icon for AWS projects */}
        {title.includes("AWS") && (
          <motion.div
            className="absolute -top-2 -left-2 text-orange-400"
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Cloud size={24} />
          </motion.div>
        )}

        <CardHeader>
          <CardTitle className="text-blue-950 text-crisp group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-600">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div>
                  <h4 className="text-sm font-medium text-blue-600 mb-1">Business Objective</h4>
                  <p className="text-sm text-gray-600">{businessObjective}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-blue-600 mb-1">Problem Statement</h4>
                  <p className="text-sm text-gray-600">{problemStatement}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 flex items-center text-xs text-blue-600 hover:text-blue-600/80 font-medium transition-colors link-crisp"
            whileHover={{ scale: 1.05, x: 3 }}
            whileTap={{ scale: 0.98 }}
          >
            {isExpanded ? (
              <>
                <ChevronUp size={14} className="mr-1" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown size={14} className="mr-1" />
                Show Business Context
              </>
            )}
          </motion.button>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-3 mt-auto">
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 4).map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs border-blue-100 text-blue-950 hover:bg-blue-600/5 hover:border-blue-600/30 transition-colors duration-300 badge-crisp"
              >
                {tag}
              </Badge>
            ))}
          </div>
          {link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[#F2653C] hover:text-[#d85835] font-medium transition-colors group/link"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Project</span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-1" />
            </motion.a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
