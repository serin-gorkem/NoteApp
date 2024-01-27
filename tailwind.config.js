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
        "button-dark": "#720455",
        "placeholder-dark": "#FFE5E5",
        "light": "#E0CCBE",
        "text-light": "#030637",
        "note-light": "#EEEDEB",
        "edit-note-light": "#E0CCBE",
        "button-light": "#E0CCBE",
        "placeholder-light": "#FFE5E5",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
