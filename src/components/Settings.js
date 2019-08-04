import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import {
  FiSettings,
  FiThermometer,
  FiGift,
  FiInfo,
  FiEdit
} from "react-icons/fi";
import Popper from "@material-ui/core/Popper";

import ThemeSwitch from "./ThemeSwitch";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* position: fixed;
  padding: 2rem;
  top: 0;
  right: 0; */

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

  & > div {
    margin-bottom: 1rem;
  }
  & > div:last-child {
    margin-bottom: 0;
  }

  & > a {
    color: ${props => props.theme.colors.primary[100]};
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  cursor: pointer;

  &:hover {
    color: ${props => props.color};
  }
  & > * {
    margin-right: 0.5rem;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

const Settings = ({ history, handleTheme, handleType, color }) => {
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
        <Dropdown>
          <Item color={color} onClick={handleType}>
            <FiEdit />
            <p>Toggle Palette</p>
          </Item>
          <Item color={color} onClick={() => history.push("/about")}>
            <FiInfo />
            <p>About</p>
          </Item>
          <Item
            color={color}
            onClick={() =>
              (window.location.href = "https://www.paypal.me/DimitrisRaptis/5")
            }
          >
            <FiGift />
            <p>Support</p>
          </Item>
        </Dropdown>
      </Popper>
    </Wrapper>
  );
};

export default withRouter(Settings);
