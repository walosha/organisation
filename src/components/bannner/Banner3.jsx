import React, { useMemo, useState } from "react";
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import ModalVideo from "react-modal-video";

SwiperCore.use([Pagination, Autoplay, EffectFade]);

function Banner3() {
  const [isOpen, setOpen] = useState(false);
  const slider = useMemo(() => {
    return {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 1500,
      effect: "fade",
      autoplay: {
        delay: 4000,
      },
      pagination: {
        el: ".swiper-pagination1",
        clickable: true,
      },
      fadeEffect: {
        crossFade: true,
      },
    };
  }, []);
  return (
    <div className="banner-area3">
      <div className="scroll-down">
        <a href="#home3-partner-area">
          Scroll Down
          <span>
            <svg
              width={13}
              height={13}
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1H12M12 1V13M12 1L0.5 12" />
            </svg>
          </span>
        </a>
      </div>
      <div className="banner-vector">
        <img
          className="img-fluid"
          src="assets/img/home-3/banner-vector.png"
          alt=""
        />
      </div>
      <div className="swiper-pagination1" />
      <div className="social-area">
        <ul>
          <li>
            <a href="https://web.facebook.com/ppslimited">
              <i className="bx bxl-facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/pacificprofessional">
              <i className="bx bxl-instagram" />
            </a>
          </li>
        </ul>
      </div>
      <Swiper {...slider} className="swiper banner3-slider">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="banner-wrapper">
              <div className="banner-content">
                <h1>Grow Your Business With Innovative Ideas.</h1>
                <p>
                  Empowering Your Vision, Crafting Your Future. Elevate Your
                  Business With Innovative Ideas.
                </p>
                <div className="banner-btn-group">
                  <Link legacyBehavior href="/contact">
                    <a className="primary-btn3">Free Consultancy</a>
                  </Link>
                  <Link legacyBehavior href="/about">
                    <a className="primary-btn4">
                      <span>
                        <svg
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                        </svg>
                      </span>
                      Explore More
                    </a>
                  </Link>
                </div>
              </div>
              <div className="banner-image magnetic-item">
                <img
                  className="img-fluid"
                  src="assets/img/home-3/home3-banner-img.jpg"
                  alt=""
                />
              </div>
              <div className="banner-video-area">
                <div className="video-area">
                  <div
                    data-fancybox="gallery"
                    className="video-popup"
                    onClick={() => setOpen(true)}
                    style={{ cursor: "pointer" }}
                  >
                    <svg
                      width={30}
                      height={34}
                      viewBox="0 0 30 34"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.3"
                        d="M30 17.0012C30 16.0359 29.4735 15.1469 28.5906 14.6218L4.75661 0.46019C3.79257 -0.111681 2.61693 -0.153462 1.60777 0.351093C0.601772 0.855365 0 1.78612 0 2.83996V31.1609C0 32.2148 0.601723 33.1452 1.60931 33.6498C2.079 33.8837 2.5828 34 3.08665 34C3.66595 34 4.24144 33.8456 4.75628 33.5407L28.5903 19.3813C29.4734 18.8559 30 17.9669 30 17.0016V17.0012ZM27.7302 18.1537L3.89624 32.3131C3.42844 32.5905 2.85862 32.6093 2.36997 32.3668C1.88133 32.1225 1.58884 31.6719 1.58884 31.1607V2.83969C1.58884 2.32846 1.88133 1.8761 2.36997 1.63359C2.59834 1.52102 2.84346 1.46385 3.08699 1.46385C3.36811 1.46385 3.64734 1.53842 3.89658 1.68755L27.7306 15.8492C28.1646 16.1074 28.4135 16.5287 28.4135 17.0033C28.4131 17.4763 28.1642 17.8955 27.7302 18.1537Z"
                      />
                    </svg>
                  </div>
                  <img
                    className="video-img"
                    src="assets/img/home-3/home3-banner-video.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="banner-wrapper">
              <div className="banner-content">
                <h1>Explore opportunities to grow your business.</h1>
                <p>
                  Unleash Your Potential, Transform Your Tomorrow. Experience
                  Growth Through Innovative Solutions..
                </p>
                <div className="banner-btn-group">
                  <Link legacyBehavior href="/contact">
                    <a className="primary-btn3">Free Consultancy</a>
                  </Link>
                  <Link legacyBehavior href="/about">
                    <a className="primary-btn4">
                      <span>
                        <svg
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                        </svg>
                      </span>
                      Explore More
                    </a>
                  </Link>
                </div>
              </div>
              <div className="banner-image magnetic-item">
                <img
                  className="img-fluid"
                  src="assets/img/home-3/home3-banner-img3.jpg"
                  alt=""
                />
              </div>
              <div className="banner-video-area">
                <div className="video-area">
                  <div
                    data-fancybox="gallery"
                    className="video-popup"
                    onClick={() => setOpen(true)}
                    style={{ cursor: "pointer" }}
                    ratio="100"
                    allowFullScreen={true}
                  >
                    <svg
                      width={30}
                      height={34}
                      viewBox="0 0 30 34"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.3"
                        d="M30 17.0012C30 16.0359 29.4735 15.1469 28.5906 14.6218L4.75661 0.46019C3.79257 -0.111681 2.61693 -0.153462 1.60777 0.351093C0.601772 0.855365 0 1.78612 0 2.83996V31.1609C0 32.2148 0.601723 33.1452 1.60931 33.6498C2.079 33.8837 2.5828 34 3.08665 34C3.66595 34 4.24144 33.8456 4.75628 33.5407L28.5903 19.3813C29.4734 18.8559 30 17.9669 30 17.0016V17.0012ZM27.7302 18.1537L3.89624 32.3131C3.42844 32.5905 2.85862 32.6093 2.36997 32.3668C1.88133 32.1225 1.58884 31.6719 1.58884 31.1607V2.83969C1.58884 2.32846 1.88133 1.8761 2.36997 1.63359C2.59834 1.52102 2.84346 1.46385 3.08699 1.46385C3.36811 1.46385 3.64734 1.53842 3.89658 1.68755L27.7306 15.8492C28.1646 16.1074 28.4135 16.5287 28.4135 17.0033C28.4131 17.4763 28.1642 17.8955 27.7302 18.1537Z"
                      />
                    </svg>
                  </div>
                  <img
                    className="video-img"
                    src="assets/img/home-3/home3-banner-video.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="banner-wrapper">
              <div className="banner-content">
                <h1>Grow Your Business With Creative Minds.</h1>
                <p>
                  Revolutionize Your Business Landscape. Fuel Growth Through
                  Visionary Software Solutions.
                </p>
                <div className="banner-btn-group">
                  <Link legacyBehavior href="/contact">
                    <a className="primary-btn3">Free Consultancy</a>
                  </Link>
                  <Link legacyBehavior href="/about">
                    <a className="primary-btn4">
                      <span>
                        <svg
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                        </svg>
                      </span>
                      Explore More
                    </a>
                  </Link>
                </div>
              </div>
              <div className="banner-image magnetic-item">
                <img
                  className="img-fluid"
                  src="assets/img/home-3/home3-banner-img2.jpg"
                  alt=""
                />
              </div>
              <div className="banner-video-area">
                <div className="video-area">
                  <div
                    data-fancybox="gallery"
                    className="video-popup"
                    onClick={() => setOpen(true)}
                    style={{ cursor: "pointer" }}
                  >
                    <svg
                      width={30}
                      height={34}
                      viewBox="0 0 30 34"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.3"
                        d="M30 17.0012C30 16.0359 29.4735 15.1469 28.5906 14.6218L4.75661 0.46019C3.79257 -0.111681 2.61693 -0.153462 1.60777 0.351093C0.601772 0.855365 0 1.78612 0 2.83996V31.1609C0 32.2148 0.601723 33.1452 1.60931 33.6498C2.079 33.8837 2.5828 34 3.08665 34C3.66595 34 4.24144 33.8456 4.75628 33.5407L28.5903 19.3813C29.4734 18.8559 30 17.9669 30 17.0016V17.0012ZM27.7302 18.1537L3.89624 32.3131C3.42844 32.5905 2.85862 32.6093 2.36997 32.3668C1.88133 32.1225 1.58884 31.6719 1.58884 31.1607V2.83969C1.58884 2.32846 1.88133 1.8761 2.36997 1.63359C2.59834 1.52102 2.84346 1.46385 3.08699 1.46385C3.36811 1.46385 3.64734 1.53842 3.89658 1.68755L27.7306 15.8492C28.1646 16.1074 28.4135 16.5287 28.4135 17.0033C28.4131 17.4763 28.1642 17.8955 27.7302 18.1537Z"
                      />
                    </svg>
                  </div>
                  <img
                    className="video-img"
                    src="assets/img/home-3/home3-banner-video.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      <React.Fragment>
        <ModalVideo
          style={{ overlay: { zIndex: 9999 } }}
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="JSIwZ_tEP9o"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </div>
  );
}

export default Banner3;
