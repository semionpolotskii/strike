import React from "react";

const HomePageBanner = () => (
  <>
    <div className="wrapper">
      <div className="col">
        <div className="heading">
          <h1>
            <span className="red-on-white">Информация</span> <br /> 
            <span className="white-on-red">о забастовках</span> <br />
            <span className="red-on-white">в Беларуси</span>
          </h1>
        </div>
      </div>
    </div>
    <style jsx>{`
      .wrapper {
        max-width: 1245px;
        margin: 0 auto;
        padding: 75px 0;
        position: relative;
      }

      .col {
        width: 50%;
      }

      .heading {
        padding: 0 0 15px 15px;
      }
      .heading > h1 {
        font-size: 62px;
        line-height: 50px;
        font-weight: 800;
        color: #111;
      }

      .heading > h1 > span {
        line-height: 73px;
        padding: 0 10px;
      }

      .white-on-red {
        background-color: #ff4d4f;
        color: #fff;
      }

      .red-on-white {
        background-color: #fff;
        color: #ff4d4f;
      }

      @media (max-width: 768px) {
        .wrapper {
          width: 100%;
          padding: 12px 0;
        }
        .col {
          width: 100%;
        }
      .heading h1 {
        font-size: 30px;
        text-align: center;
        padding: 0 12px
      }
      .heading > h1 > span {
        line-height: initial; 
        padding: 0 10px;
      }
    `}</style>
  </>
);

export default HomePageBanner;
