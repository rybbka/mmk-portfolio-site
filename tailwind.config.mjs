/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
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
