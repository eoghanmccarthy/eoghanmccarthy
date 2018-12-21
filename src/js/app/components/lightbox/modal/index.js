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
        <Button
          buttonClass="btn__round btn__lightbox close"
          onClick={closeLightbox}
        />
        <Slides data={data} slideIndex={index} />
        <Navigation
          increment={slideIndexIncrement}
          decrement={slideIndexDecrement}
        />
      </div>
    ) : null;
  }
}
