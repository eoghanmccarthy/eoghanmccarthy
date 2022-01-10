import React from "react";
import { useSelector } from "react-redux";
import { useSpring, animated, config } from "react-spring";

import TopScrollButton from "components/topScrollButton";

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
      <TopScrollButton />
      <a href={auth.data.url} target={"_blank"}>
        {auth.data.name}
      </a>
    </animated.footer>
  );
};
