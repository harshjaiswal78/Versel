"use client"

import { useEffect, useRef } from "react"

export default function ColorfulDataBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawPattern()
    }

    // Draw the colorful data pattern
    const drawPattern = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create a gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(255, 107, 107, 0.03)") // Sunset coral
      gradient.addColorStop(0.5, "rgba(0, 123, 255, 0.03)") // Electric blue
      gradient.addColorStop(1, "rgba(57, 255, 20, 0.03)") // Neon green

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw data points with different colors
      const colors = [
        "rgba(255, 107, 107, 0.2)", // Sunset coral
        "rgba(0, 123, 255, 0.2)", // Electric blue
        "rgba(57, 255, 20, 0.2)", // Neon green
        "rgba(255, 193, 7, 0.2)", // Amber
        "rgba(111, 66, 193, 0.2)", // Purple
      ]

      // Draw scattered data points
      for (let i = 0; i < 80; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 3 + 1

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]
        ctx.fill()
      }

      // Draw a few data lines
      for (let i = 0; i < 8; i++) {
        ctx.beginPath()
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height)

        // Create a curved line
        const cp1x = Math.random() * canvas.width
        const cp1y = Math.random() * canvas.height
        const cp2x = Math.random() * canvas.width
        const cp2y = Math.random() * canvas.height
        const endX = Math.random() * canvas.width
        const endY = Math.random() * canvas.height

        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY)
        ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)]
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }

    // Initial setup
    resizeCanvas()

    // Handle window resize
    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-80" />
}
