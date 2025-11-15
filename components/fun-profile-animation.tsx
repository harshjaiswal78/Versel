"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function FunProfileAnimation({ imageUrl }: { imageUrl: string }) {
  const [isHovered, setIsHovered] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  const handleClick = () => {
    setClickCount(clickCount + 1)
  }

  // Different animations based on click count
  const getAnimation = () => {
    if (clickCount === 0) return {}

    const animations = [
      { rotate: [0, 10, -10, 0] }, // First click - gentle wobble
      { scale: [1, 1.2, 0.8, 1] }, // Second click - pulse
      { y: [0, -20, 0] }, // Third click - bounce
      { rotate: [0, 360] }, // Fourth click - full rotation
      { scale: [1, 0.5, 1.5, 1] }, // Fifth click - crazy scale
    ]

    return animations[(clickCount - 1) % animations.length]
  }

  // Fun messages that appear on clicks
  const getMessage = () => {
    if (clickCount === 0) return null

    const messages = [
      "Hello there! 👋",
      "Having fun? 😄",
      "I'm getting dizzy! 😵‍💫",
      "Wheeeee! 🎢",
      "You found the Easter egg! 🥚",
      "Still clicking? 🖱️",
      "I'm a data analyst, not a bouncy ball! 📊",
      "Click count: " + clickCount + " 🔢",
    ]

    return messages[(clickCount - 1) % messages.length]
  }

  return (
    <div className="relative">
      <motion.div
        className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 hover-glow img-crisp cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleClick}
        animate={getAnimation()}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <img src={imageUrl || "/placeholder.svg"} alt="Profile" className="w-full h-full object-cover" />

        {/* Fun overlay elements that appear on hover */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent flex items-end justify-center pb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="text-white text-sm font-medium">Click me for fun! 🎉</p>
          </motion.div>
        )}
      </motion.div>

      {/* Message that appears after clicking */}
      {clickCount > 0 && (
        <motion.div
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          key={clickCount} // Force re-render on click count change
        >
          {getMessage()}
        </motion.div>
      )}
    </div>
  )
}
