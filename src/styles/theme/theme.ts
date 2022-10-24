const theme = {
  colors: {
    white500: "#ffffff",
    black500: "#000000",

    gray100: "#E1E1E6",
    gray300: "#C4C4CC",
    gray400: "#8D8D99",
    gray500: "#7C7C8A",
    gray600: "#323238",
    gray700: "#282826",
    gray800: "#1c1c1a",
    gray900: "#161615",

    cyan300: "#98e1fb",
    cyan500: "#81d8f7",
    cyan700: "#48cae4",

    violet300: "#9d4edd",
    violet500: "#7b2cbf",
    violet700: "#5a189a",

    green300: "#00B37E",
    green500: "#00875F",
    green700: "#015F43",

    red300: "#F75A68",
    red500: "#AB222E",
    red700: "#7A1921",

    yellow500: "#FBA94C",
  },

  fontSizes: {
    xxs: "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "4xl": "2rem",
    "5xl": "2.25rem",
    "6xl": "3rem",
    "7xl": "4rem",
    "8xl": "4.5rem",
    "9xl": "6rem",
    "10xl": "10rem",
  },

  fontWeight: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },

  fonts: {
    default: "IBM Plex Sans, sans-serif",
    code: "IBM Plex Mono, monospace",
  },

  lineHeights: {
    shorter: "125%",
    short: "140%",
    base: "160%",
    tall: "180%",
  },

  radii: {
    px: "1px",
    xs: "4px",
    sm: "6px",
    md: "8px",
    lg: "16px",
    full: "99999px",
  },

  space: {
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    18: "4.5rem",
    20: "5rem",
    30: "8rem",
    40: "10rem",
    64: "16rem",
    80: "20rem",
  },
} as const

export default theme
