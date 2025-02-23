/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,css}",
    "./app/components/**/*.{js,jsx,ts,tsx,css}",
    "./app/globals.css",
    "./app/styles/**/*.css"
  ],
  safelist: [
    // Add any classes that might be dynamically generated
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Suisse Intl Mono', 'monospace'],
      },
      fontWeight: {
        bold: 700,
      },
      screens: {
        'custom': '1050px',
        'mobile': '736px',
      },
    },
  },
  plugins: [],
};

export default config;
