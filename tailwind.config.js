/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  container: {
    center: true,
  },
  screens: {
    'sm': '640px', // Small screens
    'md': '768px', // Medium screens
    'lg': '1024px', // Large screens
    'xl': '1100px', // Extra large screens
    '2xl': '1170px', // 2X extra large screens
  },
};
export const plugins = [];
