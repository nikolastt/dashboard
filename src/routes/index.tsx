import React from "react";
import MyRoutes from "./app.routes";

// import { Container } from './styles';

interface IRoutesProps {
  handleTheme(): void;
}

const AppRoutes: React.FC<IRoutesProps> = ({ handleTheme }) => {
  return <MyRoutes handleTheme={handleTheme} />;
};

export default AppRoutes;
