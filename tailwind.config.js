/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["fantasy"],
  },
  plugins: [require('daisyui'), require("tailwindcss-animate"), function ({ addUtilities }) {
    addUtilities({
      '.text-shadow-sm': {
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.25)',
      },
      '.text-shadow-md': {
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.35)',
      },
      '.text-shadow-lg': {
        textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
      },
      '.text-shadow-none': {
        textShadow: 'none',
      },
    });
  },],
    theme: {
    	extend: {
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    }
};
