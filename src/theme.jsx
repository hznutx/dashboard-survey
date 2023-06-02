import "@fontsource/kanit";
import { createTheme } from "@mui/material";
import { rootShouldForwardProp } from "@mui/material/styles/styled";

const theme = createTheme({
  palette: {
    background: "#fff",
  },

  typography: {
    fontWeight: 400,
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
    caption: { fontSize: "14px" },
  },

  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: 10,
          textAlign: "center",
        },
      },
    },
  },
});

export default theme;
