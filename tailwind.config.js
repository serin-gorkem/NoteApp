/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark": "#030637",
        "text-dark": "#efefef",
        "note-dark": "#910A67",
        "edit-note-dark": "#3C0753",
        "search-bar-dark": "#720455",
        "button-dark": "#720455",
        "placeholder-dark": "#FFE5E5",
        "light": "#C4DFDF",
        "text-light": "#030637",
        "note-light": "#E3F4F4  ",
        "edit-note-light": "#C4DFDF",
        "search-bar-light": "#D2E9E9",
        "button-light": "#D2E9E9",
        "placeholder-light": "#FFE5E5",
      },
      fontFamily:{
        "dancing-script": "Dancing-Script",
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
