
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
      width:{
        '85':'350px',
        '32p':'32%',
        '500p':'500px',
        '800p':'800px',
        '900p':'900px',
        '1000p':'1000px',
        '1200p':'1200px',
      },
      height:{
        '90v':'90vh',
        '95v':'95vh',
        '85':'350px',
        '32p':'32%',
        '500p':'500px',
        '600p':'600px',
        '700p':'700px',
        '800p':'800px',
        '900p':'900px',
        '1000p':'1000px',
        '1200p':'1200px',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
