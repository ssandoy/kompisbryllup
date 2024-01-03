/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				inherit: 'inherit',
				transparent: 'transparent',
				weddingBlue: '#A5C6D9',
				white: '#fffbf6'
			},
			backgroundImage: {
				'front-image': "url('/sanderoginecropped.jpg')",
				'custom-gradient': 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, white 50%)',
			}
		},
	},
	plugins: [],
}
