"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a1f]/90 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-cyan-400">
            CS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["Inicio", "Sobre mí", "Habilidades", "Proyectos", "Formación", "Contacto"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-[#0a0a1f]/95 backdrop-blur-md rounded-lg p-4"
          >
            <div className="flex flex-col space-y-4">
              {["Inicio", "Sobre mí", "Habilidades", "Proyectos", "Formación", "Contacto"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-300 hover:text-cyan-400 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

