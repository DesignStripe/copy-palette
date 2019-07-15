import React, { useState } from "react";
import ReactDOM from "react-dom";
import reshader from "reshader";
import styled from "styled-components";

import Button from "@material-ui/core/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Badge from "./components/Badge";
import OptionsGroup from "./components/OptionsGroup";
import Preview from "./components/Preview";
import "./styles.css";

import { SIZE, GUTTER, BASE_SIZE } from "./constants";

const Header = styled.header`
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

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;

  & > *:first-child {
    margin-bottom: 6rem;
    margin-top: 1rem;
  }
  & > * {
    margin-bottom: 2rem;
  }
  & > *:last-child {
    margin-bottom: 0;
  }

  background-color: #064acb;
`;

function getSvg(colors) {
  const length = colors.length;

  return `
  <svg
    width="${(length - 1) * (SIZE + GUTTER) + 64}"
    height="${BASE_SIZE}"
  >
${colors
  .map((color, index) => {
    const medium = (length - 1) / 2;
    const isBase = index === medium;

    const size = isBase ? BASE_SIZE : SIZE;

    const baseOffset = index > medium ? BASE_SIZE - SIZE : 0;
    const x = index * (GUTTER + SIZE) + baseOffset;
    const y = isBase ? 0 : (BASE_SIZE - SIZE) / 2;

    return `<rect rx="8" width="${size}" height="${size}" x="${x}" y="${y}" fill="${color}" />`;
  })
  .join(" \n")}
</svg>
  `;
}

function createPalette(color, variations, contrast) {
  const { palette } = reshader(color, {
    numberOfVariations: variations,
    contrastRatio: contrast
  });
  return palette;
}

function App() {
  const [color, setColor] = useState("#ff0000");
  const [variations, setVariations] = useState(4);
  const [contrast, setContrast] = useState(0.15);

  const palette = createPalette(color, variations, contrast);
  const svgPalette = getSvg(palette);

  return (
    <Container>
      <Header>
        <h1>Palette2Figma</h1>
        <p>
          Create your palette and use it in figma by just using{" "}
          <Badge>CTRL-C</Badge> and <Badge>CTRL-V</Badge>
        </p>
      </Header>

      <OptionsGroup
        setColor={setColor}
        color={color}
        contrast={contrast}
        setContrast={setContrast}
        variations={variations}
        setVariation={setVariations}
      />

      <Preview palette={palette} variations={variations} />

      <CopyToClipboard
        text={svgPalette}
        // onCopy={() => this.setState({ copied: true })}
      >
        <Button
          variant="contained"
          color="primary"
          // style={{ backgroundColor: "#212121" }}
          className="cta"
        >
          Copy to Clipboard
        </Button>
      </CopyToClipboard>
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
