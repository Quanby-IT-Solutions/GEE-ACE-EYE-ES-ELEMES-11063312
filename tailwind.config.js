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
    },
  },
  plugins: [],
};
