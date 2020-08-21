import React from "react";

const YouTubeWidget = ({ src }) => {
  return (
    <>
    <iframe
      className="yt-widget"
      src={src}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      style={{ margin: '12px 0'}}
    ></iframe>
    <style jsx>{`
      .yt-widget {
        width: 100%;
        height: 400px;
      }

      @media (max-width: 768px) {
        .yt-widget {
          height: auto;
        }
      }
    `}</style>
    </>
  );
};

export default YouTubeWidget;
