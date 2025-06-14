/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                screens: {
                    xl: '1480px', // macBookAir13インチでは綺麗
                },
            },
        },
        // fontFamily: {
        //     sans: ['Inter', 'sans-serif'],
        // },
        // colors: {
        //     brand: {
                // DEFAULT: '#4f46e5', // Indigo-600
                // dark: '#312e81',     // Indigo-900
                // light: '#eef2ff',    // Indigo-50
        //     },
        // },
    },
    plugins: [],
};
