import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/images/background.svg')",
        'backgroundBlue': "url('/images/background_blue.svg')",
        'custom-gradient': 'linear-gradient(180deg, rgba(0, 77, 97, 1) 0%, rgba(255, 255, 255, 1) 100%)',
      },
      colors: {
        green: '#47A138',
        orange: '#FF5031',
        blue: '#004D61',
        error: '#BF1313',
        darkgray: '#767676',
        placeholder: "#8B8B8B",
        gray: '#DEE9EA',
        lightgray: '#F8F8F8',
        white: '#FFFFFF',
        black: '#000000',
        lightblack: '#2F2E41',
        'gradient': 'rgba(0, 77, 97, 1)'
      },
    },
  },
  plugins: [],
} satisfies Config;
