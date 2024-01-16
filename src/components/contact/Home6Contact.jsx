import React from 'react'

function Home6Contact() {
  return (
    <div className="home6-contact-section sec-mar">
    <div className="container">
      <div className="row g-lg-4 gy-5 justify-content-center">
        <div className="col-lg-6 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" >
          <div className="section-title-6 text-center mb-55">
            <span>Contact</span>
            <h2>Contact</h2>
          </div>
          <div className="contact-content">
            <p>We’re happy to answer any questions you may have and help your determine which of our services best fit your needs.</p>
            <div className="contact-number">
              <p>Call Us Now: <a href="tel:+8801233456789">+880 123 345 6789</a></p>
            </div>
            <div className="contact-step">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Step 01
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                      himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. 
                      placerat felis non aliquam.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Step 02
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                      himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. 
                      placerat felis non aliquam.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Step 03
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                      himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. 
                      placerat felis non aliquam.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact-form-wrap">
            <div className="form-tltle">
              <h5>Make a Free Consulting</h5>
            </div>
            <div className="contact-form">
              <form>
                <div className="row">
                  <div className="col-md-6 mb-20">
                    <div className="form-inner">
                      <label>first name</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-md-6 mb-20">
                    <div className="form-inner">
                      <label>Last name</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-lg-12 mb-20">
                    <div className="form-inner">
                      <label>Company/Organization</label>
                      <input type="text" />      
                    </div>
                  </div>
                  <div className="col-lg-12 mb-20">
                    <div className="form-inner">
                      <label>Email</label>
                      <input type="email" />
                    </div>
                  </div>
                  <div className="col-lg-12 mb-20">
                    <div className="form-inner">
                      <label>Phone</label>
                      <input type="email" />
                    </div>
                  </div>
                  <div className="col-lg-12 mb-20">
                    <div className="form-inner">
                      <label>Message</label>
                      <textarea defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-inner">
                      <button className="primary-btn3" type="submit">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Home6Contact
