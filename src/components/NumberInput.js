import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 12px 21px;
  width: 16px;
  border: none;
  background-color: ${props => props.theme.colors.input.bg};
  color: ${props => props.theme.colors.input.text};
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
`;

const Minus = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${props =>
    props.disabled
      ? props.theme.colors.button.disabled
      : props.theme.colors.button.default};
  color: ${props =>
    props.disabled
      ? props.theme.colors.button.textDisabled
      : props.theme.colors.button.text};

  font-size: 16px;
  font-weight: bold;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
`;

const Add = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${props =>
    props.disabled
      ? props.theme.colors.button.disabled
      : props.theme.colors.button.default};
  color: ${props =>
    props.disabled
      ? props.theme.colors.button.textDisabled
      : props.theme.colors.button.text};
  font-size: 16px;
  font-weight: bold;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
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

const NumberInput = ({ onChange, value, min, max, step }) => {
  const [number, setNumber] = useState(value || 4);
  const disableMinus = number === min;
  const disableAdd = number === max;

  const reduce = () => {
    if (!disableMinus) {
      const newNumber = number - step;
      setNumber(newNumber);
      onChange(newNumber);
    }
  };
  const add = () => {
    if (!disableAdd) {
      const newNumber = number + step;
      setNumber(newNumber);
      onChange(newNumber);
    }
  };

  return (
    <Row>
      <Input value={number} />
      <Minus onClick={reduce} disabled={disableMinus}>
        -
      </Minus>
      <Add onClick={add} disabled={disableAdd}>
        +
      </Add>
    </Row>
  );
};

export default NumberInput;
