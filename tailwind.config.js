/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/main.ts',
    './src/index.html',
    './src/styles.css' ,
    './src/app/app.component.html',
    './src/app/app.component.ts',
    './src/app/navbar/navbar.component.html',
    './src/app/navbar/navbar.component.ts',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'primary': '#ffc727',
        'dark': '#111111',
        
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
          

        },
      },
    },
  },
  plugins: [],
}

