import React, { Fragment, useEffect } from "react";
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
import landingPageData from "../data/data.json";

function App({ landingPageData }) {
  useEffect(() => {
    const links = document.querySelectorAll(".page-scroll");
    for (const link of links) {
      link.addEventListener("click", smoothScroll);
    }
  });

  function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    if (href && href.startsWith("#")) {
      const offsetTop = document.querySelector(href).offsetTop;
      window.scroll({
        top: offsetTop,
        behavior: "smooth",
      });
      return;
    }
  }
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pacific Professional</title>
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
      landingPageData,
    },
  };
}

export default App;
