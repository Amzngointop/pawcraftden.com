import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#E8D8F0",
        navBg: "#DCC8EC",
        card: "#F5F2EE",
        accent: {
          DEFAULT: "#6B3FA0",
          dark: "#572F85",
          light: "#C9A8E8",
        },
        accentDark: "#572F85",
        purple: {
          200: "#C9A8E8",
        },
        amber: "#E07820",
        amberDark: "#C0671A",
        dark: "#14342B",
        textPrimary: "#1A1A1A",
        textSecondary: "#555550",
        muted: "#888880",
        divider: "#D8D4CC",
        cardBorder: "#E8E4DC",
        calloutBg: "#FEF6EC",
        barTrack: "#E5E0D8",
        link: "#B5600D",
        linkBorder: "#F0A050",
        linkHover: "#8A4509",
      },
      fontFamily: {
        heading: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      borderRadius: {
        pill: "100px",
        leaf: "6px 18px 6px 18px",
      },
    },
  },
  plugins: [],
};

export default config;
