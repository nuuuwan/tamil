import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <Router basename="/tamil">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:taWord" element={<HomePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
