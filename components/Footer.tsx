import React from "react"
import { FaFacebookF, FaXTwitter, FaTelegram, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa6"
import { FaLinesLeaning } from "react-icons/fa6"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10 justify-between">
        {/* Left Side: Social + App */}
        <div className="flex flex-col gap-8">
          {/* Find us on */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Find us on</h3>
            <div className="flex flex-wrap gap-3">
              {[FaFacebookF, FaXTwitter, FaTelegram, FaInstagram, FaYoutube, FaLinkedinIn, FaLinesLeaning].map(
                (Icon, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 bg-[#333] text-white flex items-center justify-center rounded-full hover:bg-green-600 transition-colors"
                  >
                    <Icon size={18} />
                  </div>
                )
              )}
            </div>
          </div>

          {/* App Store Buttons */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Download HFM App</h3>
            <div className="flex gap-4">
              <a href="#">
                <Image
                  src="/image/appstore-badge.svg"
                  alt="App Store"
                  width={120}
                  height={40}
                />
              </a>
              <a href="#">
                <Image
                  src="/image/googleplay-badge.svg"
                  alt="Google Play"
                  width={120}
                  height={40}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Risk Warning */}
        <div className="md:max-w-2xl">
          <h3 className="text-white font-semibold text-lg mb-4">Risk Warning</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, 
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, 
            fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. 
            Nullam dictum felis eu lorem.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
