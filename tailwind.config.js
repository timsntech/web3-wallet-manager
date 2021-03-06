module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    minHeight: {
      screen: "100vh",
      screen70: "70vh",
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 1s",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-55%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "translateY(0)",
          },
        },
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
