import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		'./components/ui/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			animation: {
				'marquee-y': 'marquee-y 35s linear infinite',
			},
			keyframes: {
				'marquee-y': {
					'0%': { transform: 'translateY(0%)' },
					'100%': { transform: 'translateY(-100%)' },
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate"),

	]
} satisfies Config;
