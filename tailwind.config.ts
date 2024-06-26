import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./slices/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                glory: ["var(--font-glory)"],
            },
        },

        screens: {
            xs: "400px",
            sm: "640px",
            md: "768px",
            lg: "1027px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },
    plugins: [],
};
export default config;
