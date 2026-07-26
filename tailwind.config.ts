import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#07100c',
        panel: '#0d1b14',
        line: '#21432f',
        accent: '#31d773',
        mint: '#a7f3c8'
      },
      boxShadow: {
        glow: '0 0 60px rgba(49,215,115,.18)'
      }
    }
  },
  plugins: []
};
export default config;
