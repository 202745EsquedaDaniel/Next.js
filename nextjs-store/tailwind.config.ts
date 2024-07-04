import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-color": "#13111a",
        "secondary-color": "#e4e1f6",
        "text-color": "#fff",
        "border-color": "#302c3f",
      },
      boxShadow: {
        "custom-shadow": '0 0 4rem rgba(255, 255, 255, 0.2)',
      }
    },
  },
  plugins: [],
};
export default config;
