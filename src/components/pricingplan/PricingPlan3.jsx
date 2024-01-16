import React from 'react'

function PricingPlan3() {
  return (
    <div className="home3-pricing-plan-area sec-mar">
    <div className="container">
      <div className="row mb-55 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="col-lg-12 d-flex align-items-center justify-content-between gap-4 flex-wrap">
          <div className="section-title-3">
            <h2>Choose Your Plan</h2>
            <p>Services are professional offerings provided by businesses to meet specific needs or solve problems for their customers. Services can range from your budject.</p>
          </div>
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Billed Monthly</button>
              <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Billed Yearly</button>
            </div>
          </nav>
        </div>
      </div>  
      <div className="row">
        <div className="col-lg-12">
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}>
              <div className="row g-lg-0 g-4 align-items-center justify-content-center">
                <div className="col-xl-4 col-md-6 wow animate fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                  <div className="pricing-card">
                    <div className="pricing-top">
                      <div className="left">
                        <span>Basic Plan</span>
                        <h2><sup>$</sup>29<sub>/Month</sub></h2>
                      </div>
                      <div className="right">
                        <img src="assets/img/home-3/pricing-vec1.svg" alt="" />
                      </div>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Email &amp; communication services
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Basic data backup and storage
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Standard security measuresimg
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Limited software support
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Suitable for small businesses
                        </li>
                      </ul>
                      <div className="pay-btn">
                        <a className="primary-btn3" href="#">Pay Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="pricing-card two">
                    <div className="pricing-top">
                      <div className="left">
                        <span>Professional Plan</span>
                        <h2><sup>$</sup>44<sub>/Month</sub></h2>
                      </div>
                      <div className="right">
                        <div className="offer-tag">
                          <img src="assets/img/home-3/price-bg.svg" alt="" />
                          <h5>30% <br /><span>Off</span></h5>
                        </div>
                      </div>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Email &amp; communication services
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Basic data backup and storage
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Standard security measuresimg
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Limited software support
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Suitable for small businesses
                        </li>
                      </ul>
                      <div className="pay-btn">
                        <a className="primary-btn3" href="#">Pay Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 wow animate fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="pricing-card">
                    <div className="pricing-top">
                      <div className="left">
                        <span>Enterprise Plan</span>
                        <h2><sup>$</sup>89<sub>/Month</sub></h2>
                      </div>
                      <div className="right">
                        <img src="assets/img/home-3/pricing-vec2.svg" alt="" />
                      </div>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Email &amp; communication services
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Basic data backup and storage
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Standard security measuresimg
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Limited software support
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Suitable for small businesses
                        </li>
                      </ul>
                      <div className="pay-btn">
                        <a className="primary-btn3" href="#">Pay Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex={0}>
              <div className="row g-lg-0 g-4 align-items-center justify-content-center">
                <div className="col-xl-4 col-md-6">
                  <div className="pricing-card">
                    <div className="pricing-top">
                      <div className="left">
                        <span>Basic Plan</span>
                        <h2><sup>$</sup>290<sub>/Year</sub></h2>
                      </div>
                      <div className="right">
                        <img src="assets/img/home-3/pricing-vec1.svg" alt="" />
                      </div>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Email &amp; communication services
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Basic data backup and storage
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Standard security measuresimg
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Limited software support
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Suitable for small businesses
                        </li>
                      </ul>
                      <div className="pay-btn">
                        <a className="primary-btn3" href="#">Pay Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="pricing-card two">
                    <div className="pricing-top">
                      <div className="left">
                        <span>Professional Plan</span>
                        <h2><sup>$</sup>440<sub>/Year</sub></h2>
                      </div>
                      <div className="right">
                        <div className="offer-tag">
                          <img src="assets/img/home-3/price-bg.svg" alt="" />
                          <h5>30% <br /><span>Off</span></h5>
                        </div>
                      </div>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Email &amp; communication services
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Basic data backup and storage
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Standard security measuresimg
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Limited software support
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Suitable for small businesses
                        </li>
                      </ul>
                      <div className="pay-btn">
                        <a className="primary-btn3" href="#">Pay Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="pricing-card">
                    <div className="pricing-top">
                      <div className="left">
                        <span>Enterprise Plan</span>
                        <h2><sup>$</sup>890<sub>/Year</sub></h2>
                      </div>
                      <div className="right">
                        <img src="assets/img/home-3/pricing-vec2.svg" alt="" />
                      </div>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Email &amp; communication services
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Basic data backup and storage
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Standard security measuresimg
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Limited software support
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Suitable for small businesses
                        </li>
                      </ul>
                      <div className="pay-btn">
                        <a className="primary-btn3" href="#">Pay Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default PricingPlan3
