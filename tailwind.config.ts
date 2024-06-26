import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      lineHeight: {
        'custom-headline': '56px',
        'title-3': '24px',
        h1: '112px',
        h2: '72px',
        h3: '56px',
        h4: '36px',
        h5: '32px',
        h6: '24px',
        'subtitle-1': '24px',
        'subtitle-2': '24px',
        'body-1': '24px',
        'body-2': '20px',
        button: '20px',
        caption: '16px',
        overline: '32px',
      },
      fontSize: {
        'custom-headline': '48px',
        'title-3': '16px',
        h1: '96px',
        h2: '60px',
        h3: '48px',
        h4: '34px',
        h5: '24px',
        h6: '20px',
        'subtitle-1': '16px',
        'subtitle-2': '14px',
        'body-1': '16px',
        'body-2': '14px',
        button: '14px',
        caption: '12px',
        overline: '12px',
      },
      colors: {
        // other
        yellow: '#FFB649',
        green: '#25824F',
        red: '#DB4546',
        // text
        'text-primary': 'rgba(225,227,230,1)',
        'text-secondary': 'rgba(176,177,182,1)',
        'text-tertiary': 'rgba(118,120,122,1)',
        'text-accent': 'rgba(0,71,187,1)',
        'text-success': 'rgba(46,125,50,1)',
        'text-error': 'rgba(211,47,47,1)',
        // icons
        'icon-primary': 'rgba(225,227,230,1)',
        'icon-secondary': 'rgba(176,177,182,1)',
        'icon-tertiary': 'rgba(118,120,122,1)',
        'icon-accent': 'rgba(0,71,187,1)',
        'icon-success': 'rgba(46,125,50,1)',
        'icon-error': 'rgba(211,47,47,1)',
        //   border
        'border-primary': 'rgba(54,55,56,1)',
        'border-accent': 'rgba(0,71,187,1)',
        'border-success': 'rgba(46,125,50,1)',
        'border-error': 'rgba(211,47,47,1)',
        //   state
        'state-accent-disabled': 'rgba(66,66,66,1)',
        'state-blue-hover': 'rgba(0,49,130,1)',
        'state-blue-focused': 'rgba(76,126,207,1)',
        'state-transparent-blue-hover':
          'rgba(0,71,187,0.10)',
        'state-transparent-blue-focused':
          'rgba(0,71,187,0.50)',
        'state-error-hover': 'rgba(198,40,40,1)',
        'state-error-focused': 'rgba(224,109,109,1)',
        'state-transparent-error-hover':
          'rgba(211,47,47,0.10)',
        'state-transparent-error-focused':
          'rgba(211,47,47,0.50)',
        'state-success-hover': 'rgba(27,94,32,1)',
        'state-success-focused': 'rgba(108,164,111,1)',
        'state-transparent-success-hover':
          'rgba(46,125,50,0.10)',
        'state-transparent-success-focused':
          'rgba(46,125,50,0.50)',
        'state-transparent-contrast-hover':
          'rgba(255,255,255,0.04)',
        'state-transparent-contrast-focused':
          'rgba(255,255,255,0.12)',
        //   brand
        'brand-blue': 'rgba(0,71,187,1)',
        'brand-dark-blue': 'rgba(0,26,114,1)',
        'brand-orange': 'rgba(250,70,22,1)',
        'brand-white': 'rgba(255,255,255,1)',
        'brand-black': 'rgba(16,24,32,1)',
        // bg
        'bg-primary': 'rgba(20,20,20,1)',
        'bg-secondary': 'rgba(35,35,36,1)',
        'bg-tertiary': 'rgba(32,32,33,1)',
        'bg-modal': 'rgba(48,48,48,1)',
        'bg-accent': 'rgba(0,71,187,1)',
        'bg-success': 'rgba(46,125,50,1)',
        'bg-error': 'rgba(211,47,47,1)',
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  plugins: [],
};
export default config;
