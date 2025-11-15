"use client"

import { motion } from "framer-motion"

export default function SvgDoodles() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10" aria-hidden="true">
      {/* Bar Chart Doodle - Top Right */}
      <motion.svg
        className="absolute top-20 right-10 w-24 h-24 text-primary/5 hidden md:block"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.rect
          x="10"
          y="70"
          width="10"
          height="20"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ height: 0, y: 90 }}
          animate={{ height: 20, y: 70 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        <motion.rect
          x="30"
          y="50"
          width="10"
          height="40"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ height: 0, y: 90 }}
          animate={{ height: 40, y: 50 }}
          transition={{ duration: 1, delay: 1 }}
        />
        <motion.rect
          x="50"
          y="30"
          width="10"
          height="60"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ height: 0, y: 90 }}
          animate={{ height: 60, y: 30 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
        <motion.rect
          x="70"
          y="10"
          width="10"
          height="80"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ height: 0, y: 90 }}
          animate={{ height: 80, y: 10 }}
          transition={{ duration: 1, delay: 1.4 }}
        />
        <motion.line
          x1="5"
          y1="90"
          x2="95"
          y2="90"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.line
          x1="5"
          y1="90"
          x2="5"
          y2="5"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.svg>

      {/* Line Chart Doodle - Bottom Left */}
      <motion.svg
        className="absolute bottom-20 left-10 w-32 h-24 text-primary/5 hidden md:block"
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <motion.path
          d="M10,70 Q30,30 50,60 T90,40"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.line
          x1="5"
          y1="90"
          x2="115"
          y2="90"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.line
          x1="5"
          y1="90"
          x2="5"
          y2="5"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.svg>

      {/* Pie Chart Doodle - Middle Right */}
      <motion.svg
        className="absolute top-1/2 right-5 w-24 h-24 text-primary/5 hidden md:block"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.path
          d="M50,50 L50,10 A40,40 0 0,1 85,65 Z"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.path
          d="M50,50 L85,65 A40,40 0 0,1 30,85 Z"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
        <motion.path
          d="M50,50 L30,85 A40,40 0 0,1 50,10 Z"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        />
      </motion.svg>

      {/* Scatter Plot Doodle - Top Left */}
      <motion.svg
        className="absolute top-40 left-5 w-24 h-24 text-primary/5 hidden md:block"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <motion.line
          x1="10"
          y1="90"
          x2="90"
          y2="90"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.line
          x1="10"
          y1="90"
          x2="10"
          y2="10"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        {[
          { cx: 30, cy: 30 },
          { cx: 50, cy: 60 },
          { cx: 70, cy: 20 },
          { cx: 40, cy: 50 },
          { cx: 60, cy: 70 },
          { cx: 25, cy: 75 },
          { cx: 80, cy: 40 },
        ].map((point, index) => (
          <motion.circle
            key={index}
            cx={point.cx}
            cy={point.cy}
            r="3"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
          />
        ))}
      </motion.svg>

      {/* Data Flow Doodle - Bottom Right */}
      <motion.svg
        className="absolute bottom-40 right-5 w-32 h-32 text-primary/5 hidden md:block"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <motion.rect
          x="10"
          y="10"
          width="30"
          height="20"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
        <motion.rect
          x="80"
          y="10"
          width="30"
          height="20"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.7 }}
        />
        <motion.rect
          x="45"
          y="50"
          width="30"
          height="20"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.9 }}
        />
        <motion.rect
          x="10"
          y="90"
          width="30"
          height="20"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.1 }}
        />
        <motion.rect
          x="80"
          y="90"
          width="30"
          height="20"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.3 }}
        />
        <motion.path
          d="M40,20 L80,20"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        />
        <motion.path
          d="M25,30 L45,50"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 2.7 }}
        />
        <motion.path
          d="M95,30 L75,50"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 2.9 }}
        />
        <motion.path
          d="M45,70 L25,90"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 3.1 }}
        />
        <motion.path
          d="M75,70 L95,90"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 3.3 }}
        />
      </motion.svg>

      {/* Mobile-friendly small doodles */}
      <motion.svg
        className="absolute top-20 right-2 w-16 h-16 text-primary/5 md:hidden"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.path
          d="M10,40 Q20,20 30,35 T50,25"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.line
          x1="5"
          y1="50"
          x2="55"
          y2="50"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.line
          x1="5"
          y1="50"
          x2="5"
          y2="5"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.svg>

      <motion.svg
        className="absolute bottom-40 left-2 w-16 h-16 text-primary/5 md:hidden"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <motion.circle
          cx="30"
          cy="30"
          r="25"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.path
          d="M30,30 L30,5 A25,25 0 0,1 55,30 Z"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.path
          d="M30,30 L55,30 A25,25 0 0,1 30,55 Z"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
      </motion.svg>
    </div>
  )
}
