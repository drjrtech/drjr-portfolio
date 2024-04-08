import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  // how to add colors
  palette: {
    primary: {
      main: '#d81717',
      light: '#d05959',
    },
    secondary: {
      main: '#f50057',
    },
  },
  // example of how to update typography
  typography: {
    h3: {
      fontWeight: 700,
    },
  },
});