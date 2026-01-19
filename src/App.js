import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "./logo.svg";

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
  return <ThemeProvider theme={theme}></ThemeProvider>;
}

export default App;
