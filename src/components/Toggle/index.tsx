import React, { useState, useContext } from "react";
import Switch from "react-switch";
import { Container, ToggleLabel } from "./styles";
import { ThemeContext } from "styled-components";

interface Props {
  handleTheme(): void;
}

const Toggle: React.FC<Props> = ({ handleTheme }) => {
  const { colors } = useContext(ThemeContext);
  const [checked, setChecked] = useState(true);

  const handleToggle = () => {
    setChecked(!checked);
    handleTheme();
  };

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <Switch
        onChange={handleToggle}
        uncheckedIcon={false}
        checkedIcon={false}
        checked={checked}
        onColor={colors.primary}
        offColor={colors.primary}
        height={10}
        width={50}
        handleDiameter={15}
        offHandleColor={colors.white}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
};

export default Toggle;
