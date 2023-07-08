/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "light-magenta": "hsl(293, 100%, 63%)",
        "pale-magenta": "hsl(272, 46%, 93%)",
        "light-violet": "hsl(264, 100%, 61%)",
        "light-grayish-violet": "hsl(270, 20%, 96%)",
        "pale-violet": "hsl(276, 100%, 81%)",
        "grayish-blue": "hsl(206, 6%, 79%)",
        // Chats
        "moderate-violet": "hsl(276, 55%, 52%)",
        "desaturated-violet": "hsl(271, 15%, 43%)",
        "very-dark-desaturated-violet": "hsl(271, 36%, 24%)",
      },
    },
  },
  plugins: [],
};
