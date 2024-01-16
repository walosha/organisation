import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";

function CaseStudy2page() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Case Study"
        title="From Challenge To Triumph"
        pageName="CASE STUDY"
      />
      <div className="home5-case-study sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="single-case-study wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="row g-4">
                  <div className="col-lg-5 d-flex align-items-center">
                    <div className="case-study-content">
                      <span>Web Development</span>
                      <h3>
                        <Link legacyBehavior href="/case-study-details">
                          <a>Building a Scalable Cloud Infrastructure</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="case-study-img-and-btn">
                      <div className="case-img magnetic-item">
                        <img
                          className="img-fluid"
                          src="assets/img/home-5/home5-case-01.png"
                          alt=""
                        />
                      </div>
                      <div className="learn-more-btn">
                        <Link legacyBehavior href="/case-study-details">
                          <a className="primary-btn8">
                            <svg
                              width={12}
                              height={12}
                              viewBox="0 0 13 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                            </svg>
                            LEARN MORE
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="single-case-study wow animate fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="row g-4">
                  <div className="col-lg-5 d-flex align-items-center">
                    <div className="case-study-content">
                      <span>Software development</span>
                      <h3>
                        <Link legacyBehavior href="/case-study-details">
                          <a>Leveraging Data Analytics for Business Insights</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="case-study-img-and-btn">
                      <div className="case-img magnetic-item">
                        <img
                          className="img-fluid"
                          src="assets/img/home-5/home5-case-02.png"
                          alt=""
                        />
                      </div>
                      <div className="learn-more-btn">
                        <Link legacyBehavior href="/case-study-details">
                          <a className="primary-btn8">
                            <svg
                              width={12}
                              height={12}
                              viewBox="0 0 13 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                            </svg>
                            LEARN MORE
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="single-case-study wow animate fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="row g-4">
                  <div className="col-lg-5 d-flex align-items-center">
                    <div className="case-study-content">
                      <span>Digital marketing</span>
                      <h3>
                        <Link legacyBehavior href="/case-study-details">
                          <a>
                            Optimizing IT Infrastructure for Cost Efficiency
                          </a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="case-study-img-and-btn">
                      <div className="case-img magnetic-item">
                        <img
                          className="img-fluid"
                          src="assets/img/home-5/home5-case-03.png"
                          alt=""
                        />
                      </div>
                      <div className="learn-more-btn">
                        <Link legacyBehavior href="/case-study-details">
                          <a className="primary-btn8">
                            <svg
                              width={12}
                              height={12}
                              viewBox="0 0 13 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                            </svg>
                            LEARN MORE
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="single-case-study wow animate fadeInUp"
                data-wow-delay="500ms"
                data-wow-duration="1500ms"
              >
                <div className="row g-4">
                  <div className="col-lg-5 d-flex align-items-center">
                    <div className="case-study-content">
                      <span>Data analytics</span>
                      <h3>
                        <Link legacyBehavior href="/case-study-details">
                          <a>Enhancing Customer Engagement</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="case-study-img-and-btn">
                      <div className="case-img magnetic-item">
                        <img
                          className="img-fluid"
                          src="assets/img/home-5/home5-case-04.png"
                          alt=""
                        />
                      </div>
                      <div className="learn-more-btn">
                        <Link legacyBehavior href="/case-study-details">
                          <a className="primary-btn8">
                            <svg
                              width={12}
                              height={12}
                              viewBox="0 0 13 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                            </svg>
                            LEARN MORE
                          </a>
                        </Link>
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

export default CaseStudy2page;
