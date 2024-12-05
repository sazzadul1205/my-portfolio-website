/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        PortfolioTheme: {
          primary: "#0077b6", // Blue theme color
          secondary: "#00b4d8", // Light blue
          accent: "#90e0ef", // Accent color
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      {
        PortfolioDark: {
          primary: "#023047", // Dark blue
          secondary: "#219ebc", // Vibrant blue
          accent: "#8ecae6",
          neutral: "#1e293b",
          "base-100": "#0f172a",
        },
      },
      "light",
      "dark",
    ],
  },
};
