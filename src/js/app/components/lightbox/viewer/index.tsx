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
  const [isResetting, setIsResetting] = useState(false);

  const _getPrevIndex = (index: number) =>
    index - 1 < 0 ? data.length - 1 : index - 1;

  const _getNextIndex = (index: number) =>
    index + 1 >= data.length ? 0 : index + 1;

  const _navPrev = () => {
    setIsMoving("prev");
    _shift(+100);
  };

  const _navNext = () => {
    setIsMoving("next");
    _shift(-100);
  };

  const _shift = (val: number) => {
    setTransitionVal(transitionVal + val);
  };

  const _reset = async (index: number) => {
    await setIsResetting(true);
    await Promise.all([setTransitionVal(-100), setActiveIndex(index)]);
    await setIsResetting(false);
  };

  const _onEnd = () => {
    if (isMoving) {
      if (isMoving === "next") {
        _reset(_getNextIndex(activeIndex)).then(() => setIsMoving(""));
      }
      if (isMoving === "prev") {
        _reset(_getPrevIndex(activeIndex)).then(() => setIsMoving(""));
      }
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
        immediate={isResetting}
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
