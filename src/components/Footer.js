import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.colors.neutrals[100]};

  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
`;

const Sup = styled.sup`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.neutrals[500]};
`;

const Anchor = styled.a`
  color: ${props => props.color};
  font-weight: bold;
  &:focus {
    outline-color: ${props => props.color};
  }
`;

const Footer = ({ color }) => {
  return (
    <Container>
      <Sup>
        Designed and Built by{" "}
        <Anchor href="https://twitter.com/d__raptis" color={color}>
          @draptis
        </Anchor>
      </Sup>
    </Container>
  );
};

export default Footer;
