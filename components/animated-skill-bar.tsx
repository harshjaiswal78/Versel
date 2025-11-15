"use client"

import { Progress } from "@/components/ui/progress"

interface AnimatedSkillBarProps {
  name: string
  level: string
  value: number
  color?: string
}

export default function AnimatedSkillBar({ name, level, value, color = "bg-blue-600" }: AnimatedSkillBarProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="font-medium text-sm text-blue-950">
          {name}
        </span>
        <span className="text-xs text-gray-500">
          {level}
        </span>
      </div>
      <div className="w-full bg-blue-100 rounded-full h-1.5 overflow-hidden progress-crisp">
        <div
          className={`h-full ${color} rounded-full transition-all duration-1000 ease-out animate-fadeIn`}
          style={{
            width: `${value}%`,
          }}
        />
      </div>
    </div>
  )
}
