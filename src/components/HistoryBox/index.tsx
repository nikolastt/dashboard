import React from "react";

import { Container, Header, Title, ChartContainer } from "./styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import formatCurrency from "../../utils/formatCurrency";

interface IHistoryBoxProps {
  data: {
    name: string;
    amountGains: number;
    amountExpenses: number;
  }[];
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({ data }) => {
  return (
    <Container>
      <Header>
        <Title>Histórico de saldo</Title>
      </Header>

      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              formatter={(value: any) => formatCurrency(Number(value))}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="amountGains"
              name="Entradas"
              stroke="#82ca9d"
              dot={{ r: 4 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="amountExpenses"
              name="Saídas"
              stroke="#fa7f72"
              dot={{ r: 4 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Container>
  );
};

export default HistoryBox;
