import React from "react";
import styled from "styled-components";
import { FiSettings } from "react-icons/fi";
import Popper from "@material-ui/core/Popper";

import ThemeSwitch from "./ThemeSwitch";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: fixed;
  padding: 2rem;
  top: 0;
  right: 0;

  & > * {
    margin-left: 2rem;
  }
`;

const Dropdown = styled.div`
  padding: 2rem 1rem;
  margin: 1rem;
  border-radius: ${props => props.theme.radius};
  background-color: ${props => props.theme.colors.primary[500]};
  color: ${props => props.theme.colors.primary[100]};
`;

const Settings = ({ handleTheme, handleType }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  return (
    <Wrapper>
      <ThemeSwitch onChange={handleTheme} />

      <FiSettings onClick={handleClick} size={20} />
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Dropdown onClick={handleType}>Toggle Palette Preview</Dropdown>
      </Popper>
    </Wrapper>
  );
};

export default Settings;
