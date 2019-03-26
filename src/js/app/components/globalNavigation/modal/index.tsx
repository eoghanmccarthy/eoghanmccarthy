import React from "react";
import { useTransition, animated } from "react-spring";

import NavButton from "components/globalNavigation/button";
import List from "components/globalNavigation/list";

const Modal: React.FunctionComponent<{
  isVisible: boolean;
  toggleVisibility: () => void;
}> = ({ isVisible = false, toggleVisibility = null }) => {
  const transitions = useTransition(isVisible, null, {
    native: true,
    from: { transform: "translateY(75px)" },
    enter: { transform: "translateY(0)" },
    leave: { transform: "translateY(75px)" },
    config: {
      tension: 98,
      friction: 22,
      clamp: true
    }
  });

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div style={props} className="nav-global">
          <List toggleVisibility={toggleVisibility} />
          <NavButton addClass="close" onClick={toggleVisibility} />
        </animated.div>
      )
  );
};

export default Modal;
