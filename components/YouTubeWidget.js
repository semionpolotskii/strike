import React from "react";

const YouTubeWidget = ({ src }) => {
  return (
    <iframe
      width="100%"
      height="auto"
      src={src}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      style={{ margin: '12px 0'}}
    ></iframe>
  );
};

export default YouTubeWidget;
