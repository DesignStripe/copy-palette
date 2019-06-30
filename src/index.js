import React, { useState } from "react";
import ReactDOM from "react-dom";
import { SketchPicker } from "react-color";
import Values from "values.js";
import reshader from "reshader";

import { CopyToClipboard } from "react-copy-to-clipboard";

import "./styles.css";

const width = 20;
const offset = 20;

function rectangle(color) {
  return (
    <svg
      x="0"
      y={offset}
      width={width}
      height={width}
      style={{ margin: "1rem" }}
    >
      <rect width={width} height={width} style={{ fill: color }} />
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
        (offset + width)}" style="fill: #${color}" />`
  )
  .join(" \n")}
</svg>
  `;
}

function createTintsAndShades(color) {
  const { palette, variations } = reshader(color, { numberOfVariations: 6 });
  // console.log(palette, variations);
  return palette.map(value => value);
}

function App() {
  const [color, setColor] = useState("#ff0000");
  const tintAndShades = createTintsAndShades(color);
  const rects = getSvg(tintAndShades);

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <h1>Add a color</h1>
      <SketchPicker onChange={color => setColor(color.hex)} />
      <input value={color} />
      <div style={{ backgroundColor: "white" }}>
        {tintAndShades.map(hex => rectangle(hex))}
      </div>

      <CopyToClipboard
        text={rects}
        // onCopy={() => this.setState({ copied: true })}
      >
        <span style={{ backgroundColor: "white" }}>Copy to clipboard</span>
      </CopyToClipboard>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
