import React from "react";
import Header from "../components/Header";
import Head from "next/head";

const PageTemplate = ({ children }) => (
  <>
    <Head>
      <title>StrikeBy - информация о забастовках в Беларуси</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
  </>
);

export default PageTemplate;
