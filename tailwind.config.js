/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#07050d',
        surface: '#0f0a1c',
        panel: '#150f27',
        line: 'rgba(168,85,247,0.16)',
        violet: {
          400: '#b98cff',
          500: '#9b5cff',
          600: '#7c3aed',
          700: '#5b21b6',
        },
        gilt: '#c6a15b',
        mist: '#a7a0bd',
      },
      fontFamily: {
        crown: ['var(--font-crown)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      backgroundImage: {
        'ark-radial': 'radial-gradient(circle at 50% 0%, rgba(155,92,255,0.22), transparent 60%)',
        'ark-grid': 'linear-gradient(rgba(168,85,247,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
