/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#9333ea", // purple-600
                "background-light": "#f8fafc", // slate-50
                "background-dark": "#1e293b", // slate-800
            },
            fontFamily: {
                display: ["'Inter', sans-serif"],
                // Add sans for body if needed, referencing original: font-family: "Inter", sans-serif;
                sans: ["'Inter', sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.5rem", // 8px
            },
        },
    },
    plugins: [
        // forms and typography were in the CDN link in HTML
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
