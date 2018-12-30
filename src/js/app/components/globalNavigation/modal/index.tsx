import React from "react";
import { Transition, animated } from "react-spring";

import NavButton from "components/globalNavigation/button";
import List from "components/globalNavigation/list";

const Modal: React.FunctionComponent<{
  isVisible: boolean;
  toggleVisibility: () => void;
}> = ({ isVisible, toggleVisibility }) => {
  return (
    <Transition
      native
      items={isVisible}
      from={{ transform: "translateY(75px)" }}
      enter={{ transform: "translateY(0)" }}
      leave={{ transform: "translateY(75px)" }}
      config={{
        tension: 98,
        friction: 22,
        clamp: true
      }}
    >
      {isVisible =>
        isVisible &&
        (props => (
          <animated.div style={props} className="nav-global">
            <List toggleVisibility={toggleVisibility} />
            <NavButton addClass="close" onClick={toggleVisibility} />
          </animated.div>
        ))
      }
    </Transition>
  );
};

export default Modal;
