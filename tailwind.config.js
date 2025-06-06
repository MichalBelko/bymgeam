
module.exports = {
  darkMode: false, // or 'media' or 'class'
  content: [
    './app/**/*.{js,ts,jsx,tsx}',    
    './pages/**/*.{js,ts,jsx,tsx}',   
    './components/**/*.{js,ts,jsx,tsx}' 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
        accent: '#657786',
        background: '#F5F8FA',
        text: '#14171A',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
