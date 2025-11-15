"use client"

import { useEffect, useRef } from "react"

export default function DataDoodles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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
      drawDoodles()
    }

    // Draw data-related doodles
    const drawDoodles = () => {
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio)

      // Set very light colors
      const colors = [
        "rgba(0, 123, 255, 0.05)", // Electric Blue
        "rgba(242, 101, 60, 0.04)", // Tangerine
        "rgba(100, 181, 246, 0.05)", // Light Blue
      ]

      // Draw minimalistic bar charts
      drawBarCharts(ctx, colors)

      // Draw minimalistic line charts
      drawLineCharts(ctx, colors)

      // Draw minimalistic pie charts
      drawPieCharts(ctx, colors)

      // Draw minimalistic scatter plots
      drawScatterPlots(ctx, colors)

      // Draw data points
      drawDataPoints(ctx, colors)
    }

    // Draw minimalistic bar charts
    const drawBarCharts = (ctx: CanvasRenderingContext2D, colors: string[]) => {
      const numCharts = 3
      for (let i = 0; i < numCharts; i++) {
        const x = Math.random() * (canvas.width / window.devicePixelRatio - 100)
        const y = Math.random() * (canvas.height / window.devicePixelRatio - 100)
        const width = 60 + Math.random() * 40
        const height = 40 + Math.random() * 30
        const color = colors[Math.floor(Math.random() * colors.length)]

        ctx.strokeStyle = color
        ctx.lineWidth = 1

        // Draw bars
        const numBars = 4 + Math.floor(Math.random() * 3)
        const barWidth = width / numBars / 1.5

        for (let j = 0; j < numBars; j++) {
          const barHeight = Math.random() * height * 0.8
          ctx.beginPath()
          ctx.rect(x + j * (barWidth * 1.5), y + height - barHeight, barWidth, barHeight)
          ctx.stroke()
        }

        // Draw x-axis
        ctx.beginPath()
        ctx.moveTo(x, y + height)
        ctx.lineTo(x + width, y + height)
        ctx.stroke()

        // Draw y-axis
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x, y + height)
        ctx.stroke()
      }
    }

    // Draw minimalistic line charts
    const drawLineCharts = (ctx: CanvasRenderingContext2D, colors: string[]) => {
      const numCharts = 4
      for (let i = 0; i < numCharts; i++) {
        const x = Math.random() * (canvas.width / window.devicePixelRatio - 100)
        const y = Math.random() * (canvas.height / window.devicePixelRatio - 100)
        const width = 70 + Math.random() * 50
        const height = 40 + Math.random() * 30
        const color = colors[Math.floor(Math.random() * colors.length)]

        ctx.strokeStyle = color
        ctx.lineWidth = 1

        // Draw line chart
        ctx.beginPath()
        ctx.moveTo(x, y + height * (0.3 + Math.random() * 0.4))

        const numPoints = 5 + Math.floor(Math.random() * 3)
        for (let j = 1; j <= numPoints; j++) {
          const pointX = x + (width * j) / numPoints
          const pointY = y + height * (0.2 + Math.random() * 0.6)
          ctx.lineTo(pointX, pointY)
        }
        ctx.stroke()

        // Draw x-axis
        ctx.beginPath()
        ctx.moveTo(x, y + height)
        ctx.lineTo(x + width, y + height)
        ctx.stroke()

        // Draw y-axis
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x, y + height)
        ctx.stroke()
      }
    }

    // Draw minimalistic pie charts
    const drawPieCharts = (ctx: CanvasRenderingContext2D, colors: string[]) => {
      const numCharts = 3
      for (let i = 0; i < numCharts; i++) {
        const x = Math.random() * (canvas.width / window.devicePixelRatio - 80)
        const y = Math.random() * (canvas.height / window.devicePixelRatio - 80)
        const radius = 20 + Math.random() * 15

        // Draw pie segments
        let startAngle = 0
        const numSegments = 3 + Math.floor(Math.random() * 3)

        for (let j = 0; j < numSegments; j++) {
          const endAngle = startAngle + (Math.PI * 2 * (1 + Math.random())) / numSegments
          const color = colors[Math.floor(Math.random() * colors.length)]

          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.arc(x, y, radius, startAngle, endAngle)
          ctx.closePath()
          ctx.strokeStyle = color
          ctx.stroke()

          startAngle = endAngle
        }
      }
    }

    // Draw minimalistic scatter plots
    const drawScatterPlots = (ctx: CanvasRenderingContext2D, colors: string[]) => {
      const numPlots = 3
      for (let i = 0; i < numPlots; i++) {
        const x = Math.random() * (canvas.width / window.devicePixelRatio - 100)
        const y = Math.random() * (canvas.height / window.devicePixelRatio - 100)
        const width = 60 + Math.random() * 40
        const height = 40 + Math.random() * 30
        const color = colors[Math.floor(Math.random() * colors.length)]

        ctx.strokeStyle = color
        ctx.lineWidth = 1

        // Draw points
        const numPoints = 8 + Math.floor(Math.random() * 5)
        for (let j = 0; j < numPoints; j++) {
          const pointX = x + Math.random() * width
          const pointY = y + Math.random() * height
          const pointSize = 1 + Math.random() * 2

          ctx.beginPath()
          ctx.arc(pointX, pointY, pointSize, 0, Math.PI * 2)
          ctx.stroke()
        }

        // Draw x-axis
        ctx.beginPath()
        ctx.moveTo(x, y + height)
        ctx.lineTo(x + width, y + height)
        ctx.stroke()

        // Draw y-axis
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x, y + height)
        ctx.stroke()
      }
    }

    // Draw data points
    const drawDataPoints = (ctx: CanvasRenderingContext2D, colors: string[]) => {
      const numPoints = 30
      for (let i = 0; i < numPoints; i++) {
        const x = Math.random() * (canvas.width / window.devicePixelRatio)
        const y = Math.random() * (canvas.height / window.devicePixelRatio)
        const size = 1 + Math.random() * 2
        const color = colors[Math.floor(Math.random() * colors.length)]

        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initial setup
    resizeCanvas()

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
      clearTimeout(resizeTimeout)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-20" aria-hidden="true" />
}
