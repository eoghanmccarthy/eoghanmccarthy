import React, { useState } from "react";
import { Spring, animated } from "react-spring";

import LightboxButton from "components/lightbox/button";

const Viewer: React.FunctionComponent<{
  data: Array<object>;
  setActiveIndex: any;
  activeIndex: number;
}> = ({ data, setActiveIndex, activeIndex }) => {
  const [transitionVal, setTransitionVal] = useState(-100);
  const [isMoving, setIsMoving] = useState("");
  const [animDisabled, setAnimDisabled] = useState(false);

  const _getPrevIndex = (index: number, n = 1) =>
    index - n < 0 ? data.length - n : index - n;

  const _getNextIndex = (index: number, n = 1) =>
    index + n >= data.length ? 0 : index + n;

  const _navPrev = () => {
    setIsMoving("prev");
    _move(+100);
  };

  const _navNext = () => {
    setIsMoving("next");
    _move(-100);
  };

  const _move = (val: number) => {
    setTransitionVal(transitionVal + val);
  };

  const _resetShift = (index: number) => {
    setTransitionVal(-100);
    setActiveIndex(index);
  };

  const _onEnd = () => {
    if (isMoving) {
      setAnimDisabled(true);
      if (isMoving === "next") {
        _resetShift(_getNextIndex(activeIndex));
      }
      if (isMoving === "prev") {
        _resetShift(_getPrevIndex(activeIndex));
      }
      setAnimDisabled(false);
      setIsMoving("");
    }
  };

  const items =
    data.length > 0
      ? [
          data[_getPrevIndex(activeIndex)],
          data[activeIndex],
          data[_getNextIndex(activeIndex)]
        ]
      : [];

  return (
    <div className={"lightbox__viewer"}>
      <LightboxButton
        disabled={isMoving !== ""}
        addClass={"nav__prev"}
        onClick={_navPrev}
      />
      <LightboxButton
        disabled={isMoving !== ""}
        addClass={"nav__next"}
        onClick={_navNext}
      />
      <Spring
        native
        to={{
          transform: `translateX(${transitionVal}%`
        }}
        immediate={animDisabled}
        onRest={_onEnd}
      >
        {props => (
          <animated.ul style={props} className={"slides"}>
            {items.map(
              (item: { src: string; label?: string }, index: number) => (
                <li
                  key={index}
                  style={{ backgroundImage: `url(${item.src})` }}
                  className={`slide`}
                >
                  <span className="slide__caption">{item.label}</span>
                </li>
              )
            )}
          </animated.ul>
        )}
      </Spring>
    </div>
  );
};

export default Viewer;
