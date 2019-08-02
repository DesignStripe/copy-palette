import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.colors.neutrals[500]};
`;

const About = () => (
  <Container>
    <h2>About</h2>
    <p>This app is made with love</p>
  </Container>
);

export default About;
