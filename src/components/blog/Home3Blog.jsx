import Link from "next/link";
import React from "react";

function Home3Blog() {
  return (
    <div className="home3-blog-area sec-mar">
      <div className="container">
        <div
          className="row mb-55  wow animate fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="section-title-3 text-center">
              <h2>The Latest Article</h2>
              <p>
                Services are professional offerings provided by businesses to
                meet specific needs or solve problems for their customers.
                Services can range from your budject.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-lg-4 gy-5">
          <div
            className="col-lg-4 col-md-6 wow animate fadeInLeft"
            data-wow-delay="300ms"
            data-wow-duration="1500ms"
          >
            <div className="single-blog magnetic-item">
              <div className="blog-img">
                <img
                  className="img-fluid"
                  src="assets/img/inner-pages/blog-dt-01.png"
                  alt=""
                />
                <div className="blog-tag">
                  <Link legacyBehavior href="/blog">
                    <a>Web development</a>
                  </Link>
                </div>
              </div>
              <div className="blog-content">
                <ul className="blog-meta">
                  <li>
                    <Link legacyBehavior href="/blog">
                      <a>May 20, 2023</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/blog">
                      <a>Comment (3)</a>
                    </Link>
                  </li>
                </ul>
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      Emerging Trends in Mobile App Development: What You Need
                      to Know{" "}
                    </a>
                  </Link>
                </h4>
                <div className="blog-footer">
                  <div className="read-btn">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        Read More
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                        </svg>
                      </a>
                    </Link>
                  </div>
                  <div className="social-area">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/pacific_nig">
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/">
                          <i className="bx bxl-pinterest-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="bx bxl-instagram" />
                        </a>
                      </li>
                    </ul>
                    <span>
                      <img src="assets/img/home-3/plain-icon.svg" alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home3Blog;
