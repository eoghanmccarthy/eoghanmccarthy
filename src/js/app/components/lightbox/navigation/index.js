import React from "react";

import Button from "components/lightbox/button";

const Navigation = ({ increment, decrement }) => {
  return (
    <div className="lightbox__nav">
      <Button buttonClass="btn__round btn__lightbox down" onClick={decrement} />
      <Button buttonClass="btn__round btn__lightbox up" onClick={increment} />
    </div>
  );
};

export default Navigation;
