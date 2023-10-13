/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'Lexend-Deca': ['var(--font-lexend-deca']
              },
            colors: {
                // Primary
                'Bright-orange': 'hsl(31, 77%, 52%)',
                'Dark-cyan': 'hsl(184, 100%, 22%)',
                'Very-dark-cyan': 'hsl(179, 100%, 13%)',

                // Neutral
                'Transparent-white': 'hsla(0, 0%, 100%, 0.75)',
                'Very-light-gray': 'hsl(0, 0%, 95%)'
            }
        },
    },
    plugins: [],
}