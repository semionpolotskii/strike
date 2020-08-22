import React from "react";

const BlockTitle = ({ withContact, subTitle, children, ...props }) => (
  <>
    <h1 className="title" {...props}>
      <span className="white-on-red">{children}</span>
      
    </h1>
    {subTitle && (
      <h3 className="subtitle">
        {subTitle}
      </h3>
    )}
    {withContact && (
      <h3 className="subtitle">
        Информация собрана из открытых источников. Если у вас есть дополнения, исправления, желание помочь:{" "}
        <a href="https://t.me/strikebyy_bot" target="_blank">
          напишите нам
        </a>
        !
      </h3>
    )}

    <style jsx>{`
      .title {
        text-align: center;
        font-size: 45px;
      }
      .subtitle {
        text-align: center;
        padding: 0 0 24px 0;
        margin: 0;
        font-size: 15px;
        color: rgb(0 0 0 / 55%);
      }

      .subtitle a {
        color: #ff4d4f;
      }

      .subtitle a:hover {
        color: #801a1b;
      }

      .white-on-red {
        background-color: #ff4d4f;
        color: #fff;
        padding: 0 12px;
      }

      @media (max-width: 768px) {
        .title {
          font-size: 25px;
        }

        .subtitle {
          font-size: 12px;
        }
      }
    `}</style>
  </>
);

export default BlockTitle;
