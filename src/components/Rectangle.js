import React from "react";
import { useToasts } from "react-toast-notifications";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip } from "@material-ui/core";
import { SIZE, GUTTER, BASE_SIZE } from "../constants";

function Rectangle({ color, isBaseColor }) {
  const { addToast } = useToasts();
  const size = isBaseColor ? BASE_SIZE : SIZE;

  return (
    <Tooltip title={`Click to copy 💅`}>
      <CopyToClipboard
        text={`${color}`}
        onCopy={() =>
          addToast("Copied! 👏", { appearance: "success", autoDismiss: true })
        }
      >
        <svg
          x="0"
          y={GUTTER}
          width={size}
          height={size}
          style={{ margin: "1rem" }}
        >
          <rect rx="8" width={size} height={size} fill={color} />
        </svg>
      </CopyToClipboard>
    </Tooltip>
  );
}

export default Rectangle;
