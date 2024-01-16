import Link from "next/link";
import React from "react";

function Choose6() {
  return (
    <div className="home6-choose-section sec-mar">
      <div className="container">
        <div className="row">
          <div className="choose-top">
            <div className="row">
              <div
                className="col-lg-6 wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="choose-title">
                  <span>Why Choose Us</span>
                  <h2>Unlock the potential of your business.</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="choose-right-img magnetic-item">
                  <img
                    className="img-fluid"
                    src="assets/img/home-6/choose-img-1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="choose-btm">
            <div className="row  g-lg-4 gy-5">
              <div className="col-lg-7">
                <div className="choose-left-content">
                  <div className="vectors">
                    <img
                      className="choose-vec-top-r"
                      src="assets/img/home-6/choose-vec-top-r.svg"
                      alt=""
                    />
                    <img
                      className="choose-vec-btm-l"
                      src="assets/img/home-6/choose-vec-btm-l.svg"
                      alt=""
                    />
                  </div>
                  <div className="icon">
                    <img src="assets/img/logo.svg" alt="" />
                  </div>
                  <h4>
                    Best Creative IT Agency And Solutions <br />
                    <span>Since 2005.</span>
                  </h4>
                  <p>
                    Morbi interdum pellentesque nunc, luctus pretium nullagoneq
                    luctus at. Aliquam cursus nunc arcu, condimentum
                    efficiturunt tellus iaculis faucibus Quisque gravida.
                  </p>
                  <div className="sl">
                    <h2>#1</h2>
                  </div>
                  <div className="about-btn">
                    <Link legacyBehavior href="/about">
                      <a>
                        <svg
                          width={7}
                          height={7}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                        </svg>
                        About More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="choose-feature">
                  <ul>
                    <li>
                      <div className="single-feature">
                        <div className="progress">
                          <h3>
                            <span className="counter">70</span>%
                          </h3>
                        </div>
                        <div className="content">
                          <h4>Strategy</h4>
                          <p>
                            Morbi interdum pellentesque nunc, luctuso pretium
                            nullagoneq luctus at. Aliquam one cursus nunc arcu
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-feature">
                        <div className="progress">
                          <h3>
                            <span className="counter">98</span>%
                          </h3>
                        </div>
                        <div className="content">
                          <h4>Audience</h4>
                          <p>
                            Morbi interdum pellentesque nunc, luctuso pretium
                            nullagoneq luctus at. Aliquam one cursus nunc arcu
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-feature">
                        <div className="progress">
                          <h3>
                            <span className="counter">85</span>%
                          </h3>
                        </div>
                        <div className="content">
                          <h4>Keyword</h4>
                          <p>
                            Morbi interdum pellentesque nunc, luctuso pretium
                            nullagoneq luctus at. Aliquam one cursus nunc arcu
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose6;
