/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        label: 'rgb(var(--label-color))',
        'label-colorful': 'rgb(var(--label-colorful-color))',
        'label-colorful-sub': 'rgb(var(--label-colorful-color-sub))',
        'content-main': 'rgb(var(--content-main-color))',
        'content-sub': 'rgb(var(--content-sub-color))',
        background: 'rgb(var(--background-color))',
        'deep-background': 'rgb(var(--deep-background-color))',
      },

      keyframes: {
        'move-right': {
          '0%': { transform: 'translateX(0)' },
          '75%': { transform: 'translateX(calc(var(--length) * 1.5))' },
          '100%': { transform: 'translateX(var(--length))' },
        },
        'move-right-reserve': {
          '0%': { transform: 'translateX(var(--length))' },
          '75%': { transform: 'translateX(calc(var(--length) * -0.3))' },
          '100%': { transform: 'translateX(0)' },
        },
      },

      animation: {
        'move-right': 'move-right 500ms ease-in-out forwards',
        'move-right-reserve': 'move-right-reserve 500ms ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
