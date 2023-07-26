/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {colors: {
      "header": "rgb(76, 51, 152)",
      "primary" : "#5d3ebc",
      "secondary" : "#7849f7",
      "brand-yellow" : "#ffd300",
      "button-blue": "rgb(93, 62, 188)",
      "icon-gray": "#697488",
    },
    fontFamily: {
        Hind : ['Hind Siliguri', "sans-serif"]
      },
      container: {
      padding: '10rem',
    },
  },
    
  },
 
  plugins: [],
}

