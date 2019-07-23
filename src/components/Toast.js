import React from "react";

const Toast = ({ appearance, children }) => (
  <div
    style={{
      color: appearance === "error" ? "red" : "black",
      backgroundColor: "#083284",
      borderRadius: "4px",
      color: "#fff",
      padding: "0.5rem"
    }}
  >
    {children}
  </div>
);

export default Toast;
