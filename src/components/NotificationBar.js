import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiX } from "react-icons/fi";
import { useCookies } from "react-cookie";

const Container = styled.a`
  width: calc(100vw - 2rem);
  padding: 1rem;
  ${props => console.log(props.theme.colors)}
  background-color: ${props => props.color};
  color: white;
  z-index: 10000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  position: relative;
  cursor: pointer;

  &,
  &:focus,
  &:hover,
  &:active {
    box-shadow: none;
    outline: none;
    text-decoration: none
  }
`;

const NotificationBar = ({ color }) => {
  const [isSeen, setIsSeen] = useState(true);
  const [cookies, setCookie] = useCookies(["designValley"]);

  useEffect(() => {
    if (cookies.designValley) {
      setIsSeen(true);
      // console.log("exists");
    } else {
      setIsSeen(false);
      // console.log("dont exists");
    }
  }, []);

  function initCookie() {
    setCookie("designValley", 1);
    setIsSeen(true);
  }

  return (
    <>
      {!isSeen && (
        <Container
          color={"#DA5631"}
          href="https://www.designValley.club"
          target="_blank"
        >
          <PHLogo />
          DesignValley is on Product Hunt today! Grab a coffee and have a look{" "}
          <FiX
            onClick={initCookie}
            style={{
              position: "absolute",
              right: 0,
              marginRight: "1rem",
              padding: "0.5rem",
              zIndex: 1000
            }}
          />
        </Container>
      )}
    </>
  );
};

const PHLogo = () => {
  return (
    <svg
      width="32"
      viewBox="0 0 2500 2500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginRight: "1rem" }}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1250 2500C1940.37 2500 2500 1940.37 2500 1250C2500 559.629 1940.37 0 1250 0C559.629 0 0 559.629 0 1250C0 1940.37 559.629 2500 1250 2500Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M937.5 750V1750H1125V1437.5H1408.75C1597.19 1432.5 1750 1279.69 1750 1093.75C1750 902.812 1597.19 750 1408.75 750H937.5V750ZM1411.06 1250H1125V937.5H1411.06C1494.69 937.5 1562.5 1007.5 1562.5 1093.75C1562.5 1180 1494.69 1250 1411.06 1250Z"
        fill="#DA5631"
      />
    </svg>
  );
};

export default NotificationBar;
