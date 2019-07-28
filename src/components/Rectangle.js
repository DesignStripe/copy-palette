import React from "react";
import { useToasts } from "react-toast-notifications";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip } from "@material-ui/core";
import { SIZE, GUTTER, BASE_SIZE, svg } from "../constants";

function Rectangle({ color, isBaseColor, type }) {
  const { addToast } = useToasts();
  const size = isBaseColor ? svg[type].baseSize : svg[type].size;

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
          y={svg[type].gutter}
          width={size}
          height={size}
          style={{ margin: svg[type].margin }}
        >
          <rect rx={svg[type].radius} width={size} height={size} fill={color} />
        </svg>
      </CopyToClipboard>
    </Tooltip>
  );
}

export default Rectangle;
