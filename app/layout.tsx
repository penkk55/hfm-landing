import "@/app/globals.css"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/toaster"
import { Open_Sans } from "next/font/google" // ✅ Add this

// ✅ Load font with variable or className
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans", // optional
})

export const metadata = {
  title: "HF Markets Landing Page",
  description: "Landing page challenge built with Next.js",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={openSans.className}> 
      <body className="font-sans">
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  )
}
