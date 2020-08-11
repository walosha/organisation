import React from "react";
import Link from "next/link";

export default function gallery({ data }) {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>Solutions we have created to make life easy!</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {data.map(({ image, name, slug }, key) => (
              <div key={key} className="col-sm-6 col-md-4 col-lg-4">
                <figure className="portfolio-item">
                  <Link href={`/${slug}`}>
                    <div className="hover-bg">
                      <div className="hover-text">
                        <h4>{name}</h4>
                      </div>
                      <img src={image} className="img-responsive" alt={name} />
                    </div>
                  </Link>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
