import BlogBanner from "../components/blog/BlogBanner";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import React from "react";

function BlogMasonaryPage() {
  return (
    <Layout>
      <Breadcrumb
        pageList="BLOG MASONARY"
        title="Exploring The Pacific-tech Blog"
        pageName="Blog Masonary"
      />
      <BlogBanner />
      <div className="blog-masonary-area sec-mar">
        <div className="container">
          <div className="row divider justify-content-lg-between justify-content-center g-lg-4 gy-5">
            <div
              className="col-lg-5 col-md-6 wow animate fadeInLeft"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="single-blog magnetic-item">
                <div className="blog-img">
                  <img
                    className="img-fluid"
                    src="assets/img/home-3/home3-blog-01.png"
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
                      <a>Donec finibus laoreet exte eu pellentesque. </a>
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
                          <a href="https://twitter.com/">
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
            <div
              className="col-lg-5 col-md-6 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="single-blog magnetic-item">
                <div className="blog-img">
                  <img
                    className="img-fluid"
                    src="assets/img/home-3/home3-blog-02.png"
                    alt=""
                  />
                  <div className="blog-tag">
                    <Link legacyBehavior href="/blog">
                      <a>Cloud solutions</a>
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
                      <a>feugiat varius mattis mass enim est egestas.</a>
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
                          <a href="https://twitter.com/">
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
            <div
              className="col-lg-5 col-md-6 wow animate fadeInRight"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="single-blog magnetic-item">
                <div className="blog-img">
                  <img
                    className="img-fluid"
                    src="assets/img/home-3/home3-blog-03.png"
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
                      <a>Navigating the Journey off Cloud Solution.</a>
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
                          <a href="https://twitter.com/">
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
            <div
              className="col-lg-5 col-md-6 wow animate fadeInLeft"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="single-blog magnetic-item">
                <div className="blog-img">
                  <img
                    className="img-fluid"
                    src="assets/img/home-3/home3-blog-01.png"
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
                      <a>Donec finibus laoreet exte eu pellentesque. </a>
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
                          <a href="https://twitter.com/">
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
            <div
              className="col-lg-5 col-md-6 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="single-blog magnetic-item">
                <div className="blog-img">
                  <img
                    className="img-fluid"
                    src="assets/img/home-3/home3-blog-02.png"
                    alt=""
                  />
                  <div className="blog-tag">
                    <Link legacyBehavior href="/blog">
                      <a>Cloud solutions</a>
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
                      <a>feugiat varius mattis mass enim est egestas.</a>
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
                          <a href="https://twitter.com/">
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
            <div
              className="col-lg-5 col-md-6 wow animate fadeInRight"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="single-blog magnetic-item">
                <div className="blog-img">
                  <img
                    className="img-fluid"
                    src="assets/img/home-3/home3-blog-03.png"
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
                      <a>Navigating the Journey off Cloud Solution.</a>
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
                          <a href="https://twitter.com/">
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
          <div className="row">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link">
                    <i className="bi bi-arrow-left" />
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link active" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="bi bi-arrow-right" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogMasonaryPage;
