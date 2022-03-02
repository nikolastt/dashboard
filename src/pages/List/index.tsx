import React, { useEffect, useMemo, useState } from "react";
import HeadContent from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";

import { useParams } from "react-router-dom";

import { Container, Content, Filters } from "./styles";

import gains from "../../Repositories/gains";
import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";
import expenses from "../../Repositories/expenses";

const month = [
  { value: 6, label: "junho" },
  { value: 7, label: "julho" },
];
const year = [
  { value: "2020", label: "2020" },
  { value: "2022", label: "2022" },
];

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
  }, [yearSelected, getParams.typeFile]);

  return (
    <Container>
      <HeadContent title={getParams.title} lineColor={getParams.lineColor}>
        <SelectInput
          options={month}
          defaultValue={monthSelected}
          handleSelected={handleMonth}
        />
        <SelectInput
          handleSelected={handleYear}
          options={year}
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
