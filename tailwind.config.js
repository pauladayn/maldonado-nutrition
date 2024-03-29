/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#21a264",
      secondary: "#EDF67D",
      footer: "#8FA6CB",
      neutral: "#f0f0f0",
      black: "#000000",
    }),
    textColor: {
      primary: "#21a264",
      secondary: "#62c094",
      neutral: "#f0f0f0",
      black: "#000000",
    },
    minHeight: {
      0: "0",
      1: "25vh",
      2: "50vh",
      3: "75vh",
      screen: "100vh",
    },
    extend: {},
  },
  plugins: [],
};
