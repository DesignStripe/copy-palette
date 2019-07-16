import React from "react";
import styled from "styled-components";

import Badge from "./Badge";
import theme from "../utils/theme";

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

  color: ${theme.colors.light};
`;
const Header = ({}) => {
  return (
    <Container>
      <h1>Palette2Figma</h1>
      <p>
        Create your palette and use it in figma by just using{" "}
        <Badge>COPY</Badge> and <Badge>PASTE</Badge>
      </p>
    </Container>
  );
};

export default Header;
