import React from "react";
import BlockTitle from "./BlockTitle";

const Chronologic = ({ children }) => (
  <>
    <BlockTitle id="chronologic">Как развивались события</BlockTitle>
    <div>
      <div className="wrapper">{children}</div>
    </div>
    <style jsx>{`
      .wrapper {
        display: flex;
        justify-content: space-around;
        padding: 24px;
      }
      @media (max-width: 768px) {
        .wrapper {
          flex-direction: column;
        }
      }
    `}</style>
  </>
);

export default Chronologic;
