import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",          // web app
    "../ui/**/*.{js,jsx,ts,tsx}",    
    "../dashboard/**/*.{js,jsx,ts,tsx}",        // shared UI package
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
