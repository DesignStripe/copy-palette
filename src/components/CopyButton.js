import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

import MUButton from "@material-ui/core/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCopy } from "react-icons/fi";

const Button = styled(MUButton)`
  && {
    background-color: ${props => props.theme.colors.neutrals[500]} !important;
    color: ${props => props.theme.colors.neutrals[100]} !important;

    text-transform: capitalize !important;
    font-weight: bold !important;
    padding: 12px 24px !important;
    border-radius: 16px;
    box-shadow: 0 8px 32px
      ${props => rgba(props.theme.colors.neutrals[500], 0.4)};
  }
`;

const CopyButton = ({ text }) => {
  return (
    <CopyToClipboard
      text={text}
      // onCopy={() => this.setState({ copied: true })}
    >
      <Button variant="contained" color="primary">
        {/* <FiCopy color={theme.colors.dark} style={{ marginRight: "0.5rem" }} /> */}
        Copy SVG Palette
      </Button>
    </CopyToClipboard>
  );
};

export default CopyButton;
