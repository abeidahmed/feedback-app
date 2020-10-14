const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        ...defaultTheme.boxShadow,
        custom:
          'rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px',
        'outline-blue': 'rgba(0, 93, 255, 0.6) 0px 0px 0px 3px',
      },
      colors: {
        blue: {
          ...defaultTheme.colors.blue,
          '500': 'rgb(0, 93, 255)',
          '600': 'rgb(22, 51, 255)',
          '700': 'rgb(0, 32, 255)',
        },
      },
      height: {
        ...defaultTheme.height,
        xs: '34px',
        sm: '38px',
        120: '30rem',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'focus-within'],
    borderWidth: ['responsive', 'last'],
  },
  plugins: [require('@tailwindcss/ui')],
};
