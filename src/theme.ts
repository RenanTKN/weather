import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#f2f2f2",
        },
      },
    },
  },
});

export default theme;
