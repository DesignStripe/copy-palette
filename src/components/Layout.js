import React from "react";
import styled from "styled-components";

import Header from "./Header";

const Container = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.primary[100]};
`;

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100%;
  padding: 1rem 5vw;
  margin-top: 1rem; /* Top Navigation height */
  box-sizing: border-box;

  & > * {
    margin-bottom: 2rem;
  }
  & > *:last-child {
    margin-bottom: 0;
  }

  background-color: ${props => props.theme.colors.primary[100]};
`;

const Layout = ({ children, handleTheme, handleType, color }) => {
  return (
    <Container>
      <Header handleTheme={handleTheme} handleType={handleType} color={color} />
      <MainPageContainer>{children}</MainPageContainer>
    </Container>
  );
};

export default Layout;
