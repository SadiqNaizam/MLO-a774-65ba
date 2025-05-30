import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
        // Sidebar specific colors from PRD mapped to CSS variables
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
        // Colors from PRD typography section & specific PRD names
        primaryText: 'hsl(var(--foreground))', // Mapped to PRD primaryText #1C1E21 (via --foreground)
        secondaryText: 'hsl(var(--muted-foreground))', // Mapped to PRD secondaryText #606770 (via --muted-foreground)
        accentBlue: 'hsl(var(--primary))', // PRD accentBlue #1877F2 is mapped to --primary
        accentGray: 'hsl(var(--accent))', // PRD accentGray #F5F6F7 is mapped to --accent
        accentRed: 'hsl(var(--destructive))', // PRD accentRed #FA3E3E is mapped to --destructive
			},
			borderRadius: {
        // --radius in CSS is 0.375rem (6px), matching PRD's default "rounded-md"
				lg: 'var(--radius)', // Tailwind's rounded-lg utility becomes 0.375rem (PRD default for cards/sections)
        // PRD buttons use "rounded" (Tailwind's default 0.25rem or 4px)
				md: 'calc(var(--radius) - 2px)', // Tailwind's rounded-md utility becomes 0.25rem (for PRD buttons)
				sm: 'calc(var(--radius) - 4px)' // Tailwind's rounded-sm utility becomes 0.125rem (2px)
			},
      fontFamily: {
        sans: ['Arial', ...defaultTheme.fontFamily.sans], // PRD: typography.primaryFont
      },
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
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
