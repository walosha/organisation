import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Chat Bots for App */}
        <meta
          name="google-site-verification"
          content="KhEF5zGLDdw3yLbzDVUZUvk8hRid_oGY3mX3NKDQuTI"
        />
        <meta
          property="og:title"
          content="Pacific Technology Service - Web & App Development Company"
        />
        <meta property="og:site_name" content="Pacific Professional Service" />
        <meta
          property="og:url"
          content="https://www.pacific-professional.com.ng/"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pacific_nig" />
        <meta
          name="twitter:title"
          content="Pacific Technology Service - Web & App Development Company"
        />
        <meta
          name="twitter:description"
          content="Transform your business with innovative web & app solutions."
        />
        <meta
          name="twitter:image"
          content="https://images.pexels.com/photos/19898245/pexels-photo-19898245/free-photo-of-pacific-technology-service.png"
        />

        <meta
          property="og:description"
          content="We are a leading web & app development company, turning your ideas into a driving force for your business. Our team of brilliant developers delivers projects on time, ensuring top-notch quality."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/19898245/pexels-photo-19898245/free-photo-of-pacific-technology-service.png"
        />
        <meta charSet="utf-8" />
        <meta
          name="title"
          content="Pacific Technology Service - Web & App Development Company"
        />
        <meta
          name="description"
          content="Transform your business with Pacific Technology Service - a leading web & app development company. Our team of brilliant developers specializes in creating innovative solutions for web, mobile, and desktop applications."
        />
        <meta
          name="keywords"
          content="software company, corporate software, web application, mobile applications, desktop application, cloud application, software maintenance, Pacific Technology Service"
        />
        <meta name="yandex-verification" content="edc1b7461e44eeb5" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta
          name="author"
          content="Olawale Afuye - Pacific Technology Service"
        />

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
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
