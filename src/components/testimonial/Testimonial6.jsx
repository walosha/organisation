import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

function Testimonial6() {

    const slider = useMemo(()=>{
        return {
            loop: true,
            speed: 1000,
            slidesPerView: 1,
            autoplay: {
                delay: 5000
            },
        }
    },[])
  return (
    <div className="home6-testimonial-area sec-mar">
    <ul className="sm-img-wrap">
      <li><img src="assets/img/home-6/home6-testimonial-img-01.png" alt="" /></li>
      <li><img src="assets/img/home-6/home6-testimonial-img-02.png" alt="" /></li>
      <li><img src="assets/img/home-6/home6-testimonial-img-03.png" alt="" /></li>
      <li><img src="assets/img/home-6/home6-testimonial-img-04.png" alt="" /></li>
      <li><img src="assets/img/home-6/home6-testimonial-img-05.png" alt="" /></li>
      <li><img src="assets/img/home-6/home6-testimonial-img-06.png" alt="" /></li>
    </ul>
    <div className="container">
      <div className="row mb-55">
        <div className="col-lg-12 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="section-title-6 text-center">
            <span>Approciations</span>
            <h2>Approciations</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <Swiper {...slider} className="swiper home6-testimonial-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-wrapper">
                  <div className="client-review">
                    <img src="assets/img/home-6/home6-testimonoal-review.png" alt="" />
                  </div>
                  <div className="testimonial-content">
                    <p>“I cannot express enough how satisfied I am with the web developmet services provided by Egens Lab. They are very good and User friendly and they work very nice and creative”</p>
                  </div>
                  <div className="author-area">
                    <h4>Watson Bekaryn</h4>
                    <span>CEO At atlantis.com</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-wrapper">
                  <div className="client-review">
                    <img src="assets/img/home-6/home6-testimonoal-review.png" alt="" />
                  </div>
                  <div className="testimonial-content">
                    <p>“I cannot express enough how satisfied I am with the web developmet services provided by Egens Lab. They are very good and User friendly and they work very nice and creative”</p>
                  </div>
                  <div className="author-area">
                    <h4>Lucent Frilink</h4>
                    <span>CEO At xtecl.com</span>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Testimonial6
