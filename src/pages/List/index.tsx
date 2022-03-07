import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Content, Filters } from "./styles";
import HeadContent from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";
import ListOfMonths from "../../utils/months";
import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";
import gains from "../../Repositories/gains";
import expenses from "../../Repositories/expenses";

interface IData {
  description: string;
  amount: string;
  type: string;
  frequency: string;
  date: string;
}

const List: React.FC = () => {
  const { type } = useParams();
  const [data, setData] = useState<IData[]>([]);

  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1)
  );
  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear())
  );

  const [frequency, setFrequency] = useState(["recorrente", "eventual"]);

  const getParams = useMemo(() => {
    return type === "entry"
      ? {
          title: "Entradas",
          lineColor: "#F7931B",
          typeFile: gains,
        }
      : {
          title: "Saídas",
          lineColor: "#E44C4E",
          typeFile: expenses,
        };
  }, [type]);

  const years = useMemo(() => {
    let uniqueYear: string[] = [];

    getParams.typeFile.forEach((item) => {
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
  }, [getParams.typeFile]);

  function handleMonth(month: string) {
    setMonthSelected(month);
  }

  function handleYear(month: string) {
    setYearSelected(month);
  }

  function handleBtnEventual() {
    if (frequency.includes("eventual")) {
      setFrequency(["recorrente"]);
    } else {
      setFrequency(["recorrente", "eventual"]);
    }
  }

  function handleBtnRecurrent() {
    if (frequency.includes("recorrente")) {
      setFrequency(["eventual"]);
    } else {
      setFrequency(["recorrente", "eventual"]);
    }
  }

  useEffect(() => {
    const filteredData = getParams.typeFile.filter((item) => {
      const date = new Date(item.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());

      return (
        year === yearSelected &&
        month === monthSelected &&
        frequency.includes(item.frequency)
      );
    });

    setData(filteredData);
  }, [yearSelected, getParams.typeFile, monthSelected, frequency]);

  return (
    <Container>
      <HeadContent title={getParams.title} lineColor={getParams.lineColor}>
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

      <Filters>
        <button
          onClick={handleBtnEventual}
          className={`tag-filter-eventual ${
            frequency.includes("eventual") && "tag-active"
          }`}
          type="button"
        >
          Eventuais
        </button>
        <button
          onClick={handleBtnRecurrent}
          className={`tag-filter-recurrent ${
            frequency.includes("recorrente") && "tag-active"
          }`}
          type="button"
        >
          Recorrentes
        </button>
      </Filters>

      <Content>
        {data.map((item) => {
          return (
            <HistoryFinanceCard
              key={Math.random() * data.length}
              title={item.description}
              date={formatDate(item.date)}
              amount={formatCurrency(Number(item.amount))}
              tagColor={item.frequency === "recorrente" ? "#4E41F0" : "#E44C4E"}
            />
          );
        })}
      </Content>
    </Container>
  );
};

export default List;
