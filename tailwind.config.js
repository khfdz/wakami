// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilda: ['Gilda Display', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
        workSans: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
