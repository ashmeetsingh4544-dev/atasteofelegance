/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfbf7',
          100: '#faf5ec',
          200: '#f5ebd9',
          300: '#eeddc0',
          400: '#e3c89e',
          500: '#d4ae7a',
        },
        coffee: {
          50: '#f7f5f2',
          100: '#e8e0d8',
          200: '#cdbfac',
          300: '#a8896a',
          400: '#8a6b4f',
          500: '#6f5638',
          600: '#564028',
          700: '#3d2d1a',
          800: '#2a1f12',
          900: '#1a130a',
        },
        accent: {
          50: '#fef9f0',
          100: '#fdedce',
          200: '#fbd99c',
          300: '#f9c468',
          400: '#f5a832',
          500: '#e08c12',
          600: '#bb6e0a',
          700: '#94520d',
          800: '#7a4212',
          900: '#653612',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e3ece3',
          200: '#c7d8c8',
          300: '#a3bda5',
          400: '#7c9c7f',
          500: '#5d8061',
          600: '#48664c',
          700: '#3a523d',
          800: '#304333',
          900: '#28382b',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-down': 'fadeDown 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
