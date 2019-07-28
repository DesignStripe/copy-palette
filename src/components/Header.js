import React from "react";
import styled from "styled-components";

import Badge from "./Badge";
import Settings from "./Settings";
import ThemeSwitch from "./ThemeSwitch";

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > * {
    margin-bottom: 16px;
  }
  & > *:last-child {
    margin-bottom: 0;
  }

  color: ${props => props.theme.colors.neutrals[500]};
`;

const Header = ({ handleTheme, handleType }) => {
  return (
    <Container>
      <h1>CopyPalette</h1>
      <p>
        Create your palette and use it in Figma/Sketch by just using{" "}
        <Badge>COPY</Badge> and <Badge>PASTE</Badge>
      </p>

      <Settings handleTheme={handleTheme} handleType={handleType} />
    </Container>
  );
};

export default Header;
