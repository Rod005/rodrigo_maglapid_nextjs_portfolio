import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: { ink:'#03100a', panel:'#081b11', panel2:'#0d2518', accent:'#35e67b', soft:'#baf8d0' },
      boxShadow: { glow:'0 0 90px rgba(53,230,123,.20)' },
      backgroundImage: { grid:'linear-gradient(rgba(53,230,123,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(53,230,123,.045) 1px,transparent 1px)' }
    }
  },
  plugins: [plugin(({addVariant})=>addVariant('light','.light &'))]
};
export default config;
