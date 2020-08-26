import React from "react";
import Header from "../components/Header";
import Head from "next/head";

const PageTemplate = ({ children }) => (
  <>
    <Head>
      <title>StrikeBy - информация о забастовках в Беларуси</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>StrikeBy - информация о забастовках в Беларуси</title>
      <meta
        name="title"
        content="StrikeBy - информация о забастовках в Беларуси"
      />
      <meta
        name="description"
        content="Информация об участниках акций забастовок в Республике Беларусь. Фонды и инициативные группы для помощи, тем кто потерял работу по причине участия в забастовках"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://strikeby.netlify.app/" />
      <meta
        property="og:title"
        content="StrikeBy - информация о забастовках в Беларуси"
      />
      <meta
        property="og:description"
        content="Информация об участниках акций забастовок в Республике Беларусь. Фонды и инициативные группы для помощи, тем кто потерял работу по причине участия в забастовках"
      />
      <meta property="og:image" content="https://i.imgur.com/EZ1kYDb.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://strikeby.netlify.app/" />
      <meta
        property="twitter:title"
        content="StrikeBy - информация о забастовках в Беларуси"
      />
      <meta
        property="twitter:description"
        content="Информация об участниках акций забастовок в Республике Беларусь. Фонды и инициативные группы для помощи, тем кто потерял работу по причине участия в забастовках"
      />
      <meta
        property="twitter:image"
        content="https://i.imgur.com/EZ1kYDb.png"
      />
      <meta name="google-site-verification" content="YxdDQqwNjHLpMNH2PH2YGMtB0jxT5l7uONNrQ1UbUOY" />
    </Head>
    <Header />
    {children}
    <div className="footer">
      Сайт разработан овцами, наркоманами, проститутками и алкоголиками, при
      поддержке народца, 2020
    </div>
    <style jsx>{`
      .footer {
        width: 100%;
        padding: 24px;
        text-align: center;
        color: #0000008f;
        font-size: 12px;
      }
      @media (max-width: 768px) {
        .footer {
          font-size: 10px;
        }
      }
    `}</style>
  </>
);

export default PageTemplate;
