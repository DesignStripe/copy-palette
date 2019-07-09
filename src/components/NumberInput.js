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

const Minus = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${colors.secondary};
  font-size: 16px;
  font-weight: bold;
`;

const Add = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${colors.secondary};
  font-size: 16px;
  font-weight: bold;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & > * {
    margin-right: 0.5rem;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

const NumberInput = (onChange, defaultValue, min, max) => {
  const [value, setValue] = useState(4);
  const reduce = () => setValue(value - 1);
  const add = () => setValue(value + 1);

  const disableMinus = value === min;
  const disableAdd = value === max;

  return (
    <Row>
      <Input value={value} onChange={e => setValue(e.target.value)} />
      <Minus onClick={reduce} isDisabled={disableMinus}>
        -
      </Minus>
      <Add onClick={add} isDisabled={disableAdd}>
        +
      </Add>
    </Row>
  );
};

export default NumberInput;
