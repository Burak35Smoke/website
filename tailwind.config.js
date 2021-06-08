module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", 
  plugins: [
    require("@tailwindcss/typography"),
	require("@tailwindcss/forms")
  ],
}
