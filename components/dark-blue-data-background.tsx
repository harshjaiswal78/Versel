"use client"

import { useEffect, useRef } from "react"

export default function DarkBlueDataBackground() {
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

    // Draw the dark blue data pattern
    const drawPattern = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create a gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(10, 25, 47, 0.2)") // Dark blue
      gradient.addColorStop(1, "rgba(17, 34, 64, 0.2)") // Slightly lighter blue

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines
      ctx.strokeStyle = "rgba(100, 181, 246, 0.05)" // Light blue
      ctx.lineWidth = 0.5

      const gridSize = 50

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw data points
      const colors = [
        "rgba(100, 181, 246, 0.4)", // Light blue
        "rgba(33, 150, 243, 0.3)", // Blue
        "rgba(255, 107, 107, 0.3)", // Sunset coral
        "rgba(255, 255, 255, 0.2)", // White
      ]

      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 2 + 0.5

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]
        ctx.fill()
      }

      // Draw a few data lines
      for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height)

        // Create a curved line
        const cp1x = Math.random() * canvas.width
        const cp1y = Math.random() * canvas.height
        const endX = Math.random() * canvas.width
        const endY = Math.random() * canvas.height

        ctx.quadraticCurveTo(cp1x, cp1y, endX, endY)
        ctx.strokeStyle = "rgba(100, 181, 246, 0.15)" // Light blue
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

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}
