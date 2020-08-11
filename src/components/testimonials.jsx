import React, { Component } from "react";

export class testimonials extends Component {
  render() {
    return (
      <div id="testimonials">
        <div className="container">
          <div className="section-title text-center">
            <h2>What our clients say</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    <figure className="testimonial">
                      <figcaption className="testimonial-image">
                        <img src={d.img} alt="" />{" "}
                      </figcaption>
                      <div className="testimonial-content">
                        <blockquote>"{d.text}"</blockquote>
                        <p className="testimonial-meta"> - {d.name} </p>
                      </div>
                    </figure>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default testimonials;
