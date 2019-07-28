import React from "react";
import styled from "styled-components";
import Rectangle from "./Rectangle";
import { svg } from "../constants";
import { FiSettings } from "react-icons/fi";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: dashed 2px ${props => props.theme.colors.primary[500]};
  border-radius: ${props => props.theme.radius};
  padding: 5rem 2rem;
  box-sizing: border-box;
  width: 100%;
  height: 64px;
`;

const Column = styled.div`
  height: ${props => svg[props.type]}pxx;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Text = styled.p`
  justify-self: flex-end;
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.theme.colors.neutrals[500]};
`;

const Preview = ({ palette, variations, svgPalette, type }) => {
  return (
    <Container>
      {palette.map((color, index) => {
        const isBaseColor = index === variations;
        return (
          <Column type={type}>
            <Rectangle type={type} color={color} isBaseColor={isBaseColor} />
            <Text>{color}</Text>
          </Column>
        );
      })}
    </Container>
  );
};

export default Preview;
