import React from "react";

import { Container } from "./styles";

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string;
  }[];
  defaultValue?: string;
  handleSelected(month: string): void;
}

const SelectInput: React.FC<ISelectInputProps> = ({
  options,
  defaultValue,
  handleSelected,
}) => {
  return (
    <Container>
      <select
        onChange={(e) => handleSelected(e.target.value)}
        defaultValue={Number(defaultValue)}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default SelectInput;
