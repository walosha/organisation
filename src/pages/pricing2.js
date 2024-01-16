import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import React from "react";

function Pricing2Page() {
  return (
    <Layout>
      <Breadcrumb pageList="Pricing" title="Pricing Plan" pageName="PRICING" />
      <div className="home4-pricing-plan">
        <div className="container-fluid">
          <div
            className="row wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="col-lg-12">
              <div className="section-title-4 two text-center">
                <h2>Choose Your Plan</h2>
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Billed Monthly
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Billed Yearly
                      <span>-20 Off</span>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                  tabIndex={0}
                >
                  <div className="row g-4 align-items-center justify-content-center">
                    <div
                      className="col-xl-4 col-md-6 wow animate fadeInLeft"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="pricing-card">
                        <div className="pricing-top">
                          <span>Basic Plan</span>
                          <h2>
                            <sup>$</sup>29<sub>/month</sub>
                          </h2>
                        </div>
                        <div className="pricing-content">
                          <ul>
                            <li>
                              Email &amp; communication services
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                            <li>
                              Basic data backup and storage
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                            <li>
                              Standard security measuresimg
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                            <li>
                              Limited software support
                              <img src="assets/img/home-4/cross.svg" alt="" />
                            </li>
                            <li>
                              Suitable for small businesses
                              <img src="assets/img/home-4/cross.svg" alt="" />
                            </li>
                          </ul>
                          <div className="pay-btn">
                            <a className="primary-btn3" href="#">
                              Pay Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-xl-4 col-md-6 wow animate fadeInUp"
                      data-wow-delay="400ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="pricing-card two">
                        <div className="pricing-top">
                          <span>Premium Plan </span>
                          <h2>
                            <sup>$</sup>49<sub>/month</sub>
                          </h2>
                        </div>
                        <div className="pricing-content">
                          <ul>
                            <li>
                              Email &amp; communication services
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                            <li>
                              Basic data backup and storage
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                            <li>
                              Standard security measuresimg
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                            <li>
                              Limited software support
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                            <li>
                              Suitable for small businesses
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                          </ul>
                          <div className="pay-btn">
                            <a className="primary-btn3" href="#">
                              Pay Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-xl-4 col-md-6 wow animate fadeInRight"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="pricing-card">
                        <div className="pricing-top">
                          <span>Enterprise Plan</span>
                          <h2>
                            <sup>$</sup>89<sub>/month</sub>
                          </h2>
                        </div>
                        <div className="pricing-content">
                          <ul>
                            <li>
                              Email &amp; communication services
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                            <li>
                              Basic data backup and storage
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                            <li>
                              Standard security measuresimg
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                            <li>
                              Limited software support
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                            <li>
                              Suitable for small businesses
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                          </ul>
                          <div className="pay-btn">
                            <a className="primary-btn3" href="#">
                              Pay Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  tabIndex={0}
                >
                  <div className="row g-4 align-items-center justify-content-center">
                    <div className="col-xl-4 col-md-6">
                      <div className="pricing-card">
                        <div className="pricing-top">
                          <span>Basic Plan</span>
                          <h2>
                            <sup>$</sup>290<sub>/year</sub>
                          </h2>
                        </div>
                        <div className="pricing-content">
                          <ul>
                            <li>
                              Email &amp; communication services
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                            <li>
                              Basic data backup and storage
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                            <li>
                              Standard security measuresimg
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                            <li>
                              Limited software support
                              <img src="assets/img/home-4/cross.svg" alt="" />
                            </li>
                            <li>
                              Suitable for small businesses
                              <img src="assets/img/home-4/cross.svg" alt="" />
                            </li>
                          </ul>
                          <div className="pay-btn">
                            <a className="primary-btn3" href="#">
                              Pay Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="pricing-card two">
                        <div className="pricing-top">
                          <span>Premium Plan </span>
                          <h2>
                            <sup>$</sup>490<sub>/year</sub>
                          </h2>
                        </div>
                        <div className="pricing-content">
                          <ul>
                            <li>
                              Email &amp; communication services
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                            <li>
                              Basic data backup and storage
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                            <li>
                              Standard security measuresimg
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                            <li>
                              Limited software support
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                            <li>
                              Suitable for small businesses
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                          </ul>
                          <div className="pay-btn">
                            <a className="primary-btn3" href="#">
                              Pay Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="pricing-card">
                        <div className="pricing-top">
                          <span>Enterprise Plan</span>
                          <h2>
                            <sup>$</sup>890<sub>/year</sub>
                          </h2>
                        </div>
                        <div className="pricing-content">
                          <ul>
                            <li>
                              Email &amp; communication services
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                            <li>
                              Basic data backup and storage
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                            <li>
                              Standard security measuresimg
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                            <li>
                              Limited software support
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                            <li>
                              Suitable for small businesses
                              <img src="assets/img/home-4/check.svg" alt="" />
                            </li>
                          </ul>
                          <div className="pay-btn">
                            <a className="primary-btn3" href="#">
                              Pay Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Pricing2Page;
