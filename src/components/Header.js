import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import Settings from "./Settings";

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* padding-top: 4rem; */

  & > * {
    margin-bottom: 16px;
  }
  & > *:last-child {
    margin-bottom: 0;
  }

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
