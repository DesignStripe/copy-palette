import React from "react";
import styled from "styled-components";
import { useToasts } from "react-toast-notifications";
import getRandomInterjection from "interjection-js";

import { Tooltip } from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCopy } from "react-icons/fi";

const Button = styled.button`
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 108px;
  height: 108px;
  padding: 2rem;
  border-radius: ${props => props.theme.radius};
  background-color: ${props => props.theme.colors.primary[500]};

  & > svg {
    stroke: ${props => props.theme.colors.primary[100]};
    width: 32px;
    height: 32px;
  }
`;

const CopyButton = ({ text }) => {
  const { addToast } = useToasts();

  return (
    <CopyToClipboard
      text={text}
      onCopy={() =>
        addToast(`${getRandomInterjection()}! Copied! 👏`, {
          appearance: "success",
          autoDismiss: true
        })
      }
    >
      <Tooltip title="🙌 Copy the SVG palette">
        <Button>
          <FiCopy />
        </Button>
      </Tooltip>
    </CopyToClipboard>
  );
};

export default CopyButton;
