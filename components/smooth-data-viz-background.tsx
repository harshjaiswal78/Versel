"use client"

import { useEffect, useRef } from "react"

export default function SmoothDataVizBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Data points
    const dataPoints = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 2 + 1,
      speed: Math.random() * 0.5 + 0.1,
      angle: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.1 + 0.05,
    }))

    // Grid lines
    const gridLines = {
      horizontal: Array.from({ length: 10 }, (_, i) => ({
        y: (window.innerHeight / 10) * i,
        opacity: 0.03,
      })),
      vertical: Array.from({ length: 20 }, (_, i) => ({
        x: (window.innerWidth / 20) * i,
        opacity: 0.03,
      })),
    }

    // Mini charts
    const miniCharts = Array.from({ length: 5 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      width: Math.random() * 60 + 40,
      height: Math.random() * 30 + 20,
      type: Math.random() > 0.5 ? "bar" : "line",
      data: Array.from({ length: 5 }, () => Math.random()),
      opacity: Math.random() * 0.08 + 0.02,
    }))

    // Data connections
    const connections: { from: number; to: number; opacity: number }[] = []
    for (let i = 0; i < 15; i++) {
      const from = Math.floor(Math.random() * dataPoints.length)
      const to = Math.floor(Math.random() * dataPoints.length)
      if (from !== to) {
        connections.push({
          from,
          to,
          opacity: Math.random() * 0.05 + 0.01,
        })
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines with reduced opacity at the top
      ctx.lineWidth = 1

      // Horizontal grid lines
      gridLines.horizontal.forEach((line) => {
        const yPosition = line.y
        // Make lines at the top more transparent
        const topFade = Math.min(1, yPosition / (window.innerHeight * 0.2))
        const opacity = line.opacity * topFade

        ctx.beginPath()
        ctx.strokeStyle = `rgba(0, 123, 255, ${opacity})`
        ctx.moveTo(0, yPosition)
        ctx.lineTo(window.innerWidth, yPosition)
        ctx.stroke()
      })

      // Vertical grid lines
      gridLines.vertical.forEach((line) => {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(0, 123, 255, ${line.opacity})`
        ctx.moveTo(line.x, 0)
        ctx.lineTo(line.x, window.innerHeight)
        ctx.stroke()
      })

      // Draw connections
      connections.forEach((connection) => {
        const from = dataPoints[connection.from]
        const to = dataPoints[connection.to]

        // Calculate distance from top for opacity adjustment
        const avgY = (from.y + to.y) / 2
        const topFade = Math.min(1, avgY / (window.innerHeight * 0.2))
        const opacity = connection.opacity * topFade

        ctx.beginPath()
        ctx.strokeStyle = `rgba(0, 123, 255, ${opacity})`
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.stroke()
      })

      // Draw data points
      dataPoints.forEach((point) => {
        // Update position
        point.x += Math.cos(point.angle) * point.speed
        point.y += Math.sin(point.angle) * point.speed

        // Bounce off edges
        if (point.x < 0 || point.x > window.innerWidth) {
          point.angle = Math.PI - point.angle
        }
        if (point.y < 0 || point.y > window.innerHeight) {
          point.angle = -point.angle
        }

        // Make points at the top more transparent
        const topFade = Math.min(1, point.y / (window.innerHeight * 0.2))
        const opacity = point.opacity * topFade

        // Draw point
        ctx.beginPath()
        ctx.fillStyle = `rgba(0, 123, 255, ${opacity})`
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw mini charts
      miniCharts.forEach((chart) => {
        // Make charts at the top more transparent
        const topFade = Math.min(1, chart.y / (window.innerHeight * 0.2))
        const opacity = chart.opacity * topFade

        if (chart.type === "bar") {
          // Bar chart
          const barWidth = chart.width / chart.data.length
          chart.data.forEach((value, i) => {
            const barHeight = value * chart.height
            ctx.fillStyle = `rgba(0, 123, 255, ${opacity})`
            ctx.fillRect(chart.x + i * barWidth, chart.y + chart.height - barHeight, barWidth * 0.8, barHeight)
          })
        } else {
          // Line chart
          ctx.beginPath()
          ctx.strokeStyle = `rgba(0, 123, 255, ${opacity})`
          chart.data.forEach((value, i) => {
            const x = chart.x + (i / (chart.data.length - 1)) * chart.width
            const y = chart.y + chart.height - value * chart.height
            if (i === 0) {
              ctx.moveTo(x, y)
            } else {
              ctx.lineTo(x, y)
            }
          })
          ctx.stroke()
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" aria-hidden="true" />
  )
}
