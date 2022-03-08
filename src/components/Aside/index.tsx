import React from "react";

import { MdDashboard } from "react-icons/md";
import { MdArrowUpward } from "react-icons/md";
import { MdArrowDownward } from "react-icons/md";
import { BiExit } from "react-icons/bi";

import {
  Container,
  Title,
  LogoImg,
  HeaderAside,
  MenuLinks,
  LinkItem,
} from "./styles";

import Logo from "../../assets/logo.svg";

const Aside: React.FC = () => {
  return (
    <Container>
      <HeaderAside>
        <LogoImg src={Logo} />
        <Title>Minha Carteira</Title>
      </HeaderAside>

      <MenuLinks>
        <LinkItem href="/Dashboard">
          <MdDashboard />
          <span>Dashboard</span>
        </LinkItem>

        <LinkItem href="/List/entry">
          <MdArrowUpward />
          <span>Entradas</span>
        </LinkItem>
        <LinkItem href="/List/out">
          <MdArrowDownward />
          <span>Saídas</span>
        </LinkItem>
        <LinkItem href="#">
          <BiExit />
          <span>Sair</span>
        </LinkItem>
      </MenuLinks>
    </Container>
  );
};

export default Aside;
