import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        rami: {
          night: '#090b10',
          deep: '#0f1621',
          panel: '#121b28',
          cream: '#f7f1e4',
          fog: '#b3bcc9',
          line: 'rgba(255,255,255,0.1)',
          gold: '#c7a061',
          goldSoft: '#f0dec0',
          steel: '#4c6788',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'serif'],
      },
      maxWidth: {
        content: '1200px',
        prose: '760px',
      },
    },
  },
  plugins: [],
}

export default config
