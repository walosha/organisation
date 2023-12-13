import React, { Component } from "react";

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Meet the Team</h2>
            <p>
              We take pride in hiring hardworking and creative talents who share
              same idealogy as we do.
            </p>
          </div>
          <div id="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div
                    key={`${d.name}-${i}`}
                    className="col-md-4 col-sm-6 team"
                  >
                    <figure className="thumbnail">
                      <img src={d.img} alt="..." className="team-img" />
                      <figcaption className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </figcaption>
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

export default Team;
