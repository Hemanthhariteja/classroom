/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        app: '#0b0f0f',
        card: '#111616',
        accent: '#14f195',
        accentMuted: '#0bd179',
        textPrimary: '#e6fff3',
        textMuted: '#8adbb8',
        border: '#1f2a2a'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(20,241,149,0.2), 0 0 20px rgba(20,241,149,0.08)'
      }
    }
  },
  plugins: []
}