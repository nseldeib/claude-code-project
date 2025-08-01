/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#0f0f23',
          text: '#00ff41',
          accent: '#ff6b35',
          secondary: '#ffd23f',
          muted: '#66ff66',
          error: '#ff4757',
          success: '#2ed573',
          border: '#1a1a2e',
          card: '#16213e',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      animation: {
        'terminal-blink': 'blink 1s step-end infinite',
        'typewriter': 'typewriter 3s steps(40) 1s 1 normal both',
        'scan-lines': 'scan-lines 0.1s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'scan-lines': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        }
      },
      boxShadow: {
        'terminal': '0 0 20px rgba(0, 255, 65, 0.3)',
        'terminal-glow': 'inset 0 0 20px rgba(0, 255, 65, 0.1)',
      }
    },
  },
  plugins: [],
}