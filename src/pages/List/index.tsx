import React, { useMemo, useState } from "react";
import HeadContent from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";

import { useParams } from "react-router-dom";

import { Container, Content, Filters } from "./styles";

import expenses from "../../Repositories/expenses";
import gains from "../../Repositories/gains";

const month = [
  { value: 1, label: "janeiro" },
  { value: 2, label: "fevereiro" },
];
const year = [
  { value: "2021", label: "2021" },
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

  const [data, setData] = useState<IData[]>(getParams.typeFile);

  return (
    <Container>
      <HeadContent title={getParams.title} lineColor={getParams.lineColor}>
        <SelectInput options={month} />
        <SelectInput options={year} />
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
              date={item.date}
              amount={item.amount}
              tagColor={item.frequency === "recorrente" ? "#4E41F0" : "#E44C4E"}
            />
          );
        })}
      </Content>
    </Container>
  );
};

export default List;
