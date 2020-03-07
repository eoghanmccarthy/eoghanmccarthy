import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

import { Button } from "@eoghanmccarthy/ui";

const Viewer: React.FunctionComponent<{
  data: Array<object>;
  initialIndex: number;
}> = ({ data, initialIndex }) => {
  const [lightboxIndex, setLightboxIndex] = useState(initialIndex);

  const [shiftValue, setShiftValue] = useState("");
  const transitions = useTransition(lightboxIndex, null, {
    unique: true,
    initial: null,
    from: {
      transform: `translateX(${shiftValue === "next" ? +100 : -100}%)`
    },
    enter: {
      transform: `translateX(0%)`
    },
    leave: {
      transform: `translateX(${shiftValue === "next" ? -100 : +100}%)`
    }
  });

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
        <Button
          size={'lg'}
          shape={"circle"}
          className={"btn__lightbox"}
          onClick={() => _shift("prev")}
          colour={"#333333"}
        >
        </Button>
        <Button
          size={'lg'}
          shape={"circle"}
          className={"btn__lightbox"}
          onClick={() => _shift("next")}
          colour={"#333333"}
        >
        </Button>
      </div>
      <div className={"list__slides"}>
        {transitions.map(({ item, props, key }) => slides(props)[item])}
      </div>
    </div>
  );
};

export default Viewer;
