import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/navigation';
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

function Home5Blog() {
  const slider = useMemo(() => {
    return {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 50,
      speed: 2000,
      navigation: {
        nextEl: ".nextbtn4",
        prevEl: ".prevbtn4",
      },
      autoplay: {
        delay: 0.1,
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
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
      },
      loopAdditionalSlides: 1,
    };
  }, []);
  return (
    <div className="home5-blog-area mb-130">
        <div className="container">
          <div className="row mb-55 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="col-lg-12 d-flex for-padding align-items-center justify-content-between flex-wrap gap-3">
              <div className="section-title-5">
                <span>IT News &amp; Trends</span>
                <h2>News &amp; Article</h2>
              </div>
              <div className="swiper-btn-group">
                <div className="swiper-btn prevbtn4">
                  <i className="bi bi-arrow-left" />
                </div>
                <div className="swiper-btn nextbtn4">
                  <i className="bi bi-arrow-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-wrapper">
                <Swiper {...slider} className="swiper home5-blog-slider">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="single-blog-card">
                        <div className="blog-content">
                          <ul>
                            <li><Link legacyBehavior href="/blog"><a>April 05, 2023</a></Link></li>
                            <li><Link legacyBehavior href="/blog"><a>Software Development</a></Link></li>
                          </ul>
                          <h3><Link legacyBehavior href="/blog-details"><a>Vestibulum leo ex posuerea eu lobortis ut.</a></Link></h3>
                          <p>Software development is the process of creatain onet computer software programs that perform tommrowa specific functions or tasks.......</p>
                        </div>
                        <div className="blog-img magnetic-item">
                          <img className="img-fluid" src="assets/img/home-5/home5-blog-img-01.png" alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="single-blog-card">
                        <div className="blog-content">
                          <ul>
                            <li><Link legacyBehavior href="/blog"><a>April 05, 2023</a></Link></li>
                            <li><Link legacyBehavior href="/blog"><a>Cyber Security</a></Link></li>
                          </ul>
                          <h3><Link legacyBehavior href="/blog-details"><a>Duis nec velit vitae justo on dictum rhoncus.</a></Link></h3>
                          <p>Software development is the process of creatain onet computer software programs that perform tommrowa specific functions or tasks.......</p>
                        </div>
                        <div className="blog-img magnetic-item">
                          <img className="img-fluid" src="assets/img/home-5/home5-blog-img-02.png" alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="single-blog-card">
                        <div className="blog-content">
                          <ul>
                            <li><Link legacyBehavior href="/blog"><a>April 05, 2023</a></Link></li>
                            <li><Link legacyBehavior href="/blog"><a>Web Development</a></Link></li>
                          </ul>
                          <h3><Link legacyBehavior href="/blog-details"><a>Integer ac sapien moni Class aptent taciti.</a></Link></h3>
                          <p>Software development is the process of creatain onet computer software programs that perform tommrowa specific functions or tasks.......</p>
                        </div>
                        <div className="blog-img magnetic-item">
                          <img className="img-fluid" src="assets/img/home-5/home5-blog-img-03.png" alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="single-blog-card">
                        <div className="blog-content">
                          <ul>
                            <li><Link legacyBehavior href="/blog"><a>April 05, 2023</a></Link></li>
                            <li><Link legacyBehavior href="/blog"><a>Software Development</a></Link></li>
                          </ul>
                          <h3><Link legacyBehavior href="/blog-details"><a>Vestibulum leo ex posuerea eu lobortis ut.</a></Link></h3>
                          <p>Software development is the process of creatain onet computer software programs that perform tommrowa specific functions or tasks.......</p>
                        </div>
                        <div className="blog-img magnetic-item">
                          <img className="img-fluid" src="assets/img/home-5/home5-blog-img-01.png" alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="single-blog-card">
                        <div className="blog-content">
                          <ul>
                            <li><Link legacyBehavior href="/blog"><a>April 05, 2023</a></Link></li>
                            <li><Link legacyBehavior href="/blog"><a>Software Development</a></Link></li>
                          </ul>
                          <h3><Link legacyBehavior href="/blog-details"><a>Vestibulum leo ex posuerea eu lobortis ut.</a></Link></h3>
                          <p>Software development is the process of creatain onet computer software programs that perform tommrowa specific functions or tasks.......</p>
                        </div>
                        <div className="blog-img magnetic-item">
                          <img className="img-fluid" src="assets/img/home-5/home5-blog-img-01.png" alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home5Blog
