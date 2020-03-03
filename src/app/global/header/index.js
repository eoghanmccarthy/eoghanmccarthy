import React from "react";
import { animated, config, interpolate, useSpring } from "react-spring";

import Logo from "componentLib/logo";
import GlobalNavigation from "global/navigation";

const Header = () => {
  const { height } = useSpring({
    height: location.pathname === "/" ? window.innerHeight : 280,
    config: { mass: 2, tension: 398, friction: 64, clamp: true }
  });

  return (
    <animated.header
      style={{ height: interpolate([height], h => `${h}px`) }}
      className={"me__header"}
    >
      <Logo />
      <GlobalNavigation />
    </animated.header>
  );
};

export default Header;
