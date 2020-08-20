import React from "react";

const Chronologic = ({ children }) => (
  <>
    <h1 className="title">
      <span className="white-on-red">Хронология забастовок</span>
    </h1>
    <div>
      <div className="wrapper">{children}</div>
    </div>
    <style jsx>{`
      .title {
        text-align: center;
        font-size: 45px;
      }
      .white-on-red {
        background-color: #ff4d4f;
        color: #fff;
        padding: 0 12px;
      }
      .wrapper {
        display: flex;
        justify-content: space-around;
        padding: 24px;
      }
    `}</style>
  </>
);

export default Chronologic;
