import React from "react";

const Img = ({ src, ...props }) => (
  <>
    <div className="article-img">
      <img src={src} width="100%" />
    </div>
    <style jsx>{`
      .article-img {
        width: 100%;
        margin: 12px 0;
      }
    `}</style>
  </>
);
export default Img;
