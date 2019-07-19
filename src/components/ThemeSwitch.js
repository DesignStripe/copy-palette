import React, { useEffect } from "react";
import useDarkMode from "use-dark-mode";
import Switch from "@material-ui/core/Switch";

const ThemeSwitch = ({ onChange }) => {
  const darkMode = useDarkMode(false);

  useEffect(() => {
    onChange(darkMode.value);
  });

  return (
    <div>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <Switch checked={darkMode.value} onChange={darkMode.toggle} />
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
  );
};

export default ThemeSwitch;
