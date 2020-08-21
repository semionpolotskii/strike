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
      <meta property="twitter:image" content="https://i.imgur.com/EZ1kYDb.png" />
    </Head>
    <Header />
    {children}
  </>
);

export default PageTemplate;
