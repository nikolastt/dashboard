import React from "react";

import {
  Container,
  Title,
  SubTitle,
  Amount,
  TitleContainer,
  Tag,
} from "./styles";

interface IHistoryFinanceCardProps {
  title: string;
  date: string;
  amount: string;
  cardColor: string;
  tagColor: string;
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
  title,
  date,
  amount,
  cardColor,
  tagColor,
}) => {
  return (
    <Container cardColor={cardColor}>
      <Tag tagColor={tagColor} />
      <TitleContainer>
        <Title>{title}</Title>
        <SubTitle>{date}</SubTitle>
      </TitleContainer>

      <Amount>{amount}</Amount>
    </Container>
  );
};

export default HistoryFinanceCard;
