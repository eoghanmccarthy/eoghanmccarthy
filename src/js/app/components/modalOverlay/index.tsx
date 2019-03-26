import React from "react";
import { useTransition, animated } from "react-spring";

interface Props {
  children?: JSX.Element | null;
  isVisible: boolean;
}

const ModalOverlay: React.FunctionComponent<Props> = ({
  children,
  isVisible = false
}) => {
  const transitions = useTransition(isVisible, null, {
    native: true,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      tension: 220,
      friction: 20,
      clamp: true
    }
  });

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div style={props} className={"modal-overlay"}>
          {children}
        </animated.div>
      )
  );
};

export default ModalOverlay;
