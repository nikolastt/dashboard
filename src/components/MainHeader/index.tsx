import React, { useMemo } from "react";

import { Container, Profile, Welcome, UserName } from "./styles";

import ListEmojis from "../../utils/ListEmojis";
import Toggle from "../Toggle";

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * ListEmojis.length);
    return ListEmojis[indice];
  }, []);

  return (
    <Container>
      <Toggle />

      <Profile>
        <Welcome>olá, {emoji}</Welcome>

        <UserName>Nikolas Bitencourt</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
