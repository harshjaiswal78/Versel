"use client"

import { useEffect } from "react"

export default function SmoothScroll() {
  useEffect(() => {
    // Only apply smooth scrolling if the user hasn't disabled animations
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const handleLinkClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        const link = target.closest("a")

        if (
          link &&
          link.hash &&
          link.hash.startsWith("#") &&
          link.origin === window.location.origin &&
          link.pathname === window.location.pathname
        ) {
          e.preventDefault()

          const targetElement = document.querySelector(link.hash)
          if (targetElement) {
            // Add a small offset to account for the sticky header
            const headerHeight = 80
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY
            const offsetPosition = elementPosition - headerHeight

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })

            // Update URL without scrolling
            history.pushState(null, "", link.hash)
          }
        }
      }

      document.addEventListener("click", handleLinkClick)
      return () => document.removeEventListener("click", handleLinkClick)
    }
  }, [])

  return null
}
