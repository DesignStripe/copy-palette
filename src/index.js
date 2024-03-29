import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ToastProvider } from "react-toast-notifications";
import { Router, Route } from "react-router-dom";

import About from "./pages/About";
import Main from "./pages/Main";
import Layout from "./components/Layout";
import Toast from "./components/Toast";
import ProducHuntWidget from "./components/ProductHuntWidget";
import NotificationBar from "./components/NotificationBar";

import theme from "./utils/newTheme";
import { history } from "./utils/history";
import "./utils/analytics";

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
  const [color, setColor] = useState("#F7446D"); //theme.dark.colors.tertiary
  const [variations, setVariations] = useState(4);
  const [contrast, setContrast] = useState(0.1);
  const [isDark, setIsDark] = useState(true);
  const [type, setType] = useState(2);
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
      isDark={isDark}
    />
  );

  const about = () => <About color={color} />;

  return (
    <Router history={history}>
      <ThemeProvider theme={isDark ? theme.dark : theme.light}>
        <ToastProvider
          components={{ Toast }}
          placement="bottom-center"
          autoDismissTimeout={1500}
        >
          <GlobalStyle />
          <ProducHuntWidget isDark={isDark} isAbsolute />
          <NotificationBar color={color} />
          <Layout handleTheme={setIsDark} handleType={toggleType} color={color}>
            <Route exact path="/" render={main} />
            <Route path="/about" component={about} />
          </Layout>
        </ToastProvider>
      </ThemeProvider>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
