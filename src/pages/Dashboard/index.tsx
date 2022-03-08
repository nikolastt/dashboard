import React, { useContext, useMemo, useState } from "react";
import HeadContent from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { ThemeContext } from "styled-components";
import ListOfMonths from "../../utils/months";
import gains from "../../Repositories/gains";
import expenses from "../../Repositories/expenses";

import { Container, Content } from "./styles";
import WalletBox from "../../components/WalletBox";
import MessageBox from "../../components/MessageBox";

import happy from "../../assets/happy.svg";
import sad from "../../assets/sad.svg";
import ufaa from "../../assets/Ufaa.svg";

const Dashboard: React.FC = () => {
  const theme = useContext(ThemeContext);

  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1)
  );
  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear())
  );

  const totalGains = useMemo(() => {
    let total: number = 0;
    gains.forEach((gain) => {
      const date = new Date(gain.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      if (String(month) === monthSelected && String(year) === yearSelected) {
        try {
          total += Number(gain.amount);
        } catch (error) {
          console.log(error);
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const totalExpenses = useMemo(() => {
    let total: number = 0;
    expenses.forEach((expense) => {
      const date = new Date(expense.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      if (String(month) === monthSelected && String(year) === yearSelected) {
        try {
          total += Number(expense.amount);
        } catch (error) {
          console.log(error);
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalGains, totalExpenses]);

  const dynamicMessageBox = useMemo(() => {
    if (totalBalance > 0) {
      return {
        title: "Muito bem!",
        icon: happy,
        description: "Sua carteira está positiva.",
        footer: "Continue assim. Considere investir o seu saldo!",
      };
    } else if (totalBalance < 0) {
      return {
        title: "Que triste!",
        icon: sad,
        description: "Neste mes, você gastou mais do que deveria.",
        footer: "Verifique seus gastos e tente poupar!",
      };
    } else {
      return {
        title: "Ufaa!",
        icon: ufaa,
        description: "Neste mes, você gastou exatamente o que ganhou!",
        footer: "Tenha cuidado para não ficar negativado.",
      };
    }
  }, [totalBalance]);

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
          amount={totalBalance}
          subtitle="Atualizado com base nas entradas e saídas"
          color="#4E41F0"
          icon="dolar"
        />

        <WalletBox
          title="Entradas"
          amount={totalGains}
          subtitle="Atualizado com base nas entradas e saídas"
          color="#F7931B"
          icon="arrowUp"
        />

        <WalletBox
          title="Saídas"
          amount={totalExpenses}
          subtitle="Atualizado com base nas entradas e saídas"
          color="#E44C4e"
          icon="arrowDown"
        />
      </Content>

      <MessageBox
        title={dynamicMessageBox.title}
        icon={dynamicMessageBox.icon}
        description={dynamicMessageBox.description}
        footer={dynamicMessageBox.footer}
      />
    </Container>
  );
};

export default Dashboard;
