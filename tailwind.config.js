module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#8F98FF',
        footer: '#24243C',
        paste: '#1EC2CB',
        sky: '#7DD6F6',
        dpaste: '#4ADEDE',
        dblue: '#1AA7EC',
      },

      fontFamily: {
        'primary-regular': 'Satoshi-Regular',
        'primary-medium': 'Satoshi-Medium',
        'primary-bold': 'Satoshi-Bold',
        'secondary-regular': 'Urban-Regular',
        'secondary-sb': 'Urban-SemiBold',
        'secondary-bold': 'Urban-Bold',
        logo: 'Arial',
      },
      fontSize: {
        brandLogo: ['38.94px', '38.94px'],
        menu: ['18px', '18px'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
