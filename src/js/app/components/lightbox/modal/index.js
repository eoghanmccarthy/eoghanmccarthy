import React, { Component, Fragment } from "react";

import Slides from "components/lightbox/slides";
import Navigation from "components/lightbox/navigation";
import Button from "components/lightbox/button";

export default class Modal extends Component {
  render() {
    const {
      isVisible,
      data,
      index,
      closeLightbox,
      slideIndexIncrement,
      slideIndexDecrement
    } = this.props;

    return isVisible ? (
      <div className="lightbox">
        <Slides data={data} slideIndex={index} />
        <Navigation
          slideIndexIncrement={slideIndexIncrement}
          slideIndexDecrement={slideIndexDecrement}
        />
        <div className="btn-group btn-group__close">
          <Button buttonClass="btn__close" onClick={closeLightbox} />
        </div>
      </div>
    ) : null;
  }
}
