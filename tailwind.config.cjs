/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'pro-blue': '#0c6c8e',
        'pro-blue2': '#29bbef',
        'pro-yellow': '#ffc500',
        'pro-yellow2': '#fd7a00',
        'background': '#000000bd'
      },
      boxShadow: {
        'insaid': 'inset 3px 3px 3px #ffffff8c,inset -2px -2px 3px #0000004d,2px 2px 10px #00000052'
      }
    },
    fontFamily: { 
      body : ['Josefin Sans'],
      hero : ['Lato']
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
