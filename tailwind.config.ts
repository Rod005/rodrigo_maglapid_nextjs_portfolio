import type { Config } from 'tailwindcss';
const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: { ink:'#04110b', panel:'#091b11', accent:'#35e67b', soft:'#a9f7c7' },
      boxShadow: { glow:'0 0 80px rgba(53,230,123,.18)' },
      backgroundImage: { grid:'linear-gradient(rgba(53,230,123,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(53,230,123,.045) 1px,transparent 1px)' }
    }
  },
  plugins: []
};
export default config;
