/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite-react/tailwind';
import daisyui from 'daisyui';

export default {
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: '#1375ba',
        primaryDarker: '#0e588b',
        primaryLight: '#74bef1',
        secondary: '#152b5a',
        order: '#F96A01',
        blackui: '#2B2B2B',
        lightBlue: '#E3F4FF',
        lightBlueDark: '#ccdce6',
        lightBlueDarker: '#b6c3cc',
        primary: {
          10: '#E6F6FF',
          20: '#CCEEFF',
          30: '#99DDFF',
          40: '#66CBFF',
          50: '#33BAFF',
          60: '#00A9FF',
          70: '#0087CC',
          80: '#006599',
          90: '#004466',
          100: '#002233',
        },
        neutral: {
          10: '#E7E7E7',
          20: '#D0D0D0',
          30: '#898989',
          40: '#717171',
          50: '#595959',
          60: '#414141',
          70: '#2A2A2A',
          80: '#121212',
          90: '#101010',
          100: '#0E0E0E',
        },
      },
      boxShadow: {
        inset:
          'inset -2px -2px 4px rgba(0, 0, 0, 0.5), 2px 4px 8px rgba(0, 0, 0, 0.5)',
        cardShadow: '1px 2px 12px rgba(0, 0, 0, 0.3)',
        cardShadow2:
          '0px 117px 47px 0px rgba(0, 0, 0, 0.01), 0px 66px 40px 0px rgba(0, 0, 0, 0.04), 0px 29px 29px 0px rgba(0, 0, 0, 0.07), 0px 7px 16px 0px rgba(0, 0, 0, 0.08)',
        inputShadow:
          '0px 2px 4px 0px rgba(0, 0, 0, 0.15), inset 0px 0px 0px 1px rgba(205, 209, 220, 1)',
      },
    },
  },
  plugins: [flowbite.plugin(), daisyui],
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
};
