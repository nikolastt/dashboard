import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

import AppRoutes from "./routes";

import { RootState } from "./redux/store";
import { useSelector } from "react-redux";

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

const App: React.FC = () => {
  const themeDark = useSelector((state: RootState) => state.theme.dark);

  return (
    <ThemeProvider theme={themeDark ? dark : light}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
