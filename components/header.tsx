"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import GradientButton from "@/components/gradient-button"
import TypedText from "@/components/typed-text"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white shadow-sm"}`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Solve Side Academy Logo"
            width={40}
            height={40}
            className={scrolled ? "scale-90 transition-transform duration-300" : "transition-transform duration-300"}
          />
          <span className="text-xl font-bold">
            <span className="text-primary">Solve Side</span>{" "}
            <TypedText
              text="Academy"
              className="text-secondary font-serif italic"
              typingSpeed={120}
              startDelay={800}
              loopDelay={5000}
            />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary animated-underline">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-primary animated-underline">
            About
          </Link>
          <Link href="/programs" className="text-sm font-medium text-gray-700 hover:text-primary animated-underline">
            Programs
          </Link>

          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-primary animated-underline">
            Contact
          </Link>

        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container mx-auto px-4 pb-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <Image src="/images/logo.png" alt="Solve Side Academy Logo" width={40} height={40} />
              <span className="text-xl font-bold">
                <span className="text-primary">Solve Side</span>{" "}
                <span className="text-secondary font-serif italic">Academy</span>
              </span>
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/programs"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </Link>
            
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
