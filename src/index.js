import React, { useState } from "react";
import ReactDOM from "react-dom";

import reshader from "reshader";
import NumericInput from "react-numeric-input";
import { SketchPicker } from "react-color";

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
import { FiCode, FiAirplay } from "react-icons/fi";

const width = 20;
const offset = 20;

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
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState("#ff0000");
  const [variations, setVariations] = useState(4);
  const [contrast, setContrast] = useState(0.2);

  const palette = createPalette(color, variations, contrast);
  const svgPalette = getSvg(palette);

  const Rectangle = rectangle(color, false);

  return (
    <Container>
      <h1>Palette2Figma</h1>
      <p>
        Create your palette and use it in figma by just using{" "}
        <Badge>CTRL-C</Badge> and <Badge>CTRL-V</Badge>
      </p>

      <OptionsGroup>
        <Option icon={<FiCode />} label={"Base Color:"}>
          <Picker onChange={setColor} />
        </Option>

        <Option icon={<FiCode />} label={"Variations:"}>
          <NumberInput
            min={2}
            max={9}
            value={variations}
            defaultValue={variations}
            onChange={num => setVariations(num)}
          />
        </Option>

        <Option icon={<FiCode />} label={"Contrast:"}>
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
        </Option>
      </OptionsGroup>

      {/* <Picker onClick={() => setDisplayColorPicker(!displayColorPicker)} />

      {displayColorPicker && (
        <SketchPicker color={color} onChange={color => setColor(color.hex)} />
      )} */}
      {/* <NumericInput
        min={2}
        max={9}
        value={variations}
        onChange={num => setVariations(num)}
      /> */}

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
