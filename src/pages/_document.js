import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Chat Bots for App */}
        <title>Pacific Technology Service - Software Development Agency</title>
        <meta
          name="description"
          content="Pacific Technology Service specializes in high-quality web, Android, and iOS app development"
        />

        <meta
          property="og:url"
          content="https://www.pacific-professional.com.ng/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Pacific Technology Service - Software Development Agency"
        />
        <meta
          property="og:description"
          content="Pacific Technology Service specializes in high-quality web, Android, and iOS app development"
        />

        <meta
          property="og:image"
          content="https://ogcdn.net/c078a98b-9a33-4eaf-a5cf-e5ebf3ea450c/v1/pacific-professional.com.ng/Pacific%20Technology%20Service%20-%20Software%20Development%20Agency/Pacific%20Technology%20Service%20specializes%20in%20high-quality%20web%2C%20Android%2C%20and%20iOS%20app%20development/https%3A%2F%2Fcdn.theopengraph.com%2Fproduction%2Fdocuments%2Fd564a463-1c51-4259-991d-0d17bf3e0391.jpg%3Ftoken%3D-hKrjcO4EFDmPh0lgxSanJdH2MZ9gYnfw4V87WUckbA%26height%3D800%26width%3D1200%26expires%3D33239188519/og.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="pacific-professional.com.ng" />
        <meta
          property="twitter:url"
          content="https://www.pacific-professional.com.ng/"
        />
        <meta
          name="twitter:title"
          content="Pacific Technology Service - Software Development Agency"
        />
        <meta
          name="twitter:description"
          content="Pacific Technology Service specializes in high-quality web, Android, and iOS app development"
        />
        <meta
          name="twitter:image"
          content="https://ogcdn.net/c078a98b-9a33-4eaf-a5cf-e5ebf3ea450c/v1/pacific-professional.com.ng/Pacific%20Technology%20Service%20-%20Software%20Development%20Agency/Pacific%20Technology%20Service%20specializes%20in%20high-quality%20web%2C%20Android%2C%20and%20iOS%20app%20development/https%3A%2F%2Fcdn.theopengraph.com%2Fproduction%2Fdocuments%2Fd564a463-1c51-4259-991d-0d17bf3e0391.jpg%3Ftoken%3D-hKrjcO4EFDmPh0lgxSanJdH2MZ9gYnfw4V87WUckbA%26height%3D800%26width%3D1200%26expires%3D33239188519/og.png"
        />
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
