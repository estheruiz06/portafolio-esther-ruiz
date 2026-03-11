

export default {
  theme: {
    extend: {
      colors: {
        'brand-pink': '#fbcfe8', 
      },
  
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
}