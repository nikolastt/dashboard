import React, { useContext, useMemo, useState } from "react";
import HeadContent from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { ThemeContext } from "styled-components";
import ListOfMonths from "../../utils/months";
import gains from "../../Repositories/gains";
import expenses from "../../Repositories/expenses";

import { Container, Content } from "./styles";
import WalletBox from "../../components/WalletBox";

const Dashboard: React.FC = () => {
  const theme = useContext(ThemeContext);

  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1)
  );
  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear())
  );

  function handleMonth(month: string) {
    setMonthSelected(month);
  }

  function handleYear(month: string) {
    setYearSelected(month);
  }

  const years = useMemo(() => {
    let uniqueYear: string[] = [];

    [...gains, ...expenses].forEach((item) => {
      const date = new Date(item.date);
      const year = String(date.getFullYear());

      if (!uniqueYear.includes(year)) {
        uniqueYear.push(year);
      }
    });

    return uniqueYear.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, []);

  return (
    <Container>
      <HeadContent title="Dashboard" lineColor={theme.colors.info}>
        <SelectInput
          options={ListOfMonths}
          defaultValue={monthSelected}
          handleSelected={handleMonth}
        />
        <SelectInput
          handleSelected={handleYear}
          options={years}
          defaultValue={yearSelected}
        />
      </HeadContent>

      <Content>
        <WalletBox
          title="Saldo"
          amount={150}
          subtitle="Atualizado com base nas entradas e saídas"
          color="#4E41F0"
          icon="dolar"
        />

        <WalletBox
          title="Entradas"
          amount={5000}
          subtitle="Atualizado com base nas entradas e saídas"
          color="#F7931B"
          icon="arrowUp"
        />

        <WalletBox
          title="Saídas"
          amount={4850}
          subtitle="Atualizado com base nas entradas e saídas"
          color="#E44C4e"
          icon="arrowDown"
        />
      </Content>
    </Container>
  );
};

export default Dashboard;
