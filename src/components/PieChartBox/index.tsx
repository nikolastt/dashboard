import React from "react";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import {
  Container,
  SideLeft,
  Title,
  LegendContainer,
  Legend,
  TitleLegend,
  BoxLegend,
  SideRight,
} from "./styles";

interface IPieChartBoxProps {
  data: {
    name: string;
    percent: string;
    value: number;
    color: string;
  }[];
}

const PieChartBox: React.FC<IPieChartBoxProps> = ({ data }) => {
  return (
    <Container>
      <SideLeft>
        <Title>Relação</Title>
        <LegendContainer>
          {data.map((item) => {
            return (
              <Legend key={item.name}>
                <BoxLegend color={item.color}>{item.percent}%</BoxLegend>
                <TitleLegend>{item.name}</TitleLegend>
              </Legend>
            );
          })}
        </LegendContainer>
      </SideLeft>

      <SideRight>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie data={data} outerRadius={85} fill="#8884d8" dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  );
};

export default PieChartBox;
