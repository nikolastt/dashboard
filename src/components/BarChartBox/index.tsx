import React from "react";

import { Container, BarContent } from "./styles";

import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import formatCurrency from "../../utils/formatCurrency";

interface IBarChartBoxProps {
  data: {
    name: string;
    amount: number;
    color: string;
  }[];
  title: string;
}

interface ITriangleBarProps {
  fill: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

const BarChartBox: React.FC<IBarChartBoxProps> = ({ data, title }) => {
  // const data = [
  //   {
  //     name: "Page A",
  //     uv: 4000,
  //     female: 2400,
  //     male: 2400,
  //   },
  //   {
  //     name: "Page B",
  //     uv: 3000,
  //     female: 1398,
  //     male: 2210,
  //   },
  //   {
  //     name: "Page C",
  //     uv: 2000,
  //     female: 9800,
  //     male: 2290,
  //   },
  //   {
  //     name: "Page D",
  //     uv: 2780,
  //     female: 3908,
  //     male: 2000,
  //   },
  //   {
  //     name: "Page E",
  //     uv: 1890,
  //     female: 4800,
  //     male: 2181,
  //   },
  //   {
  //     name: "Page F",
  //     uv: 2390,
  //     female: 3800,
  //     male: 2500,
  //   },
  //   {
  //     name: "Page G",
  //     uv: 3490,
  //     female: 4300,
  //     male: 2100,
  //   },
  // ];

  const getPath = (x = 1, y = 1, width = 200, height = 200) => `M${x},${
    y + height
  }
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  }, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
    y + height
  } ${x + width}, ${y + height}
          Z`;

  const TriangleBar = (props: ITriangleBarProps) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <Container>
      <h3>{title}</h3>

      <BarContent>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="amount"
              name="Total"
              fill="#8884d8"
              shape={
                <TriangleBar
                  fill="blue"
                  x={10}
                  y={10}
                  width={100}
                  height={100}
                />
              }
              label={{ position: "top" }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
            <Tooltip
              cursor={{ fill: "none" }}
              formatter={(value: any) => formatCurrency(Number(value))}
            />
          </BarChart>
        </ResponsiveContainer>
      </BarContent>
    </Container>
  );
};

export default BarChartBox;
