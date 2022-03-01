import React, { useState } from "react";
import Layout from "./components/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

// import { Container } from './styles';

const App: React.FC = () => {
  const [theme, setTheme] = useState(dark);
  const handleTheme = () => {
    theme === dark ? setTheme(light) : setTheme(dark);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout handleTheme={handleTheme} />
    </ThemeProvider>
  );
};

export default App;
