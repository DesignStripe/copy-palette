import React from "react";
import { useToasts } from "react-toast-notifications";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip } from "@material-ui/core";
import { SIZE, GUTTER, BASE_SIZE } from "../constants";

function Rectangle({ color, isBaseColor }) {
  const { addToast } = useToasts();
  const size = isBaseColor ? BASE_SIZE : SIZE;

  return (
    <CopyToClipboard text={`${color}`}>
      <Tooltip title={`Click to copy 💅`}>
        <svg
          x="0"
          y={GUTTER}
          width={size}
          height={size}
          style={{ margin: "1rem" }}
          onClick={() =>
            addToast("Copied! 👏", { appearance: "success", autoDismiss: true })
          }
        >
          <rect rx="8" width={size} height={size} fill={color} />
        </svg>
      </Tooltip>
    </CopyToClipboard>
  );
}

export default Rectangle;
