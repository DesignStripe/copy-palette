import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 12px 21px;
  width: 16px;
  border: none;
  background-color: ${props => props.theme.colors.neutrals[100]};
  color: ${props => props.theme.colors.neutrals[500]};
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
`;

const CustomButton = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${props =>
    props.disabled
      ? props.theme.colors.primary[400]
      : props.theme.colors.primary[100]};
  color: ${props =>
    props.disabled
      ? props.theme.colors.primary[500]
      : props.theme.colors.primary[500]};

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
      <CustomButton onClick={reduce} disabled={disableMinus}>
        -
      </CustomButton>
      <CustomButton onClick={add} disabled={disableAdd}>
        +
      </CustomButton>
    </Row>
  );
};

export default NumberInput;
