import React from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip } from "@material-ui/core";
import { SIZE, GUTTER, BASE_SIZE } from "../constants";

function Rectangle({ color, isBaseColor }) {
  const size = isBaseColor ? BASE_SIZE : SIZE;

  return (
    <CopyToClipboard text={`${color}`}>
      <Tooltip title={`${color}`}>
        <svg
          x="0"
          y={GUTTER}
          width={size}
          height={size}
          style={{ margin: "1rem" }}
        >
          <rect rx="8" width={size} height={size} fill={color} />
        </svg>
      </Tooltip>
    </CopyToClipboard>
  );
}

export default Rectangle;
