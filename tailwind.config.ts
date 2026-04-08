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
          night: '#050816',
          deep: '#0a1226',
          panel: '#101b35',
          cream: '#eaf4ff',
          fog: '#9fb3d8',
          line: 'rgba(120,153,206,0.14)',
          gold: '#59e5ff',
          goldSoft: '#9affd2',
          steel: '#7b61ff',
          mint: '#97ffc4',
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
