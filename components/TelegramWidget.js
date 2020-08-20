import React  from "react";

const TelegramWidget = ({tgLink, height = 500}) => {
  return (
    <iframe
      src={`${tgLink}?embed=1&userpic=true`}
      width="100%"
      height=""
      frameBorder="0"
      scrolling="no"
      style={{
        border: "none",
        overflow: "hidden",
        minWidth: "320px",
        height: `${height}px`,
        margin: "24px 0"
      }}
    ></iframe>
  );
};

export default TelegramWidget;
