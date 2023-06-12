import "@fontsource/kanit";
import { createTheme } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Set the default font family
ChartJS.defaults.font.family = "'Kanit'";
ChartJS.defaults.font.size = "16px";

const theme = createTheme({
  palette: {
    background: "#fff",
  },
  typography: {
    letterSpacing: 1,
    fontFamily: "Kanit",
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
          padding: 1,
          lineHeight: 2,
          textAlign: "center",
          fontPalette: "unset",
          "@media (min-width: 300px)": {
            fontSize:
              "calc(12px + (13 - 12) * ((100vw - 300px) / (1600 - 300)))",
            fontSizeAdjust: "from-font",
          },
          "@media (min-width: 1600px)": {
            fontSize: "16px",
            fontSizeAdjust: "from-font",
          },
        },
      },
    },
  },
});

export default theme;
