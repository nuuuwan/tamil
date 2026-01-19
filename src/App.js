import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomePage from "./view/pages/HomePage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EB7400",
    },
    secondary: {
      main: "#cccccc",
    },
  },
  typography: {
    fontFamily:
      '"Noto Sans Tamil", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
