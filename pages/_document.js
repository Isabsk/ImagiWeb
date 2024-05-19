import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KH2BK3MQ');
            `,
            }}
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/favicons/favicon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon.png"
          />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/favicons/safari-pinned-tab.png"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#eee" />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="#0ea5e9"
          />
          <meta
            http-equiv="Content-Security-Policy"
            content="frame-src 'self' https://embeds.beehiiv.com/"
          />

          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="#082f49"
          />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </Head>
        <body className="!overflow-visible bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KH2BK3MQ"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
