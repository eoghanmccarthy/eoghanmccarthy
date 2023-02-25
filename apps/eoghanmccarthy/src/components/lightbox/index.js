import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import { generateId } from "utils";

import "./styles.scss";

import useKeyDownEvent from "./useKeyDownEvent";

import * as IconButtons from "components/iconButtons";

const Lightbox = ({ currentIndex, setCurrentIndex, isOpen, list, onClose }) => {
  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.stiff,
  });

  useKeyDownEvent((e) => {
    switch (e.code) {
      case "Escape":
        onClose();
        break;
      default:
        break;
    }
  });

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div id={"lightbox"} key={key} style={props}>
          <IconButtons.Close onClick={onClose} />
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

const Viewer = ({ list, currentIndex, setCurrentIndex }) => {
  const [dir, setDir] = useState("");

  const transitions = useTransition(currentIndex, null, {
    unique: true,
    initial: null,
    from: { x: dir.startsWith("n") ? +100 : -100 },
    enter: { x: 0 },
    leave: { x: dir.startsWith("n") ? -100 : +100 },
  });

  useKeyDownEvent((e) => {
    switch (e.code) {
      case "ArrowLeft":
        handlePrev();
        break;
      case "ArrowRight":
        handleNext();
        break;
      default:
        break;
    }
  });

  useEffect(() => {
    if (dir.startsWith("p")) {
      setCurrentIndex((i) => (i - 1 < 0 ? list.length - 1 : i - 1));
    }

    if (dir.startsWith("n")) {
      setCurrentIndex((i) => (i + 1 > list.length - 1 ? 0 : i + 1));
    }
  }, [dir]);

  const handlePrev = () => setDir(`p${generateId()}`);
  const handleNext = () => setDir(`n${generateId()}`);

  return (
    <div id={"lightbox-viewer"}>
      <div className={"nav-container"}>
        <IconButtons.Prev onClick={handlePrev} />
        <IconButtons.Next onClick={handleNext} />
      </div>
      <div id={"lightbox-slides"}>
        {transitions.map(({ item, props, key }) => (
          <animated.div
            key={key}
            style={{
              transform: props.x.interpolate((x) => `translateX(${x}%)`),
              backgroundImage: `url(${list[item].src})`,
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
