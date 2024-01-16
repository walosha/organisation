import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

function Testimonial5() {
  const slider = useMemo(()=>{
    return {
      loop: true,
      spaceBetween: 0,
      speed: 2000,
      centeredSlides: true,
      // direction: "vertical",
      navigation: {
          nextEl: ".nextbtn3",
          prevEl: ".prevbtn3",
      },
      autoplay: {
          delay: 5000
      },
    }
},[])
  return (
    <div className="home5-testimonial-area mb-130">
    <div className="container">
      <div className="row g-lg-4 gy-5 align-items-center">
        <div className="col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="section-title-5">
            <span>CLIENT REVIEW</span>
            <h2>Happy Client</h2>
            <div className="testimolial-left">
              <p>Integer purus odio, placerat nec rhoncus in, ullamcorperon nec doloroei. aptent taciti sociosqu ad litora
                torquent pero conubia nostra persento.</p>
              <div className="customar-review">
                <h6>Review On</h6>
                <ul>
                  <li>
                    <a href="#" className="single-review">
                      <div className="icon">
                        <img src="assets/img/home-5/trustpilot-1.svg" alt="" />
                      </div>
                      <ul className="star">
                        <li><i className="bi bi-star-fill" /></li>
                        <li><i className="bi bi-star-fill" /></li>
                        <li><i className="bi bi-star-fill" /></li>
                        <li><i className="bi bi-star-fill" /></li>
                        <li><i className="bi bi-star-fill" /></li>
                        <li>5.0/5.0</li>
                      </ul>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="single-review">
                      <div className="icon">
                        <img src="assets/img/home-5/google-1.svg" alt="" />
                      </div>
                      <ul className="star">
                        <li><i className="bi bi-star-fill" /></li>
                        <li><i className="bi bi-star-fill" /></li>
                        <li><i className="bi bi-star-fill" /></li>
                        <li><i className="bi bi-star-fill" /></li>
                        <li><i className="bi bi-star-fill" /></li>
                        <li>5.0/5.0</li>
                      </ul>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 position-relative wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
          <Swiper {...slider} className="swiper home5-testimonial-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-wrapper">
                  <div className="testimonial-top">
                    <div className="author-img">
                      <img src="assets/img/home-5/author-img.png" alt="" />
                    </div>
                    <div className="review">
                      <img src="assets/img/home-5/trustpilot-2.svg" alt="" />
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p>“I cannot express enough how satisfied I am with the web developmet services provided by Egens Lab. They are very good and User friendly and they work very nice and creative”</p>
                  </div>
                  <div className="testimonial-btm">
                    <div className="author-content">
                      <h4>Watson Bekaryn</h4>
                      <span>CEO At atlantis.com</span>
                    </div>
                    <div className="quote-icon">
                      <img src="assets/img/home-5/left-quote.svg" alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-wrapper">
                  <div className="testimonial-top">
                    <div className="author-img">
                      <img src="assets/img/home-5/author-img2.png" alt="" />
                    </div>
                    <div className="review">
                      <img src="assets/img/home-5/trustpilot-2.svg" alt="" />
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p>“I cannot express enough how satisfied I am with the web developmet services provided by Egens Lab. They are very good and User friendly and they work very nice and creative”</p>
                  </div>
                  <div className="testimonial-btm">
                    <div className="author-content">
                      <h4>Doland Skrml</h4>
                      <span>CEO At atlantis.com</span>
                    </div>
                    <div className="quote-icon">
                      <img src="assets/img/home-5/left-quote.svg" alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-wrapper">
                  <div className="testimonial-top">
                    <div className="author-img">
                      <img src="assets/img/home-5/author-img3.png" alt="" />
                    </div>
                    <div className="review">
                      <img src="assets/img/home-5/trustpilot-2.svg" alt="" />
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p>“I cannot express enough how satisfied I am with the web developmet services provided by Egens Lab. They are very good and User friendly and they work very nice and creative”</p>
                  </div>
                  <div className="testimonial-btm">
                    <div className="author-content">
                      <h4>Josh Bush</h4>
                      <span>CEO At atlantis.com</span>
                    </div>
                    <div className="quote-icon">
                      <img src="assets/img/home-5/left-quote.svg" alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="swiper-btn-group">
            <div className="swiper-btn prevbtn3">
              <i className="bi bi-arrow-up" />
            </div>
            <div className="swiper-btn nextbtn3">
              <i className="bi bi-arrow-down" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Testimonial5
