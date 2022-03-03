import React, { useEffect, useMemo, useState } from "react";
import HeadContent from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";

import ListOfMonths from "../../utils/months";

import { useParams } from "react-router-dom";

import { Container, Content, Filters } from "./styles";

import gains from "../../Repositories/gains";
import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";
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

  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1)
  );
  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear())
  );

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

    console.log(uniqueYear);

    return uniqueYear.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, [getParams.typeFile]);

  const months = useMemo(() => {
    let uniqueMonth: string[] = [];

    getParams.typeFile.forEach((item) => {
      const date = new Date(item.date);
      const year = String(date.getFullYear());
      const month = String(date.getMonth() + 1);

      if (!uniqueMonth.includes(month) && yearSelected === year) {
        uniqueMonth.push(month);
      }
    });

    return uniqueMonth.map((month) => {
      const listOfMonths: string[] = ListOfMonths;

      return {
        value: Number(month) - 1,
        label: listOfMonths[Number(month) - 1],
      };
    });
  }, [getParams.typeFile, yearSelected]);

  function handleMonth(month: string) {
    setMonthSelected(month);
  }

  function handleYear(month: string) {
    setYearSelected(month);
  }

  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    const filteredData = getParams.typeFile.filter((item) => {
      const date = new Date(item.date);
      const month = String(date.getMonth());
      const year = String(date.getFullYear());

      return year === yearSelected && month === monthSelected;
    });

    setData(filteredData);
  }, [yearSelected, getParams.typeFile, monthSelected]);

  const month = [{ value: 1, label: "janeiro" }];

  return (
    <Container>
      <HeadContent title={getParams.title} lineColor={getParams.lineColor}>
        <SelectInput
          options={months}
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
        <button className="tag-filter-eventual" type="button">
          Eventuais
        </button>
        <button className="tag-filter-recurrent" type="button">
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
