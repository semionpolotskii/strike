import React from "react";
import Link from "next/link";

const ChronologicCard = ({ title, href }) => (
  <>
    <div className="card">
      <Link href={href}>
        <a>{title}</a>
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
        width: 200px;
        height: 300px;

        background-image: linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ),
          url("https://dh.img.tyt.by/720x720s/n/finansy/06/8/belaz2.jpg");
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
          url("https://dh.img.tyt.by/720x720s/n/finansy/06/8/belaz2.jpg");
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
    `}</style>
  </>
);

export default ChronologicCard;
