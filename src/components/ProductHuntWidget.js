import React from "react";

const POST_ID = "167257";

export const ProducHuntWidget = ({ isDark }) => {
  return (
    <a href="https://www.producthunt.com/posts/visualeyes-2" target="_blank">
      <img
        src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=${POST_ID}&theme=${
          isDark ? "light" : "dark"
        }`}
        alt="VisualEyes | Attention heatmaps inside your favorite design tool | Product Hunt Embed"
        style={{
          zIndex: "100000000",
          margin: "0",
          position: "fixed",
          bottom: "0",
          left: 0,
          margin: "1rem"
        }}
      />
    </a>
  );
};

export default ProducHuntWidget;
