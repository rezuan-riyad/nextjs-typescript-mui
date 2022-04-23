import { createTheme } from '@mui/material/styles';
// import { SimplePaletteColorOptions } from "@mui/material/styles/createPalette";

declare module '@mui/material/styles/createPalette' {
  export interface PaletteOptions {
    pink?: {
      main: string,
      light: string
    }
  }
  export interface TypeBackground {
    white: string,
    primary: string,
    secondary: string,
    black: string,
    auto: string,
    autoLight: string
  }
}

const theme = createTheme({
  palette: {
    background: {
      white: "#ffffff",
      primary: "#1482D2",
      secondary: "#F5AB0C",
      black: "rgb(0,0,0)",
      auto: "#FFDFD2",
      autoLight: "#ffefe9"
    },
    primary: {
      main: "#00796b"
    },
    secondary: {
      main: "#1482D2",
    },
    pink: {
      main: "#F85276",
      light: "#FFE9EE",
    },
    success: {
      main: "#57BC3C",
      light: "#c8e6c9",
      dark: "#2e7d32"
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
      fontSize: 24,
    },
    h4: {
      fontWeight: 600,
      fontSize: 20,
    },
    h5: {
      fontWeight: 600,
      fontSize: 16,
    },
    h6: {
      fontWeight: 600,
      fontSize: 14,
    },
    subtitle1: {
      fontWeight: 400,
    },
    subtitle2: {
      fontWeight: 400,
    },
    caption: {
      fontWeight: 400,
    },
    body1: {
      fontWeight: 500,
    },
    body2: {
      fontWeight: 500,
      fontSize: 14,
    },
  },
});

export default theme;