import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ToastProvider } from "react-toast-notifications";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./pages/About";
import Main from "./pages/Main";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Toast from "./components/Toast";

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

  const main = () => (
    <Main
      color={color}
      setColor={setColor}
      contrast={contrast}
      setContrast={setContrast}
      variations={variations}
      setVariations={setVariations}
      type={type}
      toggleType={toggleType}
    />
  );

  return (
    <Router>
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

            <Route exact path="/" component={main} />
            <Route path="/about" component={About} />
          </Layout>
        </ToastProvider>
      </ThemeProvider>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
