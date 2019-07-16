import React, { useState } from "react";
import styled from "styled-components";
import theme from "../utils/theme";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  > svg {
    margin-right: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    size: 1.5rem;
    stroke: ${theme.colors.light};
  }

  p {
    margin-right: 1rem;
  }

  font-size: 1rem;
  color: ${theme.colors.light};
`;

const Option = ({ icon, label, children }) => {
  return (
    <Container>
      {icon}
      <p>{label}</p>
      {children}
    </Container>
  );
};

export default Option;
