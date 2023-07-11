/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'custom-black': '#0A0A0A'
      },
      letterSpacing: {
        tighter: '-.05em',
        tight: '-.025em',
      },
      maxWidth: {
        '8xl': '90rem'
      },
      objectFit: {
        cover: 'cover',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        'vandiana': ['Vandiana Platin', 'fallback-font', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 }
        }
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite',
      }
    },
  },
  variants: {
    extend: {
      // Other variants...
      objectFit: ['responsive'],
    },
  },
  plugins: [],
}
