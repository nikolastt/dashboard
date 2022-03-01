import React from "react";

import { Container, TitleContainer, Controllers, Title } from "./styles";

interface IHeadContentProps {
  title: string;
  lineColor: string;
  children: React.ReactNode;
}

const HeadContent: React.FC<IHeadContentProps> = ({
  title,
  lineColor,
  children,
}) => {
  return (
    <Container>
      <TitleContainer lineColor={lineColor}>
        <Title>{title}</Title>
      </TitleContainer>

      <Controllers>{children}</Controllers>
    </Container>
  );
};

export default HeadContent;
