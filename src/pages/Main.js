import React from "react";
import styled from "styled-components";

import OptionsGroup from "../components/OptionsGroup";
import Preview from "../components/Preview";
import Link from "../components/Link";
import Badge from "../components/Badge";

import createPalette from "../utils/createPalette";
import getSvg from "../utils/getSvg";

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
  const svgPalette = getSvg(palette);

  return (
    <React.Fragment>
      <h1>
        <Link to="/">CopyPalette</Link>
      </h1>
      <P>
        Create your palette and use it in Figma/Sketch by just using{" "}
        <Badge>COPY</Badge> and <Badge>PASTE</Badge>
      </P>

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
    </React.Fragment>
  );
}

export default Main;
