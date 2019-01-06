import React, { useState } from "react";
import { Transition, animated } from "react-spring";

import LightboxButton from "components/lightbox/button";

const Viewer: React.FunctionComponent<{
  data: Array<object>;
  setActiveIndex: any;
  activeIndex: number;
}> = ({ data, setActiveIndex, activeIndex }) => {
  const [shiftValue, setShiftValue] = useState(-100);
  const [isShifting, setIsShifting] = useState(false);

  const _getPrevIndex = (index: number) =>
    index - 1 < 0 ? data.length - 1 : index - 1;

  const _getNextIndex = (index: number) =>
    index + 1 >= data.length ? 0 : index + 1;

  const _shift = (val: string) => {
    setIsShifting(true);

    if (val === "next") {
      setShiftValue(-200);
      setActiveIndex(_getNextIndex(activeIndex));
    }
    if (val === "prev") {
      setShiftValue(0);
      setActiveIndex(_getPrevIndex(activeIndex));
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
      <div className={"viewer__nav"}>
        <LightboxButton
          disabled={isShifting}
          addClass={"nav__prev"}
          onClick={() => _shift("prev")}
        />
        <LightboxButton
          disabled={isShifting}
          addClass={"nav__next"}
          onClick={() => _shift("next")}
        />
      </div>
      <Transition
        native
        reset
        unique
        initial={null}
        items={activeIndex}
        from={{ transform: `translate3d(-100%,0,0)` }}
        enter={{ transform: `translate3d(${shiftValue}%,0,0)` }}
        leave={{ transform: `translate3d(-50%,0,0)` }}
        onDestroyed={() => setIsShifting(false)}
      >
        {() => props => (
          <animated.ul style={props} className={"list__slides"}>
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
      </Transition>
    </div>
  );
};

export default Viewer;

// import React, { useState } from "react";
// import { Spring, animated } from "react-spring";
//
// import LightboxButton from "components/lightbox/button";
//
// const Viewer: React.FunctionComponent<{
//   data: Array<object>;
//   setActiveIndex: any;
//   activeIndex: number;
// }> = ({ data, setActiveIndex, activeIndex }) => {
//   const [transitionVal, setTransitionVal] = useState(-100);
//   const [isMoving, setIsMoving] = useState("");
//   const [isResetting, setIsResetting] = useState(false);
//
//   const _getPrevIndex = (index: number) =>
//     index - 1 < 0 ? data.length - 1 : index - 1;
//
//   const _getNextIndex = (index: number) =>
//     index + 1 >= data.length ? 0 : index + 1;
//
//   const _shift = async (val: string) => {
//     if (val === "prev") {
//       await setIsMoving("prev");
//       setTransitionVal(transitionVal + 100);
//     }
//     if (val === "next") {
//       await setIsMoving("next");
//       setTransitionVal(transitionVal - 100);
//     }
//   };
//
//   const _resetStart = (index: number) => {
//     setIsResetting(true);
//     return _reset(index);
//   };
//
//   const _reset = (index: number) => {
//     setTransitionVal(-100);
//     setActiveIndex(index);
//     return _resetEnd();
//   };
//
//   const _resetEnd = () => {
//     setIsResetting(false);
//     setIsMoving("");
//   };
//
//   const _onEnd = () => {
//     if (isMoving) {
//       if (isMoving === "next") {
//         _resetStart(_getNextIndex(activeIndex));
//       }
//       if (isMoving === "prev") {
//         _resetStart(_getPrevIndex(activeIndex));
//       }
//     }
//   };
//
//   const items =
//     data.length > 0
//       ? [
//           data[_getPrevIndex(activeIndex)],
//           data[activeIndex],
//           data[_getNextIndex(activeIndex)]
//         ]
//       : [];
//
//   return (
//     <div className={"lightbox__viewer"}>
//       <div className={"viewer__nav"}>
//         <LightboxButton
//           disabled={isMoving !== ""}
//           addClass={"nav__prev"}
//           onClick={() => _shift("prev")}
//         />
//         <LightboxButton
//           disabled={isMoving !== ""}
//           addClass={"nav__next"}
//           onClick={() => _shift("next")}
//         />
//       </div>
//       <Spring
//         native
//         to={{
//           transform: `translateX(${transitionVal}%`
//         }}
//         immediate={isResetting}
//         onRest={_onEnd}
//       >
//         {props => (
//           <animated.ul style={props} className={"list__slides"}>
//             {items.map(
//               (item: { src: string; label?: string }, index: number) => (
//                 <li
//                   key={index}
//                   style={{ backgroundImage: `url(${item.src})` }}
//                   className={`slide`}
//                 >
//                   <span className="slide__caption">{item.label}</span>
//                 </li>
//               )
//             )}
//           </animated.ul>
//         )}
//       </Spring>
//     </div>
//   );
// };
//
// export default Viewer;
