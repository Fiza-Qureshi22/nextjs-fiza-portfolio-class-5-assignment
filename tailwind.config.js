/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Tumhare `src` folder ke andar saari files ke liye
    "./components/**/*.{js,ts,jsx,tsx}", // Agar `components` folder alag hai
    "./pages/**/*.{js,ts,jsx,tsx}", // `pages` folder ke liye
  ],
  theme: {
    extend: {
      colors: {
        // Tumhare custom colors
        primary: "#1D4ED8", // Blue shade
        secondary: "#9333EA", // Purple shade
        accent: "#14B8A6", // Teal shade
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Default font
        heading: ["Poppins", "sans-serif"], // Heading ke liye custom font
      },
    },
  },

};
