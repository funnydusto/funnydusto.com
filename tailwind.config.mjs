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
				'profile-picture': "url(/profile.png)",
				'hero-splash': "linear-gradient(#27163D00, #27163D), url(/splash.png)",
			}
			
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
