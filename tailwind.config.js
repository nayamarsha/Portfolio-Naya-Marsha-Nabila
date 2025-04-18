/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        container: {
          center: true,
          padding: '16px',
        },
        extend: {
          colors: {
            primary: 'oklch(0.707 0.165 254.624)',
          },
          screens: {
            '2xl': '1320px',
          },
        },
      },    
    plugins: [],
  };
  