import React from "react";
import styled from "styled-components";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCopy } from "react-icons/fi";

import Picker from "./Picker";
import Slider from "./Slider";
import NumberInput from "./NumberInput";
import Option from "./Option";
import PaletteIcon from "./Icons/PaletteIcon";
import ContrastIcon from "./Icons/ContrastIcon";
import VariationsIcon from "./Icons/VariationsIcon";
import { Tooltip } from "@material-ui/core";

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
  border-radius: 16px;
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

const Button = styled.button`
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 108px;
  height: 108px;
  padding: 2rem;
  border-radius: 16px;
  background-color: ${props => props.theme.colors.primary[500]};

  & > svg {
    stroke: ${props => props.theme.colors.primary[100]};
    width: 32px;
    height: 32px;
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
    <CopyToClipboard text={svgPalette}>
      <Tooltip title="🙌 Copy the SVG palette">
        <Button>
          <FiCopy />
        </Button>
      </Tooltip>
    </CopyToClipboard>
  </Container>
);

export default OptionsGroup;
