/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				soothingBlue: "#6CB2E2",
				soothingGreen: "#A2D9A2",
				soothingGray: "#D9D9D9",
			},
		},
	},
	plugins: [require("daisyui")],
};
