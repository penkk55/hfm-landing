'use client'

import ContactForm from './ContactForm'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Heading */}
          <div className="text-white space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              LOREM IPSUM DOLOR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                SIT AMET TOSIK
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Contact Form */}
          <div className="flex justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
