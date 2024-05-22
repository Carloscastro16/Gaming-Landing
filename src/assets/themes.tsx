import { createTheme } from "@mui/material";

export const gamingTheme = createTheme({
    palette: {
      primary: {
          light: '#1B2868',
          main: '#9C0461',
          dark: '#0B122F',
        contrastText: '#fff'
      },
      secondary: {
        light: '#7D96FC',
        main: '#9C0461',
        contrastText: '#AAAAAA'
      },
      info: {
        main: '#FA2C3B'
      }
    },
  });