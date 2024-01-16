import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";

function ProjectDetailsPage() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Projects Details"
        title="Streamlining IT Infrastructure"
        pageName="PROJECTS DETAILS"
      />
      <div className="portfolio-details sec-mar">
        <div className="container ">
          <div className="row g-4 mb-80">
            <div className="col-lg-7">
              <div className="portfolio-img magnetic-item">
                <img
                  className="img-fluid"
                  src="assets/img/inner-pages/portfolio-dt-01.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="portfolio-img magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/img/inner-pages/portfolio-dt-02.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="portfolio-img magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/img/inner-pages/portfolio-dt-03.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-5">
            <div className="col-lg-8">
              <div className="portfolio-content">
                <h3>Projects Overview</h3>
                <p>
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Etiam eu nibh elementum, accumsan ona neque ac, aliquet nunc.
                  In eu ipsum fringilla, accumsan purus vel, pellentesque risus.
                  Vivamus vehicula nl purus at eros interdum, in dignissim nulla
                  vestibulum. Nunc sit amet finibus felis, ut egestas lacus.
                  Sedan pellentesque quis magna eu vestibulum. Ut sed commodo
                  neque. Morbi erat nisi, vehicula quis faucibus il ut,
                  hendrerit vel tortor. In pharetra lectus luctus ornare
                  sollicitudin.
                </p>
                <p>
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Etiam eu nibh elementum, accumsan ona neque ac, aliquet nunc.
                  In eu ipsum fringilla, accumsan purus vel, pellentesque risus.
                  Vivamus vehicula nl pellentesque quis magna eu vestibulum. Ut
                  sed commodo neque. Morbi erat nisi, vehicula quis faucibus il
                  ut, hendrerit vel tortor. In pharetra lectus luctus ornare
                  sollicitudin.
                </p>
                <div className="working-process">
                  <h3>Our Process</h3>
                  <div className="row g-4 justify-content-center">
                    <div className="col-xl-4 col-sm-6">
                      <div className="single-process magnetic-item">
                        <div className="icon">
                          <img
                            src="assets/img/inner-pages/research.svg"
                            alt=""
                          />
                        </div>
                        <span>Step 01</span>
                        <h3>Research</h3>
                        <p>
                          Interdum et malesuada fames ac Etiam europeat nibh
                          elementum, accumsan ona.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 col-sm-6">
                      <div className="single-process magnetic-item">
                        <div className="icon">
                          <img
                            src="assets/img/inner-pages/devlopment.svg"
                            alt=""
                          />
                        </div>
                        <span>Step 02</span>
                        <h3>Development</h3>
                        <p>
                          Interdum et malesuada fames ac Etiam europeat nibh
                          elementum, accumsan ona.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 col-sm-6">
                      <div className="single-process magnetic-item">
                        <div className="icon">
                          <img src="assets/img/inner-pages/deploy.svg" alt="" />
                        </div>
                        <span>Step 03</span>
                        <h3>Deploy</h3>
                        <p>
                          Interdum et malesuada fames ac Etiam europeat nibh
                          elementum, accumsan ona.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row g-4 mb-55">
                  <div className="col-lg-7 col-sm-6">
                    <div className="portfolio-img magnetic-item">
                      <img
                        className="img-fluid"
                        src="assets/img/inner-pages/portfolio-dt-04.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6">
                    <div className="portfolio-img magnetic-item">
                      <img
                        className="img-fluid"
                        src="assets/img/inner-pages/portfolio-dt-05.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <h3>Result</h3>
                <p>
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Etiam eu nibh elementum, accumsan ona neque ac, aliquet nunc.
                  In eu ipsum fringilla, accumsan purus vel, pellentesque risus.
                  Vivamus vehicula nl purus at eros interdum, in dignissim nulla
                  vestibulum.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="portfolio-info">
                <ul>
                  <li>
                    <span>Client:</span>
                    <h5>Argova Josen</h5>
                  </li>
                  <li>
                    <span>Company:</span>
                    <h5>Egens Lab</h5>
                  </li>
                  <li>
                    <span>Location:</span>
                    <h5>7 Lake Street, London</h5>
                  </li>
                  <li>
                    <span>Project Type:</span>
                    <h5>Desktop Mockup</h5>
                  </li>
                  <li>
                    <span>Duration:</span>
                    <h5>6 Month</h5>
                  </li>
                </ul>
              </div>
              <div className="portfolio-details-sm-banner">
                <div className="section-title-5">
                  <h2>
                    Ready to <br />
                    <span>work with us?</span>
                  </h2>
                  <div className="get-btn">
                    <Link legacyBehavior href="/contact">
                      <a className="primary-btn3">Get a quote</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="details-navigation">
                <div className="single-navigation">
                  <div className="content">
                    <Link legacyBehavior href="/project-details">
                      <a>Previous</a>
                    </Link>
                    <h4>
                      <Link legacyBehavior href="/project-details">
                        <a>Streamlining IT Infrastructure</a>
                      </Link>
                    </h4>
                  </div>
                  <Link legacyBehavior href="/project-details">
                    <a className="img">
                      <img
                        src="assets/img/inner-pages/portfolio-navigation-01.png"
                        alt=""
                      />
                      <div className="arrow">
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                        </svg>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="single-navigation two">
                  <Link legacyBehavior href="/project-details">
                    <a className="img">
                      <img
                        src="assets/img/inner-pages/portfolio-navigation-02.png"
                        alt=""
                      />
                      <div className="arrow">
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                        </svg>
                      </div>
                    </a>
                  </Link>
                  <div className="content">
                    <Link legacyBehavior href="/project-details">
                      <a>NEXT </a>
                    </Link>
                    <h4>
                      <Link legacyBehavior href="/project-details">
                        <a>Scaling Agile Development</a>
                      </Link>
                    </h4>
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

export default ProjectDetailsPage;
