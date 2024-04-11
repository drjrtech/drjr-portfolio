import { PaletteMode } from "@mui/material";
import { grey, deepOrange } from "@mui/material/colors";

const lightGreen = {
  50: '#cce3bd',
  100: '#cce3bd',
  200: '#cce3bd',
  300: '#cce3bd',
  400: '#cce3bd',
  500: '#cce3bd',
  600: '#4e9526',
  700: '#3b821d',
  800: '#286f14',
  900: '#004e04',
}

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode, 38, 43
          primary: lightGreen,
          text: {
            primary:  "#212941"
          },
          background: {
            default: "#F5F7FF",
            paper: "#E4D6D2",
          },
        }
      : {
          // palette values for dark mode. 9 or 37
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: "#CCE3BD",
            secondary: grey[500],
          },
        }),
  },
});
