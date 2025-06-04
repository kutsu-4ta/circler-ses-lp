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
    },
    plugins: [],
};
