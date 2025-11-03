import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // bleu classique MUI, change-le comme tu veux
    },
    secondary: {
      main: "#9c27b0", // violet
    },
    background:
      default: "#f5f5f5", // couleur de fond clair
      paper: "#ffffff", // fond des cartes
    },
    text: {
      primary: "#212121",
      secondary: "#555555",
    },
  },
});

export default theme;