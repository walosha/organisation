import Link from "next/link";
import React from "react";

function Breadcrumb({ title, pageName, pageList }) {
  return (
    <section className="breadcrumbs">
      <div className="breadcrumb-sm-images"></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-wrapper">
              <div className="breadcrumb-cnt">
                <span>{pageName}</span>
                <h1>"{title}"</h1>
                <div className="breadcrumb-list">
                  <Link legacyBehavior href="/">
                    <a>Home</a>
                  </Link>
                  <img
                    src="assets/img/inner-pages/breadcrumb-arrow.svg"
                    alt=""
                  />
                  {pageList}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Breadcrumb;
