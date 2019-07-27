import React from "react";
import styled from "styled-components";
import { Slider as MUISlider } from "@material-ui/core";

const CustomSlider = styled(MUISlider)`
  color: ${props => props.theme.colors.neutrals[500]} !important;
`;

const Slider = ({ value, onChange }) => (
  <div style={{ minWidth: "64px" }}>
    <CustomSlider
      value={value}
      onChange={(e, newValue) => {
        onChange(newValue);
      }}
      aria-labelledby="contrast-slider"
      step={0.01}
      min={0.07}
      max={0.17}
    />
  </div>
);

export default Slider;
