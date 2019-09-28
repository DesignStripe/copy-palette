import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import {
  FiSettings,
  FiThermometer,
  FiGift,
  FiInfo,
  FiEdit,
  FiHeart
} from "react-icons/fi";
import Popper from "@material-ui/core/Popper";

import ThemeSwitch from "./ThemeSwitch";
import { Tooltip } from "@material-ui/core";

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

const tweet = () => {
  const url =
    "https://twitter.com/intent/tweet?text=Copy%20Palette%20%7C%20Seamless%20color%20palette%20generation%20🎨%0A%0Ahttps://copypalette.netlify.com";
  const win = window.open(url, "_blank");
  win.focus();
};

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
              (window.location.href = "https://www.buymeacoffee.com/dmraptis")
            }
          >
            <FiGift />
            <p>Support</p>
          </Item>
        </Dropdown>
      </Popper>

      <Tooltip title="Share love 🙌" placement="bottom">
        <div>
          <FiHeart size={20} onClick={tweet} fill={color} color={color} />
        </div>
      </Tooltip>
    </Wrapper>
  );
};

export default withRouter(Settings);
