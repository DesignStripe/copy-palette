import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiX } from "react-icons/fi";
import { useCookies } from "react-cookie";

const Container = styled.div`
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
        <Container color={color}>
          ProductHunt launch today!{" "}
          <FiX
            onClick={initCookie}
            style={{ position: "absolute", right: 0, marginRight: "1rem" }}
          />
        </Container>
      )}
    </>
  );
};

export default NotificationBar;
