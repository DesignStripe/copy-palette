import React, { useState } from "react";
import ReactDOM from "react-dom";

import reshader from "reshader";
import NumericInput from "react-numeric-input";
import { SketchPicker } from "react-color";

import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Badge from "./components/Badge";
import NumberInput from "./components/NumberInput";
import "./styles.css";

const width = 20;
const offset = 20;

function rectangle(color, isBaseColor) {
  const size = isBaseColor ? 40 : width;
  return (
    <svg x="0" y={offset} width={size} height={size} style={{ margin: "1rem" }}>
      <rect width={size} height={size} style={{ fill: color }} />
    </svg>
  );
}

function getSvg(colors) {
  return `
  <svg
    height="${width}"
    width="${colors.length * (width + offset)}"
  >
${colors
  .map(
    (color, index) =>
      `<rect width="${width}" height="${width}" y="0" x="${index *
        (offset + width)}" style="fill: ${color}" />`
  )
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
  const [contrast, setContrast] = useState(0.2);

  const palette = createPalette(color, variations, contrast);
  const svgPalette = getSvg(palette);

  return (
    <div className="layout">
      <h1>Palette2Figma</h1>
      <p>
        Create your palette and use it in figma by just using{" "}
        <Badge>CTRL-C</Badge> and <Badge>CTRL-V</Badge>
      </p>

      <SketchPicker color={color} onChange={color => setColor(color.hex)} />
      <NumericInput
        min={2}
        max={9}
        value={variations}
        onChange={num => setVariations(num)}
      />
      <NumberInput
        min={2}
        max={9}
        value={variations}
        defaultValue={variations}
        onChange={num => setVariations(num)}
      />
      <Slider
        value={contrast}
        onChange={(e, newValue) => {
          setContrast(newValue);
        }}
        aria-labelledby="continuous-slider"
        step={0.05}
        min={0.05}
        max={0.7}
      />

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
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
