import React, { useContext, useMemo } from "react";
import { ThemeContext } from "styled-components";
import HeadContent from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";

import { useParams } from "react-router-dom";

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

  const { type } = useParams();

  const getParams = useMemo(() => {
    return type === "entry"
      ? {
          title: "Entradas",
          lineColor: "#F7931B",
        }
      : {
          title: "Saídas",
          lineColor: "#E44C4E",
        };
  }, [type]);

  return (
    <Container>
      <HeadContent title={getParams.title} lineColor={getParams.lineColor}>
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
