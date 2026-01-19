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
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
