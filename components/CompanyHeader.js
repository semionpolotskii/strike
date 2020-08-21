import React from "react";

const CompanyLinksList = () => (
  <>
    <div className="wrapper">
      <h1 className="title">
        <span className="white-on-red">БелАЗ</span>
      </h1>

      <ul className="links-block">
        <li>
          <a className="link" href="http://belaz.by/" target="_blank">
            Сайт
          </a>
        </li>

        <li>
          <a className="link" href="https://bit.ly/2FH0FFj" target="_blank">
            Википедия
          </a>
        </li>
        <li>
          <a className="link" href="https://t.me/BelAZ_chat" target="_blank">
            Телеграм-чат
          </a>
        </li>
      </ul>
    </div>
    <style jsx>{`
      .wrapper {
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        width: 700px;
        padding: 0 12px;
        background: #fff;
        background: #fff;
        border-radius: 2px;
        border: 1px solid #f0f0f0;
        align-items: center;
      }

      .title {
        text-align: center;
        font-size: 45px;
      }
      .white-on-red {
        background-color: #ff4d4f;
        color: #fff;
        padding: 0 12px;
      }

      .company-logo {
        width: 100%;
        text-align: center;
        margin: 24px;
      }

      .text-info {
        width: 100%;
        text-align: left;
      }

      .links-block {
        width: 100%;
        display: flex;
        padding: 0;
        list-style-type: none;
        justify-content: center;
        padding: 0 10px;
      }

      .links-block li:not(:first-child):before {
        content: "•";
        position: relative;
        top: 3px;
        margin: 0 10px 0 12px;
      }

      .link {
        color: #ff4d4f;
        text-decoration: none;
        border-bottom: 1px solid #ff4d4f;
        transition: color 0.25s ease-out, border-bottom-color 0.25s ease-out;
      }

      .link:hover {
        color: #801a1b;
        border-bottom-color: #801a1b;
        -webkit-transition: none;
        transition: none;
      }
      .company-name {
        font-size: 2em;
        font-weight: bold;
      }

      @media (max-width: 768px) {
        .wrapper{
          width: 100%;
        }
      }
    `}</style>
  </>
);

export default CompanyLinksList;
