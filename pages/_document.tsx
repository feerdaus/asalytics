import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta key="theme-color" name="theme-color" content="#F86624" />
          <link key="favicon" rel="icon" href="/favicon.ico" />

          <link
            href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
