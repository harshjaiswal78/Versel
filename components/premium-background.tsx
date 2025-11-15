"use client"

import { useEffect, useRef } from "react"

export default function PremiumBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with device pixel ratio for crisp rendering
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()

    // Create particles
    const particlesArray: Particle[] = []
    const particleCount = 80

    // Premium color palette
    const particleColors = [
      "rgba(0, 123, 255, 0.15)", // Electric Blue
      "rgba(100, 181, 246, 0.12)", // Light Blue
      "rgba(242, 101, 60, 0.08)", // Tangerine
      "rgba(66, 133, 244, 0.10)", // Google Blue
      "rgba(52, 168, 235, 0.12)", // Sky Blue
    ]

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      pulseSpeed: number
      pulseSize: number
      originalSize: number
      opacity: number
      opacityDirection: number

      constructor() {
        this.x = (Math.random() * canvas.width) / window.devicePixelRatio
        this.y = (Math.random() * canvas.height) / window.devicePixelRatio
        this.originalSize = Math.random() * 2.5 + 0.5
        this.size = this.originalSize
        this.speedX = (Math.random() - 0.5) * 0.15
        this.speedY = (Math.random() - 0.5) * 0.15
        this.color = particleColors[Math.floor(Math.random() * particleColors.length)]
        this.pulseSpeed = Math.random() * 0.01 + 0.005
        this.pulseSize = Math.random() * Math.PI * 2
        this.opacity = Math.random() * 0.5 + 0.3
        this.opacityDirection = Math.random() > 0.5 ? 0.005 : -0.005
      }

      update() {
        // Move particles
        this.x += this.speedX
        this.y += this.speedY

        // Pulse size
        this.pulseSize += this.pulseSpeed
        this.size = this.originalSize + Math.sin(this.pulseSize) * 0.5

        // Pulse opacity for a more dynamic effect
        this.opacity += this.opacityDirection
        if (this.opacity >= 0.8 || this.opacity <= 0.2) {
          this.opacityDirection *= -1
        }

        // Wrap around edges
        if (this.x > canvas.width / window.devicePixelRatio) this.x = 0
        if (this.x < 0) this.x = canvas.width / window.devicePixelRatio
        if (this.y > canvas.height / window.devicePixelRatio) this.y = 0
        if (this.y < 0) this.y = canvas.height / window.devicePixelRatio
      }

      draw() {
        // Extract the base color and apply dynamic opacity
        const colorMatch = this.color.match(/rgba$$(\d+),\s*(\d+),\s*(\d+),\s*[\d.]+$$/)
        if (colorMatch) {
          const r = colorMatch[1]
          const g = colorMatch[2]
          const b = colorMatch[3]
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`
        } else {
          ctx.fillStyle = this.color
        }

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particlesArray.push(new Particle())
    }

    // Draw gradient background
    const drawBackground = () => {
      // Create a subtle gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height / window.devicePixelRatio)
      gradient.addColorStop(0, "rgba(235, 245, 255, 0.8)") // Light sky blue at top
      gradient.addColorStop(1, "rgba(245, 250, 255, 0.8)") // Almost white at bottom

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio)
    }

    // Draw grid lines
    const drawGrid = () => {
      ctx.strokeStyle = "rgba(0, 123, 255, 0.04)" // Electric Blue with low opacity
      ctx.lineWidth = 0.5

      const gridSize = 70

      // Horizontal lines
      for (let y = 0; y < canvas.height / window.devicePixelRatio; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width / window.devicePixelRatio, y)
        ctx.stroke()
      }

      // Vertical lines
      for (let x = 0; x < canvas.width / window.devicePixelRatio; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height / window.devicePixelRatio)
        ctx.stroke()
      }
    }

    // Connect nearby particles with lines
    const connectParticles = () => {
      const maxDistance = 120

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance

            // Extract the base color from particle a and apply dynamic opacity
            const colorMatch = particlesArray[a].color.match(/rgba$$(\d+),\s*(\d+),\s*(\d+),\s*[\d.]+$$/)
            if (colorMatch) {
              const r = colorMatch[1]
              const g = colorMatch[2]
              const b = colorMatch[3]
              ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity * 0.1})`
            } else {
              ctx.strokeStyle = `rgba(0, 123, 255, ${opacity * 0.1})`
            }

            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio)

      // Draw background
      drawBackground()

      // Draw grid
      drawGrid()

      // Update and draw particles
      particlesArray.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Connect particles
      connectParticles()

      // Continue animation
      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Handle window resize with debounce
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        resizeCanvas()
      }, 200)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      clearTimeout(resizeTimeout)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" aria-hidden="true" />
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-blue-50/30 to-white/30 backdrop-blur-[2px]"
        aria-hidden="true"
      />
    </>
  )
}
