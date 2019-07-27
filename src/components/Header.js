import React from "react";
import styled from "styled-components";

import Badge from "./Badge";
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

const Header = ({ handleTheme }) => {
  return (
    <Container>
      <h1>Palette2Figma</h1>
      <p>
        Create your palette and use it in figma by just using{" "}
        <Badge>COPY</Badge> and <Badge>PASTE</Badge>
      </p>

      <ThemeSwitch onChange={handleTheme} />
    </Container>
  );
};

export default Header;
