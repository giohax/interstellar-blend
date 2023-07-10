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
