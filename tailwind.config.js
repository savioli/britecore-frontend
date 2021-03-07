module.exports = {
  purge: {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    options: {
      safelist: [
        "-ml-0",
        "border-gray-600",
        "text-gray-600",
        "border-yellow-600",
        "text-yellow-600",
        "border-red-600",
        "text-red-600",
        "border-green-600",
        "text-green-600",
        "border-blue-600",
        "text-blue-600",
        "z-30",
        "absolute",
        "mt-2",
        "border-r",
        "border-opacity-50",
        "border-fuchsia-600",
        "rounded-md",
        "shadow-md",
        "border-gray-400",
        "hidden"
      ],
      blocklist: [/^debug-/],
      keyframes: true,
      fontFace: true
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
