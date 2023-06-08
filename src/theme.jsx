import "@fontsource/kanit";
import { createTheme } from "@mui/material";
import { Chart as ChartJS } from "chart.js";

// Set the default font family
ChartJS.defaults.font.family = "'Kanit'";
ChartJS.defaults.font.size = "13px";

const theme = createTheme({
  palette: {
    background: "#fff",
  },
  typography: {
    letterSpacing: 1,
    fontFamily: "Kanit",
    fontPalette: "#1A202C",
    h5: { fontSize: "25px" },
    h3: {
      fontSize: "55px",
    },
    h4: {
      fontSize: "45px",
    },
    caption: { fontSize: "14px", fontWeight: "lighter" },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#16213E",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          flexShrink: 0,
          backgroundColor: "#16213E",
          color: "white",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: "11.5px",
          padding: 1,
          lineHeight: 2.5,
          textAlign: "center",
        },
      },
    },
  },
});

export default theme;
