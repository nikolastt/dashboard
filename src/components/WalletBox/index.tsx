import React from "react";

import { Container } from "./styles";

import arrowUp from "../../assets/arrow-up.svg";
import arrowDown from "../../assets/arrow-down.svg";
import dolar from "../../assets/dollar.svg";

import CountUp from "react-countup";

interface IWalletBoxProps {
  title: string;
  amount: number;
  icon: "dolar" | "arrowUp" | "arrowDown";
  subtitle: string;
  color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
  title,
  amount,
  icon,
  subtitle,
  color,
}) => {
  const choiceIcon = () => {
    switch (icon) {
      case "dolar":
        return dolar;
      case "arrowUp":
        return arrowUp;
      case "arrowDown":
        return arrowDown;
    }
  };

  return (
    <Container color={color}>
      <p>{title}</p>
      <h1>
        <CountUp
          start={0}
          end={amount}
          duration={1.25}
          separator="."
          decimals={2}
          decimal=","
          prefix="R$ "
        />
      </h1>
      <img src={choiceIcon()} alt={title} />
      <small>{subtitle}</small>
    </Container>
  );
};

export default WalletBox;
