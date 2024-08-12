/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#2563EB",
        "color-secondary": "#AFDFAD",
        "color-tertiary": "#FFFFFF",
        "color-quarterry": "#E9EFFD",
        "color-quinary": "#92B1F5",
        "color-red-primary": "#C30000",
        "color-green-primary": "#00966D",
        // 'quaternary': '#F3F4F6',
        // 'quinary': '#E5E7EB',
        // 'senary': '#D1D5DB',
        // 'septenary': '#9CA3AF',
        // 'octonary': '#6B7280',
        // 'nonary': '#4B5563',
        // 'denary': '#374151',
      },
      fontSize: {
        xs: "0.75rem",
      },
      fontFamily: {
        "sf-pro": ["SF Pro Display", "sans-serif"],
      },
      screens: {
        xs: "285px",
      },
      keyframes: {
        shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(2px, 2px, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
        },
      },
      animation: {
        shake: 'shake 0.4s cubic-bezier(.36,.07,.19,.97) both',
      }
    },
  },
  plugins: [],
};
