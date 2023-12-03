module.exports = {
  content: ["./src/**/*.{html,js}", './src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'other': { 'min': '150px', 'max': '767px' },
        'res880': { 'min': '767px' },
        'medium': { 'min': '1021px', 'max': '1320px' },
        'med': { 'min': '768px', 'max': '1021px' },
        'max320': { 'min': '150px', 'max': '320px' },
        'h880': { 'raw': '(min-height: 990px)' },
      },
    },
  },
  plugins: [],
}