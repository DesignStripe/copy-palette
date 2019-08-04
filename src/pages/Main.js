import React from "react";
import styled from "styled-components";

import OptionsGroup from "../components/OptionsGroup";
import Preview from "../components/Preview";
import Link from "../components/Link";
import Badge from "../components/Badge";

import createPalette from "../utils/createPalette";
import getSvg from "../utils/getSvg";
import Footer from "../components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > * {
    margin-bottom: 2rem;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 4rem;
  & > * {
    margin-bottom: 1rem;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;

const P = styled.p`
  color: ${props => props.theme.colors.neutrals[500]};
`;

function Main({
  color,
  setColor,
  contrast,
  setContrast,
  variations,
  setVariations,
  type,
  toggleType
}) {
  const palette = createPalette(color, variations, contrast);
  const svgPalette = getSvg(palette, type);

  return (
    <Container>
      <InfoContainer>
        <h1>
          <Link to="/">CopyPalette</Link>
        </h1>
        <P>
          Create your palette and use it in Figma/Sketch by just using{" "}
          <Badge>COPY</Badge> and <Badge>PASTE</Badge>
        </P>
      </InfoContainer>

      <Preview
        palette={palette}
        variations={variations}
        svgPalette={svgPalette}
        handleType={toggleType}
        type={type}
      />

      <OptionsGroup
        setColor={setColor}
        color={color}
        contrast={contrast}
        setContrast={setContrast}
        variations={variations}
        setVariations={setVariations}
        svgPalette={svgPalette}
      />

      <Footer color={color} />
    </Container>
  );
}

export default Main;
