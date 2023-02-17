/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        circles: "url('./pattern-circles.svg')",
      },
      colors: {
        '_soft-cyan': '#a5f3eb',
        '_strong-cyan': '#10d5c2',
        '_light-grayish-red': '#feece7',
        '_light-red': '#ff8c66',
        '_pale-blue': '#bdccff',
        '_very-pale-blue': '#fafbff',
        '_empty-slider-bar': '#eaeefb',
        '_toggle-background': '#cdd7ee',
        '_grayish-blue': '#858fad',
        '_dark-desaturated-blue': '#293356',
      },
      fontFamily: {
        sans: ['ManropeVariable', 'sans-serif'],
      },
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
    },
  },
  plugins: [],
}

// ## Colors

// ### Primary

// - Soft Cyan (Full Slider Bar): hsl(174, 77%, 80%)
// - Strong Cyan (Slider Backround): hsl(174, 86%, 45%)
// - Light Grayish Red (Discount Background): hsl(14, 92%, 95%)
// - Light Red (Discount Text): hsl(15, 100%, 70%)
// - Pale Blue (CTA Text): hsl(226, 100%, 87%)

// ### Neutral

// - White (Pricing Component Background): hsl (0, 0%, 100%)
// - Very Pale Blue (Main Background): hsl(230, 100%, 99%)
// - Light Grayish Blue (Empty Slider Bar): hsl(224, 65%, 95%)
// - Light Grayish Blue (Toggle Background): hsl(223, 50%, 87%)
// - Grayish Blue (Text): hsl(225, 20%, 60%)
// - Dark Desaturated Blue (Text & CTA Background): hsl(227, 35%, 25%)
