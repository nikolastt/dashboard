import React from "react";
import Aside from "../Aside";
import Content from "../Content";
import MainHeader from "../MainHeader";
import { Container } from "./styles";

interface Props {
  handleTheme(): void;
}

const Layout: React.FC<Props> = ({ handleTheme, children }) => {
  return (
    <Container>
      <MainHeader handleTheme={handleTheme} />
      <Aside />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
