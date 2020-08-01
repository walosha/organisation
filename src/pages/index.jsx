import React, { Fragment } from "react";
import Head from "next/head";
import Navigation from "../components/navigation";
import Header from "../components/header";
import Features from "../components/features";
import About from "../components/about";
import Services from "../components/services";
import Gallery from "../components/gallery";
import Testimonials from "../components/testimonials";
import Team from "../components/Team";
import Contact from "../components/contact";
import content from "../data/data.json";

function App({ landingPageData }) {
  return (
    <Fragment>
      <Head>
        <meta
          property="og:title"
          content="Mobile,desktop,web applications company"
        />
        <meta property="og:site_name" content="Pacific Professional Service" />
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Pacific Professional Service" />
        <meta
          name="description"
          content="We are a web & app development company that turns your ideas into a new driving force of your business. We hire brilliant web and mobile app developer"
        />
        <meta
          name="keywords"
          content="software company, corporate software,web application, mobile applications,desktop application cloud application,software maintenance"
        />
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
        <title>Pacific Professional</title>
        <meta name="description" content="" />
        <meta
          name="Pacific Professional"
          content="Web design software company"
        />
        {/* Chat Bots for App */}
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `
                    (function (w, d) {
                      w.CollectId = "5f026972c75904544dab3951";
                      var h = d.head || d.getElementsByTagName("head")[0];
                      var s = d.createElement("script");
                      s.setAttribute("type", "text/javascript");
                      s.setAttribute("src", "https://collectcdn.com/launcher.js");
                      h.appendChild(s);
                    })(window, document);
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
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </Fragment>
  );
}
export async function getStaticProps() {
  return {
    props: {
      landingPageData: content,
    },
  };
}

export default App;
