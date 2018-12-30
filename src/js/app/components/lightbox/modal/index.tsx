import React from "react";

import Slides from "components/lightbox/slides";
import Navigation from "components/lightbox/navigation";
import Button from "components/lightbox/button";

const Modal: React.FunctionComponent<{
  isVisible: boolean;
  data: Array<object>;
  index: number;
  closeLightbox: () => void;
  slideIndexIncrement: () => void;
  slideIndexDecrement: () => void;
}> = ({
  isVisible,
  data,
  index,
  closeLightbox,
  slideIndexIncrement,
  slideIndexDecrement
}) => {
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
};

export default Modal;
