import React, { useState, useContext } from "react";
import Switch from "react-switch";
import { Container, ToggleLabel } from "./styles";
import { ThemeContext } from "styled-components";

import { useDispatch } from "react-redux";
import { changeTheme } from "../../redux/themeSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Toggle: React.FC = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  const { colors } = useContext(ThemeContext);
  const [checked, setChecked] = useState(dark);

  const dispatch = useDispatch();

  const handleToggle = () => {
    setChecked(!checked);
    dispatch(changeTheme());
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
