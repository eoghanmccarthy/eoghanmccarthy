import React from "react";

import Button from "components/lightbox/button";

const Navigation = ({ slideIndexIncrement, slideIndexDecrement }) => {
  return (
    <div className="btn-group btn-group__nav">
      <Button
        buttonClass="btn__nav btn__nav--prev"
        onClick={slideIndexDecrement}
      />
      <Button
        buttonClass="btn__nav btn__nav--next"
        onClick={slideIndexIncrement}
      />
    </div>
  );
};

export default Navigation;
