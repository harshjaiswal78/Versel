"use client"

import { useEffect, useRef } from "react"

// Extremely simplified version that does minimal work
export default function DataBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions once
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Draw a simple static pattern instead of animation
    ctx.fillStyle = "#000"

    // Draw a few dots
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const size = Math.random() * 2 + 1

      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fill()
    }

    // Draw a simple line
    ctx.beginPath()
    ctx.moveTo(0, canvas.height * 0.7)
    ctx.lineTo(canvas.width, canvas.height * 0.5)
    ctx.strokeStyle = "rgba(0, 0, 0, 0.1)"
    ctx.lineWidth = 2
    ctx.stroke()

    // No animation, no event listeners, no cleanup needed
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
