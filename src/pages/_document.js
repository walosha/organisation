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
        <div id="modal-hook"></div>
      </body>
    </Html>
  );
}
