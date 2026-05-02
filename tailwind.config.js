module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  // theme: {
  //   extend: {
  //     colors: {
  //       border: "#e5e7eb",
  //       background: "#eeffda",
  //       foreground: "#111827",
  //       primary: "#486c1b",
  //       secondary: "#6c9b31",
  //       offwhite: "#eeffda",
  //     },
  //     fontFamily: {
  //       sukar: ["Sukar", "sans-serif"],
  //     },
  //   },
  // },
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#486c1b",
          foreground: "#eeffda",
        },
        secondary: {
          DEFAULT: "#6c9b31",
          foreground: "#eeffda",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Bhuvi Homes color theme
        leaf: "#486c1b", // Leaf green
        chlorophyll: "#6c9b31", // Chlorophyll green
        offwhite: "#eeffda", // Off white
        // Custom colors for our construction theme
        warm: {
          50: "#FBF7F4",
          100: "#F5EDE5",
          200: "#EAD9CB",
          300: "#DFC5B1",
          400: "#D4B197",
          500: "#C99D7D",
          600: "#BE8964",
          700: "#B3754A",
          800: "#A86231",
          900: "#9D4F17",
        },
        earth: {
          50: "#F9F6F3",
          100: "#F2ECE6",
          200: "#E5D9CD",
          300: "#D8C6B4",
          400: "#CBB39B",
          500: "#BEA082",
          600: "#B18D69",
          700: "#A47A50",
          800: "#976737",
          900: "#8A541E",
        },
        sage: {
          50: "#F5F8F5",
          100: "#EBF1EB",
          200: "#D7E3D6",
          300: "#C3D5C2",
          400: "#AFC7AD",
          500: "#9BB998",
          600: "#87AB83",
          700: "#739D6E",
          800: "#5F8F59",
          900: "#4B8145",
        },
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        sukar: ["Sukar", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out": {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "scale-in": {
          "0%": {
            transform: "scale(0.95)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-out": "fade-out 0.5s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
