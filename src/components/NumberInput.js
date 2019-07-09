import React, { useState } from "react";
import styled from "styled-components";
import theme from "../theme";

const { colors } = theme;

const Input = styled.input`
  padding: 12px 21px;
  width: 16px;
  border: none;
  background-color: #fff;
  color: ${colors.primary};
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
`;

const Minus = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${colors.secondary};
`;

const Add = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${colors.secondary};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NumberInput = (onChange, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const reduce = () => setValue(value - 1);
  const add = () => setValue(value + 1);

  return (
    <Row>
      <Input /> <Minus onClick={reduce} /> <Add onClick={add} />
    </Row>
  );
};

export default NumberInput;
