module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('src/assets/images/first_section.jpg')",
        'parent-chart': "url('src/assets/images/parent.png')",
        'child-chart': "url('src/assets/images/child-1.png')",
        'child-chart-1': "url('src/assets/images/child-2.png')",
      },
      colors: {
        primary: '#8F98FF',
        footer: '#24243C',
        paste: '#1EC2CB',
        spaste: '#2D8CAB',
        dpaste: '#4ADEDE',
        sky: '#7DD6F6',
        dblue: '#1AA7EC',
      },

      fontFamily: {
        'primary-regular': 'Satoshi-Regular',
        'primary-medium': 'Satoshi-Medium',
        'primary-bold': 'Satoshi-Bold',
        'secondary-light': 'Urban-Light',
        'secondary-regular': 'Urban-Regular',
        'secondary-sb': 'Urban-SemiBold',
        'secondary-bold': 'Urban-Bold',
        'secondary-ebold': 'Urban-EBold',
        logo: 'Arial',
      },

      fontSize: {
        brandLogo: ['50px', '58.94px'],
        menu: ['18px', '18px'],
        bannerHeading: '146px',
        bannerSubHeading: '64px',
        bannerText: '60px',
      },
      spacing: {
        '3xl': '740px',
        '2xl': '640px',
        xl: '580px',
        lg: '480px',
        md: '430px',
        sm: '380px',
        xs: '320px',
        xxs: '190px',
        xxxs: '160px',
        xxxxs: '90px',
      },
      transitionDuration: {
        0: '0ms',
        2000: '2000ms',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
