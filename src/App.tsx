import React, { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import AppRoutes from "./routes";

const App: React.FC = () => {
  const [theme, setTheme] = useState(dark);
  const handleTheme = () => {
    theme === dark ? setTheme(light) : setTheme(dark);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes handleTheme={handleTheme} />
    </ThemeProvider>
  );
};

export default App;
