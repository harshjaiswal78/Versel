"use client"

import { useEffect, useRef } from "react"

export default function CrispDataBackground() {
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
    const particleCount = 60
    const particleColors = [
      "rgba(0, 123, 255, 0.15)", // Electric Blue with opacity
      "rgba(100, 181, 246, 0.12)", // Light Blue
      "rgba(242, 101, 60, 0.08)", // Tangerine
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

      constructor() {
        this.x = (Math.random() * canvas.width) / window.devicePixelRatio
        this.y = (Math.random() * canvas.height) / window.devicePixelRatio
        this.originalSize = Math.random() * 2 + 0.5
        this.size = this.originalSize
        this.speedX = (Math.random() - 0.5) * 0.2
        this.speedY = (Math.random() - 0.5) * 0.2
        this.color = particleColors[Math.floor(Math.random() * particleColors.length)]
        this.pulseSpeed = Math.random() * 0.01 + 0.005
        this.pulseSize = Math.random() * Math.PI * 2
      }

      update() {
        // Move particles
        this.x += this.speedX
        this.y += this.speedY

        // Pulse size
        this.pulseSize += this.pulseSpeed
        this.size = this.originalSize + Math.sin(this.pulseSize) * 0.3

        // Wrap around edges
        if (this.x > canvas.width / window.devicePixelRatio) this.x = 0
        if (this.x < 0) this.x = canvas.width / window.devicePixelRatio
        if (this.y > canvas.height / window.devicePixelRatio) this.y = 0
        if (this.y < 0) this.y = canvas.height / window.devicePixelRatio
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particlesArray.push(new Particle())
    }

    // Draw grid lines
    const drawGrid = () => {
      ctx.strokeStyle = "rgba(0, 123, 255, 0.04)" // Electric Blue with low opacity
      ctx.lineWidth = 0.5

      const gridSize = 60

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
      const maxDistance = 100

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx.strokeStyle = `rgba(0, 123, 255, ${opacity * 0.08})`
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

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" aria-hidden="true" />
}
