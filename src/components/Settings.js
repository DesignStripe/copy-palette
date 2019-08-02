import React from "react";
import styled from "styled-components";
import { FiSettings } from "react-icons/fi";
import Popper from "@material-ui/core/Popper";

import Link from "../components/Link";
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
  padding: 1rem;
  margin: 1rem;
  border-radius: ${props => props.theme.radius};
  background-color: ${props => props.theme.colors.primary[500]};
  color: ${props => props.theme.colors.primary[100]};

  & > div > a {
    color: ${props => props.theme.colors.primary[100]};
  }
  & > div {
    margin-bottom: 1rem;
    cursor: pointer;
  }
  & > div:last-child {
    margin-bottom: 0;
  }
  & > div:hover,
  & > div > a:hover {
    color: ${props => props.color};
  }
`;

const Settings = ({ handleTheme, handleType, color }) => {
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
        <Dropdown color={color}>
          <div onClick={handleType}>Toggle Palette Preview</div>
          <div>
            <Link to="/about">About</Link>
          </div>
        </Dropdown>
      </Popper>
    </Wrapper>
  );
};

export default Settings;
