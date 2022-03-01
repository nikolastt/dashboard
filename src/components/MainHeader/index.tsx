import React, { useMemo } from "react";

import { Container, Profile, Welcome, UserName } from "./styles";

import ListEmojis from "../../utils/ListEmojis";
import Toggle from "../Toggle";

interface Props {
  handleTheme(): void;
}

const MainHeader: React.FC<Props> = ({ handleTheme }) => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * ListEmojis.length);
    return ListEmojis[indice];
  }, []);

  return (
    <Container>
      <Toggle handleTheme={handleTheme} />

      <Profile>
        <Welcome>olá, {emoji}</Welcome>

        <UserName>Nikolas Bitencourt</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
