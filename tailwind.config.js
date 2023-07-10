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
    },
  },
  plugins: [],
};
