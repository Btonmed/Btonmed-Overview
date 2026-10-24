/** @type {import('tailwindcss').Config} */
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '1.5rem', lg: '2rem' },
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        // fixed brand palette
        brand: {
          50: '#EEF3FB',
          100: '#DCE6F7',
          200: '#B7CCEE',
          300: '#8AACE2',
          400: '#5583CF',
          500: '#2F64C0',
          600: '#1D54B2',
          700: '#174593',
          800: '#123673',
          900: '#0D2856',
          950: '#081A3A',
          fg: v('brand-fg'),
        },
        accent: {
          50: '#E8F5F1',
          100: '#CBEADF',
          200: '#97D4BF',
          400: '#2FA585',
          600: '#13866C',
          700: '#0F6C57',
          800: '#0C5545',
          fg: v('accent-fg'),
          tint: v('accent-tint'),
        },
        // theme-aware tokens (switch with .dark)
        surface: { DEFAULT: v('surface'), soft: v('surface-soft') },
        card: v('card'),
        fg: v('fg'),
        muted: v('muted'),
        line: v('line'),
        tint: v('tint'),
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans Variable"', 'system-ui', 'sans-serif'],
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11,27,54,0.04), 0 8px 24px -8px rgba(11,27,54,0.10)',
        lift: '0 2px 4px rgba(11,27,54,0.05), 0 24px 48px -16px rgba(11,27,54,0.25)',
        glow: '0 0 0 1px rgba(29,84,178,0.35), 0 12px 40px -8px rgba(29,84,178,0.55)',
        'glow-lg': '0 0 0 1px rgba(29,84,178,0.25), 0 30px 90px -20px rgba(29,84,178,0.65)',
        'glow-accent': '0 0 0 1px rgba(19,134,108,0.35), 0 12px 40px -8px rgba(19,134,108,0.6)',
        'glow-wa': '0 10px 36px -6px rgba(37,211,102,0.7)',
      },
      keyframes: {
        ping2: {
          '0%': { transform: 'scale(1)', opacity: '0.55' },
          '80%, 100%': { transform: 'scale(1.9)', opacity: '0' },
        },
        trace: { '0%': { strokeDashoffset: '600' }, '65%, 100%': { strokeDashoffset: '0' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        breathe: { '0%, 100%': { opacity: '0.55', transform: 'scale(1)' }, '50%': { opacity: '0.85', transform: 'scale(1.08)' } },
        spin_slow: { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        ping2: 'ping2 2.2s cubic-bezier(0,0,0.2,1) infinite',
        trace: 'trace 3.2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        breathe: 'breathe 7s ease-in-out infinite',
        'spin-slow': 'spin_slow 30s linear infinite',
      },
    },
  },
  plugins: [],
}
