"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <>
      {/* TOP INFO BAR */}
      <div className="w-full bg-[#161616] text-white text-sm">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <br />

          <div className="flex items-center space-x-4 text-sm">
            <Link
              href="#"
              className="flex items-center space-x-2 hover:underline rounded-sm border-1 border-gray-500 px-4.5 py-1.5 "
            >
              <Image src="/icon/phone.svg" alt="Phone" width={16} height={16} />
              <span className="text-sm">Download App</span>
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="#" className="hover:underline">
              Contact us
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="#" className="hover:underline">
              Partner with us
            </Link>
            <span className="text-gray-400">|</span>

            <Image src="/icon/flag-uk.svg" alt="EN" width={24} height={16} />

          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#161616]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-start space-y-4">
              <p className="text-white text-[10px] font-bold opacity-50">
                Member of HF Markets Group
              </p>
              <Image
                src="/icon/logo.svg"
                alt="HFM Logo"
                width={120}
                height={120}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                "Markets",
                "Trading",
                "Investing",
                "Tools & Education",
                "Company",
              ].map((item) => (
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
              <Link
                href="/login"
                className="text-gray-300 hover:text-white transition-colors border border-[#CD0511] px-6 py-2 rounded-lg"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Register
              </Link>
            </div>

            {/* Mobile Menu Icon */}
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
    </>
  );
}
