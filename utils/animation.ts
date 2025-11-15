export function fadeInAnimation(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.5,
      delay: delay,
      ease: "easeOut",
    },
  }
}

export function scaleAnimation(delay = 0) {
  return {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: {
      duration: 0.4,
      delay: delay,
      ease: "easeOut",
    },
  }
}

export function slideInAnimation(direction = "left", delay = 0) {
  const x = direction === "left" ? -20 : direction === "right" ? 20 : 0
  const y = direction === "up" ? -20 : direction === "down" ? 20 : 0

  return {
    initial: { opacity: 0, x, y },
    animate: { opacity: 1, x: 0, y: 0 },
    transition: {
      duration: 0.5,
      delay: delay,
      ease: "easeOut",
    },
  }
}

export function pulseAnimation() {
  return {
    animate: {
      scale: [1, 1.03, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  }
}

export function floatAnimation() {
  return {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }
}

export function staggerChildren(staggerTime = 0.1) {
  return {
    animate: {
      transition: {
        staggerChildren: staggerTime,
      },
    },
  }
}

export function buttonHoverAnimation() {
  return {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2 },
  }
}
