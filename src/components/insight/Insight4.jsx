import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);
function Insight4() {
  const slider = useMemo(() => {
    return {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1000,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".swiper-pagination5",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      },
    };
  }, []);
  return (
    <div className="home4-insight-area sec-mar">
      <div className="container">
        <div
          className="row mb-55 wow animate fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="col-lg-12 ">
            <div className="section-title-4">
              <span>Industry Insights</span>
              <h2>Tech Talk &amp; Analysis.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper {...slider} className="swiper home4-insight-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="home4-insights-card">
                    <div className="insight-img">
                      <img
                        className="img-fluid"
                        src="assets/img/home-4/insight-01.png"
                        alt=""
                      />
                    </div>
                    <div className="insight-content">
                      <ul>
                        <li>
                          <Link legacyBehavior href="/blog">
                            <a>Web development</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/blog">
                            <a>May 10, 2023</a>
                          </Link>
                        </li>
                      </ul>
                      <h4>
                        <Link legacyBehavior href="/blog-details">
                          <a>In a augue sit amet erat Si eleifend suscpit.</a>
                        </Link>
                      </h4>
                      <p>
                        Software development is the process of creatin computer
                        software programs that perform opel specific functions
                        or tasks.
                      </p>
                      <div className="read-btn">
                        <Link legacyBehavior href="/blog-details">
                          <a className="primary-btn5">
                            <svg
                              width={60}
                              height={60}
                              viewBox="0 0 60 60"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1.51038 32.6729C-0.990382 34.1837 -0.232333 37.9945 2.65612 38.4335C4.97848 38.7866 6.09439 41.4804 4.70164 43.3722C2.96938 45.7248 5.12803 48.9555 7.9646 48.2555C10.245 47.6925 12.3074 49.7548 11.7445 52.0354C11.0445 54.8721 14.2752 57.0306 16.6278 55.2984C18.5196 53.9057 21.2139 55.0216 21.5665 57.3439C22.0054 60.2322 25.8161 60.9904 27.3271 58.4896C28.5419 56.479 31.4581 56.479 32.6729 58.4896C34.1837 60.9904 37.9945 60.2323 38.4335 57.3439C38.7866 55.0215 41.4804 53.9056 43.3722 55.2984C45.7248 57.0306 48.9555 54.872 48.2555 52.0354C47.6925 49.755 49.7548 47.6925 52.0354 48.2555C54.872 48.9555 57.0306 45.7248 55.2984 43.3722C53.9057 41.4804 55.0216 38.7861 57.3439 38.4335C60.2322 37.9946 60.9904 34.1839 58.4896 32.6729C56.479 31.4581 56.479 28.5419 58.4896 27.3271C60.9904 25.8163 60.2323 22.0055 57.3439 21.5665C55.0215 21.2134 53.9056 18.5196 55.2984 16.6278C57.0306 14.2752 54.872 11.0445 52.0354 11.7445C49.7549 12.3075 47.6925 10.2452 48.2555 7.9646C48.9555 5.12795 45.7248 2.96938 43.3722 4.70164C41.4804 6.09426 38.7861 4.9784 38.4335 2.65612C37.9946 -0.23224 34.1839 -0.990422 32.6729 1.51038C31.4581 3.52095 28.5419 3.52095 27.3271 1.51038C25.8163 -0.990382 22.0055 -0.232333 21.5665 2.65612C21.2134 4.97848 18.5196 6.09439 16.6278 4.70164C14.2752 2.96938 11.0445 5.12803 11.7445 7.9646C12.3075 10.245 10.2452 12.3074 7.9646 11.7445C5.12795 11.0445 2.96938 14.2752 4.70164 16.6278C6.09426 18.5196 4.9784 21.2139 2.65612 21.5665C-0.232239 22.0054 -0.990423 25.8161 1.51038 27.3271C3.52095 28.5419 3.52095 31.4581 1.51038 32.6729Z" />
                            </svg>
                            <div className="content">
                              Read More
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                                </svg>
                              </span>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="home4-insights-card">
                    <div className="insight-img">
                      <img
                        className="img-fluid"
                        src="assets/img/home-4/insight-02.png"
                        alt=""
                      />
                    </div>
                    <div className="insight-content">
                      <ul>
                        <li>
                          <Link legacyBehavior href="/blog">
                            <a>Digital marketing</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/blog">
                            <a>May 10, 2023</a>
                          </Link>
                        </li>
                      </ul>
                      <h4>
                        <Link legacyBehavior href="/blog-details">
                          <a>Strategies and Best Practic for Effective.</a>
                        </Link>
                      </h4>
                      <p>
                        Software development is the process of creatin computer
                        software programs that perform opel specific functions
                        or tasks.
                      </p>
                      <div className="read-btn">
                        <Link legacyBehavior href="/blog-details">
                          <a className="primary-btn5">
                            <svg
                              width={60}
                              height={60}
                              viewBox="0 0 60 60"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1.51038 32.6729C-0.990382 34.1837 -0.232333 37.9945 2.65612 38.4335C4.97848 38.7866 6.09439 41.4804 4.70164 43.3722C2.96938 45.7248 5.12803 48.9555 7.9646 48.2555C10.245 47.6925 12.3074 49.7548 11.7445 52.0354C11.0445 54.8721 14.2752 57.0306 16.6278 55.2984C18.5196 53.9057 21.2139 55.0216 21.5665 57.3439C22.0054 60.2322 25.8161 60.9904 27.3271 58.4896C28.5419 56.479 31.4581 56.479 32.6729 58.4896C34.1837 60.9904 37.9945 60.2323 38.4335 57.3439C38.7866 55.0215 41.4804 53.9056 43.3722 55.2984C45.7248 57.0306 48.9555 54.872 48.2555 52.0354C47.6925 49.755 49.7548 47.6925 52.0354 48.2555C54.872 48.9555 57.0306 45.7248 55.2984 43.3722C53.9057 41.4804 55.0216 38.7861 57.3439 38.4335C60.2322 37.9946 60.9904 34.1839 58.4896 32.6729C56.479 31.4581 56.479 28.5419 58.4896 27.3271C60.9904 25.8163 60.2323 22.0055 57.3439 21.5665C55.0215 21.2134 53.9056 18.5196 55.2984 16.6278C57.0306 14.2752 54.872 11.0445 52.0354 11.7445C49.7549 12.3075 47.6925 10.2452 48.2555 7.9646C48.9555 5.12795 45.7248 2.96938 43.3722 4.70164C41.4804 6.09426 38.7861 4.9784 38.4335 2.65612C37.9946 -0.23224 34.1839 -0.990422 32.6729 1.51038C31.4581 3.52095 28.5419 3.52095 27.3271 1.51038C25.8163 -0.990382 22.0055 -0.232333 21.5665 2.65612C21.2134 4.97848 18.5196 6.09439 16.6278 4.70164C14.2752 2.96938 11.0445 5.12803 11.7445 7.9646C12.3075 10.245 10.2452 12.3074 7.9646 11.7445C5.12795 11.0445 2.96938 14.2752 4.70164 16.6278C6.09426 18.5196 4.9784 21.2139 2.65612 21.5665C-0.232239 22.0054 -0.990423 25.8161 1.51038 27.3271C3.52095 28.5419 3.52095 31.4581 1.51038 32.6729Z" />
                            </svg>
                            <div className="content">
                              Read More
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                                </svg>
                              </span>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="home4-insights-card">
                    <div className="insight-img">
                      <img
                        className="img-fluid"
                        src="assets/img/home-4/insight-03.png"
                        alt=""
                      />
                    </div>
                    <div className="insight-content">
                      <ul>
                        <li>
                          <Link legacyBehavior href="/blog">
                            <a>Cloud solutions</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/blog">
                            <a>May 03, 2023</a>
                          </Link>
                        </li>
                      </ul>
                      <h4>
                        <Link legacyBehavior href="/blog-details">
                          <a>Navigating the Journey of Cloud Solution.</a>
                        </Link>
                      </h4>
                      <p>
                        Software development is the process of creatin computer
                        software programs that perform opel specific functions
                        or tasks.
                      </p>
                      <div className="read-btn">
                        <Link legacyBehavior href="/blog-details">
                          <a className="primary-btn5">
                            <svg
                              width={60}
                              height={60}
                              viewBox="0 0 60 60"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1.51038 32.6729C-0.990382 34.1837 -0.232333 37.9945 2.65612 38.4335C4.97848 38.7866 6.09439 41.4804 4.70164 43.3722C2.96938 45.7248 5.12803 48.9555 7.9646 48.2555C10.245 47.6925 12.3074 49.7548 11.7445 52.0354C11.0445 54.8721 14.2752 57.0306 16.6278 55.2984C18.5196 53.9057 21.2139 55.0216 21.5665 57.3439C22.0054 60.2322 25.8161 60.9904 27.3271 58.4896C28.5419 56.479 31.4581 56.479 32.6729 58.4896C34.1837 60.9904 37.9945 60.2323 38.4335 57.3439C38.7866 55.0215 41.4804 53.9056 43.3722 55.2984C45.7248 57.0306 48.9555 54.872 48.2555 52.0354C47.6925 49.755 49.7548 47.6925 52.0354 48.2555C54.872 48.9555 57.0306 45.7248 55.2984 43.3722C53.9057 41.4804 55.0216 38.7861 57.3439 38.4335C60.2322 37.9946 60.9904 34.1839 58.4896 32.6729C56.479 31.4581 56.479 28.5419 58.4896 27.3271C60.9904 25.8163 60.2323 22.0055 57.3439 21.5665C55.0215 21.2134 53.9056 18.5196 55.2984 16.6278C57.0306 14.2752 54.872 11.0445 52.0354 11.7445C49.7549 12.3075 47.6925 10.2452 48.2555 7.9646C48.9555 5.12795 45.7248 2.96938 43.3722 4.70164C41.4804 6.09426 38.7861 4.9784 38.4335 2.65612C37.9946 -0.23224 34.1839 -0.990422 32.6729 1.51038C31.4581 3.52095 28.5419 3.52095 27.3271 1.51038C25.8163 -0.990382 22.0055 -0.232333 21.5665 2.65612C21.2134 4.97848 18.5196 6.09439 16.6278 4.70164C14.2752 2.96938 11.0445 5.12803 11.7445 7.9646C12.3075 10.245 10.2452 12.3074 7.9646 11.7445C5.12795 11.0445 2.96938 14.2752 4.70164 16.6278C6.09426 18.5196 4.9784 21.2139 2.65612 21.5665C-0.232239 22.0054 -0.990423 25.8161 1.51038 27.3271C3.52095 28.5419 3.52095 31.4581 1.51038 32.6729Z" />
                            </svg>
                            <div className="content">
                              Read More
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                                </svg>
                              </span>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="home4-insights-card">
                    <div className="insight-img">
                      <img
                        className="img-fluid"
                        src="assets/img/home-4/insight-01.png"
                        alt=""
                      />
                    </div>
                    <div className="insight-content">
                      <ul>
                        <li>
                          <Link legacyBehavior href="/blog">
                            <a>Web development</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/blog">
                            <a>May 10, 2023</a>
                          </Link>
                        </li>
                      </ul>
                      <h4>
                        <Link legacyBehavior href="/blog-details">
                          <a>In a augue sit amet erat Si eleifend suscpit.</a>
                        </Link>
                      </h4>
                      <p>
                        Software development is the process of creatin computer
                        software programs that perform opel specific functions
                        or tasks.
                      </p>
                      <div className="read-btn">
                        <Link legacyBehavior href="/blog-details">
                          <a className="primary-btn5">
                            <svg
                              width={60}
                              height={60}
                              viewBox="0 0 60 60"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1.51038 32.6729C-0.990382 34.1837 -0.232333 37.9945 2.65612 38.4335C4.97848 38.7866 6.09439 41.4804 4.70164 43.3722C2.96938 45.7248 5.12803 48.9555 7.9646 48.2555C10.245 47.6925 12.3074 49.7548 11.7445 52.0354C11.0445 54.8721 14.2752 57.0306 16.6278 55.2984C18.5196 53.9057 21.2139 55.0216 21.5665 57.3439C22.0054 60.2322 25.8161 60.9904 27.3271 58.4896C28.5419 56.479 31.4581 56.479 32.6729 58.4896C34.1837 60.9904 37.9945 60.2323 38.4335 57.3439C38.7866 55.0215 41.4804 53.9056 43.3722 55.2984C45.7248 57.0306 48.9555 54.872 48.2555 52.0354C47.6925 49.755 49.7548 47.6925 52.0354 48.2555C54.872 48.9555 57.0306 45.7248 55.2984 43.3722C53.9057 41.4804 55.0216 38.7861 57.3439 38.4335C60.2322 37.9946 60.9904 34.1839 58.4896 32.6729C56.479 31.4581 56.479 28.5419 58.4896 27.3271C60.9904 25.8163 60.2323 22.0055 57.3439 21.5665C55.0215 21.2134 53.9056 18.5196 55.2984 16.6278C57.0306 14.2752 54.872 11.0445 52.0354 11.7445C49.7549 12.3075 47.6925 10.2452 48.2555 7.9646C48.9555 5.12795 45.7248 2.96938 43.3722 4.70164C41.4804 6.09426 38.7861 4.9784 38.4335 2.65612C37.9946 -0.23224 34.1839 -0.990422 32.6729 1.51038C31.4581 3.52095 28.5419 3.52095 27.3271 1.51038C25.8163 -0.990382 22.0055 -0.232333 21.5665 2.65612C21.2134 4.97848 18.5196 6.09439 16.6278 4.70164C14.2752 2.96938 11.0445 5.12803 11.7445 7.9646C12.3075 10.245 10.2452 12.3074 7.9646 11.7445C5.12795 11.0445 2.96938 14.2752 4.70164 16.6278C6.09426 18.5196 4.9784 21.2139 2.65612 21.5665C-0.232239 22.0054 -0.990423 25.8161 1.51038 27.3271C3.52095 28.5419 3.52095 31.4581 1.51038 32.6729Z" />
                            </svg>
                            <div className="content">
                              Read More
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                                </svg>
                              </span>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="swiper-pagination5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insight4;
