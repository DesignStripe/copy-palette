import React from "react";
import styled from "styled-components";

import CopyButton from "./CopyButton";
import Picker from "./Picker";
import Slider from "./Slider";
import NumberInput from "./NumberInput";
import Option from "./Option";
import PaletteIcon from "./Icons/PaletteIcon";
import ContrastIcon from "./Icons/ContrastIcon";
import VariationsIcon from "./Icons/VariationsIcon";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* width: calc(100% - 100px); */
  padding: 2rem;
  border-radius: ${props => props.theme.radius};
  width: 100%;
  margin-right: 2rem;

  background-color: ${props => props.theme.colors.primary[500]};

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
  setVariations,
  svgPalette
}) => (
  <Container>
    <OptionsContainer>
      <Option icon={<PaletteIcon />} label={"Base Color:"}>
        <Picker onChange={setColor} value={color} />
      </Option>

      <Option icon={<ContrastIcon />} label={"Contrast:"}>
        <Slider value={contrast} onChange={setContrast} />
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
    </OptionsContainer>
    <CopyButton text={svgPalette} />
  </Container>
);

export default OptionsGroup;
