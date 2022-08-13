import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            property="og:title"
            content="Mobile,desktop,web applications company"
          />
          <meta
            property="og:site_name"
            content="Pacific Professional Service"
          />
          <meta
            property="og:url"
            content="https://www.pacific-professional.ml/"
          />
          <meta
            property="og:description"
            content="We are a web & app development company that turns your ideas into a new driving force of your business. We hire brilliant web and mobile app developers to deliver projects on time and maintain the top"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://scontent.flos2-1.fna.fbcdn.net/v/t1.0-9/53145584_360454158131288_837945284771184640_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_eui2=AeELoLiw4fhKbzfPW4c-aKxDH1G1-mUXfYofUbX6ZRd9igzbSs_C3rVYO2DLhxRpxcE&_nc_ohc=A9jj751ZC9YAX8MtWuD&_nc_ht=scontent.flos2-1.fna&oh=6e319f0e5e27517ab8d7b27b032cbb77&oe=5F464541"
          />
          <meta charSet="utf-8" />
          <meta name="title" content="Pacific Professional Service" />
          <meta
            name="description"
            content="We are a web & app development company that turns your ideas into a new driving force of your business. We hire brilliant web and mobile app developer"
          />
          <meta
            name="keywords"
            content="software company, corporate software,web application, mobile applications,desktop application cloud application,software maintenance"
          />
          <meta name="yandex-verification" content="edc1b7461e44eeb5" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta
            name="author"
            content="Olawale afuye Pacific Professional Service"
          />

          <link rel="apple-touch-icon" sizes="57x57" href="./favicon/" />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="./favicon//apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="./favicon//apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="./favicon//apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="./favicon//apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="./favicon//apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="./favicon//apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="./favicon//apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="./favicon//apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="./favicon/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="./favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="./favicon/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="./favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900"
            rel="stylesheet"
          />
          <meta name="description" content="" />
          <meta
            name="Pacific Professional"
            content="Web design software company"
          />
          {/* Custom Analytics  */}

          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
                  (function (w, d) {
                    var h = d.head || d.getElementsByTagName("head")[0]; 
                    t = d.createElement("script");
                    t.async=true;
                    t.setAttribute("src","https://analytics-server-v1.herokuapp.com/analytics-server.js");
                    t.dataset.ackeeServer="https://analytics-server-v1.herokuapp.com";
                    t.dataset.ackeeDomainId="c147ed04-a4fe-48dd-8f54-eea7f18774ad";
                    h.appendChild(t);})(window, document);  
            `,
            }}
          />

          {/* Chat Bots for App */}

          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
                 (function collectId(w, d) { 
                  w.CollectId = "6008d3eadd5fd55abf04ac52";
                  var h = d.head || d.getElementsByTagName("head")[0]; 
                  var s = d.createElement("script"); s.setAttribute("type", "text/javascript");
                  s.async=true; s.setAttribute("src", "https://collectcdn.com/launcher.js");
                  h.appendChild(s); })(window, document)
            `,
            }}
          />
          {/* Global site tag (gtag.js) - Google Analytics */}

          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag() {
                    dataLayer.push(arguments);
                  }
                  gtag("js", new Date());
              
                  gtag("config", "UA-131379491-2");
            `,
            }}
          />
        </Head>
        <body>
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
