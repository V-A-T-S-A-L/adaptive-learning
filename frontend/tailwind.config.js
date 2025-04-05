import plugin from 'tailwindcss/plugin'

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('dark', '&:where(.dark, .dark *)')
    }),
  ],
}
