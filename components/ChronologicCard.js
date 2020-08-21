import React from "react";
import Link from "next/link";

const ChronologicCard = ({ title, href, imgHref }) => (
  <>
    <div className="card">
      <Link href={href}>
        <a>
          <span className="red-on-white">{title}</span>
        </a>
      </Link>
    </div>
    <style jsx>{`
      .card {
        border: 1px solid #f0f0f0;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 18px;
        font-variant: tabular-nums;
        line-height: 1.5715;
        list-style: none;
        -webkit-font-feature-settings: "tnum";
        font-feature-settings: "tnum";
        position: relative;
        background: #fff;
        border-radius: 2px;
        width: 45%;
        height: 300px;

        background-image: linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ),
          url("${imgHref}");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        display: flex;
        justify-content: center;
        align-items: center;

        color: #fff !important;
      }

      .card:hover {
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.3)
          ),
          url("${imgHref}");
      }

      .card a:any-link {
        color: #fff !important;
        text-decoration: none;
        font-size: 30px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .red-on-white {
        background-color: #fff;
        color: #ff4d4f;
        padding: 0 12px;
        font-weight: bold;
      }
      @media (max-width: 768px) {
        .card {
          width: 100%;
          height: 150px;
          margin: 0;
        }
      }
    `}</style>
  </>
);

export default ChronologicCard;
