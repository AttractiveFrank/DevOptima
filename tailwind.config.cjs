/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  },

  theme: {
    extend: {
      colors: {
        btnPrimary: '#0F1631',
        hoverbtnPrimary: '#3F57DA',
        borderPrimary: '#243BB9',
        borderFooter: '#172136',
        txtGray: '#BDC4D1',
        warning: 'red',
        cardbgcol: '#214288',
        footerCol: ''
      }
    },
    fontSize: {
      '14': '14px',
      '15': '15px',
      '18': '18px',
      '20': '20px',
      '24': '24px',
      '29': '29px',
      '48': '48px',
      '72': '72px',
    },
    right: {
      '30': '30px'
    },
    width: {
      '157': '157px',
      '716': '716px',
      '464': '464px',
      '589': '589px',
      '580': '580px',
      '500': '500px',
      '380': '380px',
      '242': '242px',
      '44': '44px',
      '36': '36px'
    },
    gap: {
      '18': '18px',
      '10': '10px',
      '100': '100px',
    }
  },
  variants: {},
  plugins: [],
  // ... other configuration options
};