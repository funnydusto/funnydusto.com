/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			brand: ['Work Sans', 'Inter', 'sans-serif'],
			sans: ['Inter', 'sans-serif'],
		},
		extend: {
			backgroundImage: {
				'hero-cover': "url(/cover.png)"
			}
		},
	},
	plugins: [],
}
