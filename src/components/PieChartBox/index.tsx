import React from "react";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

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
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx = 1,
    cy = 1,
    midAngle = 1,
    innerRadius = 1,
    outerRadius = 1,
    percent = 1,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 1).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Container>
      <SideLeft>
        <Title>Relação</Title>
        <LegendContainer>
          {data.map((item) => {
            return (
              <Legend>
                <BoxLegend color={item.color}>{item.percent}</BoxLegend>
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
