"use client"

import SmoothDataVizBackground from "./smooth-data-viz-background"

export default function EnhancedBackground() {
  // Add some AWS-themed elements to the background
  const awsIcons = [
    { x: "15%", y: "25%", opacity: 0.05, icon: "λ" }, // Lambda
    { x: "75%", y: "65%", opacity: 0.05, icon: "S3" }, // S3
    { x: "45%", y: "85%", opacity: 0.05, icon: "⚙️" }, // Glue
    { x: "85%", y: "15%", opacity: 0.05, icon: "📊" }, // Analytics
  ]

  return (
    <>
      <SmoothDataVizBackground />
      <div
        className="fixed top-0 left-0 w-full h-full -z-5 bg-gradient-to-b from-blue-50/20 via-blue-50/30 to-white/40 pointer-events-none"
        aria-hidden="true"
      />
      {awsIcons.map((item, index) => (
        <div
          key={`aws-icon-${index}`}
          className="fixed text-2xl font-bold text-primary/5 pointer-events-none"
          style={{
            left: item.x,
            top: item.y,
            opacity: item.opacity,
            transform: "translate(-50%, -50%)",
          }}
        >
          {item.icon}
        </div>
      ))}
    </>
  )
}
