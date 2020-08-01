import React from "react";
import "./css/bootstrap.css";
import "./css/bootstrap.min.css";
import "./css/main.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
