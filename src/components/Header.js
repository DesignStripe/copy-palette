import React from "react";
import styled from "styled-components";
import Badge from "./Badge";

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

  color: #fff;
`;
const Header = ({}) => {
  return (
    <Container>
      <h1>Palette2Figma</h1>
      <p>
        Create your palette and use it in figma by just using{" "}
        <Badge>CTRL-C</Badge> and <Badge>CTRL-V</Badge>
      </p>
    </Container>
  );
};

export default Header;
