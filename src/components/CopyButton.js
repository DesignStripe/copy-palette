import React from "react";
import styled from "styled-components";

import MUButton from "@material-ui/core/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCopy } from "react-icons/fi";
import theme from "../utils/theme";

const Button = styled(MUButton)`
  && {
    background-color: ${theme.colors.tertiary} !important;
    color: ${theme.colors.dark} !important;

    text-transform: capitalize !important;
    font-weight: bold !important;
    padding: 12px 21px !important;
  }
`;

const CopyButton = ({ text }) => {
  return (
    <CopyToClipboard
      text={text}
      // onCopy={() => this.setState({ copied: true })}
    >
      <Button variant="contained" color="primary">
        <FiCopy color={theme.colors.dark} style={{ marginRight: "0.5rem" }} />
        Copy Palette
      </Button>
    </CopyToClipboard>
  );
};

export default CopyButton;
