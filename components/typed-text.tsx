"use client"

import { useState, useEffect, useRef } from "react"
import { useMediaQuery } from "@/hooks/use-mobile"

interface TypedTextProps {
  text: string
  className?: string
  typingSpeed?: number
  startDelay?: number
  cursorBlinkSpeed?: number
  loop?: boolean
  loopDelay?: number
  mobileText?: string
}

export default function TypedText({
  text,
  className = "",
  typingSpeed = 100,
  startDelay = 500,
  cursorBlinkSpeed = 500,
  loop = true,
  loopDelay = 3000,
  mobileText,
}: TypedTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const isMobile = useMediaQuery("(max-width: 640px)")
  const textToType = isMobile && mobileText ? mobileText : text
  const hasStarted = useRef(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    // Start typing after initial delay
    if (!hasStarted.current) {
      timeout = setTimeout(() => {
        setIsTyping(true)
        hasStarted.current = true
      }, startDelay)
    }

    return () => clearTimeout(timeout)
  }, [startDelay])

  // Handle cursor blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, cursorBlinkSpeed)

    return () => clearInterval(interval)
  }, [cursorBlinkSpeed])

  // Handle typing animation
  useEffect(() => {
    if (!isTyping) return

    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText.length < textToType.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setDisplayText(textToType.substring(0, displayText.length + 1))
      }, typingSpeed)
    } else if (!isDeleting && displayText.length === textToType.length && loop) {
      // Finished typing, wait before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, loopDelay)
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(textToType.substring(0, displayText.length - 1))
      }, typingSpeed / 1.5) // Delete a bit faster than typing
    } else if (isDeleting && displayText.length === 0) {
      // Finished deleting, start typing again
      timeout = setTimeout(() => {
        setIsDeleting(false)
      }, startDelay)
    }

    return () => clearTimeout(timeout)
  }, [isTyping, isDeleting, displayText, textToType, typingSpeed, loop, loopDelay, startDelay])

  return (
    <span className={className}>
      {displayText}
      <span
        className={`inline-block w-[2px] h-[1em] bg-current ml-[1px] align-middle ${cursorVisible ? "opacity-100" : "opacity-0"}`}
        style={{ transition: "opacity 0.1s" }}
      />
    </span>
  )
}
