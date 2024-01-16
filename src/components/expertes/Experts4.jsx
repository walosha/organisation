import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);


function Experts4() {
  const slider = useMemo(()=>{
    return {
      loop: true,
      spaceBetween: 30,
      speed: 2000,
      pagination: {
          el: ".swiper-pagination22",
          clickable: true,
      },
      autoplay: {
          delay: 5000
      },
      breakpoints: {
          280: {
              slidesPerView: 1,
          },
          386: {
              slidesPerView: 1,
          },
          576: {
              slidesPerView: 2,
          },
          768: {
              slidesPerView: 2,
          },
          992: {
              slidesPerView: 3
          },
          1200: {
              slidesPerView: 4,

          },
          1400: {
              slidesPerView: 4
          },
      }
    }
},[])
  return (
    <div className="home4-experts-section sec-mar">
    <div className="container">
      <div className="row wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="col-lg-12">
          <div className="section-title-4 text-center two">
            <span>Experts &amp; Talented Staff</span>
            <h2>We Have <span>Top Class Expertise</span> For Creative Service</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Swiper {...slider} className="swiper home3-team-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="single-team">
                  <div className="team-img">
                    <img className="img-fluid" src="assets/img/home-3/team-01.png" alt="" />
                    <div className="social-area">
                      <ul>
                        <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                        <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                        <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                        <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h5>Mateo Daniel</h5>
                    <span>Founder, CTO</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-team">
                  <div className="team-img">
                    <img className="img-fluid" src="assets/img/home-3/team-02.png" alt="" />
                    <div className="social-area">
                      <ul>
                        <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                        <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                        <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                        <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h5>Carter Jayden</h5>
                    <span>Co-Founder, CEO</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-team">
                  <div className="team-img">
                    <img className="img-fluid" src="assets/img/home-3/team-03.png" alt="" />
                    <div className="social-area">
                      <ul>
                        <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                        <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                        <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                        <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h5>Andrew Santiago</h5>
                    <span>Head of HR &amp; Manager</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-team">
                  <div className="team-img">
                    <img className="img-fluid" src="assets/img/home-3/team-04.png" alt="" />
                    <div className="social-area">
                      <ul>
                        <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                        <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                        <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                        <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h5>George Lorenzo</h5>
                    <span>Software Engineer</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-team">
                  <div className="team-img">
                    <img className="img-fluid" src="assets/img/home-3/team-04.png" alt="" />
                    <div className="social-area">
                      <ul>
                        <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                        <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                        <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                        <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h5>George Lorenzo</h5>
                    <span>Software Engineer</span>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
      <div className="row pt-50">
        <div className="col-lg-12 position-relative">
          <div className="swiper-pagination22" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Experts4
