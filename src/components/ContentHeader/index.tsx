import React from "react";

import { Container, TitleContainer, Controllers, Title } from "./styles";

const HeadContent: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Titulo</Title>
      </TitleContainer>

      <Controllers>
        <button>Mes</button>
        <button>Ano</button>
      </Controllers>
    </Container>
  );
};

export default HeadContent;
