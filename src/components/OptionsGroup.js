import React from "react";
import styled from "styled-components";

import { Slider } from "@material-ui/core";

import Picker from "./Picker";
import NumberInput from "./NumberInput";
import Option from "./Option";
import PaletteIcon from "./Icons/PaletteIcon";
import ContrastIcon from "./Icons/ContrastIcon";
import VariationsIcon from "./Icons/VariationsIcon";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  min-width: 80vw;
  padding: 2rem;
  border-radius: 16px;

  background-color: #063285;

  & > * {
    margin-right: 32px;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

const OptionsGroup = ({
  setColor,
  color,
  contrast,
  setContrast,
  variations,
  setVariations
}) => (
  <Container>
    <Option icon={<PaletteIcon />} label={"Base Color:"}>
      <Picker onChange={setColor} value={color} />
    </Option>

    <Option icon={<ContrastIcon />} label={"Contrast:"}>
      <div style={{ minWidth: "64px" }}>
        <Slider
          value={contrast}
          onChange={(e, newValue) => {
            setContrast(newValue);
          }}
          aria-labelledby="contrast-slider"
          step={0.01}
          min={0.07}
          max={0.17}
          style={{ color: "white" }}
        />
      </div>
    </Option>

    <Option icon={<VariationsIcon />} label={"Variations:"}>
      <NumberInput
        min={1}
        max={5}
        step={1}
        value={variations}
        onChange={setVariations}
      />
    </Option>
  </Container>
);

export default OptionsGroup;
