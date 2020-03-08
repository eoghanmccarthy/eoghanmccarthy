import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

import { Button } from "@eoghanmccarthy/ui";

const trans = x => `translateX(${x}%)`;

const Viewer = ({ list, currentIndex, setCurrentIndex }) => {
  const [dir, setDir] = useState("");

  const transitions = useTransition(currentIndex, null, {
    unique: true,
    initial: null,
    from: { x: dir === "next" ? +100 : -100 },
    enter: { x: 0 },
    leave: { x: dir === "next" ? -100 : +100 }
  });

  return (
    <div className={"lightbox__viewer"}>
      <div className={"viewer__nav"}>
        <Button
          size={"lg"}
          shape={"circle"}
          className={"btn__lightbox"}
          colour={"#333333"}
          onClick={() => {
            setDir("prev");
            setCurrentIndex(i => (i - 1 < 0 ? list.length - 1 : i - 1));
          }}
        />
        <Button
          size={"lg"}
          shape={"circle"}
          className={"btn__lightbox"}
          colour={"#333333"}
          onClick={() => {
            setDir("next");
            setCurrentIndex(i => (i + 1 > list.length - 1 ? 0 : i + 1));
          }}
        />
      </div>
      <div className={"list__slides"}>
        {transitions.map(({ item, props, key }) => (
          <animated.div
            key={key}
            style={{
              transform: props.x.interpolate(trans),
              backgroundImage: `url(${list[item].src})`
            }}
            className={`slide`}
          >
            <span className="slide__caption">{list[item].label}</span>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Viewer;
