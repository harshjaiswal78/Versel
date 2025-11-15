"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import confetti from "canvas-confetti"

export default function SkillBadgeGame({ skills }: { skills: string[] }) {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [gameActive, setGameActive] = useState(false)
  const [score, setScore] = useState(0)
  const [targetSkill, setTargetSkill] = useState<string | null>(null)
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState("")

  // Start the game
  const startGame = () => {
    setGameActive(true)
    setScore(0)
    setSelectedSkills([])
    pickRandomSkill()
  }

  // Pick a random skill to find
  const pickRandomSkill = () => {
    const availableSkills = skills.filter((skill) => !selectedSkills.includes(skill))
    if (availableSkills.length === 0) {
      // Game completed!
      setGameActive(false)
      setTargetSkill(null)
      setMessage("You found all the skills! 🎉")
      setShowMessage(true)

      // Trigger colorful confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#007BFF", "#F2653C", "#64B5F6", "#22c55e", "#f59e0b"],
      })

      setTimeout(() => {
        setShowMessage(false)
      }, 3000)
      return
    }

    const randomSkill = availableSkills[Math.floor(Math.random() * availableSkills.length)]
    setTargetSkill(randomSkill)
  }

  // Handle skill click
  const handleSkillClick = (skill: string) => {
    if (!gameActive) return

    if (skill === targetSkill) {
      // Correct skill found
      setSelectedSkills([...selectedSkills, skill])
      setScore(score + 1)
      setMessage("Correct! +1 point")
      setShowMessage(true)

      // Small confetti burst with multiple colors
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.7 },
        colors: ["#007BFF", "#F2653C", "#64B5F6", "#22c55e", "#f59e0b"],
      })

      setTimeout(() => {
        setShowMessage(false)
        pickRandomSkill()
      }, 1000)
    } else {
      // Wrong skill
      setMessage("Try again!")
      setShowMessage(true)
      setTimeout(() => {
        setShowMessage(false)
      }, 1000)
    }
  }

  return (
    <div className="relative">
      {!gameActive ? (
        <motion.button
          onClick={startGame}
          className="text-xs text-blue-600 hover:text-blue-600/80 font-medium mb-4 flex items-center gap-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🎮 Play the Skill-Finding Game!
        </motion.button>
      ) : (
        <div className="mb-4 flex items-center gap-2">
          <motion.button
            onClick={() => setGameActive(false)}
            className="text-xs text-red-500 hover:text-red-600 font-medium flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ✖ End Game
          </motion.button>
          <span className="text-xs font-medium">
            Score: {score} | Find: <span className="text-blue-600 font-bold">{targetSkill}</span>
          </span>
        </div>
      )}

      <AnimatePresence>
        {showMessage && (
          <motion.div
            className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 px-3 py-1 rounded-full text-xs font-medium ${
              message.includes("Correct") ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-wrap gap-2 justify-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.02, ease: [0.2, 0, 0, 1] }}
            whileHover={gameActive ? { scale: 1.1, rotate: [-1, 1, -1, 0] } : { scale: 1.05 }}
            whileTap={gameActive ? { scale: 0.9 } : { scale: 0.95 }}
            onClick={() => handleSkillClick(skill)}
          >
            <Badge
              variant="outline"
              className={`text-sm py-1 px-3 border-blue-100 text-blue-950 hover:bg-blue-600/5 hover:border-blue-600/30 transition-colors duration-300 badge-crisp cursor-pointer ${
                gameActive && selectedSkills.includes(skill) ? "bg-blue-600/20 border-blue-600" : ""
              } ${gameActive && targetSkill === skill ? "animate-pulse" : ""}`}
            >
              {skill}
            </Badge>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
