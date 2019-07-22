import React, { useEffect } from "react";
import useDarkMode from "use-dark-mode";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { FiSun, FiMoon } from "react-icons/fi";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: fixed;
  padding: 2rem;
  top: 0;
  right: 0;
`;

const IOSSwitch = withStyles(theme => ({
  root: {
    width: 50,
    height: 28,
    padding: 0,
    margin: "0 0.5rem",
    boxSizing: "border-box"
  },
  switchBase: {
    padding: "4px 7px",
    boxSizing: "content-box",

    "&$checked": {
      color: "#064acb",
      "& + $track": {
        backgroundColor: "#fff",
        opacity: 1
      }
    },
    "&$focusVisible $thumb": {
      color: "#083284"
    }
  },
  thumb: {
    width: 20,
    height: 20
  },
  track: {
    borderRadius: 1000,
    backgroundColor: "#083284",
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"])
  },
  checked: {},
  focusVisible: {}
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
      {...props}
    />
  );
});

const ThemeSwitch = ({ onChange }) => {
  const darkMode = useDarkMode(false);

  useEffect(() => {
    onChange(darkMode.value);
  });

  return (
    <Wrapper>
      <FiSun />
      <IOSSwitch
        checked={darkMode.value}
        onChange={darkMode.toggle}
        value="checkedB"
      />
      <FiMoon />
    </Wrapper>
  );
};

export default ThemeSwitch;
