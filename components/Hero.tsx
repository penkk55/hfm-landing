"use client";

import ContactForm from "./ContactForm";
import { sofia700 } from "@/app/fonts";
export default function Hero() {
  return (
    <section id="hero" 
      className="relative  bg-cover bg-center bg-no-repeat overflow-hidden flex items-center justify-center" // min-h-screen
      style={{ backgroundImage: "url('/image/main-image-1.svg')" }} // or '/image/main-image-1.jpg' if needed
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 container mx-auto px-4 pt-12 pb-20 text-center">
        <div className="max-w-3xl mx-auto space-y-10 my-8 ">
          {/* Heading */}
          <div className="text-white ">
            <h1
              className={`text-[70px] lg:text-[70px] font-bold leading-[1] text-transparent bg-clip-text ${sofia700.className}`}
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FCD678 0%, #FCD678 0.01%, #BC8C2F 100%)",
              }}
            >
              LOREM IPSUM DOLOR
              <br />
            </h1>
            <h1 className={`text-[70px] lg:text-[70px] font-bold leading-[1] ${sofia700.className}`}>
                SIT AMET TOSIK 
            </h1>

            {/* <p className="text-xl text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>

          
        </div>
        {/* Contact Form */}
          <div className="flex justify-center">
            <ContactForm />
          </div>
      </div>
    </section>
  );
}
