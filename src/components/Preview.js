import React from "react";
import styled from "styled-components";
import Rectangle from "./Rectangle";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: dashed 4px ${props => props.theme.colors.primary[500]};
  border-radius: 16px;
  padding: 4rem 2rem;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 10px;
  color: ${props => props.theme.colors.neutrals[500]};
`;

const Preview = ({ palette, variations, svgPalette }) => {
  return (
    <Container>
      {/* <div dangerouslySetInnerHTML={{ __html: svgPalette }} /> */}
      {palette.map((color, index) => {
        const isBaseColor = index === variations;
        return (
          <Column>
            <Rectangle color={color} isBaseColor={isBaseColor} />
            <Text>{color}</Text>
          </Column>
        );
      })}
    </Container>
  );
};

export default Preview;
