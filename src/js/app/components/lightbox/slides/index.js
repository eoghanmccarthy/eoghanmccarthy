import React, { Component } from "react";

export default class Slides extends Component {
  render() {
    const { data, slideIndex } = this.props;

    return (
      <div>
        {data.map((item, index) => (
          <div
            key={index}
            className={index !== slideIndex ? "slide" : "slide active"}
            style={{ backgroundImage: `url(${item.src})` }}
          >
            <span className="slide__caption">{item.label}</span>
          </div>
        ))}
      </div>
    );
  }
}
