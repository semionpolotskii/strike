import React from "react";
import Typography from "./Typography";

const Text = ({ time, children}) => (
  <>
    <div className="text">
      {time && <Typography.Time>{time}</Typography.Time>}
      <span>{children}</span>
    </div>
    <style jsx>{`
      .text {
        font-family: Raleway, sans-serif;
      }
    `}</style>
  </>
);
export default Text;
