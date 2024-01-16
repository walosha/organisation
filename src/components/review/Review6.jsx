import React from 'react'

function Review6() {
  return (
    <div className="review-and-counter-area">
    <div className="customar-review">
      <h6>Review On</h6>
      <ul>
        <li className="single-review">
          <a href="#">
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
        <li className="single-review">
          <a href="#">
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
    <div className="counter-area">
      <ul>
        <li>
          <div className="single-counter">
            <div className="content">
              <div className="number">
                <h3 className="counter">5</h3>
                <span>Years</span>
              </div>
              <p>Working With Passion</p>
            </div>
          </div>
        </li>
        <li>
          <div className="single-counter">
            <div className="content">
              <div className="number">
                <h3 className="counter">1.5</h3>
                <h3 className="ml-5">k</h3>
                <span>Customer</span>
              </div>
              <p>Satisfied Customer</p>
            </div>
          </div>
        </li>
        <li>
          <div className="single-counter">
            <div className="content">
              <div className="number">
                <h3 className="counter">800</h3>
                <span>Project</span>
              </div>
              <p>We Have Completed</p>
            </div>
          </div>
        </li>
        <li>
          <div className="single-counter">
            <div className="content">
              <div className="number">
                <h3 className="counter">15</h3>
                <span>Awards</span>
              </div>
              <p>Achievement For Service</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Review6
