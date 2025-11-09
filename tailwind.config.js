/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tk-black': '#0A0A0A',   // Dark background
        'tk-red': '#B91C1C',     // Primary accent red
        [cite_start]'tk-pink': '#EC4899',    // Neon pink accent [cite: 1, 15]
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        [cite_start]'hero-gradient': 'linear-gradient(135deg, var(--tw-color-tk-black) 0%, rgba(185, 28, 28, 0.5) 70%, rgba(236, 72, 153, 0.4) 100%)', // Black → red/pink glow [cite: 3]
      },
      boxShadow: {
        'neon-red': '0 0 15px rgba(185, 28, 28, 0.8)',
        'neon-pink': '0 0 15px rgba(236, 72, 153, 0.8)',
      }
    },
  },
  plugins: [],
}
