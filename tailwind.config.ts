import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-open-sans)', 'sans-serif'],
        // sans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        'success': '#18B473',
      },
    },
  },
  plugins: [],
}

export default config
