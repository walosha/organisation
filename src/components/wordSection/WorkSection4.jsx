import Link from 'next/link'
import React from 'react'

function WorkSection4() {
  return (
    <div className="home4-work-section sec-mar">
  <div className="container">
    <div className="row wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
      <div className="col-lg-12 mb-55 d-flex align-items-center justify-content-between flex-wrap gap-3">
        <div className="section-title-4 three">
          <span>Examples of Our Work</span>
          <h2>Every <span>great design</span> begins with a great story.</h2>
        </div>
        <div className="view-btn">
          <Link legacyBehavior href="/project"><a className="primary-btn3">View All WORK</a></Link>
        </div>
      </div>
    </div>
    <div className="row g-4 justify-content-center">
      <div className="col-lg-5 col-sm-6 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="single-work magnetic-item">
          <div className="work-img">
            <img className="img-fluid" src="assets/img/home-4/work-01.png" alt="" />
          </div>
          <div className="work-content">
            <h3><Link legacyBehavior href="/project-details"><a>Streamlining IT Infrastructure</a></Link></h3>
            <span>Web development</span>
          </div>
        </div>
      </div>
      <div className="col-lg-7 col-sm-6 wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
        <div className="single-work magnetic-item">
          <div className="work-img">
            <img className="img-fluid" src="assets/img/home-4/work-02.png" alt="" />
          </div>
          <div className="work-content">
            <h3><Link legacyBehavior href="/project-details"><a>Transforming Customer Experience</a></Link></h3>
            <span>Web development</span>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-sm-6 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="single-work magnetic-item">
          <div className="work-img">
            <img className="img-fluid" src="assets/img/home-4/work-03.png" alt="" />
          </div>
          <div className="work-content">
            <h3><Link legacyBehavior href="/project-details"><a>Scaling Agile Development</a></Link></h3>
            <span>Web development</span>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-sm-6 wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
        <div className="single-work magnetic-item">
          <div className="work-img">
            <img className="img-fluid" src="assets/img/home-4/work-04.png" alt="" />
          </div>
          <div className="work-content">
            <h3><Link legacyBehavior href="/project-details"><a>Optimizing IT Operations</a></Link></h3>
            <span>Web development</span>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="single-work magnetic-item">
          <div className="work-img">
            <img className="img-fluid" src="assets/img/home-4/work-05.png" alt="" />
          </div>
          <div className="work-content">
            <h3><Link legacyBehavior href="/project-details"><a>Maximizing Efficiency with DevOps</a></Link></h3>
            <span>Web development</span>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
        <div className="single-work magnetic-item">
          <div className="work-img">
            <img className="img-fluid" src="assets/img/home-4/work-06.png" alt="" />
          </div>
          <div className="work-content">
            <h3><Link legacyBehavior href="/project-details"><a>Implementing Robotic Process Automation</a></Link></h3>
            <span>Web development</span>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
        <div className="single-work magnetic-item">
          <div className="work-img">
            <img className="img-fluid" src="assets/img/home-4/work-07.png" alt="" />
          </div>
          <div className="work-content">
            <h3><Link legacyBehavior href="/project-details"><a>Scaling Agile Development</a></Link></h3>
            <span>Web development</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default WorkSection4
