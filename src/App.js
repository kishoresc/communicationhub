import { useState, createContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./component/Header";
import Home from "./pages/Home";
import Events from "./pages/Events";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const ThemeContext = createContext();

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#ff9a8b" : "#5390d9",
      },
    },
  });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
