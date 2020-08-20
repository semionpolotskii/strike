import React from "react";

const Card = ({ title, children }) => (
  <>
    <div className="card">
      <div className="title">{title}</div>
      <div className="body">{children}</div>
    </div>
    <style jsx>{`
      .card {
        width: 700px;

        box-sizing: border-box;
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
        font-variant: tabular-nums;
        line-height: 1.5715;
        list-style: none;
        font-feature-settings: "tnum";
        position: relative;
        background: #fff;
        border-radius: 2px;

        border: 1px solid #f0f0f0;

        padding: 24px;
        margin: 24px 0;
      }

      .title {
        width: 100%;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        padding: 0 0 24px 0;
      }
      .body {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </>
);

export default Card;
