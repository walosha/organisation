import BlogBanner from "../components/blog/BlogBanner";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import React from "react";

function BlogStandardPage() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Blog Standard"
        title="Exploring The Pacific-tech Blog"
        pageName="BLOG STANDARD"
      />
      <BlogBanner />
      <div className="home3-blog-area sec-mar">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="row g-lg-4 gy-5">
                <div
                  className="col-md-12 wow animate fadeInLeft"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-blog magnetic-item">
                    <div className="blog-img">
                      <img
                        className="img-fluid"
                        src="assets/img/inner-pages/blog-standard-01.png"
                        alt=""
                      />
                      <div className="blog-tag">
                        <Link legacyBehavior href="/blog-standard">
                          <a>Web development</a>
                        </Link>
                      </div>
                    </div>
                    <div className="blog-content">
                      <ul className="blog-meta">
                        <li>
                          <Link legacyBehavior href="/blog-standard">
                            <a>May 20, 2023</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/blog-standard">
                            <a>Comment (3)</a>
                          </Link>
                        </li>
                      </ul>
                      <h4>
                        <Link legacyBehavior href="/blog-details">
                          <a>Donec finibus laoreet exte eu pellentesque.</a>
                        </Link>
                      </h4>
                      <p>
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus. Etiam eu nibh elementum, accumsan ona neque
                        ac, aliquet nunc. In eu ipsum fringilla.
                      </p>
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
                            <img
                              src="assets/img/home-3/plain-icon.svg"
                              alt=""
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-12 wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-blog magnetic-item">
                    <div className="blog-img">
                      <img
                        className="img-fluid"
                        src="assets/img/inner-pages/blog-standard-02.png"
                        alt=""
                      />
                      <div className="blog-tag">
                        <Link legacyBehavior href="/blog-standard">
                          <a>Cloud solutions</a>
                        </Link>
                      </div>
                    </div>
                    <div className="blog-content">
                      <ul className="blog-meta">
                        <li>
                          <Link legacyBehavior href="/blog-standard">
                            <a>May 20, 2023</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/blog-standard">
                            <a>Comment (3)</a>
                          </Link>
                        </li>
                      </ul>
                      <h4>
                        <Link legacyBehavior href="/blog-details">
                          <a>feugiat varius mattis mass enim est egestas.</a>
                        </Link>
                      </h4>
                      <p>
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus. Etiam eu nibh elementum, accumsan ona neque
                        ac, aliquet nunc. In eu ipsum fringilla.
                      </p>
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
                            <img
                              src="assets/img/home-3/plain-icon.svg"
                              alt=""
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-12 wow animate fadeInRight"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-blog magnetic-item">
                    <div className="blog-img">
                      <img
                        className="img-fluid"
                        src="assets/img/inner-pages/blog-standard-03.png"
                        alt=""
                      />
                      <div className="blog-tag">
                        <Link legacyBehavior href="/blog-standard">
                          <a>Web development</a>
                        </Link>
                      </div>
                    </div>
                    <div className="blog-content">
                      <ul className="blog-meta">
                        <li>
                          <Link legacyBehavior href="/blog-standard">
                            <a>May 20, 2023</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/blog-standard">
                            <a>Comment (3)</a>
                          </Link>
                        </li>
                      </ul>
                      <h4>
                        <Link legacyBehavior href="/blog-details">
                          <a>Navigating the Journey off Cloud Solution.</a>
                        </Link>
                      </h4>
                      <p>
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus. Etiam eu nibh elementum, accumsan ona neque
                        ac, aliquet nunc. In eu ipsum fringilla.
                      </p>
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
                            <img
                              src="assets/img/home-3/plain-icon.svg"
                              alt=""
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-12 wow animate fadeInLeft"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-blog magnetic-item">
                    <div className="blog-img">
                      <img
                        className="img-fluid"
                        src="assets/img/inner-pages/blog-standard-04.png"
                        alt=""
                      />
                      <div className="blog-tag">
                        <Link legacyBehavior href="/blog-standard">
                          <a>Web development</a>
                        </Link>
                      </div>
                    </div>
                    <div className="blog-content">
                      <ul className="blog-meta">
                        <li>
                          <Link legacyBehavior href="/blog-standard">
                            <a>May 20, 2023</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/blog-standard">
                            <a>Comment (3)</a>
                          </Link>
                        </li>
                      </ul>
                      <h4>
                        <Link legacyBehavior href="/blog-details">
                          <a>Donec finibus laoreet exte eu pellentesque. </a>
                        </Link>
                      </h4>
                      <p>
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus. Etiam eu nibh elementum, accumsan ona neque
                        ac, aliquet nunc. In eu ipsum fringilla.
                      </p>
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
                            <img
                              src="assets/img/home-3/plain-icon.svg"
                              alt=""
                            />
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
            <div className="col-lg-4">
              <div className="widget-area">
                <div className="single-widgets widget_search">
                  <form>
                    <div className="wp-block-search__inside-wrapper ">
                      <input
                        type="search"
                        id="wp-block-search__input-1"
                        className="wp-block-search__input"
                        name="s"
                        placeholder="Search Here"
                      />
                      <button
                        type=""
                        className="wp-block-search__button primary-btn3"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
                <div className="single-widgets widget_egns_categoris">
                  <div className="widget-title">
                    <h4>Category</h4>
                  </div>
                  <ul className="wp-block-categoris-cloud">
                    <li>
                      <Link legacyBehavior href="/blog">
                        <a>
                          <span>Web Design</span>{" "}
                          <span className="number-of-categoris">(30)</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog">
                        <a>
                          <span>Apps Development</span>{" "}
                          <span className="number-of-categoris">(18)</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog">
                        <a>
                          <span>Software Development</span>{" "}
                          <span className="number-of-categoris">(21)</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog">
                        <a>
                          <span>Motion Graphics</span>{" "}
                          <span className="number-of-categoris">(25)</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog">
                        <a>
                          <span>UI/UX Design</span>{" "}
                          <span className="number-of-categoris">(29)</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="single-widgets widget_egns_recent_post">
                  <div className="widget-title">
                    <h4>Newest Posts</h4>
                  </div>
                  <div className="recent-post-wraper">
                    <div className="widget-cnt">
                      <div className="wi">
                        <Link legacyBehavior href="/blog-details">
                          <a>
                            <img
                              src="assets/img/inner-pages/blog-sidebar-1.png"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="wc">
                        <h6>
                          <Link legacyBehavior href="/blog-details">
                            <a>Grant Distributions Conti nu to Incr Ease.</a>
                          </Link>
                        </h6>
                        <Link legacyBehavior href="/blog">
                          <a>May 18, 2023</a>
                        </Link>
                      </div>
                    </div>
                    <div className="widget-cnt">
                      <div className="wi">
                        <Link legacyBehavior href="/blog-details">
                          <a>
                            <img
                              src="assets/img/inner-pages/blog-sidebar-2.png"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="wc">
                        <h6>
                          <Link legacyBehavior href="/blog-details">
                            <a>Distributions Conti nu to grant Incr Ease.</a>
                          </Link>
                        </h6>
                        <Link legacyBehavior href="/blog">
                          <a>May 15, 2023</a>
                        </Link>
                      </div>
                    </div>
                    <div className="widget-cnt">
                      <div className="wi">
                        <Link legacyBehavior href="/blog-details">
                          <a>
                            <img
                              src="assets/img/inner-pages/blog-sidebar-3.png"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="wc">
                        <h6>
                          <Link legacyBehavior href="/blog-details">
                            <a>Conti nu to Incr Ease malesuada sapien sed.</a>
                          </Link>
                        </h6>
                        <Link legacyBehavior href="/blog">
                          <a>May 14, 2023</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-widgets widget_egns_tag">
                  <div className="widget-title">
                    <h4>All Tag</h4>
                  </div>
                  <p className="wp-block-tag-cloud">
                    <Link legacyBehavior href="/blog">
                      <a>Website</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>Web Design</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>Development</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>Graphic Design</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>Graphic</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>UI/UX Design</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>Activities</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>Software Design</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>3D Design</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogStandardPage;
