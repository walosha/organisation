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

function Testimonial3() {
  const slider = useMemo(() => {
    return {
      loop: true,
      spaceBetween: 30,
      speed: 2000,
      centeredSlides: true,
      navigation: {
        nextEl: ".nextbtn2",
        prevEl: ".prevbtn2",
      },
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1.5,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 2,
        },
      },
    };
  }, []);
  return (
    <div className="home3-testimonil-area sec-mar">
      <div className="container">
        <div
          className="row mb-55 wow animate fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="col-lg-12 d-flex align-items-center justify-content-between gap-4 flex-wrap">
            <div className="section-title-3">
              <h2>Happy Customers</h2>
              <p>
                Welcome to Pacific Tech - Your one-stop solution for software
                excellence, talent recruitment, seamless database migration, and
                empowering coaching with comprehensive training. As a dynamic
                software agency, we provide cutting-edge solutions tailored to
                your needs. From assembling the right team to seamless
                migrations and skill empowerment, partner with us to elevate
                your business with innovation and expertise.
              </p>
            </div>
            <div className="swiper-btn-group">
              <div className="swiper-btn prevbtn2">
                <i className="bi bi-arrow-left" />
              </div>
              <div className="swiper-btn nextbtn2">
                <i className="bi bi-arrow-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper {...slider} className="swiper home3-testimonial-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card3">
                    <div className="quate-icon">
                      <img src="assets/img/home-4/left-quote.svg" alt="" />
                    </div>
                    <div className="testimonial-top">
                      {/* <div className="review-left">
                        <img src="assets/img/home-4/trustpilot.svg" alt="" />
                      </div> */}
                      <div className="review-right">
                        <img
                          src="assets/img/home-4/trastpilot-star.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <p>
                        “Working with Pacific Tech has been a game-changer for
                        our business. Their Teame in crafting innovative
                        software solutions surpassed our expectations. From the
                        initial consultation to the final delivery, their team
                        demonstrated a deep understanding of our needs and
                        industry trends”
                      </p>
                    </div>
                    <div className="testimonial-btm">
                      <div className="author-area">
                        <div className="author-content">
                          <h4>Dave Linus</h4>
                          <span>CEO At https://www.thir13entravels.com</span>
                        </div>
                      </div>
                      <div className="review-date-and-time">
                        <p>May 9, 2023</p>
                        <span>10.30 PM</span>
                      </div>
                    </div>
                  </div>
                  <div className="author-img">
                    <img src="assets/img/home-3/h3-testi-01.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card3">
                    <div className="quate-icon">
                      <img src="assets/img/home-4/left-quote.svg" alt="" />
                    </div>
                    <div className="testimonial-top">
                      {/* <div className="review-left">
                        <img src="assets/img/home-4/google.svg" alt="" />
                      </div> */}
                      <div className="review-right">
                        <ul className="star">
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <p>
                        “Their Web Development Teame is unparalleled. From
                        conceptualization to execution, their team delivered a
                        website that exceeded our expectations. Their attention
                        to detail, creative flair, and commitment to deadlines
                        made the entire process seamless..”
                      </p>
                    </div>
                    <div className="testimonial-btm">
                      <div className="author-area">
                        <div className="author-content">
                          <h4>Chris</h4>
                          <span>CEO At https://roothub.ng</span>
                        </div>
                      </div>
                      <div className="review-date-and-time">
                        <p>May 9, 2023</p>
                        <span>10.30 PM</span>
                      </div>
                    </div>
                  </div>
                  <div className="author-img">
                    <img src="assets/img/home-3/h3-testi-02.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card3">
                    <div className="quate-icon">
                      <img src="assets/img/home-4/left-quote.svg" alt="" />
                    </div>
                    <div className="testimonial-top">
                      {/* <div className="review-left">
                        <img src="assets/img/home-4/trustpilot.svg" alt="" />
                      </div> */}
                      <div className="review-right">
                        <img
                          src="assets/img/home-4/trastpilot-star.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <p>
                        “Our experience with their Talent Acquisition Services
                        has been exceptional. They not only found the right
                        individuals for our team but also demonstrated a deep
                        understanding of our company culture. Their strategic
                        approach to talent acquisition truly sets them apart”
                      </p>
                    </div>
                    <div className="testimonial-btm">
                      <div className="author-area">
                        <div className="author-content">
                          <h4>Felix</h4>
                          <span>CEO At htps://qataloog.com/</span>
                        </div>
                      </div>
                      <div className="review-date-and-time">
                        <p>May 9, 2023</p>
                        <span>10.30 PM</span>
                      </div>
                    </div>
                  </div>
                  <div className="author-img">
                    <img src="assets/img/home-3/h3-testi-03.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card3">
                    <div className="quate-icon">
                      <img src="assets/img/home-4/left-quote.svg" alt="" />
                    </div>
                    <div className="testimonial-top">
                      {/* <div className="review-left">
                        <img src="assets/img/home-4/google.svg" alt="" />
                      </div> */}
                      <div className="review-right">
                        <ul className="star">
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <p>
                        “nnovation is at the core of their Software Development
                        services. They transformed our vision into a robust and
                        scalable software solution. Their team's technical
                        prowess, coupled with a collaborative approach, made the
                        development journey both efficient and enjoyable.”
                      </p>
                    </div>
                    <div className="testimonial-btm">
                      <div className="author-area">
                        <div className="author-content">
                          <h4>Gboyega</h4>
                          <span>CEO At https://power-plug.ng/</span>
                        </div>
                      </div>
                      <div className="review-date-and-time">
                        <p>May 9, 2023</p>
                        <span>10.30 PM</span>
                      </div>
                    </div>
                  </div>
                  <div className="author-img">
                    <img src="assets/img/home-3/h3-testi-02.png" alt="" />
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial3;
