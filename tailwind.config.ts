import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1100px',
      },
    },
    extend: {
      colors: {
        rami: {
          ink: '#111111',
          muted: '#555555',
          surface: '#F8F8F7',
          border: '#E5E5E5',
          link: '#0066CC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1100px',
        prose: '700px',
      },
    },
  },
  plugins: [],
}

export default config
