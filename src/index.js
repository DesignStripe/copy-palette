import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ToastProvider } from "react-toast-notifications";

import Layout from "./components/Layout";
import Header from "./components/Header";
import OptionsGroup from "./components/OptionsGroup";
import Preview from "./components/Preview";
import Toast from "./components/Toast";

import createPalette from "./utils/createPalette";
import getSvg from "./utils/getSvg";
import theme from "./utils/newTheme";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Muli", sans-serif;
    margin: 0;  
  }
  html {
    background-color: ${props => props.theme.colors.primary[100]}
  }
`;

function App() {
  const [color, setColor] = useState(theme.dark.colors.tertiary);
  const [variations, setVariations] = useState(4);
  const [contrast, setContrast] = useState(0.1);
  const [isDark, setIsDark] = useState(true);
  const [type, setType] = useState(1);
  const toggleType = () => {
    if (type === 1) setType(2);
    else if (type === 2) setType(1);
  };

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

          <Header
            handleTheme={setIsDark}
            handleType={toggleType}
            color={color}
          />

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
        </Layout>
      </ToastProvider>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
