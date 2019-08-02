import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import Settings from "./Settings";

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 2rem;
  box-sizing: border-box;

  position: fixed;
  top: 0;

  background-color: ${props => props.theme.colors.neutrals[100]};
  color: ${props => props.theme.colors.neutrals[500]};
`;

const Header = ({ handleTheme, handleType, color }) => {
  return (
    <Container>
      <Logo />

      <Settings
        color={color}
        handleTheme={handleTheme}
        handleType={handleType}
      />
    </Container>
  );
};

export default Header;
