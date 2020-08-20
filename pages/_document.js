import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <>
        <Html>
          <Head>
            <title>StrikeBy - информация о забастовках в РБ</title>
            <link
              href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
              rel="stylesheet"
            />
            <style>{`
              * {
                box-sizing: border-box;
              }
              html,
              body {
                margin: 0;
                padding: 0;
                height: 100%;
              }

              body {
                font-size: calc(10px + 1vmin);
                font-family: "Raleway", sans-serif;
              }
            `}</style>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}

export default MyDocument;
