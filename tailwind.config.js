module.exports = {
  content: [

    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        button: 'var(--color-bg-button)'
      },
      textColor: {
       accent: 'var(--color-text-accent)',
       primary: 'var(--color-text-primary)',
       secondary: 'var(--color-text-secondary)',
       buttonText: 'var(--color-bg-secondary)'
      },
      borderColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        input: 'var(--color-bg-input)',
        accent: 'var(--color-text-accent)'

      },
      'animation': {
        'text':'text 6s ease-in-out infinite',
    },
    'keyframes': {
        'text': {
            '0%, 100%': {
               'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
               'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
    }
    },
    
  },
  plugins: [],
}
