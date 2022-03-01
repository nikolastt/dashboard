import React from "react";
import HeadContent from "../../components/ContentHeader";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <HeadContent />
      <h1>Dashboard</h1>
    </Container>
  );
};

export default Dashboard;
