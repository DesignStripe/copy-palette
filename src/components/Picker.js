import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { SketchPicker } from "react-color";
import useOutsideClick from "../hooks/useOutsideClick";

const Container = styled.div`
  border-radius: 8px;
  background-color: white;
  padding: 0.5rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > svg {
    margin-left: 0.5rem;
    width: 1rem;
    height: 1rem;
    size: 1rem;
    stroke: black;
    cursor: pointer;
  }
`;

const Color = styled.div`
  border-radius: 8px;
  width: 28px;
  height: 28px;
  background-color: ${props => props.color};
  cursor: pointer;
`;

const Popover = styled.div`
  position: relative;
  z-index: 2;
`;

const Cover = styled.div`
  position: absolute;
  top: 28px;
  right: 0;
  bottom: 0px;
  left: -60px;
`;

const Picker = ({ onChange, value }) => {
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (isOpen) setIsOpen(false);
  });

  const [color, setColor] = useState(value || "red");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = color => {
    setColor(color.hex);
    onChange(color.hex);
  };

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container ref={ref}>
      <Color color={color} onClick={toggle} />
      {isOpen ? (
        <FiChevronUp onClick={toggle} />
      ) : (
        <FiChevronDown onClick={toggle} />
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
