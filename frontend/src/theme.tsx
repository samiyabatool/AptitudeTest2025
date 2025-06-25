import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#0f2044", contrastText: "#fff" },
    secondary: { main: "#f1f3f5", contrastText: "#0f2044" },
    background: { default: "#eef2f7" },
    error: { main: "#d32f2f" }
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    button: { textTransform: "none" }
  },
  shape: { borderRadius: 8 }
});

export default theme;
