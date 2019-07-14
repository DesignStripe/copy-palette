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

const width = 40;
const gutter = 16;

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
  const size = isBaseColor ? 64 : width;
  return (
    <svg x="0" y={gutter} width={size} height={size} style={{ margin: "1rem" }}>
      <rect rx="8" width={size} height={size} style={{ fill: color }} />
    </svg>
  );
}

function getSvg(colors) {
  const length = colors.length;

  return `
  <svg
    height="${64}"
    width="${(length - 1) * (width + gutter) + 64}"
  >
${colors
  .map((color, index) => {
    const medium = (length - 1) / 2;
    const isBase = index === medium;

    const size = isBase ? 64 : width;

    const baseOffset = index > medium ? 24 : 0;
    const x = index * (gutter + width) + baseOffset;
    const y = isBase ? 0 : 12;

    return `<rect rx="8" width="${size}" height="${size}" x="${x}" y="${y}" style="fill: ${color}" />`;
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
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState("#ff0000");
  const [variations, setVariations] = useState(4);
  const [contrast, setContrast] = useState(0.15);

  const palette = createPalette(color, variations, contrast);
  const svgPalette = getSvg(palette);

  return (
    <Container>
      <h1>Palette2Figma</h1>
      <p>
        Create your palette and use it in figma by just using{" "}
        <Badge>CTRL-C</Badge> and <Badge>CTRL-V</Badge>
      </p>

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
