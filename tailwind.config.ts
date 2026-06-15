import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F0',
        card: '#FFFFFF',
        ink: '#10202B',
        sage: '#AFC7B5',
        emerald: '#2F6F5E',
        rose: '#D8A7A7',
        clay: '#B86F6F',
        gold: '#D9B56D',
        mist: '#EEF2F0',
        teal: '#4CA6A8',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(16,32,43,0.04), 0 8px 24px -12px rgba(16,32,43,0.12)',
        lift: '0 2px 4px rgba(16,32,43,0.05), 0 24px 48px -20px rgba(47,111,94,0.22)',
        glow: '0 0 0 1px rgba(255,255,255,0.6) inset, 0 30px 80px -30px rgba(184,111,111,0.35)',
        ring: '0 0 0 1px rgba(16,32,43,0.06)',
      },
      backgroundImage: {
        'sheen': 'linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.55) 50%, transparent 75%)',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        drift: {
          '0%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(2%, -2%, 0) scale(1.05)' },
          '100%': { transform: 'translate3d(0,0,0) scale(1)' },
        },
        petal: {
          '0%': { transform: 'translateY(-8%) translateX(0) rotate(0deg)', opacity: '0' },
          '12%': { opacity: '0.9' },
          '100%': { transform: 'translateY(115vh) translateX(28px) rotate(220deg)', opacity: '0' },
        },
        shine: {
          '0%': { transform: 'translateX(-130%)' },
          '60%, 100%': { transform: 'translateX(130%)' },
        },
        pulseNode: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.04)', opacity: '0.92' },
        },
        dash: {
          to: { strokeDashoffset: '0' },
        },
      },
      animation: {
        reveal: 'reveal 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        float: 'float 7s ease-in-out infinite',
        drift: 'drift 22s ease-in-out infinite',
        shine: 'shine 4.5s ease-in-out infinite',
        pulseNode: 'pulseNode 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
