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
        'search-background': 'url(/world.svg)'
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
