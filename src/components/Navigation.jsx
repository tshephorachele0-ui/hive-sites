'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-dark/95 backdrop-blur-md z-50 border-b border-darkGray">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center font-bold text-dark">
            TR
          </div>
          <span className="text-xl font-bold">Tshepho</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="#home" className="hover:text-gold transition-all">Home</Link>
          <Link href="#about" className="hover:text-gold transition-all">About</Link>
          <Link href="#services" className="hover:text-gold transition-all">Services</Link>
          <Link href="#portfolio" className="hover:text-gold transition-all">Portfolio</Link>
          <Link href="#contact" className="hover:text-gold transition-all">Contact</Link>
        </div>

        {/* CTA Button */}
        <button className="hidden md:block btn-primary text-sm">
          Get In Touch
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gold text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-darkGray border-t border-gold p-4 space-y-4">
          <Link href="#home" className="block hover:text-gold transition-all">Home</Link>
          <Link href="#about" className="block hover:text-gold transition-all">About</Link>
          <Link href="#services" className="block hover:text-gold transition-all">Services</Link>
          <Link href="#portfolio" className="block hover:text-gold transition-all">Portfolio</Link>
          <Link href="#contact" className="block hover:text-gold transition-all">Contact</Link>
          <button className="btn-primary w-full text-sm">
            Get In Touch
          </button>
        </div>
      )}
    </nav>
  )
}
