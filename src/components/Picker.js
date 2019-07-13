import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { SketchPicker } from "react-color";

const Container = styled.div`
  border-radius: 8px;
  background-color: white;
  padding: 0.5rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  svg {
    margin-left: 0.5rem;
    width: 1rem;
    height: 1rem;
    size: 1rem;
    stroke: black;
  }
`;

const Color = styled.div`
  border-radius: 8px;
  width: 28px;
  height: 28px;
  background-color: ${props => props.color};
`;

const Popover = styled.div`
  position: absolute;
  z-index: 2;
`;

const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const Picker = ({ onChange, value }) => {
  const [color, setColor] = useState(value || "red");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = color => {
    setColor(color.hex);
    onChange(color.hex);
  };

  return (
    <Container>
      <Color color={color} />
      {isOpen ? (
        <FiChevronUp onClick={() => setIsOpen(false)} />
      ) : (
        <FiChevronDown onClick={() => setIsOpen(true)} />
      )}
      {isOpen && (
        <Popover>
          <Cover>
            <SketchPicker
              color={color}
              onClose={() => setIsOpen(false)}
              onChange={handleChange}
            />
          </Cover>
        </Popover>
      )}
    </Container>
  );
};

export default Picker;
