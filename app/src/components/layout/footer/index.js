import React from "react";
import { useSpring, animated, config } from "react-spring";

import TopScrollButton from "components/topScrollButton";

export const Footer = () => {
  const spring = useSpring({
    config: { ...config.gentle },
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 400,
  });

  return (
    <animated.footer style={spring} className={"me__footer"}>
      <TopScrollButton />
      <a href={"http://eoghan.io"} target={"_blank"}>
        eoghan.io
      </a>
    </animated.footer>
  );
};
