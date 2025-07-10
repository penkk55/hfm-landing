'use client'

import ContactForm from './ContactForm'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Background Blur Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl" />
      </div>

      {/* Main Grid */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              LOREM IPSUM DOLOR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                SIT AMET TOSIK
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Right Content - Contact Form */}
          <div className="flex justify-center lg:justify-end">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
