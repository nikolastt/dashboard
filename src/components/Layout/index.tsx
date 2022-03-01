import React from "react";
import Dashboard from "../../pages/Dashboard";
import Aside from "../Aside";
import Content from "../Content";
import MainHeader from "../MainHeader";

import { Container } from "./styles";

interface Props {
  handleTheme(): void;
}

const Layout: React.FC<Props> = ({ handleTheme }) => {
  return (
    <Container>
      <MainHeader handleTheme={handleTheme} />
      <Aside />
      <Content>
        <Dashboard />
      </Content>
    </Container>
  );
};

export default Layout;
