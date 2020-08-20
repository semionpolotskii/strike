import React from "react";

const Chronologic = ({ children }) => (
  <>
    <h1 className="title">Хронология забастовок</h1>
    <div>
      <div className="wrapper">{children}</div>
    </div>
    <style jsx>{`
      .title {
        text-align: center;
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
