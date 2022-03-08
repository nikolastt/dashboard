import { title } from "process";
import React from "react";

import { Container } from "./styles";

interface IMessageBox {
  title: string;
  description: string;
  icon: string;
  footer: string;
}

const MessageBox: React.FC<IMessageBox> = ({
  title,
  description,
  icon,
  footer,
}) => {
  return (
    <Container>
      <header>
        <h1>
          {title} <img src={icon} alt={title} />
        </h1>
        <h2>{description}</h2>
      </header>
      <footer>
        <p>{footer}</p>
      </footer>
    </Container>
  );
};

export default MessageBox;
