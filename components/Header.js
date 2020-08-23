import React from "react";
import Link from "next/link";

const Img = ({ src, ...props }) => (
  <>
    <div className="wrapper">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <a className="logo-link">StrikeBy</a>
          </Link>
        </div>
        <ul className="main-menu">
          <li>
            <a className="menu-link" href="/#chronologic">
              Участники забастовок
            </a>
          </li>
          <li>
            <Link href="/chats">
              <a className="menu-link">Забастовочные чаты</a>
            </Link>
          </li>
          <li>
            <Link href="/initiatives">
              <a className="menu-link">Инициативы и фонды</a>
            </Link>
          </li>
          <li>
            <a
              className="menu-link"
              href="https://t.me/strikebyy_bot"
              target="_blank"
            >
              Написать нам
            </a>
          </li>
        </ul>
      </div>
    </div>
    <style jsx>{`
      .wrapper {
        width: 100%;
        height: auto;
        border-radius: 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0);
        z-index: 99999;
        padding-top: 15px;
        padding-bottom: 15px;
        background-color: #ffffff;
        -webkit-transition: 0.3s;
        -o-transition: 0.3s;
        transition: 0.3s;
      }

      .container {
        display: flex;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
      }

      .logo {
        padding: 20px;
        margin-right: 60px;
      }

      .logo-link {
        color: #ff4d4f;
        text-decoration: none;
      }

      .main-menu {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
      }

      .main-menu > li {
        display: block;
        text-align: center;
      }

      .menu-link {
        display: block;
        background: none;
        font-size: 18px;
        line-height: 20px;
        color: #56576e;
        padding: 20px;
        transition: color 0.25s ease-out;
        text-decoration: none;
      }

      .menu-link:hover {
        color: #ff4d4f;
        transition: none;
      }

      @media (max-width: 768px) {
        .container {
          flex-direction: column;
        }
        .logo {
          padding: 0 0 5px 0;
          margin: 0;
          text-align: center;
        }
        .main-menu {
          flex-direction: column;
        }
        .menu-link {
          padding: 10px;
          font-size: 14px;
        }
      }
    `}</style>
  </>
);
export default Img;
