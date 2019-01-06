import React, { useState } from "react";
import { Transition, animated } from "react-spring";

import LightboxButton from "components/lightbox/button";

const Viewer: React.FunctionComponent<{
  data: Array<object>;
  setActiveIndex: any;
  activeIndex: number;
}> = ({ data, setActiveIndex, activeIndex }) => {
  const [lightboxIndex, setLightboxIndex] = useState(activeIndex);
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

  const lightboxItem = (props, item) => (
    <animated.div
      style={{ ...props, backgroundImage: `url(${item.src})` }}
      className={`slide`}
    >
      <span className="slide__caption">{item.label}</span>
    </animated.div>
  );

  const slides = [
    (props: any) => lightboxItem(props, data[0]),
    (props: any) => lightboxItem(props, data[1]),
    (props: any) => lightboxItem(props, data[2]),
    (props: any) => lightboxItem(props, data[3]),
    (props: any) => lightboxItem(props, data[4]),
    (props: any) => lightboxItem(props, data[5]),
    (props: any) => lightboxItem(props, data[6]),
    (props: any) => lightboxItem(props, data[7])
  ];

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
          {index => slides[index]}
        </Transition>
      </div>
    </div>
  );
};

export default Viewer;
