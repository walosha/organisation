import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
SwiperCore.use([Pagination, Autoplay, EffectFade]);

function SuccessStory3() {
    const slider = useMemo(()=>{
        return {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 1000,
            pagination: {
                el: ".swiper-pagination11",
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
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 2
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20,
    
                },
                1400: {
                    slidesPerView: 3
                },
            }
        }
    },[])
  return (
    <div className="home3-success-stories-area sec-mar">
    <div className="container">
      <div className="row mb-60 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-4">
          <div className="section-title-3">
            <h2>Complited Projects</h2>
            <p>Services are professional offerings provided by businesses to meet specific needs or solve problems for their customers. Services can range from your budject.</p>
          </div>
          <div className="view-all-btn">
            <Link legacyBehavior href="/project"><a className="primary-btn3">View All Project</a></Link>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <Swiper {...slider}  className="swiper home3-success-stories-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="success-storie-card">
                  <div className="success-img">
                    <img className="img-fluid magnetic-item" src="assets/img/home-3/home3-suc-sto-01.png" alt="" />
                  </div>
                  <div className="success-content">
                    <span>Web development</span>
                    <h3><Link legacyBehavior href="/project-details"><a>Streamlining IT Infrastructure</a></Link></h3>
                    <div className="view-btn">
                      <Link legacyBehavior href="/project-details">
                        <a>
                          <svg width={12} height={12} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="success-storie-card">
                  <div className="success-img">
                    <img className="img-fluid magnetic-item" src="assets/img/home-3/home3-suc-sto-02.png" alt="" />
                  </div>
                  <div className="success-content">
                    <span>Web development</span>
                    <h3><Link legacyBehavior href="/project-details"><a>Transforming Customer Experience</a></Link></h3>
                    <div className="view-btn">
                    <Link legacyBehavior href="/project-details">
                        <a>
                          <svg width={12} height={12} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="success-storie-card">
                  <div className="success-img">
                    <img className="img-fluid magnetic-item" src="assets/img/home-3/home3-suc-sto-03.png" alt="" />
                  </div>
                  <div className="success-content">
                    <span>Web development</span>
                    <h3><Link legacyBehavior href="/project-details"><a>Scaling Agile Development</a></Link></h3>
                    <div className="view-btn">
                    <Link legacyBehavior href="/project-details">
                        <a>
                          <svg width={12} height={12} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="success-storie-card">
                  <div className="success-img">
                    <img className="img-fluid magnetic-item" src="assets/img/home-3/home3-suc-sto-04.png" alt="" />
                  </div>
                  <div className="success-content">
                    <span>Web development</span>
                    <h3><Link legacyBehavior href="/project-details"><a>Optimizing IT Operations</a></Link></h3>
                    <div className="view-btn">
                    <Link legacyBehavior href="/project-details">
                        <a>
                          <svg width={12} height={12} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="success-storie-card">
                  <div className="success-img">
                    <img className="img-fluid magnetic-item" src="assets/img/home-3/home3-suc-sto-05.png" alt="" />
                  </div>
                  <div className="success-content">
                    <span>Web development</span>
                    <h3><Link legacyBehavior href="/project-details"><a>Maximizing Efficiency with DevOps</a></Link></h3>
                    <div className="view-btn">
                    <Link legacyBehavior href="/project-details">
                        <a>
                          <svg width={12} height={12} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
      <div className="row pt-50">
        <div className="col-lg-12 position-relative">
          <div className="swiper-pagination11" />
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default SuccessStory3
