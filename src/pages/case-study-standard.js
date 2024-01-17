import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";

function CaseStudyStandardPage() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Case Study Standard"
        title="From Challenge To Triumph"
        pageName="CASE STUDY STANDARD"
      />
      <div className="case-study-pages sec-mar">
        <div className="container">
          <div className="row gy-5 mb-60 justify-content-center">
            <div className="col-lg-8">
              <div className="case-study-wrap">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="case-img magnetic-item">
                      <img
                        className="img-fluid"
                        src="assets/img/inner-pages/case-img-01.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 d-flex align-items-center">
                    <div className="case-content">
                      <span>CLOUD HOSTING</span>
                      <h3>
                        <Link legacyBehavior href="/case-study-details">
                          <a>
                            Transforming Challenges into Success Stories: A
                            Software Agency Case Study
                          </a>
                        </Link>
                      </h3>
                      <p>
                        Explore how our innovative solutions and strategic
                        approach helped a client overcome unique challenges,
                        achieve operational excellence, and propel their
                        business to new heights. This case study delves into the
                        collaboration, strategies employed, and the impactful
                        results that showcase the power of tailored software
                        solutions.
                      </p>
                      <div className="learn-btn">
                        <Link legacyBehavior href="/case-study-details">
                          <a className="primary-btn9">
                            <span>Learn More</span>
                            <svg
                              width={16}
                              height={14}
                              viewBox="0 0 16 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M8 0.5L15 7.5M15 7.5L8 13.5M15 7.5L1.30274e-07 7.5" />
                            </svg>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="load-more-btn">
                <Link legacyBehavior href="/case-study-standard">
                  <a className="primary-btn3">Load More </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CaseStudyStandardPage;
