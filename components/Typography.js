import React from "react";

const Typography = {};

Typography.Date = ({ children }) => (
  <>
    <div className="date">{children}</div>
    <style jsx>{`
      .date {
        text-transform: uppercase;
        font-size: 18px;
        font-weight: bold;
        line-height: 1;
        color: #ff4d4f;
        padding-bottom: 24px;
      }
    `}</style>
  </>
);

Typography.Time = ({ children }) => (
  <>
    <div className="date">{children}</div>
    <style jsx>{`
      .date {
        text-transform: uppercase;
        font-size: 13px;
        font-weight: bold;
        line-height: 1;
        color: rgba(0, 0, 0, 0.65);
        padding: 24px 0px 12px 0;
      }
    `}</style>
  </>
);

export default Typography;
