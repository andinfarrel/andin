module.exports = {
  content: [    
    "./src/pages/**/*.{js,ts,jsx,tsx}",    
    "./src/components/**/*.{js,ts,jsx,tsx}",  
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/img/bg-hero.png')"
      },
      fontFamily: {
        poppins: ["Poppins"],
        raleway: ['Raleway']
      }
    },
  },
  plugins: [],
}
