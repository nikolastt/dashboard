import React, { useContext } from "react";
import HeadContent from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { ThemeContext } from "styled-components";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
  const theme = useContext(ThemeContext);

  const options = [
    { value: "maca", label: "maca" },
    { value: "banana", label: "banana" },
  ];
  const nomes = [
    { value: "lucas", label: "lucas" },
    { value: "manuel", label: "manuel" },
  ];

  return (
    <Container>
      <HeadContent title="Dashboard" lineColor={theme.colors.info}>
        <SelectInput handleSelected={() => {}} options={options} />
        <SelectInput handleSelected={() => {}} options={nomes} />
      </HeadContent>
      <h1>Content Dashboard</h1>
    </Container>
  );
};

export default Dashboard;
