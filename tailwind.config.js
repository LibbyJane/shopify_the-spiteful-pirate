/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './layout/*.liquid',
        './sections/*.liquid',
        './snippets/*.liquid',
        './templates/**/*.liquid'
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'primary': '#457b9d',
            'primary-light': '#a8dadc',
            'primary-dark': '#24262C',
            'accent': '#F0C62D',
            'accent-light': '#FFE66D',
            'accent-dark': '#BF980D',
            'light': '#ffffff',
            'dark': '#141415',
            'danger': '#e63946',
            'success': '#5FAB6B',
        },
        fontFamily: {
            'display': ['Rancho', 'cursive'],
            'body': ['"Open Sans"', 'Helvetica', 'Arial', 'sans-serif'],
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            }
        }
    },
    plugins: [],
}

