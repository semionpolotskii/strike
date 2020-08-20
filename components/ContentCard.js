import React from "react";
import Typography from "./Typography";

const ContentCard = ({ date, children }) => (
  <>
    <div className="content">
      {date && <Typography.Date>{date}</Typography.Date>}
      {children}
    </div>
    <style jsx>{`
      .content {
        width: 700px;
        box-sizing: border-box;
        margin: 12px 0;
        padding: 24px;
        // color: rgba(0, 0, 0, 0.65);
        font-size: 16px;
        font-variant: tabular-nums;
        line-height: 1.5715;
        list-style: none;
        font-feature-settings: "tnum";
        position: relative;
        background: #fff;
        border-radius: 2px;
        border: 1px solid #f0f0f0;
      }

      @media (max-width: 768px) {
        .content {
          width: 100%;
        }
      }
    `}</style>
  </>
);
export default ContentCard;
