import React from "react";

const Slides: React.FunctionComponent<{
  data: Array<object>;
  slideIndex: number;
}> = ({ data, slideIndex }) => {
  return data.map((item: { src: string; label?: string }, index: number) => (
    <div
      key={index}
      className={index !== slideIndex ? "slide" : "slide active"}
      style={{ backgroundImage: `url(${item.src})` }}
    >
      <span className="slide__caption">{item.label}</span>
    </div>
  ));
};

export default Slides;
