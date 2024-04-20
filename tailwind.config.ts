import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gold: "#ffce56",
        denim: "#2E3FBD",
        primary: "#4f63f9",
        "pacific-blue": "#17B8CA",
        input: "#F6F9FF",
        "dark-slate-gray": "#2A3653",
        "slate-gray": "#414f70",
        lavender: "#dfe6f4",
        bronze: "#a12f00",
        orange: "#cf5c00",
      },
    },
  },
  plugins: [],
};
export default config;
