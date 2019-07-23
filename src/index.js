import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ToastProvider } from "react-toast-notifications";

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

const Toast = ({ appearance, children }) => (
  <div
    style={{
      color: appearance === "error" ? "red" : "black",
      backgroundColor: "#083284",
      borderRadius: "4px",
      color: "#fff",
      padding: "0.5rem"
    }}
  >
    {children}
  </div>
);

function App() {
  const [color, setColor] = useState(theme.defaultColor);
  const [variations, setVariations] = useState(4);
  const [contrast, setContrast] = useState(0.1);
  const [isDark, setIsDark] = useState(true);

  const palette = createPalette(color, variations, contrast);
  const svgPalette = getSvg(palette);

  return (
    <ThemeProvider theme={isDark ? theme.dark : theme.light}>
      <ToastProvider
        components={{ Toast }}
        placement="bottom-center"
        autoDismissTimeout={1500}
      >
        <Layout>
          <GlobalStyle />

          <Header handleTheme={setIsDark} />

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
      </ToastProvider>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
