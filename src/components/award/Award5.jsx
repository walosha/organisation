import React from 'react'

function Award5() {
  return (
    <div className="home5-award-area mb-130">
    <div className="container">
      <div className="row mb-55 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-2">
          <div className="section-title-5">
            <span>Award-Winning</span>
            <h2>Our Accolades</h2>
          </div>
          <div className="section-content">
            <p>Morbi interdum pellentesque nunc, luctusongi pretium nulla luctus at Aliquam. </p>
          </div>
        </div>
      </div>  
      <div className="row">
        <div className="col-lg-12 wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
          <div className="award-wrapper">
            <table>
              <thead>
                <tr>
                  <td>Awards</td>
                  <td>Category</td>
                  <td>Year</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Awwards">AWARDS / Site of the Day <img src="assets/img/home-5/home5-award-01.svg" alt="" /></td>
                  <td data-label="Project">Cascadia Creative</td>
                  <td data-label="Year">2022</td>
                </tr>
                <tr>
                  <td data-label="Awwards">CSSDesignAwards / Design of the Year <img src="assets/img/home-5/home5-award-02.svg" alt="" /></td>
                  <td data-label="Project">Oliver Agency</td>
                  <td data-label="Year">2022</td>
                </tr>
                <tr>
                  <td data-label="Awwards">TheFWA / FWA of the Day <img src="assets/img/home-5/home5-award-03.svg" alt="" /></td>
                  <td data-label="Project">Cortana Corporate</td>
                  <td data-label="Year">2022</td>
                </tr>
                <tr>
                  <td data-label="Awwards">Behance / Web Design Served <img src="assets/img/home-5/home5-award-04.svg" alt="" /></td>
                  <td data-label="Project">Details Agency</td>
                  <td data-label="Year">2022</td>
                </tr>
                <tr>
                  <td data-label="Awwards">AWARDS / Nominated Site of the Year <img src="assets/img/home-5/home5-award-05.svg" alt="" /></td>
                  <td data-label="Project">IT Company</td>
                  <td data-label="Year">2022</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Award5
