import React, { useState } from "react";
import { useTransition, animated, config } from "react-spring";
import "./styles.scss";

import { Button } from "@eoghanmccarthy/ui";

const Lightbox = ({ currentIndex, setCurrentIndex, isOpen, list, onClose }) => {
  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.stiff
  });

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div id={"lightbox"} key={key} style={props}>
          <Button
            size={"xl"}
            shape={"circle"}
            className={"close"}
            onClick={onClose}
          />
          <Viewer
            list={list}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </animated.div>
      )
  );
};

export default Lightbox;

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
    <div className={"lightbox-viewer"}>
      <div className={"viewer__nav"}>
        <Button
          size={"lg"}
          shape={"circle"}
          onClick={() => {
            setDir("prev");
            setCurrentIndex(i => (i - 1 < 0 ? list.length - 1 : i - 1));
          }}
        />
        <Button
          size={"lg"}
          shape={"circle"}
          onClick={() => {
            setDir("next");
            setCurrentIndex(i => (i + 1 > list.length - 1 ? 0 : i + 1));
          }}
        />
      </div>
      <div className={"lightbox-slides"}>
        {transitions.map(({ item, props, key }) => (
          <animated.div
            key={key}
            style={{
              transform: props.x.interpolate(trans),
              backgroundImage: `url(${list[item].src})`
            }}
            className={`lightbox-slide`}
          >
            <span>{list[item].label}</span>
          </animated.div>
        ))}
      </div>
    </div>
  );
};
