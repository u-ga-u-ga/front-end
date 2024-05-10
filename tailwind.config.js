import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}",
];
export const prefix = "";
export const theme = {
  fontSize: {
    sm: ["13px", "130%"],
    base: ["16px", "140%"],
    lg: ["18px", "28px"],
    xl: ["20px", "132%"],
    "2xl": ["24px", "132%"], // not yet used in the design
    "3xl": ["28px", "132%"], // not yet used in the design
    "4xl": ["35px", "132%"],
  },
  fontFamily: {
    sans: ["Inter", "sans-serif"],
  },
  container: {
    center: true,
    padding: "2rem",
    screens: {
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",

      // => @media (min-width: 1280px) { ... }
      "2xl": "1400px",
    },
  },
  extend: {
    colors: {
      primary: {
        DEFAULT: "#99CCFF",
        dark: "#4097EE",
        light: "#CCE6FF",
      },
      gray: {
        100: "#EEEEEE",
        200: "#D9D9D9",
        500: "#8C8C8C",
      },
      // 이하 기존 색상
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
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
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
};
export const plugins = [
  require("tailwindcss-animate"),
  plugin(function ({ addUtilities, addComponents, theme }) {
    // ★★
    addUtilities(
      {
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".scrollbar-default": {
          /* IE and Edge */
          "-ms-overflow-style": "auto",

          /* Firefox */
          "scrollbar-width": "auto",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "block",
          },
        },
      },
      ["responsive"]
    );
    addComponents({
      ".font-header-1": {
        // fontFamily: theme("fontFamily.sans"),
        fontSize: theme("fontSize.4xl[0]"),
        lineHeight: theme("fontSize.4xl[1]"),
        fontWeight: theme("fontWeight.bold"),
      },
      ".font-header-2": {
        fontFamily: theme("fontFamily.sans"),
        fontSize: theme("fontSize.xl[0]"),
        lineHeight: theme("fontSize.xl[1]"),
        fontWeight: theme("fontWeight.normal"),
      },
      ".font-body-1": {
        fontFamily: theme("fontFamily.sans"),
        fontSize: theme("fontSize.xl"),
        lineHeight: theme("fontSize.xl"),
        fontWeight: theme("fontWeight.bold"),
      },
      ".font-body-2": {
        fontFamily: theme("fontFamily.sans"),
        fontSize: theme("fontSize.base"),
        lineHeight: theme("fontSize.base"),
        fontWeight: theme("fontWeight.normal"),
      },
      ".font-body-3": {
        fontFamily: theme("fontFamily.sans"),
        fontSize: theme("fontSize.base"),
        lineHeight: theme("fontSize.base"),
        fontWeight: theme("fontWeight.normal"),
      },
      ".font-body-4": {
        fontFamily: theme("fontFamily.sans"),
        fontSize: theme("fontSize.sm"),
        lineHeight: theme("fontSize.sm"),
        fontWeight: theme("fontWeight.normal"),
      },
    });
  }),
];
