import React from "react";
import styled from "styled-components";

import MUButton from "@material-ui/core/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Button = styled(MUButton)`
  && {
    background-color: #f3a953 !important;
    color: black !important;

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
      <Button
        variant="contained"
        color="primary"
        // style={{ backgroundColor: "#212121" }}
        className="cta"
      >
        Copy to Clipboard
      </Button>
    </CopyToClipboard>
  );
};

export default CopyButton;
