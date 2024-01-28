import React from "react";
import Footer3 from "../footer/Footer3";
import Header from "../header/Header3";
import useBodyClass from "@/hooks/useBodyClass";
import Head from "next/head";

function Layout({ children }) {
  useBodyClass("home-dark2");
  return (
    <>
      <Head>
        <title>
          Pacific Technology Service | Lagos | Website, Android, and iOS App
          Development
        </title>
        <meta
          name="description"
          content="Pacific Technology Service specializes in high-quality web, Android, and iOS app development in Lagos. Elevate your business with our expert solutions. Contact us for innovative digital experiences. (08114890462)"
        />
        <link rel="icon" href="/assets/img/logo_small_light.png" />
      </Head>
      <Header />
      {children}
      <Footer3 />
    </>
  );
}

export default Layout;
