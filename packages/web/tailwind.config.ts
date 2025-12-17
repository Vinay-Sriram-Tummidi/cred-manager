import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",

    // shared UI package
    "../ui/**/*.{js,jsx,ts,tsx}",

    // other apps
    "../dashboard/src/**/*.{js,jsx,ts,tsx}",
  ],
 
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}

export default config
