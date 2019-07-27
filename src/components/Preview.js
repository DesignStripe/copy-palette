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
  padding: 6em 2rem;
  min-width: 80vw;
  height: 40px;
`;

const Preview = ({ palette, variations, svgPalette }) => {
  return (
    <Container>
      {/* <div dangerouslySetInnerHTML={{ __html: svgPalette }} /> */}
      {palette.map((color, index) => {
        const isBaseColor = index === variations;
        return <Rectangle color={color} isBaseColor={isBaseColor} />;
      })}
    </Container>
  );
};

export default Preview;
