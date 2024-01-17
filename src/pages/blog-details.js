import BlogBanner from "../components/blog/BlogBanner";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import React from "react";

function BlogDetailsPage() {
  return (
    <Layout>
      <Breadcrumb
        pageList="BLOG MASONARY"
        title="Exploring The Pacific-tech Blog"
        pageName="Blog"
      />
      <BlogBanner />
      <div className="bolog-details-area sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="post-thumb magnetic-item">
                <img
                  className="img-fluid"
                  src="assets/img/inner-pages/blog-dt-01.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="blog-details-content">
                <span>Software</span>
                <h2>Insights Of Exploring Technology</h2>
                <div className="author-and-meta">
                  <div className="author-area">
                    <div className="author-img">
                      <img src="assets/img/home-3/wale.jpeg" alt="" />
                    </div>
                    <div className="author-content">
                      <h6>
                        By, <span>Olawale Afuye</span>
                      </h6>
                    </div>
                  </div>
                  <ul className="blog-meta">
                    <li>
                      <svg
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 0C3.60594 0 0 3.60594 0 8C0 12.3941 3.60594 16 8 16C12.3941 16 16 12.3941 16 8C16 3.60594 12.3941 0 8 0ZM11.646 3.69106C11.8291 3.508 12.1259 3.508 12.3089 3.69106C12.492 3.87413 12.492 4.17091 12.3089 4.35397C12.1259 4.53703 11.8291 4.53703 11.646 4.35397C11.463 4.17091 11.463 3.87413 11.646 3.69106ZM7.53125 2.375C7.53125 2.11591 7.74091 1.90625 8 1.90625C8.25909 1.90625 8.46875 2.11591 8.46875 2.375V3.3125C8.46875 3.57159 8.25909 3.78125 8 3.78125C7.74091 3.78125 7.53125 3.57159 7.53125 3.3125V2.375ZM2.375 8.46875C2.11591 8.46875 1.90625 8.25909 1.90625 8C1.90625 7.74091 2.11591 7.53125 2.375 7.53125H3.3125C3.57159 7.53125 3.78125 7.74091 3.78125 8C3.78125 8.25909 3.57159 8.46875 3.3125 8.46875H2.375ZM4.35397 12.3089C4.17091 12.492 3.87413 12.492 3.69106 12.3089C3.508 12.1259 3.508 11.8291 3.69106 11.646C3.87413 11.4629 4.17091 11.4629 4.35397 11.646C4.53703 11.8291 4.53703 12.1259 4.35397 12.3089ZM4.35397 4.35397C4.17091 4.53703 3.87413 4.53703 3.69106 4.35397C3.508 4.17091 3.508 3.87413 3.69106 3.69106C3.87413 3.508 4.17091 3.508 4.35397 3.69106C4.53703 3.87413 4.53703 4.17091 4.35397 4.35397ZM8.46875 13.625C8.46875 13.8841 8.25909 14.0938 8 14.0938C7.74091 14.0938 7.53125 13.8841 7.53125 13.625V12.6875C7.53125 12.4284 7.74091 12.2188 8 12.2188C8.25909 12.2188 8.46875 12.4284 8.46875 12.6875V13.625ZM11.1439 11.1439C10.9608 11.327 10.6642 11.327 10.4811 11.1439L7.66856 8.33141C7.58069 8.24353 7.53125 8.1245 7.53125 8V5.1875C7.53125 4.92841 7.74091 4.71875 8 4.71875C8.25909 4.71875 8.46875 4.92841 8.46875 5.1875V7.80591L11.1439 10.4811C11.327 10.6642 11.327 10.9608 11.1439 11.1439ZM12.3089 12.3089C12.1259 12.492 11.8291 12.492 11.646 12.3089C11.463 12.1259 11.463 11.8291 11.646 11.646C11.8291 11.4629 12.1259 11.4629 12.3089 11.646C12.492 11.8291 12.492 12.1259 12.3089 12.3089ZM14.0938 8C14.0938 8.25909 13.8841 8.46875 13.625 8.46875H12.6875C12.4284 8.46875 12.2188 8.25909 12.2188 8C12.2188 7.74091 12.4284 7.53125 12.6875 7.53125H13.625C13.8841 7.53125 14.0938 7.74091 14.0938 8Z"></path>
                      </svg>
                      5 Jan, 2022
                    </li>
                    <li>
                      <svg
                        viewBox="0 0 11 14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.15888 13.1844C8.73336 10.6029 8.07416 7.35423 5.59136 5.46029C5.58991 5.45922 5.58846 5.45788 5.5873 5.45708L5.59803 5.48172L5.59629 5.5002C6.08003 6.68033 6.01217 7.97589 5.41793 9.08745L4.99915 9.87117L4.87068 9.00522C4.78338 8.41784 4.54354 7.85751 4.17407 7.3778H4.11578L4.08503 7.29744C4.08938 8.19499 3.88464 9.07915 3.48297 9.91322C2.95602 11.0047 3.03345 12.2633 3.69033 13.2806L4.14362 13.9829L3.3281 13.6647C1.98331 13.1399 0.908237 12.1291 0.378384 10.8914C-0.215271 9.50931 -0.105357 7.90679 0.672747 6.6056C1.07847 5.92875 1.36269 5.21012 1.51784 4.46926L1.66952 3.74314L2.0564 4.39079C2.24113 4.69961 2.37715 5.03388 2.46154 5.38503L2.47024 5.39333L2.47923 5.44958L2.48765 5.44717C3.64654 4.02518 4.34083 2.25579 4.44204 0.464176L4.46814 0L4.88982 0.253917C6.61075 1.28967 7.80589 2.95139 8.17508 4.81853L8.18349 4.85684L8.18784 4.86273L8.20669 4.83809C8.54398 4.42668 8.72204 3.93732 8.72204 3.42226V2.62461L9.2432 3.26048C10.4549 4.73845 11.0761 6.57185 10.9926 8.42319C10.8899 10.6024 9.6031 12.5151 7.5501 13.5514L6.66121 14L7.15888 13.1844Z"></path>
                      </svg>
                      1.5K View
                    </li>
                    <li>
                      <svg
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.5662 14.9619C14.5908 15.0728 14.5903 15.1878 14.5648 15.2986C14.5393 15.4093 14.4895 15.513 14.419 15.6021C14.3484 15.6912 14.2589 15.7635 14.157 15.8136C14.055 15.8638 13.9432 15.8906 13.8295 15.8922C13.7123 15.8916 13.5967 15.8643 13.4916 15.8124L12.1473 15.1555C10.8911 15.6143 9.51546 15.6277 8.25052 15.1936C6.98557 14.7595 5.90806 13.9042 5.19824 12.7708C6.14928 12.8941 7.11563 12.8159 8.03447 12.5413C8.95331 12.2667 9.80408 11.8018 10.5315 11.1768C11.2589 10.5518 11.8466 9.78079 12.2565 8.91379C12.6664 8.0468 12.8892 7.10326 12.9106 6.14449C12.911 5.70944 12.8664 5.27551 12.7777 4.84961C13.6869 5.29062 14.4601 5.96909 15.0156 6.81329C15.571 7.65749 15.8881 8.63608 15.9332 9.64561C15.9633 10.4111 15.8336 11.1744 15.5525 11.887C15.2714 12.5996 14.845 13.2459 14.3004 13.7847L14.5662 14.9619Z"></path>
                        <path d="M6.0757 0.216195C4.48484 0.198449 2.95187 0.812289 1.81293 1.92312C0.673981 3.03395 0.0220199 4.5511 1.29169e-06 6.1419C-0.000538167 6.94954 0.167902 7.74837 0.494497 8.48703C0.821091 9.22569 1.29861 9.88786 1.89638 10.431L1.65183 11.7365C1.63148 11.8461 1.63545 11.9588 1.66346 12.0668C1.69147 12.1747 1.74285 12.2751 1.81395 12.361C1.88505 12.4469 1.97414 12.5161 2.07493 12.5638C2.17572 12.6114 2.28575 12.6364 2.39724 12.6368C2.52333 12.6366 2.64739 12.6052 2.75837 12.5453L4.19679 11.7726C4.8041 11.9674 5.43791 12.067 6.0757 12.068C7.66662 12.0857 9.19965 11.4718 10.3386 10.3609C11.4776 9.25002 12.1295 7.73277 12.1514 6.1419C12.1294 4.5511 11.4774 3.03395 10.3385 1.92312C9.19953 0.812289 7.66656 0.198449 6.0757 0.216195ZM3.79731 7.05136C3.64711 7.05136 3.50027 7.00681 3.37538 6.92336C3.25049 6.83991 3.15314 6.7213 3.09566 6.58253C3.03818 6.44375 3.02314 6.29105 3.05244 6.14373C3.08175 5.99641 3.15408 5.86109 3.26029 5.75487C3.36651 5.64866 3.50183 5.57633 3.64915 5.54702C3.79647 5.51772 3.94917 5.53276 4.08795 5.59024C4.22672 5.64772 4.34533 5.74507 4.42878 5.86996C4.51223 5.99485 4.55678 6.14169 4.55678 6.29189C4.55678 6.49332 4.47676 6.68649 4.33433 6.82891C4.19191 6.97134 3.99874 7.05136 3.79731 7.05136ZM6.0757 7.05136C5.92549 7.05136 5.77866 7.00681 5.65377 6.92336C5.52887 6.83991 5.43153 6.7213 5.37405 6.58253C5.31657 6.44375 5.30153 6.29105 5.33083 6.14373C5.36013 5.99641 5.43247 5.86109 5.53868 5.75487C5.64489 5.64866 5.78022 5.57633 5.92754 5.54702C6.07486 5.51772 6.22756 5.53276 6.36633 5.59024C6.50511 5.64772 6.62372 5.74507 6.70717 5.86996C6.79062 5.99485 6.83516 6.14169 6.83516 6.29189C6.83516 6.49332 6.75515 6.68649 6.61272 6.82891C6.47029 6.97134 6.27712 7.05136 6.0757 7.05136ZM8.35409 7.05136C8.20388 7.05136 8.05704 7.00681 7.93215 6.92336C7.80726 6.83991 7.70992 6.7213 7.65244 6.58253C7.59495 6.44375 7.57991 6.29105 7.60922 6.14373C7.63852 5.99641 7.71085 5.86109 7.81707 5.75487C7.92328 5.64866 8.0586 5.57633 8.20592 5.54702C8.35324 5.51772 8.50595 5.53276 8.64472 5.59024C8.78349 5.64772 8.90211 5.74507 8.98556 5.86996C9.06901 5.99485 9.11355 6.14169 9.11355 6.29189C9.11355 6.49332 9.03354 6.68649 8.89111 6.82891C8.74868 6.97134 8.55551 7.05136 8.35409 7.05136Z"></path>
                      </svg>
                      450 Comment
                    </li>
                  </ul>
                </div>
                <h1>Recent Trends in Mobile App Development</h1>

                <p>
                  Recent years have witnessed unprecedented growth in mobile app
                  development, with millions of people relying on mobile apps in
                  their daily lives. This surge in demand has paved the way for
                  numerous emerging trends in mobile app development, which both
                  developers and businesses must consider. As technology
                  advances, mobile app development is becoming increasingly
                  popular and competitive, requiring developers and businesses
                  to keep up with the latest trends and techniques to remain
                  relevant and meet consumer expectations.
                </p>

                <p>
                  Therefore, staying updated on the latest trends in mobile app
                  development is crucial for businesses and developers to thrive
                  and succeed in the industry. The purpose of this article is to
                  shed light on some of these trends and their significance for
                  the mobile app development industry.
                </p>

                <h2>Cross-platform Development</h2>

                <p>
                  One of the most significant trends in mobile app development
                  is the move towards cross-platform development. Cross-platform
                  development allows developers to create apps that work across
                  multiple operating systems, such as iOS and Android, with a
                  single codebase. This approach can save time and resources, as
                  developers only need to create one version of the app instead
                  of separate versions for each operating system.
                </p>

                <h2>Internet of Things (IoT) Integration</h2>

                <p>
                  As the Internet of Things continues to expand, more and more
                  devices are being connected to the internet. This presents an
                  opportunity for mobile app developers to create apps that
                  integrate with IoT devices, such as smart home appliances and
                  wearables. This can allow users to control their devices
                  through their mobile apps and can provide businesses with
                  valuable data on user behavior and preferences.
                </p>

                <blockquote>
                  <p>
                    "Emerging trends in mobile app development offer new
                    opportunities for businesses to create more innovative and
                    engaging mobile apps that can cater to the evolving needs of
                    their users."
                  </p>
                  <h3>Olawale Afuye</h3>
                  <div className="bolckquote-icons">
                    <img
                      className="blockquote-icon-01"
                      src="assets/img/inner-pages/blockquote-icon-01.svg"
                      alt=""
                    />
                    <img
                      className="blockquote-icon-02"
                      src="assets/img/inner-pages/blockquote-icon-02.svg"
                      alt=""
                    />
                  </div>
                </blockquote>
                <h3>Our Begin Now To Beingonl</h3>
                <h2>Augmented Reality (AR) and Virtual Reality (VR)</h2>

                <p>
                  AR and VR are rapidly emerging technologies that are gaining
                  popularity in mobile app development. AR allows developers to
                  create apps that overlay digital information on top of the
                  real world, while VR creates a completely immersive experience
                  for users. These technologies can be used to create engaging
                  and interactive mobile apps for entertainment, education, and
                  more.
                </p>

                <h2>Artificial Intelligence (AI)</h2>

                <p>
                  AI is becoming increasingly important in mobile app
                  development, as it allows apps to become smarter and more
                  personalized for individual users. AI can be used to provide
                  personalized recommendations, predictive analytics, and even
                  natural language processing for chatbots and virtual
                  assistants.
                </p>

                <h2>Cloud-based Apps</h2>

                <p>
                  Cloud-based apps are becoming more popular, as they allow
                  users to access their data from anywhere with an internet
                  connection. These apps can also be more easily updated and
                  maintained, as updates can be pushed out to all users at once.
                  Additionally, cloud-based apps can be more cost-effective, as
                  businesses don’t need to invest in as much hardware or
                  infrastructure.
                </p>

                <p>
                  Emerging trends in mobile app development offer new
                  opportunities for businesses to create more innovative and
                  engaging mobile apps that can cater to the evolving needs of
                  their users. By keeping up with these trends, developers and
                  businesses can ensure that their apps remain relevant and
                  competitive in a rapidly changing market. With cross-platform
                  development, IoT integration, AR and VR, AI, and cloud-based
                  apps, businesses can transform the way they interact with
                  their customers, offering more personalized and engaging
                  experiences that can drive user engagement and business
                  growth. To learn more about how you can take advantage of
                  these trends for your business, please do not hesitate to
                  contact us by clicking on the “get in touch” button located at
                  the top right corner of this page. We offer a free 30-minute
                  consultation to help you explore your options and make an
                  informed decision that aligns with your business goals.
                </p>

                <div className="blog-details-img-group">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="blog-details-img magnetic-item">
                        <img
                          className="img-fluid"
                          src="assets/img/inner-pages/blog-dt-02.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="row g-4">
                        <div className="col-lg-12">
                          <div className="blog-details-img magnetic-item">
                            <img
                              className="img-fluid"
                              src="assets/img/inner-pages/blog-dt-03.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="blog-details-img magnetic-item">
                            <img
                              className="img-fluid"
                              src="assets/img/inner-pages/blog-dt-04.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3>arcu at mauris facilisis fermentum</h3>
                <p>
                  urna Aenean onewaryzo eleifend vitae tellus a facilisis. Nunc
                  posuere at augue eget portat Inei odio tellus, dignissim
                  fermentumara purus nec, consequat dapibus metus.Vivamus one
                  urna worlda mauris, faucibus at egestas quis, fermentum
                  egetonav neque.
                </p>
                <div className="blog-tag-and-social">
                  <div className="tag">
                    <h6>Tag:</h6>
                    <ul>
                      <li>
                        <Link legacyBehavior href="/blog">
                          <a>Software</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/blog">
                          <a>Marketing</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/blog">
                          <a>Cyber</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/blog">
                          <a>Development</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="social">
                    <h6>Share On:</h6>
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
                        <a href="https://www.instagram.com/">
                          <i className="bx bxl-pinterest-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/">
                          <i className="bx bxl-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
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
                        defaultValue
                        placeholder="Search Here"
                        required
                      />
                      <button
                        type="submit"
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
                          <span className="number-of-categoris">(18)</span>{" "}
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
                    <li>
                      <Link legacyBehavior href="/blog">
                        <a>
                          <span>UI/UX Design</span>{" "}
                          <span className="number-of-categoris">(31)</span>
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
          <div className="row">
            <div className="col-lg-12">
              <div className="details-navigation">
                <div className="single-navigation">
                  <div className="content">
                    <Link legacyBehavior href="/blog-details">
                      <a>Previous</a>
                    </Link>
                    <h4>
                      <Link legacyBehavior href="/blog-details">
                        <a>Feugiat Varius Mattis Mass Enim Est Egestas.</a>
                      </Link>
                    </h4>
                  </div>
                  <Link legacyBehavior href="/blog-details">
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
                  <Link legacyBehavior href="/blog-details">
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
                    <Link legacyBehavior href="/blog-details">
                      <a>NEXT</a>
                    </Link>
                    <h4>
                      <Link legacyBehavior href="/blog-details">
                        <a>Donec Finibus Laoreet Exte Eu Pellentesque.</a>
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <div className="comments-area sec-mar">
                <h3>2 Comment</h3>
                <div className="single-comment">
                  <div className="author-thumb">
                    <img
                      src="assets/img/inner-pages/comment-img-01.png"
                      alt=""
                    />
                  </div>
                  <div className="comment-content">
                    <div className="author-post">
                      <div className="author-info">
                        <h4>Polard Girdet</h4>
                        <span>02 June,2023 &nbsp; &nbsp; 01.56 pm</span>
                      </div>
                      <div className="reply">
                        <a href="#">
                          <i className="bi bi-arrow-return-right" />
                          Reply
                        </a>
                      </div>
                    </div>
                    <p>
                      Odio tellus, dignissim fermentumara purus nec, consequat
                      dapibus metus.Vivamusut urna world classo mauris, faucibus
                      at egestas quis, fermentum egetonav neque. Duisonajt
                      pharetra lectus nec risusonota and we are always support
                      our customer support available.
                    </p>
                  </div>
                </div>
                <div className="single-comment">
                  <div className="author-thumb">
                    <img
                      src="assets/img/inner-pages/comment-img-02.png"
                      alt=""
                    />
                  </div>
                  <div className="comment-content">
                    <div className="author-post">
                      <div className="author-info">
                        <h4>Andrew Watson</h4>
                        <span>02 June,2023 &nbsp; &nbsp; 01.56 pm</span>
                      </div>
                      <div className="reply">
                        <a href="#">
                          <i className="bi bi-arrow-return-right" />
                          Reply
                        </a>
                      </div>
                    </div>
                    <p>
                      Odio tellus, dignissim fermentumara purus nec, consequat
                      dapibus metus.Vivamusut urna world classo mauris, faucibus
                      at egestas quis, fermentum egetonav neque. Duisonajt
                      pharetra lectus nec risusonota and we are always support
                      our customer support available.
                    </p>
                  </div>
                </div>
              </div>
              <div className="comment-form">
                <h3>Leave a comment</h3>
                <form>
                  <div className="row">
                    <div className="col-md-12 mb-40">
                      <div className="form-inner">
                        <input type="text" placeholder="Enter your name" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-40">
                      <div className="form-inner">
                        <input type="email" placeholder="Enter your email" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-40">
                      <div className="form-inner">
                        <input type="text" placeholder="Subject" />
                      </div>
                    </div>
                    <div className="col-12 mb-40">
                      <div className="form-inner">
                        <textarea
                          placeholder="Your message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <button className="primary-btn3" type="submit">
                          Post a Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogDetailsPage;
