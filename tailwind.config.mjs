/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            fontFamily: {
                serif: ['"Oswald"', 'serif'],
                sans: ['"Lato"', 'sans-serif'],
            },
            colors: {
                'stone-850': '#1c1917',
                'stone-900': '#0c0a09',
            }
        },
	},
	plugins: [],
}