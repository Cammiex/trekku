/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite-react/tailwind';

export default {
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1892e8',
        primaryDark: '#1375ba',
        primaryDarker: '#0e588b',
        primaryLight: '#74bef1',
        secondary: '#152b5a',
        order: '#F96A01',
        blackui: '#2B2B2B',
        lightBlue: '#E3F4FF',
        lightBlueDark: '#ccdce6',
        lightBlueDarker: '#b6c3cc',
      },
      boxShadow: {
        inset:
          'inset -2px -2px 4px rgba(0, 0, 0, 0.5), 2px 4px 8px rgba(0, 0, 0, 0.5)',
        cardShadow: '1px 2px 12px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
