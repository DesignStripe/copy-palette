import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import CopyButton from "./components/CopyButton";
import Layout from "./components/Layout";
import Header from "./components/Header";
import OptionsGroup from "./components/OptionsGroup";
import Preview from "./components/Preview";

import createPalette from "./utils/createPalette";
import getSvg from "./utils/getSvg";
import theme from "./utils/theme";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Muli", sans-serif;
    margin: 0;  
  }
`;

function App() {
  const [color, setColor] = useState(theme.colors.tertiary);
  const [variations, setVariations] = useState(4);
  const [contrast, setContrast] = useState(0.1);

  const palette = createPalette(color, variations, contrast);
  const svgPalette = getSvg(palette);

  return (
    <Layout>
      <GlobalStyle />

      <Header />

      <OptionsGroup
        setColor={setColor}
        color={color}
        contrast={contrast}
        setContrast={setContrast}
        variations={variations}
        setVariations={setVariations}
      />

      <Preview
        palette={palette}
        variations={variations}
        svgPalette={svgPalette}
      />

      <CopyButton text={svgPalette} />
    </Layout>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
