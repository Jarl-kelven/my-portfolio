module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            orange: "#C0460A",
            hover: "#E8652A",
            maroon: "#3C1008",
            dark: "#111111",
            surface: "#1E1E1E",
            light: "#F5F5F0",
          },
        },
      },
    },
    plugins: [],
  }