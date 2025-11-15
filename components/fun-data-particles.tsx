"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function FunDataParticles() {
  const containerRef = useRef<HTMLDivElement>(null)

  const getRandomColor = () => {
    const colors = [
      "#007BFF", // Electric Blue
      "#F2653C", // Sunset Coral
      "#64B5F6", // Light Blue
      "#22c55e", // Green
      "#f59e0b", // Amber
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  // Generate random data particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 20 + 10,
    color: getRandomColor(),
    shape: i % 4 === 0 ? "circle" : i % 4 === 1 ? "square" : i % 4 === 2 ? "triangle" : "diamond",
    delay: i * 0.1,
  }))

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100

      setMousePosition({ x, y })
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      container.addEventListener("mouseenter", () => setIsHovering(true))
      container.addEventListener("mouseleave", () => setIsHovering(false))
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseenter", () => setIsHovering(true))
        container.removeEventListener("mouseleave", () => setIsHovering(false))
      }
    }
  }, [])

  const renderShape = (shape: string, color: string, size: number) => {
    switch (shape) {
      case "circle":
        return (
          <motion.div
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
            }}
          />
        )
      case "square":
        return (
          <motion.div
            className="absolute"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
            }}
          />
        )
      case "triangle":
        return (
          <motion.div
            className="absolute"
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size / 2}px solid transparent`,
              borderRight: `${size / 2}px solid transparent`,
              borderBottom: `${size}px solid ${color}`,
            }}
          />
        )
      case "diamond":
        return (
          <motion.div
            className="absolute"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              transform: "rotate(45deg)",
            }}
          />
        )
      default:
        return null
    }
  }

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute opacity-30"
          initial={{
            x: `${particle.x}%`,
            y: `${particle.y}%`,
            scale: 0.5,
            opacity: 0.3,
          }}
          animate={{
            x: isHovering ? `calc(${particle.x}% + ${(mousePosition.x - 50) * 0.1}px)` : `${particle.x}%`,
            y: isHovering ? `calc(${particle.y}% + ${(mousePosition.y - 50) * 0.1}px)` : `${particle.y}%`,
            scale: [0.5, 0.8, 0.5],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          {renderShape(particle.shape, particle.color, particle.size)}
        </motion.div>
      ))}
    </div>
  )
}
