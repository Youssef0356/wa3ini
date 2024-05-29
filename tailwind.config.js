/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  
  theme: {
    extend: {},
  },
  plugins: [],
}


// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Update this path to match your project structure
  ],
  theme: {
    extend: {
      gradientColorStops: {
        'color-1': '#00EAFF',
        'color-2': '#4D3589',
        'color-3': '#BADAFF',
        'color-4': '#0025CE',
      },
    },
  },
  plugins: [],
}
