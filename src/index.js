import React, { useState } from "react";
import ReactDOM from "react-dom";

import reshader from "reshader";

import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";

import Badge from "./components/Badge";
import Picker from "./components/Picker";
import NumberInput from "./components/NumberInput";
import "./styles.css";
import OptionsGroup from "./components/OptionsGroup";
import Option from "./components/Option";
import PaletteIcon from "./components/Icons/PaletteIcon";
import ContrastIcon from "./components/Icons/ContrastIcon";
import VariationsIcon from "./components/Icons/VariationsIcon";

const SIZE = 40;
const GUTTER = 16;
const BASE_SIZE = 64;

const Header = styled.div`
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
  justify-content: center;
  align-items: center;

  & > * {
    margin-bottom: 32px;
  }
  & > *:last-child {
    margin-bottom: 0;
  }

  background-color: #064acb;
`;

function rectangle(color, isBaseColor) {
  const size = isBaseColor ? 64 : SIZE;
  return (
    <svg x="0" y={GUTTER} width={size} height={size} style={{ margin: "1rem" }}>
      <rect rx="8" width={size} height={size} fill={color} />
    </svg>
  );
}

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

      <OptionsGroup>
        <Option icon={<PaletteIcon />} label={"Base Color:"}>
          <Picker onChange={setColor} value={color} />
        </Option>

        <Option icon={<ContrastIcon />} label={"Contrast:"}>
          <div style={{ minWidth: "64px" }}>
            <Slider
              value={contrast}
              onChange={(e, newValue) => {
                setContrast(newValue);
              }}
              aria-labelledby="contrast-slider"
              step={0.01}
              min={0.1}
              max={0.2}
              style={{ color: "white" }}
            />
          </div>
        </Option>

        <Option icon={<VariationsIcon />} label={"Variations:"}>
          <NumberInput
            min={1}
            max={5}
            step={1}
            value={variations}
            onChange={setVariations}
          />
        </Option>
      </OptionsGroup>

      <div className="preview row">
        {palette.map((color, index) => {
          const isBaseColor = index === variations;
          return rectangle(color, isBaseColor);
        })}
      </div>

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
