/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}'
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
