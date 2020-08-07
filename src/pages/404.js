import React, { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import Navigation from "../components/navigation";

export default function _error() {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>401 Error</title>
      </Head>
      <Navigation hideNav />
      <div
        style={{
          marginTop: "20rem",
          textAlign: "center",
        }}
      >
        <h1>Sorry, This page does not exist</h1>
        <Link href="/">
          <a href="/">
            <style jsx>{`
              a {
                display: inline-block;
                padding: 0.7rem 1.3rem;
                font-size: 2.1rem;
                color: #fff;
                background: #6470fb;
                border-radius: 5px;
              }
            `}</style>
            Back to Home
          </a>
        </Link>
      </div>
    </Fragment>
  );
}
