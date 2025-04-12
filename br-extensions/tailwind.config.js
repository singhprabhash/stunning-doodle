/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'light-gradient': 'linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)',
        'dark-gradient': 'linear-gradient(180deg, #040918 0%, #091540 100%)',
      },
      colors: {
        background: {
          light: 'hsl(200, 60%, 99%)',
          dark: 'hsl(226, 25%, 17%)',
        },
        surface: {
          light: 'hsl(200, 60%, 99%)',
          dark: 'hsl(225, 23%, 24%)',
        },
        text: {
          light: "hsl(200, 60%, 99%)",
          dark: 'hsl(226, 25%, 17%)',
        },
        border: {
          light: 'hsl(0, 0%, 78%)',
          dark: 'hsl(226, 11%, 37%)',
        },
        active: {
          dark: 'hsl(3, 71%, 56%)'
        },
      },
      fontFamily: {
        sans: ['"Noto Sans"', 'sans-serif'],
        manrope: ['"Manrope"', 'sans-serif'],
        work: ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

