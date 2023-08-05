/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      primary: "#FB3617",
      primaryLighter: "#FC945C",
      primaryLightest: "F6C48E",
      secondary: "#1D8698",
      secondaryDarker: "#042054", 
    },
    textColor : {
      darker: "#717171",
      primary: "#FB3617",
      primaryLighter: "#FC945C",
      primaryLightest: "F6C48E",
      secondary: "#1D8698",
      secondaryDarker: "#042054", 

    }
  },
  plugins: [],
}
