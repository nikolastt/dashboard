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
import grinning from "../../assets/grinning.svg";
import PieChart from "../../components/PieChartBox";
import PieChartBox from "../../components/PieChartBox";
import HistoryBox from "../../components/HistoryBox";
import BarChartBox from "../../components/BarChartBox";

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
        icon: grinning,
        description: "Neste mes, você gastou exatamente o que ganhou!",
        footer: "Tenha cuidado para não ficar negativado.",
      };
    }
  }, [totalBalance]);

  const relationsGainsVersusExpenses = useMemo(() => {
    const total = totalGains + totalExpenses;
    const percentGains = (totalGains / total) * 100;
    const percentExpenses = (totalExpenses / total) * 100;

    const data = [
      {
        name: "Entradas",
        percent: percentGains.toFixed(0),
        value: totalGains,
        color: "#E44C4E",
      },
      {
        name: "Saídas",
        percent: percentExpenses.toFixed(0),
        value: totalExpenses,
        color: "#F7931B",
      },
    ];

    return data;
  }, [totalExpenses, totalGains]);

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

  const historyData = useMemo(() => {
    return ListOfMonths.map((month) => {
      let amountGains: string = "0";
      gains.forEach((gain) => {
        const monthGain = new Date(gain.date).getMonth();
        const yearGain = new Date(gain.date).getFullYear();

        if (monthGain === month.value && String(yearGain) === yearSelected) {
          amountGains += gain.amount;
        }
      });

      let amountExpenses: number = 0;
      expenses.forEach((expense) => {
        const monthExpense = new Date(expense.date).getMonth();
        const yearExpense = new Date(expense.date).getFullYear();

        if (
          monthExpense === month.value &&
          String(yearExpense) === yearSelected
        ) {
          amountExpenses += Number(expense.amount);
        }
      });

      return {
        name: month.label.substring(0, 3),
        month: month.value,
        amountGains: Number(amountGains),
        amountExpenses: amountExpenses,
      };
    }).filter((item) => {
      const month = new Date().getMonth() + 1;
      const year = new Date().getFullYear();

      return (
        (yearSelected === String(year) && item.month <= month) ||
        yearSelected < String(year)
      );
    });
  }, [yearSelected]);

  const relationExpensesRecurrentVersusEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    expenses.map((expense) => {
      const month = String(new Date(expense.date).getMonth() + 1);
      const year = String(new Date(expense.date).getFullYear());

      if (month === monthSelected && year === yearSelected) {
        if (expense.frequency === "recorrente") {
          amountRecurrent += Number(expense.amount);
        } else {
          amountEventual += Number(expense.amount);
        }
      }
    });

    return [
      {
        name: "Recorrentes",
        amount: amountRecurrent,
        color: "#F7931B",
      },
      {
        name: "Eventuais",
        amount: amountEventual,
        color: "#E44c4E",
      },
    ];
  }, [monthSelected, yearSelected]);

  const relationGainsRecurrentVersusEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    gains.map((gain) => {
      const month = String(new Date(gain.date).getMonth() + 1);
      const year = String(new Date(gain.date).getFullYear());

      if (month === monthSelected && year === yearSelected) {
        if (gain.frequency === "recorrente") {
          amountRecurrent += Number(gain.amount);
        } else {
          amountEventual += Number(gain.amount);
        }
      }
    });

    return [
      {
        name: "Recorrentes",
        amount: amountRecurrent,
        color: "#F7931B",
      },
      {
        name: "Eventuais",
        amount: amountEventual,
        color: "#E44c4E",
      },
    ];
  }, [monthSelected, yearSelected]);

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

        <MessageBox
          title={dynamicMessageBox.title}
          icon={dynamicMessageBox.icon}
          description={dynamicMessageBox.description}
          footer={dynamicMessageBox.footer}
        />

        <PieChartBox data={relationsGainsVersusExpenses} />

        <HistoryBox data={historyData} />

        <BarChartBox
          title="Entradas"
          data={relationGainsRecurrentVersusEventual}
        />

        <BarChartBox
          title="Saídas"
          data={relationExpensesRecurrentVersusEventual}
        />
      </Content>
    </Container>
  );
};

export default Dashboard;
