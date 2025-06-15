module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                strategy: {
                    internal: '#059669', // green
                    external: '#2563eb', // blue
                    overlay: 'rgba(0,0,0,0.6)',
                    surface: '#1e293b'    // slate-800
                },
            },
            container: {
                center: true,
                screens: {
                    xl: '1480px', // macBookAir13インチでは綺麗
                },
            },
            fontFamily: {
                strategy: ['"Roboto Condensed"', 'sans-serif'],
            },
        },
    },
    plugins: [],
};