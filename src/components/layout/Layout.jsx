import React from "react";
import Footer3 from "../footer/Footer3";
import Header from "../header/Header3";
import useBodyClass from "@/hooks/useBodyClass";
import Head from "next/head";
import { constructMetadata } from "@/utils/metadata";

export const metadata = constructMetadata();

function Layout({ children }) {
  useBodyClass("home-dark2");
  return (
    <>
      <Head>
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

        <link rel="icon" href="/assets/img/logo_small_light.png" />
      </Head>
      <Header />
      {children}
      <Footer3 />
    </>
  );
}

export default Layout;
