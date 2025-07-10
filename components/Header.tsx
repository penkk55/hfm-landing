'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="relative z-20 w-full">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded"></div>
            <span className="text-white text-xl font-bold">HFM</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Trading', 'Tools & Education', 'Company'].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Login/Signup */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-300 hover:text-white transition-colors">
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Icon (future implementation) */}
          <button
            className="md:hidden text-white"
            aria-label="Open mobile menu"
            type="button"
          >
            <Menu size={24} />
          </button>

         
        </div>
      </div>
      
    </header>
  )
}
