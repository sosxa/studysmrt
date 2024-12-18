import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)', // Use CSS variable for primary color
        background: 'var(--background-color)', // Use CSS variable for background color
        text: 'var(--text-color)', // Use CSS variable for text color
      },
    },
  },
  plugins: [],
};
export default config;
