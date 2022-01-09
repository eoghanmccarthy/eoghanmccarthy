import React from "react";
import { useSelector } from "react-redux";
import { useSpring, animated, config } from "react-spring";

import TopScroll from "global/topScroll";

export const Footer = () => {
  const auth = useSelector((state) => state.app.authentication);

  const spring = useSpring({
    config: { ...config.gentle },
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 400,
  });

  return (
    <animated.footer style={spring} className={"me__footer"}>
      <TopScroll />
      <a href={auth.data.url} target={"_blank"}>
        {auth.data.name}
      </a>
    </animated.footer>
  );
};
