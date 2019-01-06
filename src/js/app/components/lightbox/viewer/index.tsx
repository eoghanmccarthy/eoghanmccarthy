import React, { useState } from "react";
import { Transition, animated } from "react-spring";

import LightboxButton from "components/lightbox/button";

const Viewer: React.FunctionComponent<{
  data: Array<object>;
  initialIndex: number;
}> = ({ data, initialIndex }) => {
  const [lightboxIndex, setLightboxIndex] = useState(initialIndex);
  const [shiftValue, setShiftValue] = useState("");

  const _shift = async (val: string) => {
    if (val === "next") {
      await setShiftValue(val);
      setLightboxIndex(
        lightboxIndex + 1 >= data.length ? 0 : lightboxIndex + 1
      );
    }
    if (val === "prev") {
      await setShiftValue(val);
      setLightboxIndex(
        lightboxIndex - 1 < 0 ? data.length - 1 : lightboxIndex - 1
      );
    }
  };

  const slides = (props: any) =>
    data.map((item: { src: string; label: string }, index: number) => (
      <animated.div
        key={index}
        style={{ ...props, backgroundImage: `url(${item.src})` }}
        className={`slide`}
      >
        <span className="slide__caption">{item.label}</span>
      </animated.div>
    ));

  return (
    <div className={"lightbox__viewer"}>
      <div className={"viewer__nav"}>
        <LightboxButton addClass={"nav__prev"} onClick={() => _shift("prev")} />
        <LightboxButton addClass={"nav__next"} onClick={() => _shift("next")} />
      </div>
      <div className={"list__slides"}>
        <Transition
          native
          unique
          initial={null}
          items={lightboxIndex}
          from={{
            transform: `translateX(${shiftValue === "next" ? +100 : -100}%)`
          }}
          enter={{
            transform: `translateX(0%)`
          }}
          leave={{
            transform: `translateX(${shiftValue === "next" ? -100 : +100}%)`
          }}
        >
          {index => props => slides(props)[index]}
        </Transition>
      </div>
    </div>
  );
};

export default Viewer;
