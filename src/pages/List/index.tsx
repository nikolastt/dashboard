import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import HeadContent from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";

import { Container, Content, Filters } from "./styles";

const options = [
  { value: "maca", label: "maca" },
  { value: "banana", label: "banana" },
];
const nomes = [
  { value: "lucas", label: "lucas" },
  { value: "manuel", label: "manuel" },
];

const List: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <HeadContent title="Saídas" lineColor={theme.colors.warning}>
        <SelectInput options={options} />
        <SelectInput options={nomes} />
      </HeadContent>

      <Filters>
        <button className="tag-filter-eventual" type="button">
          Eventuais
        </button>
        <button className="tag-filter-recurrent" type="button">
          Recorrentes
        </button>
      </Filters>

      <Content>
        <HistoryFinanceCard
          title="Conta de Luz"
          date="02/03/2022"
          amount="R$ 130,00"
          tagColor="#e44c4e"
        />
        <HistoryFinanceCard
          title="Conta de Luz"
          date="02/03/2022"
          amount="R$ 130,00"
          tagColor="#e44c4e"
        />
        <HistoryFinanceCard
          title="Conta de Luz"
          date="02/03/2022"
          amount="R$ 130,00"
          tagColor="#e44c4e"
        />
        <HistoryFinanceCard
          title="Conta de Luz"
          date="02/03/2022"
          amount="R$ 130,00"
          tagColor="#e44c4e"
        />
        <HistoryFinanceCard
          title="Conta de Luz"
          date="02/03/2022"
          amount="R$ 130,00"
          tagColor="#e44c4e"
        />
        <HistoryFinanceCard
          title="Conta de Luz"
          date="02/03/2022"
          amount="R$ 130,00"
          tagColor="#e44c4e"
        />
        <HistoryFinanceCard
          title="Conta de Luz"
          date="02/03/2022"
          amount="R$ 130,00"
          tagColor="#e44c4e"
        />
        <HistoryFinanceCard
          title="Conta de Luz"
          date="02/03/2022"
          amount="R$ 130,00"
          tagColor="#e44c4e"
        />
        <HistoryFinanceCard
          title="Conta de Luz"
          date="02/03/2022"
          amount="R$ 130,00"
          tagColor="#e44c4e"
        />
      </Content>
    </Container>
  );
};

export default List;
